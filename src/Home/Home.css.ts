import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import fude from './fude.png';

export const wrapper = style({
  backgroundImage: `url("${fude}")`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '600px auto',
  overflow: 'hidden',
  position: 'relative',
  '@media': {
    '(width <= 640px)': {
      backgroundSize: '400px auto',
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      paddingTop: 140,
    },
  },
});

export const content = style({});

export const hgroup = style({
  '@media': {
    '(width > 640px)': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      margin: 'auto',
      left: `max(${calc.subtract('50%', '500px')}, 24px)`,
      height: 'fit-content',
      zIndex: 1,
    },
  },
});

export const heading = style({
  fontWeight: 'bold',
  fontSize: 36,
  '@media': {
    '(width > 640px)': {
      fontSize: 50,
    },
  },
});

export const lead = style({
  fontSize: 20,
  '@media': {
    '(width > 640px)': {
      fontSize: 28,
    },
  },
});

export const text = style({
  fontSize: 13,
  '@media': {
    '(width > 640px)': {
      fontSize: 14,
      position: 'absolute',
      right: 24,
      bottom: 24,
      width: 300,
    },
    '(width <= 640px)': {
      marginTop: 120,
    },
  },
});

export const links = style({
  display: 'flex',
  gap: 10,
  '@media': {
    '(width > 640px)': {
      fontSize: 14,
      position: 'absolute',
      left: 24,
      bottom: 24,
    },
    '(width <= 640px)': {
      marginTop: 12,
      justifyContent: 'flex-end',
    },
  },
});

globalStyle(`${links} a`, {
  textDecoration: 'underline',
});

globalStyle(`${links} a:hover`, {
  textDecoration: 'none',
});
