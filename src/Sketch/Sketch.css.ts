import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  pointerEvents: 'none',
});

globalStyle(`${container} *`, {
  pointerEvents: 'none !important' as 'none',
});
