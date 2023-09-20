import { media, mediaQueryDefaultActive } from '@tamagui/config';
import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui'; // Does this need to be @tamagui/web?

import { animations } from './tamagui/animations';
import { fonts } from './tamagui/fonts';
import { themes } from './tamagui/themes';
import { tokens } from './tamagui/tokens';

export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  themes: themes as typeof themes,
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
