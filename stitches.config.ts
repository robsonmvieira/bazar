// stitches.config.ts
import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {

  },
  media: {
    bp1: '(min-width: 480px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
