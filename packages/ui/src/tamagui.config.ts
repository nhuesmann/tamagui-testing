import { media, mediaQueryDefaultActive } from '@tamagui/config';
import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from '@tamagui/web';

import { animations } from './tamagui/animations';
import { fonts } from './tamagui/fonts';
import { themes } from './tamagui/themes';
import { tokens } from './tamagui/tokens';

export const config = createTamagui({
  themes: themes as typeof themes,
  animations,
  // Below is configWithoutAnimation
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  media,
  shorthands,
  tokens,
  fonts,
  mediaQueryDefaultActive,
  selectionStyles: (theme) =>
    theme.color5
      ? {
          backgroundColor: theme.color5,
          color: theme.color11,
        }
      : null,
});
