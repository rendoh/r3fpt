import { globalStyle } from '@vanilla-extract/css';

globalStyle('body', {
  fontFamily: 'sans-serif',
  lineHeight: 1.5,
  background: '#111',
  color: '#fff',
});

globalStyle(':focus-visible', {
  outline: 'revert',
});
