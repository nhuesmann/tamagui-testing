import { createThemeBuilder } from '@tamagui/theme-builder';

import { overlayThemeDefinitions } from './componentThemeDefinitions';
import { masks } from './masks';
import { palettes } from './palettes';
import { shadows } from './shadows';
import { maskOptions, templates } from './templates';
// import { darkColors, lightColors } from './tokens';
import { lightColors } from './tokens';

const colorThemeDefinition = (colorName: string) => [
  {
    parent: 'light',
    palette: colorName,
    template: 'colorLight',
  },
  // {
  //   parent: 'dark',
  //   palette: colorName,
  //   template: 'base',
  // },
];

const nonInherited = {
  light: {
    ...lightColors,
    ...shadows.light,
  },
  // dark: {
  //   ...darkColors,
  //   ...shadows.dark,
  // },
};

const themesBuilder = createThemeBuilder()
  .addPalettes(palettes)
  .addTemplates(templates)
  .addMasks(masks)
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
      nonInheritedValues: nonInherited.light,
    },
    // dark: {
    //   template: 'base',
    //   palette: 'dark',
    //   nonInheritedValues: nonInherited.dark,
    // },
  })
  .addChildThemes({
    orange: colorThemeDefinition('orange'),
    yellow: colorThemeDefinition('yellow'),
    green: colorThemeDefinition('green'),
    blue: colorThemeDefinition('blue'),
    mint: colorThemeDefinition('mint'),
    red: colorThemeDefinition('red'),
  })
  .addChildThemes({
    alt1: {
      mask: 'soften',
      ...maskOptions.alt,
    },
    alt2: {
      mask: 'soften2Border1',
      ...maskOptions.alt,
    },
    active: {
      mask: 'soften3FlatBorder',
      skip: {
        color: 1,
      },
    },
  })
  .addChildThemes(
    {
      ListItem: [
        {
          parent: 'light',
          mask: 'strengthen',
          ...maskOptions.component,
        },
        // {
        //   parent: 'dark',
        //   mask: 'identity',
        //   ...maskOptions.component,
        // },
      ],

      Card: {
        mask: 'soften',
        ...maskOptions.component,
      },

      Button: {
        mask: 'soften2Border1',
        ...maskOptions.component,
      },

      Checkbox: {
        mask: 'softenBorder2',
        ...maskOptions.component,
      },

      Switch: {
        mask: 'soften2Border1',
        ...maskOptions.component,
      },

      SwitchThumb: {
        mask: 'inverseStrengthen2',
        ...maskOptions.component,
      },

      TooltipContent: {
        mask: 'soften2Border1',
        ...maskOptions.component,
      },

      DrawerFrame: {
        mask: 'soften',
        ...maskOptions.component,
      },

      Progress: {
        mask: 'soften',
        ...maskOptions.component,
      },

      RadioGroupItem: {
        mask: 'softenBorder2',
        ...maskOptions.component,
      },

      TooltipArrow: {
        mask: 'soften',
        ...maskOptions.component,
      },

      SliderTrackActive: {
        mask: 'inverseSoften',
        ...maskOptions.component,
      },

      SliderTrack: {
        mask: 'soften2Border1',
        ...maskOptions.component,
      },

      SliderThumb: {
        mask: 'inverse',
        ...maskOptions.component,
      },

      Tooltip: {
        mask: 'inverse',
        ...maskOptions.component,
      },

      ProgressIndicator: {
        mask: 'inverse',
        ...maskOptions.component,
      },

      SheetOverlay: overlayThemeDefinitions,
      DialogOverlay: overlayThemeDefinitions,
      ModalOverlay: overlayThemeDefinitions,

      Input: {
        mask: 'softenBorder2',
        ...maskOptions.component,
      },

      TextArea: {
        mask: 'softenBorder2',
        ...maskOptions.component,
      },
    },
    {
      // to save bundle size but make alt themes not work on components
      // avoidNestingWithin: ['alt1', 'alt2'],
    }
  );

const themesIn = themesBuilder.build();

// stupid typescript too deep types fix :/
type ThemesIn = typeof themesIn;
type ThemesOut = Omit<ThemesIn, 'light' | 'dark'> & {
  light: ThemesIn['light'] & typeof nonInherited.light;
  // dark: ThemesIn['dark'] & typeof nonInherited.dark;
};

export const themes = themesIn as ThemesOut;
