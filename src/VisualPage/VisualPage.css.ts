import { globalStyle, style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  '@media': {
    '(orientation: portrait)': {
      flexDirection: 'column',
    },
  },
});

export const imageWrapper = style({
  flexGrow: 1,
  flexShrink: 0,
  position: 'relative',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
});

export const content = style({
  flexGrow: 1,
  flexShrink: 0,
  padding: 16,
  '@media': {
    '(orientation: portrait)': {
      maxHeight: '50%',
    },
    '(orientation: landscape)': {
      maxWidth: '50%',
      display: 'grid',
      alignItems: 'center',
    },
  },
});

globalStyle(`${content} > * + *`, {
  marginTop: 16,
});

globalStyle(`${content} h1`, {
  fontSize: 32,
  fontWeight: 700,
  lineHeight: 1.2,
  margin: '0 0 1rem',
});

globalStyle(`${content} h2`, {
  fontSize: 24,
  fontWeight: 700,
  lineHeight: 1.2,
  margin: '0 0 1rem',
});
