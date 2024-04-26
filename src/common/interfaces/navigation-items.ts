import { MutableRefObject } from 'react';

interface NavigationItem {
  ref: MutableRefObject<HTMLElement>;
  title: string;
}

export default NavigationItem;
