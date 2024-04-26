interface IDotConfig {
  distance: number;
  dots: Dot[];
  fps: number;
}

interface IDot {
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

class Dot implements IDot {
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;

  constructor({ radius, vx, vy, x, y }: Record<string, any>) {
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.x = x;
    this.y = y;
  }
}

const CANVAS_ID = 'canvas';

const SM_DOT_COUNT = 120,
  MD_DOT_COUNT = 320,
  LG_DOT_COUNT = 650;

const buildDots = (): void => {
  const canvas = document.getElementById(CANVAS_ID) as HTMLCanvasElement;

  let context: CanvasRenderingContext2D | null = null;

  if (!canvas) return;

  canvas.width = window?.innerWidth;
  canvas.height = window?.innerHeight;

  context = canvas.getContext('2d');

  if (!context) return;

  context.fillStyle = '#ffffff';
  context.lineWidth = 0.05;
  context.strokeStyle = '#ffffff';

  const dotCount = getDotCount(canvas.width);

  let config: IDotConfig = {
    distance: 60,
    dots: generateDotsArray({
      dotCount,
      height: canvas.height,
      width: canvas.width,
    }),
    fps: 100,
  };

  const build = (dot: Dot): void => {
    const { radius, x, y } = dot;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.fill();
  };

  const connectDots = (): void => {
    const { distance, dots } = config;

    dots.forEach((dot: Dot) => {
      dots.forEach((secondDot: Dot) => {
        if (
          Math.abs(dot.x - secondDot.x) < distance &&
          Math.abs(dot.y - secondDot.y) < distance
        ) {
          context.beginPath();
          context.moveTo(dot.x, dot.y);
          context.lineTo(secondDot.x, secondDot.y);
          context.stroke();
          context.closePath();
        }
      });
    });
  };

  const updateDots = (): void => {
    const { dots, fps } = config;

    dots.forEach((dot: Dot) => {
      dot.x += dot.vx / fps;
      dot.y += dot.vy / fps;

      if (dot.x < 0 || dot.x > canvas?.width) dot.vx = -dot.vx;
      if (dot.y < 0 || dot.y > canvas?.height) dot.vy = -dot.vy;
    });
  };

  const createDots = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    config.dots.forEach((dot: Dot) => {
      build(dot);
    });

    connectDots();
    updateDots();
    requestAnimationFrame(createDots);
  };

  createDots();
};

const getDotCount = (canvasWidth: number): number => {
  return canvasWidth === 1366
    ? MD_DOT_COUNT
    : canvasWidth > 1366
      ? LG_DOT_COUNT
      : SM_DOT_COUNT;
};

const generateDotsArray = ({
  dotCount,
  height,
  width,
}: {
  dotCount: number;
  height: number;
  width: number;
}): Dot[] => {
  let dots: Dot[] = [];

  for (let i = 0; i < dotCount; i++) {
    const dot = new Dot({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1 + 1,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25,
    });

    dots.push(dot);
  }

  return dots;
};

export default buildDots;
