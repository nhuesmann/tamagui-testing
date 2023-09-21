type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  gray10: string;
  gray11: string;
  gray12: string;
  neutral1: string;
  neutral2: string;
  neutral3: string;
  neutral4: string;
  neutral5: string;
  neutral6: string;
  neutral7: string;
  purple1: string;
  purple2: string;
  purple3: string;
  purple4: string;
  purple5: string;
  purple: string;
  purple6: string;
  purple7: string;
  red: string;
  redAlt: string;
  orange: string;
  orangeAlt: string;
  green: string;
  greenAlt: string;
  blue: string;
  shadowColor: string;
  shadowColorHover: string;
  shadowColorPress: string;
  shadowColorFocus: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  'hsl(0, 0%, 99.0%)',
  'hsl(0, 0%, 97.3%)',
  'hsl(0, 0%, 95.1%)',
  'hsl(0, 0%, 93.0%)',
  'hsl(0, 0%, 90.9%)',
  'hsl(0, 0%, 88.7%)',
  'hsl(0, 0%, 85.8%)',
  'hsl(0, 0%, 78.0%)',
  'hsl(0, 0%, 52.3%)',
  'hsl(0, 0%, 43.5%)',
  '#FFFFFF',
  '#F5F5F5',
  '#ECECEC',
  '#B3B3B3',
  '#7F7F7F',
  '#1A1A1A',
  '#000000',
  '#F5F3FC',
  '#EBE4FF',
  '#D6CFEA',
  '#A19BB8',
  '#AE94F9',
  '#896BD9',
  '#5E518E',
  '#FF5567',
  '#FFF4F5',
  '#FFB768',
  '#FCF0E3',
  '#2CAF87',
  '#E7F9F3',
  '#47B3FF',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'rgba(0,0,0,0.5)',
  'transparent',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor',
'gray1',
'gray2',
'gray3',
'gray4',
'gray5',
'gray6',
'gray7',
'gray8',
'gray9',
'gray10',
'gray11',
'gray12',
'neutral1',
'neutral2',
'neutral3',
'neutral4',
'neutral5',
'neutral6',
'neutral7',
'purple1',
'purple2',
'purple3',
'purple4',
'purple5',
'purple',
'purple6',
'purple7',
'red',
'redAlt',
'orange',
'orangeAlt',
'green',
'greenAlt',
'blue',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 14],[29, 15],[30, 16],[31, 17],[32, 18],[33, 19],[34, 20],[35, 21],[36, 8],[37, 22],[38, 23],[39, 11],[40, 24],[41, 25],[42, 26],[43, 27],[44, 28],[45, 29],[46, 30],[47, 31],[48, 32],[49, 33],[50, 34],[51, 35],[52, 35],[53, 36],[54, 37],[55, 38],[56, 39],[57, 40],[58, 41],[59, 42],[60, 43],[61, 44],[62, 45],[63, 45],[64, 46],[65, 46]]) as Theme

export const light = n1 as Theme
const n2 = t([[12, 47]]) as Theme

export const light_SheetOverlay = n2 as Theme
export const light_DialogOverlay = n2 as Theme
export const light_ModalOverlay = n2 as Theme
export const light_alt1_SheetOverlay = n2 as Theme
export const light_alt1_DialogOverlay = n2 as Theme
export const light_alt1_ModalOverlay = n2 as Theme
export const light_alt2_SheetOverlay = n2 as Theme
export const light_alt2_DialogOverlay = n2 as Theme
export const light_alt2_ModalOverlay = n2 as Theme
export const light_active_SheetOverlay = n2 as Theme
export const light_active_DialogOverlay = n2 as Theme
export const light_active_ModalOverlay = n2 as Theme
const n3 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt1 = n3 as Theme
const n4 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt2 = n4 as Theme
const n5 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_active = n5 as Theme
const n6 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n6 as Theme
const n7 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n7 as Theme
export const light_DrawerFrame = n7 as Theme
export const light_Progress = n7 as Theme
export const light_TooltipArrow = n7 as Theme
const n8 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 48],[24, 48],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Button = n8 as Theme
const n9 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_Checkbox = n9 as Theme
export const light_RadioGroupItem = n9 as Theme
export const light_Input = n9 as Theme
export const light_TextArea = n9 as Theme
const n10 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_Switch = n10 as Theme
export const light_TooltipContent = n10 as Theme
export const light_SliderTrack = n10 as Theme
const n11 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n11 as Theme
const n12 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n12 as Theme
const n13 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n13 as Theme
export const light_Tooltip = n13 as Theme
export const light_ProgressIndicator = n13 as Theme
const n14 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_alt1_ListItem = n14 as Theme
const n15 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt1_Card = n15 as Theme
export const light_alt1_DrawerFrame = n15 as Theme
export const light_alt1_Progress = n15 as Theme
export const light_alt1_TooltipArrow = n15 as Theme
const n16 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 48],[24, 48],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Button = n16 as Theme
const n17 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_alt1_Checkbox = n17 as Theme
export const light_alt1_RadioGroupItem = n17 as Theme
export const light_alt1_Input = n17 as Theme
export const light_alt1_TextArea = n17 as Theme
const n18 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt1_Switch = n18 as Theme
export const light_alt1_TooltipContent = n18 as Theme
export const light_alt1_SliderTrack = n18 as Theme
const n19 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_alt1_SwitchThumb = n19 as Theme
const n20 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_alt1_SliderTrackActive = n20 as Theme
const n21 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_alt1_SliderThumb = n21 as Theme
export const light_alt1_Tooltip = n21 as Theme
export const light_alt1_ProgressIndicator = n21 as Theme
const n22 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt2_ListItem = n22 as Theme
const n23 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 7],[24, 8],[25, 6],[26, 7],[27, 5]]) as Theme

export const light_alt2_Card = n23 as Theme
export const light_alt2_DrawerFrame = n23 as Theme
export const light_alt2_Progress = n23 as Theme
export const light_alt2_TooltipArrow = n23 as Theme
const n24 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 48],[24, 48],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Button = n24 as Theme
const n25 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 8],[24, 9],[25, 7],[26, 8],[27, 6]]) as Theme

export const light_alt2_Checkbox = n25 as Theme
export const light_alt2_RadioGroupItem = n25 as Theme
export const light_alt2_Input = n25 as Theme
export const light_alt2_TextArea = n25 as Theme
const n26 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_alt2_Switch = n26 as Theme
export const light_alt2_TooltipContent = n26 as Theme
export const light_alt2_SliderTrack = n26 as Theme
const n27 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_alt2_SwitchThumb = n27 as Theme
const n28 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 3],[24, 2],[25, 4],[26, 3],[27, 7]]) as Theme

export const light_alt2_SliderTrackActive = n28 as Theme
const n29 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_alt2_SliderThumb = n29 as Theme
export const light_alt2_Tooltip = n29 as Theme
export const light_alt2_ProgressIndicator = n29 as Theme
const n30 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_active_ListItem = n30 as Theme
const n31 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[19, 7],[20, 8],[21, 7],[22, 8],[23, 8],[24, 9],[25, 7],[26, 8],[27, 4]]) as Theme

export const light_active_Card = n31 as Theme
export const light_active_DrawerFrame = n31 as Theme
export const light_active_Progress = n31 as Theme
export const light_active_TooltipArrow = n31 as Theme
const n32 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 48],[24, 48],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Button = n32 as Theme
const n33 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 9],[24, 10],[25, 8],[26, 9],[27, 5]]) as Theme

export const light_active_Checkbox = n33 as Theme
export const light_active_RadioGroupItem = n33 as Theme
export const light_active_Input = n33 as Theme
export const light_active_TextArea = n33 as Theme
const n34 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 9],[24, 10],[25, 8],[26, 9],[27, 3]]) as Theme

export const light_active_Switch = n34 as Theme
export const light_active_TooltipContent = n34 as Theme
export const light_active_SliderTrack = n34 as Theme
const n35 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[19, 4],[20, 3],[21, 4],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_active_SwitchThumb = n35 as Theme
const n36 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 2],[24, 1],[25, 3],[26, 2],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n36 as Theme
const n37 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[19, 4],[20, 3],[21, 4],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_active_SliderThumb = n37 as Theme
export const light_active_Tooltip = n37 as Theme
export const light_active_ProgressIndicator = n37 as Theme