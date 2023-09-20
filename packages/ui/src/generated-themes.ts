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
  blue1: string;
  blue2: string;
  blue3: string;
  blue4: string;
  blue5: string;
  blue6: string;
  blue7: string;
  blue8: string;
  blue9: string;
  blue10: string;
  blue11: string;
  blue12: string;
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
  green1: string;
  green2: string;
  green3: string;
  green4: string;
  green5: string;
  green6: string;
  green7: string;
  green8: string;
  green9: string;
  green10: string;
  green11: string;
  green12: string;
  orange1: string;
  orange2: string;
  orange3: string;
  orange4: string;
  orange5: string;
  orange6: string;
  orange7: string;
  orange8: string;
  orange9: string;
  orange10: string;
  orange11: string;
  orange12: string;
  mint1: string;
  mint2: string;
  mint3: string;
  mint4: string;
  mint5: string;
  mint6: string;
  mint7: string;
  mint8: string;
  mint9: string;
  mint10: string;
  mint11: string;
  mint12: string;
  red1: string;
  red2: string;
  red3: string;
  red4: string;
  red5: string;
  red6: string;
  red7: string;
  red8: string;
  red9: string;
  red10: string;
  red11: string;
  red12: string;
  yellow1: string;
  yellow2: string;
  yellow3: string;
  yellow4: string;
  yellow5: string;
  yellow6: string;
  yellow7: string;
  yellow8: string;
  yellow9: string;
  yellow10: string;
  yellow11: string;
  yellow12: string;
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
  'hsl(206, 100%, 99.2%)',
  'hsl(210, 100%, 98.0%)',
  'hsl(209, 100%, 96.5%)',
  'hsl(210, 98.8%, 94.0%)',
  'hsl(209, 95.0%, 90.1%)',
  'hsl(209, 81.2%, 84.5%)',
  'hsl(208, 77.5%, 76.9%)',
  'hsl(206, 81.9%, 65.3%)',
  'hsl(206, 100%, 50.0%)',
  'hsl(208, 100%, 47.3%)',
  'hsl(211, 100%, 43.2%)',
  'hsl(211, 100%, 15.0%)',
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
  'hsl(136, 50.0%, 98.9%)',
  'hsl(138, 62.5%, 96.9%)',
  'hsl(139, 55.2%, 94.5%)',
  'hsl(140, 48.7%, 91.0%)',
  'hsl(141, 43.7%, 86.0%)',
  'hsl(143, 40.3%, 79.0%)',
  'hsl(146, 38.5%, 69.0%)',
  'hsl(151, 40.2%, 54.1%)',
  'hsl(151, 55.0%, 41.5%)',
  'hsl(152, 57.5%, 37.6%)',
  'hsl(153, 67.0%, 28.5%)',
  'hsl(155, 40.0%, 14.0%)',
  'hsl(24, 70.0%, 99.0%)',
  'hsl(24, 83.3%, 97.6%)',
  'hsl(24, 100%, 95.3%)',
  'hsl(25, 100%, 92.2%)',
  'hsl(25, 100%, 88.2%)',
  'hsl(25, 100%, 82.8%)',
  'hsl(24, 100%, 75.3%)',
  'hsl(24, 94.5%, 64.3%)',
  'hsl(24, 94.0%, 50.0%)',
  'hsl(24, 100%, 46.5%)',
  'hsl(24, 100%, 37.0%)',
  'hsl(15, 60.0%, 17.0%)',
  'hsl(165, 80.0%, 98.8%)',
  'hsl(164, 88.2%, 96.7%)',
  'hsl(164, 76.6%, 93.3%)',
  'hsl(165, 68.8%, 89.5%)',
  'hsl(165, 60.6%, 84.5%)',
  'hsl(165, 53.5%, 76.9%)',
  'hsl(166, 50.7%, 66.1%)',
  'hsl(168, 52.8%, 51.0%)',
  'hsl(167, 65.0%, 66.0%)',
  'hsl(167, 59.3%, 63.1%)',
  'hsl(172, 72.0%, 28.5%)',
  'hsl(172, 70.0%, 12.0%)',
  'hsl(359, 100%, 99.4%)',
  'hsl(359, 100%, 98.6%)',
  'hsl(360, 100%, 96.8%)',
  'hsl(360, 97.9%, 94.8%)',
  'hsl(360, 90.2%, 91.9%)',
  'hsl(360, 81.7%, 87.8%)',
  'hsl(359, 74.2%, 81.7%)',
  'hsl(359, 69.5%, 74.3%)',
  'hsl(358, 75.0%, 59.0%)',
  'hsl(358, 69.4%, 55.2%)',
  'hsl(358, 65.0%, 48.7%)',
  'hsl(354, 50.0%, 14.6%)',
  'hsl(60, 54.0%, 98.5%)',
  'hsl(52, 100%, 95.5%)',
  'hsl(55, 100%, 90.9%)',
  'hsl(54, 100%, 86.6%)',
  'hsl(52, 97.9%, 82.0%)',
  'hsl(50, 89.4%, 76.1%)',
  'hsl(47, 80.4%, 68.0%)',
  'hsl(48, 100%, 46.1%)',
  'hsl(53, 92.0%, 50.0%)',
  'hsl(50, 100%, 48.5%)',
  'hsl(42, 100%, 29.0%)',
  'hsl(40, 55.0%, 13.5%)',
  'rgba(0,0,0,0.085)',
  'rgba(0,0,0,0.04)',
  'hsla(24, 70.0%, 99.0%, 0)',
  'hsla(15, 60.0%, 17.0%, 0)',
  'hsla(60, 54.0%, 98.5%, 0)',
  'hsla(40, 55.0%, 13.5%, 0)',
  'hsla(136, 50.0%, 98.9%, 0)',
  'hsla(155, 40.0%, 14.0%, 0)',
  'hsla(206, 100%, 99.2%, 0)',
  'hsla(211, 100%, 15.0%, 0)',
  'hsla(165, 80.0%, 98.8%, 0)',
  'hsla(172, 70.0%, 12.0%, 0)',
  'hsla(359, 100%, 99.4%, 0)',
  'hsla(354, 50.0%, 14.6%, 0)',
  'rgba(0,0,0,0.5)',
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
'blue1',
'blue2',
'blue3',
'blue4',
'blue5',
'blue6',
'blue7',
'blue8',
'blue9',
'blue10',
'blue11',
'blue12',
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
'green1',
'green2',
'green3',
'green4',
'green5',
'green6',
'green7',
'green8',
'green9',
'green10',
'green11',
'green12',
'orange1',
'orange2',
'orange3',
'orange4',
'orange5',
'orange6',
'orange7',
'orange8',
'orange9',
'orange10',
'orange11',
'orange12',
'mint1',
'mint2',
'mint3',
'mint4',
'mint5',
'mint6',
'mint7',
'mint8',
'mint9',
'mint10',
'mint11',
'mint12',
'red1',
'red2',
'red3',
'red4',
'red5',
'red6',
'red7',
'red8',
'red9',
'red10',
'red11',
'red12',
'yellow1',
'yellow2',
'yellow3',
'yellow4',
'yellow5',
'yellow6',
'yellow7',
'yellow8',
'yellow9',
'yellow10',
'yellow11',
'yellow12',
'shadowColor',
'shadowColorHover',
'shadowColorPress',
'shadowColorFocus']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8],[28, 14],[29, 15],[30, 16],[31, 17],[32, 18],[33, 19],[34, 20],[35, 21],[36, 22],[37, 23],[38, 24],[39, 25],[40, 26],[41, 27],[42, 28],[43, 29],[44, 30],[45, 31],[46, 32],[47, 33],[48, 8],[49, 34],[50, 35],[51, 11],[52, 36],[53, 37],[54, 38],[55, 39],[56, 40],[57, 41],[58, 42],[59, 43],[60, 44],[61, 45],[62, 46],[63, 47],[64, 48],[65, 49],[66, 50],[67, 51],[68, 52],[69, 53],[70, 54],[71, 55],[72, 56],[73, 57],[74, 58],[75, 59],[76, 60],[77, 61],[78, 62],[79, 63],[80, 64],[81, 65],[82, 66],[83, 67],[84, 68],[85, 69],[86, 70],[87, 71],[88, 72],[89, 73],[90, 74],[91, 75],[92, 76],[93, 77],[94, 78],[95, 79],[96, 80],[97, 81],[98, 82],[99, 83],[100, 84],[101, 85],[102, 86],[103, 87],[104, 88],[105, 89],[106, 90],[107, 91],[108, 92],[109, 93],[110, 94],[111, 95],[112, 96],[113, 96],[114, 97],[115, 97]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 48],[1, 49],[2, 50],[3, 51],[4, 52],[5, 53],[6, 55],[7, 56],[8, 57],[9, 58],[10, 59],[11, 11],[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 98],[18, 11],[19, 59],[20, 11],[21, 59],[22, 99],[23, 51],[24, 52],[25, 51],[26, 51],[27, 57]]) as Theme

export const light_orange = n2 as Theme
const n3 = t([[0, 84],[1, 85],[2, 86],[3, 87],[4, 88],[5, 89],[6, 91],[7, 92],[8, 93],[9, 94],[10, 95],[11, 11],[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 100],[18, 11],[19, 95],[20, 11],[21, 95],[22, 101],[23, 87],[24, 88],[25, 87],[26, 87],[27, 93]]) as Theme

export const light_yellow = n3 as Theme
const n4 = t([[0, 36],[1, 37],[2, 38],[3, 39],[4, 40],[5, 41],[6, 43],[7, 44],[8, 45],[9, 46],[10, 47],[11, 11],[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 102],[18, 11],[19, 47],[20, 11],[21, 47],[22, 103],[23, 39],[24, 40],[25, 39],[26, 39],[27, 45]]) as Theme

export const light_green = n4 as Theme
const n5 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 21],[7, 22],[8, 23],[9, 24],[10, 25],[11, 11],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 104],[18, 11],[19, 25],[20, 11],[21, 25],[22, 105],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue = n5 as Theme
const n6 = t([[0, 60],[1, 61],[2, 62],[3, 63],[4, 64],[5, 65],[6, 67],[7, 68],[8, 69],[9, 70],[10, 71],[11, 11],[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 106],[18, 11],[19, 71],[20, 11],[21, 71],[22, 107],[23, 63],[24, 64],[25, 63],[26, 63],[27, 69]]) as Theme

export const light_mint = n6 as Theme
const n7 = t([[0, 72],[1, 73],[2, 74],[3, 75],[4, 76],[5, 77],[6, 79],[7, 80],[8, 81],[9, 82],[10, 83],[11, 11],[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 108],[18, 11],[19, 83],[20, 11],[21, 83],[22, 109],[23, 75],[24, 76],[25, 75],[26, 75],[27, 81]]) as Theme

export const light_red = n7 as Theme
const n8 = t([[12, 110]]) as Theme

export const light_SheetOverlay = n8 as Theme
export const light_DialogOverlay = n8 as Theme
export const light_ModalOverlay = n8 as Theme
export const light_orange_SheetOverlay = n8 as Theme
export const light_orange_DialogOverlay = n8 as Theme
export const light_orange_ModalOverlay = n8 as Theme
export const light_yellow_SheetOverlay = n8 as Theme
export const light_yellow_DialogOverlay = n8 as Theme
export const light_yellow_ModalOverlay = n8 as Theme
export const light_green_SheetOverlay = n8 as Theme
export const light_green_DialogOverlay = n8 as Theme
export const light_green_ModalOverlay = n8 as Theme
export const light_blue_SheetOverlay = n8 as Theme
export const light_blue_DialogOverlay = n8 as Theme
export const light_blue_ModalOverlay = n8 as Theme
export const light_mint_SheetOverlay = n8 as Theme
export const light_mint_DialogOverlay = n8 as Theme
export const light_mint_ModalOverlay = n8 as Theme
export const light_red_SheetOverlay = n8 as Theme
export const light_red_DialogOverlay = n8 as Theme
export const light_red_ModalOverlay = n8 as Theme
export const light_alt1_SheetOverlay = n8 as Theme
export const light_alt1_DialogOverlay = n8 as Theme
export const light_alt1_ModalOverlay = n8 as Theme
export const light_alt2_SheetOverlay = n8 as Theme
export const light_alt2_DialogOverlay = n8 as Theme
export const light_alt2_ModalOverlay = n8 as Theme
export const light_active_SheetOverlay = n8 as Theme
export const light_active_DialogOverlay = n8 as Theme
export const light_active_ModalOverlay = n8 as Theme
export const light_orange_alt1_SheetOverlay = n8 as Theme
export const light_orange_alt1_DialogOverlay = n8 as Theme
export const light_orange_alt1_ModalOverlay = n8 as Theme
export const light_orange_alt2_SheetOverlay = n8 as Theme
export const light_orange_alt2_DialogOverlay = n8 as Theme
export const light_orange_alt2_ModalOverlay = n8 as Theme
export const light_orange_active_SheetOverlay = n8 as Theme
export const light_orange_active_DialogOverlay = n8 as Theme
export const light_orange_active_ModalOverlay = n8 as Theme
export const light_yellow_alt1_SheetOverlay = n8 as Theme
export const light_yellow_alt1_DialogOverlay = n8 as Theme
export const light_yellow_alt1_ModalOverlay = n8 as Theme
export const light_yellow_alt2_SheetOverlay = n8 as Theme
export const light_yellow_alt2_DialogOverlay = n8 as Theme
export const light_yellow_alt2_ModalOverlay = n8 as Theme
export const light_yellow_active_SheetOverlay = n8 as Theme
export const light_yellow_active_DialogOverlay = n8 as Theme
export const light_yellow_active_ModalOverlay = n8 as Theme
export const light_green_alt1_SheetOverlay = n8 as Theme
export const light_green_alt1_DialogOverlay = n8 as Theme
export const light_green_alt1_ModalOverlay = n8 as Theme
export const light_green_alt2_SheetOverlay = n8 as Theme
export const light_green_alt2_DialogOverlay = n8 as Theme
export const light_green_alt2_ModalOverlay = n8 as Theme
export const light_green_active_SheetOverlay = n8 as Theme
export const light_green_active_DialogOverlay = n8 as Theme
export const light_green_active_ModalOverlay = n8 as Theme
export const light_blue_alt1_SheetOverlay = n8 as Theme
export const light_blue_alt1_DialogOverlay = n8 as Theme
export const light_blue_alt1_ModalOverlay = n8 as Theme
export const light_blue_alt2_SheetOverlay = n8 as Theme
export const light_blue_alt2_DialogOverlay = n8 as Theme
export const light_blue_alt2_ModalOverlay = n8 as Theme
export const light_blue_active_SheetOverlay = n8 as Theme
export const light_blue_active_DialogOverlay = n8 as Theme
export const light_blue_active_ModalOverlay = n8 as Theme
export const light_mint_alt1_SheetOverlay = n8 as Theme
export const light_mint_alt1_DialogOverlay = n8 as Theme
export const light_mint_alt1_ModalOverlay = n8 as Theme
export const light_mint_alt2_SheetOverlay = n8 as Theme
export const light_mint_alt2_DialogOverlay = n8 as Theme
export const light_mint_alt2_ModalOverlay = n8 as Theme
export const light_mint_active_SheetOverlay = n8 as Theme
export const light_mint_active_DialogOverlay = n8 as Theme
export const light_mint_active_ModalOverlay = n8 as Theme
export const light_red_alt1_SheetOverlay = n8 as Theme
export const light_red_alt1_DialogOverlay = n8 as Theme
export const light_red_alt1_ModalOverlay = n8 as Theme
export const light_red_alt2_SheetOverlay = n8 as Theme
export const light_red_alt2_DialogOverlay = n8 as Theme
export const light_red_alt2_ModalOverlay = n8 as Theme
export const light_red_active_SheetOverlay = n8 as Theme
export const light_red_active_DialogOverlay = n8 as Theme
export const light_red_active_ModalOverlay = n8 as Theme
const n9 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 11],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_alt1 = n9 as Theme
const n10 = t([[0, 2],[1, 3],[2, 4],[3, 5],[4, 6],[5, 7],[6, 8],[7, 9],[8, 10],[9, 11],[10, 11],[11, 11],[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_alt2 = n10 as Theme
const n11 = t([[0, 3],[1, 4],[2, 5],[3, 6],[4, 7],[5, 8],[6, 9],[7, 10],[8, 11],[9, 13],[10, 13],[11, 13],[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_active = n11 as Theme
const n12 = t([[0, 49],[1, 50],[2, 51],[3, 52],[4, 53],[5, 55],[6, 56],[7, 57],[8, 58],[9, 59],[10, 11],[11, 11],[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 52],[24, 53],[25, 52],[26, 52],[27, 56]]) as Theme

export const light_orange_alt1 = n12 as Theme
const n13 = t([[0, 50],[1, 51],[2, 52],[3, 53],[4, 55],[5, 56],[6, 57],[7, 58],[8, 59],[9, 11],[10, 11],[11, 11],[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_alt2 = n13 as Theme
const n14 = t([[0, 51],[1, 52],[2, 53],[3, 55],[4, 56],[5, 57],[6, 58],[7, 59],[8, 11],[9, 99],[10, 99],[11, 99],[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[19, 56],[20, 57],[21, 56],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_active = n14 as Theme
const n15 = t([[0, 85],[1, 86],[2, 87],[3, 88],[4, 89],[5, 91],[6, 92],[7, 93],[8, 94],[9, 95],[10, 11],[11, 11],[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 88],[24, 89],[25, 88],[26, 88],[27, 92]]) as Theme

export const light_yellow_alt1 = n15 as Theme
const n16 = t([[0, 86],[1, 87],[2, 88],[3, 89],[4, 91],[5, 92],[6, 93],[7, 94],[8, 95],[9, 11],[10, 11],[11, 11],[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_yellow_alt2 = n16 as Theme
const n17 = t([[0, 87],[1, 88],[2, 89],[3, 91],[4, 92],[5, 93],[6, 94],[7, 95],[8, 11],[9, 101],[10, 101],[11, 101],[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[19, 92],[20, 93],[21, 92],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_yellow_active = n17 as Theme
const n18 = t([[0, 37],[1, 38],[2, 39],[3, 40],[4, 41],[5, 43],[6, 44],[7, 45],[8, 46],[9, 47],[10, 11],[11, 11],[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 40],[24, 41],[25, 40],[26, 40],[27, 44]]) as Theme

export const light_green_alt1 = n18 as Theme
const n19 = t([[0, 38],[1, 39],[2, 40],[3, 41],[4, 43],[5, 44],[6, 45],[7, 46],[8, 47],[9, 11],[10, 11],[11, 11],[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_alt2 = n19 as Theme
const n20 = t([[0, 39],[1, 40],[2, 41],[3, 43],[4, 44],[5, 45],[6, 46],[7, 47],[8, 11],[9, 103],[10, 103],[11, 103],[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[19, 44],[20, 45],[21, 44],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_active = n20 as Theme
const n21 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 21],[6, 22],[7, 23],[8, 24],[9, 25],[10, 11],[11, 11],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_alt1 = n21 as Theme
const n22 = t([[0, 16],[1, 17],[2, 18],[3, 19],[4, 21],[5, 22],[6, 23],[7, 24],[8, 25],[9, 11],[10, 11],[11, 11],[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_alt2 = n22 as Theme
const n23 = t([[0, 17],[1, 18],[2, 19],[3, 21],[4, 22],[5, 23],[6, 24],[7, 25],[8, 11],[9, 105],[10, 105],[11, 105],[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_active = n23 as Theme
const n24 = t([[0, 61],[1, 62],[2, 63],[3, 64],[4, 65],[5, 67],[6, 68],[7, 69],[8, 70],[9, 71],[10, 11],[11, 11],[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 64],[24, 65],[25, 64],[26, 64],[27, 68]]) as Theme

export const light_mint_alt1 = n24 as Theme
const n25 = t([[0, 62],[1, 63],[2, 64],[3, 65],[4, 67],[5, 68],[6, 69],[7, 70],[8, 71],[9, 11],[10, 11],[11, 11],[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_mint_alt2 = n25 as Theme
const n26 = t([[0, 63],[1, 64],[2, 65],[3, 67],[4, 68],[5, 69],[6, 70],[7, 71],[8, 11],[9, 107],[10, 107],[11, 107],[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[19, 68],[20, 69],[21, 68],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_mint_active = n26 as Theme
const n27 = t([[0, 73],[1, 74],[2, 75],[3, 76],[4, 77],[5, 79],[6, 80],[7, 81],[8, 82],[9, 83],[10, 11],[11, 11],[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 76],[24, 77],[25, 76],[26, 76],[27, 80]]) as Theme

export const light_red_alt1 = n27 as Theme
const n28 = t([[0, 74],[1, 75],[2, 76],[3, 77],[4, 79],[5, 80],[6, 81],[7, 82],[8, 83],[9, 11],[10, 11],[11, 11],[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_red_alt2 = n28 as Theme
const n29 = t([[0, 75],[1, 76],[2, 77],[3, 79],[4, 80],[5, 81],[6, 82],[7, 83],[8, 11],[9, 109],[10, 109],[11, 109],[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[19, 80],[20, 81],[21, 80],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_red_active = n29 as Theme
const n30 = t([[12, 0],[13, 1],[14, 2],[15, 3],[16, 0],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 3],[24, 4],[25, 2],[26, 3],[27, 9]]) as Theme

export const light_ListItem = n30 as Theme
const n31 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 11],[19, 10],[20, 11],[21, 10],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_Card = n31 as Theme
export const light_DrawerFrame = n31 as Theme
export const light_Progress = n31 as Theme
export const light_TooltipArrow = n31 as Theme
const n32 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 11],[19, 10],[20, 11],[21, 10],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_Button = n32 as Theme
export const light_Switch = n32 as Theme
export const light_TooltipContent = n32 as Theme
export const light_SliderTrack = n32 as Theme
const n33 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 6],[24, 7],[25, 5],[26, 6],[27, 8]]) as Theme

export const light_Checkbox = n33 as Theme
export const light_RadioGroupItem = n33 as Theme
export const light_Input = n33 as Theme
export const light_TextArea = n33 as Theme
const n34 = t([[12, 11],[13, 11],[14, 10],[15, 9],[16, 11],[17, 11],[18, 0],[19, 1],[20, 0],[21, 1],[22, 0],[23, 9],[24, 8],[25, 10],[26, 9],[27, 1]]) as Theme

export const light_SwitchThumb = n34 as Theme
const n35 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 0],[19, 1],[20, 0],[21, 1],[22, 1],[23, 5],[24, 4],[25, 6],[26, 5],[27, 5]]) as Theme

export const light_SliderTrackActive = n35 as Theme
const n36 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 13],[18, 0],[19, 1],[20, 0],[21, 1],[22, 12],[23, 7],[24, 6],[25, 8],[26, 7],[27, 3]]) as Theme

export const light_SliderThumb = n36 as Theme
export const light_Tooltip = n36 as Theme
export const light_ProgressIndicator = n36 as Theme
const n37 = t([[12, 48],[13, 49],[14, 50],[15, 51],[16, 48],[17, 48],[18, 11],[19, 59],[20, 11],[21, 59],[22, 11],[23, 50],[24, 51],[25, 50],[26, 50],[27, 58]]) as Theme

export const light_orange_ListItem = n37 as Theme
const n38 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 11],[19, 59],[20, 11],[21, 59],[22, 11],[23, 52],[24, 53],[25, 52],[26, 52],[27, 56]]) as Theme

export const light_orange_Card = n38 as Theme
export const light_orange_DrawerFrame = n38 as Theme
export const light_orange_Progress = n38 as Theme
export const light_orange_TooltipArrow = n38 as Theme
const n39 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 11],[19, 59],[20, 11],[21, 59],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_Button = n39 as Theme
export const light_orange_Switch = n39 as Theme
export const light_orange_TooltipContent = n39 as Theme
export const light_orange_SliderTrack = n39 as Theme
const n40 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 98],[18, 11],[19, 59],[20, 11],[21, 59],[22, 99],[23, 53],[24, 55],[25, 53],[26, 53],[27, 57]]) as Theme

export const light_orange_Checkbox = n40 as Theme
export const light_orange_RadioGroupItem = n40 as Theme
export const light_orange_Input = n40 as Theme
export const light_orange_TextArea = n40 as Theme
const n41 = t([[12, 11],[13, 11],[14, 59],[15, 58],[16, 11],[17, 11],[18, 48],[19, 49],[20, 48],[21, 49],[22, 48],[23, 59],[24, 58],[25, 59],[26, 59],[27, 49]]) as Theme

export const light_orange_SwitchThumb = n41 as Theme
const n42 = t([[12, 57],[13, 56],[14, 55],[15, 53],[16, 58],[17, 59],[18, 48],[19, 49],[20, 48],[21, 49],[22, 49],[23, 55],[24, 53],[25, 55],[26, 55],[27, 53]]) as Theme

export const light_orange_SliderTrackActive = n42 as Theme
const n43 = t([[12, 59],[13, 58],[14, 57],[15, 56],[16, 11],[17, 99],[18, 48],[19, 49],[20, 48],[21, 49],[22, 98],[23, 57],[24, 56],[25, 57],[26, 57],[27, 51]]) as Theme

export const light_orange_SliderThumb = n43 as Theme
export const light_orange_Tooltip = n43 as Theme
export const light_orange_ProgressIndicator = n43 as Theme
const n44 = t([[12, 84],[13, 85],[14, 86],[15, 87],[16, 84],[17, 84],[18, 11],[19, 95],[20, 11],[21, 95],[22, 11],[23, 86],[24, 87],[25, 86],[26, 86],[27, 94]]) as Theme

export const light_yellow_ListItem = n44 as Theme
const n45 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 11],[19, 95],[20, 11],[21, 95],[22, 11],[23, 88],[24, 89],[25, 88],[26, 88],[27, 92]]) as Theme

export const light_yellow_Card = n45 as Theme
export const light_yellow_DrawerFrame = n45 as Theme
export const light_yellow_Progress = n45 as Theme
export const light_yellow_TooltipArrow = n45 as Theme
const n46 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 11],[19, 95],[20, 11],[21, 95],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_yellow_Button = n46 as Theme
export const light_yellow_Switch = n46 as Theme
export const light_yellow_TooltipContent = n46 as Theme
export const light_yellow_SliderTrack = n46 as Theme
const n47 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 100],[18, 11],[19, 95],[20, 11],[21, 95],[22, 101],[23, 89],[24, 91],[25, 89],[26, 89],[27, 93]]) as Theme

export const light_yellow_Checkbox = n47 as Theme
export const light_yellow_RadioGroupItem = n47 as Theme
export const light_yellow_Input = n47 as Theme
export const light_yellow_TextArea = n47 as Theme
const n48 = t([[12, 11],[13, 11],[14, 95],[15, 94],[16, 11],[17, 11],[18, 84],[19, 85],[20, 84],[21, 85],[22, 84],[23, 95],[24, 94],[25, 95],[26, 95],[27, 85]]) as Theme

export const light_yellow_SwitchThumb = n48 as Theme
const n49 = t([[12, 93],[13, 92],[14, 91],[15, 89],[16, 94],[17, 95],[18, 84],[19, 85],[20, 84],[21, 85],[22, 85],[23, 91],[24, 89],[25, 91],[26, 91],[27, 89]]) as Theme

export const light_yellow_SliderTrackActive = n49 as Theme
const n50 = t([[12, 95],[13, 94],[14, 93],[15, 92],[16, 11],[17, 101],[18, 84],[19, 85],[20, 84],[21, 85],[22, 100],[23, 93],[24, 92],[25, 93],[26, 93],[27, 87]]) as Theme

export const light_yellow_SliderThumb = n50 as Theme
export const light_yellow_Tooltip = n50 as Theme
export const light_yellow_ProgressIndicator = n50 as Theme
const n51 = t([[12, 36],[13, 37],[14, 38],[15, 39],[16, 36],[17, 36],[18, 11],[19, 47],[20, 11],[21, 47],[22, 11],[23, 38],[24, 39],[25, 38],[26, 38],[27, 46]]) as Theme

export const light_green_ListItem = n51 as Theme
const n52 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 11],[19, 47],[20, 11],[21, 47],[22, 11],[23, 40],[24, 41],[25, 40],[26, 40],[27, 44]]) as Theme

export const light_green_Card = n52 as Theme
export const light_green_DrawerFrame = n52 as Theme
export const light_green_Progress = n52 as Theme
export const light_green_TooltipArrow = n52 as Theme
const n53 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 11],[19, 47],[20, 11],[21, 47],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_Button = n53 as Theme
export const light_green_Switch = n53 as Theme
export const light_green_TooltipContent = n53 as Theme
export const light_green_SliderTrack = n53 as Theme
const n54 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 102],[18, 11],[19, 47],[20, 11],[21, 47],[22, 103],[23, 41],[24, 43],[25, 41],[26, 41],[27, 45]]) as Theme

export const light_green_Checkbox = n54 as Theme
export const light_green_RadioGroupItem = n54 as Theme
export const light_green_Input = n54 as Theme
export const light_green_TextArea = n54 as Theme
const n55 = t([[12, 11],[13, 11],[14, 47],[15, 46],[16, 11],[17, 11],[18, 36],[19, 37],[20, 36],[21, 37],[22, 36],[23, 47],[24, 46],[25, 47],[26, 47],[27, 37]]) as Theme

export const light_green_SwitchThumb = n55 as Theme
const n56 = t([[12, 45],[13, 44],[14, 43],[15, 41],[16, 46],[17, 47],[18, 36],[19, 37],[20, 36],[21, 37],[22, 37],[23, 43],[24, 41],[25, 43],[26, 43],[27, 41]]) as Theme

export const light_green_SliderTrackActive = n56 as Theme
const n57 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 11],[17, 103],[18, 36],[19, 37],[20, 36],[21, 37],[22, 102],[23, 45],[24, 44],[25, 45],[26, 45],[27, 39]]) as Theme

export const light_green_SliderThumb = n57 as Theme
export const light_green_Tooltip = n57 as Theme
export const light_green_ProgressIndicator = n57 as Theme
const n58 = t([[12, 14],[13, 15],[14, 16],[15, 17],[16, 14],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 16],[24, 17],[25, 16],[26, 16],[27, 24]]) as Theme

export const light_blue_ListItem = n58 as Theme
const n59 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 11],[19, 25],[20, 11],[21, 25],[22, 11],[23, 18],[24, 19],[25, 18],[26, 18],[27, 22]]) as Theme

export const light_blue_Card = n59 as Theme
export const light_blue_DrawerFrame = n59 as Theme
export const light_blue_Progress = n59 as Theme
export const light_blue_TooltipArrow = n59 as Theme
const n60 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 11],[19, 25],[20, 11],[21, 25],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_Button = n60 as Theme
export const light_blue_Switch = n60 as Theme
export const light_blue_TooltipContent = n60 as Theme
export const light_blue_SliderTrack = n60 as Theme
const n61 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 104],[18, 11],[19, 25],[20, 11],[21, 25],[22, 105],[23, 19],[24, 21],[25, 19],[26, 19],[27, 23]]) as Theme

export const light_blue_Checkbox = n61 as Theme
export const light_blue_RadioGroupItem = n61 as Theme
export const light_blue_Input = n61 as Theme
export const light_blue_TextArea = n61 as Theme
const n62 = t([[12, 11],[13, 11],[14, 25],[15, 24],[16, 11],[17, 11],[18, 14],[19, 15],[20, 14],[21, 15],[22, 14],[23, 25],[24, 24],[25, 25],[26, 25],[27, 15]]) as Theme

export const light_blue_SwitchThumb = n62 as Theme
const n63 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 14],[19, 15],[20, 14],[21, 15],[22, 15],[23, 21],[24, 19],[25, 21],[26, 21],[27, 19]]) as Theme

export const light_blue_SliderTrackActive = n63 as Theme
const n64 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 105],[18, 14],[19, 15],[20, 14],[21, 15],[22, 104],[23, 23],[24, 22],[25, 23],[26, 23],[27, 17]]) as Theme

export const light_blue_SliderThumb = n64 as Theme
export const light_blue_Tooltip = n64 as Theme
export const light_blue_ProgressIndicator = n64 as Theme
const n65 = t([[12, 60],[13, 61],[14, 62],[15, 63],[16, 60],[17, 60],[18, 11],[19, 71],[20, 11],[21, 71],[22, 11],[23, 62],[24, 63],[25, 62],[26, 62],[27, 70]]) as Theme

export const light_mint_ListItem = n65 as Theme
const n66 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 11],[19, 71],[20, 11],[21, 71],[22, 11],[23, 64],[24, 65],[25, 64],[26, 64],[27, 68]]) as Theme

export const light_mint_Card = n66 as Theme
export const light_mint_DrawerFrame = n66 as Theme
export const light_mint_Progress = n66 as Theme
export const light_mint_TooltipArrow = n66 as Theme
const n67 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 11],[19, 71],[20, 11],[21, 71],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_mint_Button = n67 as Theme
export const light_mint_Switch = n67 as Theme
export const light_mint_TooltipContent = n67 as Theme
export const light_mint_SliderTrack = n67 as Theme
const n68 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 106],[18, 11],[19, 71],[20, 11],[21, 71],[22, 107],[23, 65],[24, 67],[25, 65],[26, 65],[27, 69]]) as Theme

export const light_mint_Checkbox = n68 as Theme
export const light_mint_RadioGroupItem = n68 as Theme
export const light_mint_Input = n68 as Theme
export const light_mint_TextArea = n68 as Theme
const n69 = t([[12, 11],[13, 11],[14, 71],[15, 70],[16, 11],[17, 11],[18, 60],[19, 61],[20, 60],[21, 61],[22, 60],[23, 71],[24, 70],[25, 71],[26, 71],[27, 61]]) as Theme

export const light_mint_SwitchThumb = n69 as Theme
const n70 = t([[12, 69],[13, 68],[14, 67],[15, 65],[16, 70],[17, 71],[18, 60],[19, 61],[20, 60],[21, 61],[22, 61],[23, 67],[24, 65],[25, 67],[26, 67],[27, 65]]) as Theme

export const light_mint_SliderTrackActive = n70 as Theme
const n71 = t([[12, 71],[13, 70],[14, 69],[15, 68],[16, 11],[17, 107],[18, 60],[19, 61],[20, 60],[21, 61],[22, 106],[23, 69],[24, 68],[25, 69],[26, 69],[27, 63]]) as Theme

export const light_mint_SliderThumb = n71 as Theme
export const light_mint_Tooltip = n71 as Theme
export const light_mint_ProgressIndicator = n71 as Theme
const n72 = t([[12, 72],[13, 73],[14, 74],[15, 75],[16, 72],[17, 72],[18, 11],[19, 83],[20, 11],[21, 83],[22, 11],[23, 74],[24, 75],[25, 74],[26, 74],[27, 82]]) as Theme

export const light_red_ListItem = n72 as Theme
const n73 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 11],[19, 83],[20, 11],[21, 83],[22, 11],[23, 76],[24, 77],[25, 76],[26, 76],[27, 80]]) as Theme

export const light_red_Card = n73 as Theme
export const light_red_DrawerFrame = n73 as Theme
export const light_red_Progress = n73 as Theme
export const light_red_TooltipArrow = n73 as Theme
const n74 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 11],[19, 83],[20, 11],[21, 83],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_red_Button = n74 as Theme
export const light_red_Switch = n74 as Theme
export const light_red_TooltipContent = n74 as Theme
export const light_red_SliderTrack = n74 as Theme
const n75 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 108],[18, 11],[19, 83],[20, 11],[21, 83],[22, 109],[23, 77],[24, 79],[25, 77],[26, 77],[27, 81]]) as Theme

export const light_red_Checkbox = n75 as Theme
export const light_red_RadioGroupItem = n75 as Theme
export const light_red_Input = n75 as Theme
export const light_red_TextArea = n75 as Theme
const n76 = t([[12, 11],[13, 11],[14, 83],[15, 82],[16, 11],[17, 11],[18, 72],[19, 73],[20, 72],[21, 73],[22, 72],[23, 83],[24, 82],[25, 83],[26, 83],[27, 73]]) as Theme

export const light_red_SwitchThumb = n76 as Theme
const n77 = t([[12, 81],[13, 80],[14, 79],[15, 77],[16, 82],[17, 83],[18, 72],[19, 73],[20, 72],[21, 73],[22, 73],[23, 79],[24, 77],[25, 79],[26, 79],[27, 77]]) as Theme

export const light_red_SliderTrackActive = n77 as Theme
const n78 = t([[12, 83],[13, 82],[14, 81],[15, 80],[16, 11],[17, 109],[18, 72],[19, 73],[20, 72],[21, 73],[22, 108],[23, 81],[24, 80],[25, 81],[26, 81],[27, 75]]) as Theme

export const light_red_SliderThumb = n78 as Theme
export const light_red_Tooltip = n78 as Theme
export const light_red_ProgressIndicator = n78 as Theme
const n79 = t([[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light_alt1_ListItem = n79 as Theme
const n80 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 10],[19, 9],[20, 10],[21, 9],[22, 10],[23, 6],[24, 7],[25, 5],[26, 6],[27, 6]]) as Theme

export const light_alt1_Card = n80 as Theme
export const light_alt1_DrawerFrame = n80 as Theme
export const light_alt1_Progress = n80 as Theme
export const light_alt1_TooltipArrow = n80 as Theme
const n81 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 10],[19, 9],[20, 10],[21, 9],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_alt1_Button = n81 as Theme
export const light_alt1_Switch = n81 as Theme
export const light_alt1_TooltipContent = n81 as Theme
export const light_alt1_SliderTrack = n81 as Theme
const n82 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 7],[24, 8],[25, 6],[26, 7],[27, 7]]) as Theme

export const light_alt1_Checkbox = n82 as Theme
export const light_alt1_RadioGroupItem = n82 as Theme
export const light_alt1_Input = n82 as Theme
export const light_alt1_TextArea = n82 as Theme
const n83 = t([[12, 11],[13, 10],[14, 9],[15, 8],[16, 11],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 2]]) as Theme

export const light_alt1_SwitchThumb = n83 as Theme
const n84 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[18, 1],[19, 2],[20, 1],[21, 2],[22, 2],[23, 4],[24, 3],[25, 5],[26, 4],[27, 6]]) as Theme

export const light_alt1_SliderTrackActive = n84 as Theme
const n85 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[18, 1],[19, 2],[20, 1],[21, 2],[22, 0],[23, 6],[24, 5],[25, 7],[26, 6],[27, 4]]) as Theme

export const light_alt1_SliderThumb = n85 as Theme
export const light_alt1_Tooltip = n85 as Theme
export const light_alt1_ProgressIndicator = n85 as Theme
const n86 = t([[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 9],[19, 8],[20, 9],[21, 8],[22, 11],[23, 4],[24, 5],[25, 3],[26, 4],[27, 7]]) as Theme

export const light_alt2_ListItem = n86 as Theme
const n87 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[18, 9],[19, 8],[20, 9],[21, 8],[22, 9],[23, 6],[24, 7],[25, 5],[26, 6],[27, 5]]) as Theme

export const light_alt2_Card = n87 as Theme
export const light_alt2_DrawerFrame = n87 as Theme
export const light_alt2_Progress = n87 as Theme
export const light_alt2_TooltipArrow = n87 as Theme
const n88 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[18, 9],[19, 8],[20, 9],[21, 8],[22, 8],[23, 6],[24, 7],[25, 5],[26, 6],[27, 4]]) as Theme

export const light_alt2_Button = n88 as Theme
export const light_alt2_Switch = n88 as Theme
export const light_alt2_TooltipContent = n88 as Theme
export const light_alt2_SliderTrack = n88 as Theme
const n89 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[18, 9],[19, 8],[20, 9],[21, 8],[22, 10],[23, 7],[24, 8],[25, 6],[26, 7],[27, 6]]) as Theme

export const light_alt2_Checkbox = n89 as Theme
export const light_alt2_RadioGroupItem = n89 as Theme
export const light_alt2_Input = n89 as Theme
export const light_alt2_TextArea = n89 as Theme
const n90 = t([[12, 10],[13, 9],[14, 8],[15, 7],[16, 11],[17, 11],[18, 2],[19, 3],[20, 2],[21, 3],[22, 0],[23, 8],[24, 7],[25, 9],[26, 8],[27, 3]]) as Theme

export const light_alt2_SwitchThumb = n90 as Theme
const n91 = t([[12, 6],[13, 5],[14, 4],[15, 3],[16, 7],[17, 8],[18, 2],[19, 3],[20, 2],[21, 3],[22, 3],[23, 4],[24, 3],[25, 5],[26, 4],[27, 7]]) as Theme

export const light_alt2_SliderTrackActive = n91 as Theme
const n92 = t([[12, 8],[13, 7],[14, 6],[15, 5],[16, 9],[17, 10],[18, 2],[19, 3],[20, 2],[21, 3],[22, 1],[23, 6],[24, 5],[25, 7],[26, 6],[27, 5]]) as Theme

export const light_alt2_SliderThumb = n92 as Theme
export const light_alt2_Tooltip = n92 as Theme
export const light_alt2_ProgressIndicator = n92 as Theme
const n93 = t([[12, 3],[13, 4],[14, 5],[15, 6],[16, 2],[17, 1],[19, 7],[20, 8],[21, 7],[22, 10],[23, 5],[24, 6],[25, 4],[26, 5],[27, 6]]) as Theme

export const light_active_ListItem = n93 as Theme
const n94 = t([[12, 5],[13, 6],[14, 7],[15, 8],[16, 4],[17, 3],[19, 7],[20, 8],[21, 7],[22, 8],[23, 7],[24, 8],[25, 6],[26, 7],[27, 4]]) as Theme

export const light_active_Card = n94 as Theme
export const light_active_DrawerFrame = n94 as Theme
export const light_active_Progress = n94 as Theme
export const light_active_TooltipArrow = n94 as Theme
const n95 = t([[12, 6],[13, 7],[14, 8],[15, 9],[16, 5],[17, 4],[19, 7],[20, 8],[21, 7],[22, 7],[23, 7],[24, 8],[25, 6],[26, 7],[27, 3]]) as Theme

export const light_active_Button = n95 as Theme
export const light_active_Switch = n95 as Theme
export const light_active_TooltipContent = n95 as Theme
export const light_active_SliderTrack = n95 as Theme
const n96 = t([[12, 4],[13, 5],[14, 6],[15, 7],[16, 3],[17, 2],[19, 7],[20, 8],[21, 7],[22, 9],[23, 8],[24, 9],[25, 7],[26, 8],[27, 5]]) as Theme

export const light_active_Checkbox = n96 as Theme
export const light_active_RadioGroupItem = n96 as Theme
export const light_active_Input = n96 as Theme
export const light_active_TextArea = n96 as Theme
const n97 = t([[12, 9],[13, 8],[14, 7],[15, 6],[16, 10],[17, 11],[19, 4],[20, 3],[21, 4],[22, 0],[23, 7],[24, 6],[25, 8],[26, 7],[27, 4]]) as Theme

export const light_active_SwitchThumb = n97 as Theme
const n98 = t([[12, 5],[13, 4],[14, 3],[15, 2],[16, 6],[17, 7],[19, 4],[20, 3],[21, 4],[22, 4],[23, 3],[24, 2],[25, 4],[26, 3],[27, 8]]) as Theme

export const light_active_SliderTrackActive = n98 as Theme
const n99 = t([[12, 7],[13, 6],[14, 5],[15, 4],[16, 8],[17, 9],[19, 4],[20, 3],[21, 4],[22, 2],[23, 5],[24, 4],[25, 6],[26, 5],[27, 6]]) as Theme

export const light_active_SliderThumb = n99 as Theme
export const light_active_Tooltip = n99 as Theme
export const light_active_ProgressIndicator = n99 as Theme
const n100 = t([[12, 49],[13, 50],[14, 51],[15, 52],[16, 48],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 57]]) as Theme

export const light_orange_alt1_ListItem = n100 as Theme
const n101 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 59],[19, 58],[20, 59],[21, 58],[22, 59],[23, 53],[24, 55],[25, 53],[26, 53],[27, 55]]) as Theme

export const light_orange_alt1_Card = n101 as Theme
export const light_orange_alt1_DrawerFrame = n101 as Theme
export const light_orange_alt1_Progress = n101 as Theme
export const light_orange_alt1_TooltipArrow = n101 as Theme
const n102 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[18, 59],[19, 58],[20, 59],[21, 58],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_alt1_Button = n102 as Theme
export const light_orange_alt1_Switch = n102 as Theme
export const light_orange_alt1_TooltipContent = n102 as Theme
export const light_orange_alt1_SliderTrack = n102 as Theme
const n103 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 59],[19, 58],[20, 59],[21, 58],[22, 11],[23, 55],[24, 56],[25, 55],[26, 55],[27, 56]]) as Theme

export const light_orange_alt1_Checkbox = n103 as Theme
export const light_orange_alt1_RadioGroupItem = n103 as Theme
export const light_orange_alt1_Input = n103 as Theme
export const light_orange_alt1_TextArea = n103 as Theme
const n104 = t([[12, 11],[13, 59],[14, 58],[15, 57],[16, 11],[17, 11],[18, 49],[19, 50],[20, 49],[21, 50],[22, 48],[23, 58],[24, 57],[25, 58],[26, 58],[27, 50]]) as Theme

export const light_orange_alt1_SwitchThumb = n104 as Theme
const n105 = t([[12, 56],[13, 55],[14, 53],[15, 52],[16, 57],[17, 58],[18, 49],[19, 50],[20, 49],[21, 50],[22, 50],[23, 53],[24, 52],[25, 53],[26, 53],[27, 55]]) as Theme

export const light_orange_alt1_SliderTrackActive = n105 as Theme
const n106 = t([[12, 58],[13, 57],[14, 56],[15, 55],[16, 59],[17, 11],[18, 49],[19, 50],[20, 49],[21, 50],[22, 48],[23, 56],[24, 55],[25, 56],[26, 56],[27, 52]]) as Theme

export const light_orange_alt1_SliderThumb = n106 as Theme
export const light_orange_alt1_Tooltip = n106 as Theme
export const light_orange_alt1_ProgressIndicator = n106 as Theme
const n107 = t([[12, 50],[13, 51],[14, 52],[15, 53],[16, 49],[17, 48],[18, 58],[19, 57],[20, 58],[21, 57],[22, 11],[23, 51],[24, 52],[25, 51],[26, 51],[27, 56]]) as Theme

export const light_orange_alt2_ListItem = n107 as Theme
const n108 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[18, 58],[19, 57],[20, 58],[21, 57],[22, 58],[23, 53],[24, 55],[25, 53],[26, 53],[27, 53]]) as Theme

export const light_orange_alt2_Card = n108 as Theme
export const light_orange_alt2_DrawerFrame = n108 as Theme
export const light_orange_alt2_Progress = n108 as Theme
export const light_orange_alt2_TooltipArrow = n108 as Theme
const n109 = t([[12, 53],[13, 55],[14, 56],[15, 57],[16, 52],[17, 51],[18, 58],[19, 57],[20, 58],[21, 57],[22, 57],[23, 53],[24, 55],[25, 53],[26, 53],[27, 52]]) as Theme

export const light_orange_alt2_Button = n109 as Theme
export const light_orange_alt2_Switch = n109 as Theme
export const light_orange_alt2_TooltipContent = n109 as Theme
export const light_orange_alt2_SliderTrack = n109 as Theme
const n110 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[18, 58],[19, 57],[20, 58],[21, 57],[22, 59],[23, 55],[24, 56],[25, 55],[26, 55],[27, 55]]) as Theme

export const light_orange_alt2_Checkbox = n110 as Theme
export const light_orange_alt2_RadioGroupItem = n110 as Theme
export const light_orange_alt2_Input = n110 as Theme
export const light_orange_alt2_TextArea = n110 as Theme
const n111 = t([[12, 59],[13, 58],[14, 57],[15, 56],[16, 11],[17, 11],[18, 50],[19, 51],[20, 50],[21, 51],[22, 48],[23, 58],[24, 57],[25, 58],[26, 58],[27, 51]]) as Theme

export const light_orange_alt2_SwitchThumb = n111 as Theme
const n112 = t([[12, 55],[13, 53],[14, 52],[15, 51],[16, 56],[17, 57],[18, 50],[19, 51],[20, 50],[21, 51],[22, 51],[23, 53],[24, 52],[25, 53],[26, 53],[27, 56]]) as Theme

export const light_orange_alt2_SliderTrackActive = n112 as Theme
const n113 = t([[12, 57],[13, 56],[14, 55],[15, 53],[16, 58],[17, 59],[18, 50],[19, 51],[20, 50],[21, 51],[22, 49],[23, 56],[24, 55],[25, 56],[26, 56],[27, 53]]) as Theme

export const light_orange_alt2_SliderThumb = n113 as Theme
export const light_orange_alt2_Tooltip = n113 as Theme
export const light_orange_alt2_ProgressIndicator = n113 as Theme
const n114 = t([[12, 51],[13, 52],[14, 53],[15, 55],[16, 50],[17, 49],[19, 56],[20, 57],[21, 56],[22, 59],[23, 52],[24, 53],[25, 52],[26, 52],[27, 55]]) as Theme

export const light_orange_active_ListItem = n114 as Theme
const n115 = t([[12, 53],[13, 55],[14, 56],[15, 57],[16, 52],[17, 51],[19, 56],[20, 57],[21, 56],[22, 57],[23, 55],[24, 56],[25, 55],[26, 55],[27, 52]]) as Theme

export const light_orange_active_Card = n115 as Theme
export const light_orange_active_DrawerFrame = n115 as Theme
export const light_orange_active_Progress = n115 as Theme
export const light_orange_active_TooltipArrow = n115 as Theme
const n116 = t([[12, 55],[13, 56],[14, 57],[15, 58],[16, 53],[17, 52],[19, 56],[20, 57],[21, 56],[22, 56],[23, 55],[24, 56],[25, 55],[26, 55],[27, 51]]) as Theme

export const light_orange_active_Button = n116 as Theme
export const light_orange_active_Switch = n116 as Theme
export const light_orange_active_TooltipContent = n116 as Theme
export const light_orange_active_SliderTrack = n116 as Theme
const n117 = t([[12, 52],[13, 53],[14, 55],[15, 56],[16, 51],[17, 50],[19, 56],[20, 57],[21, 56],[22, 58],[23, 56],[24, 57],[25, 56],[26, 56],[27, 53]]) as Theme

export const light_orange_active_Checkbox = n117 as Theme
export const light_orange_active_RadioGroupItem = n117 as Theme
export const light_orange_active_Input = n117 as Theme
export const light_orange_active_TextArea = n117 as Theme
const n118 = t([[12, 58],[13, 57],[14, 56],[15, 55],[16, 59],[17, 11],[19, 52],[20, 51],[21, 52],[22, 48],[23, 57],[24, 56],[25, 57],[26, 57],[27, 52]]) as Theme

export const light_orange_active_SwitchThumb = n118 as Theme
const n119 = t([[12, 53],[13, 52],[14, 51],[15, 50],[16, 55],[17, 56],[19, 52],[20, 51],[21, 52],[22, 52],[23, 52],[24, 51],[25, 52],[26, 52],[27, 57]]) as Theme

export const light_orange_active_SliderTrackActive = n119 as Theme
const n120 = t([[12, 56],[13, 55],[14, 53],[15, 52],[16, 57],[17, 58],[19, 52],[20, 51],[21, 52],[22, 50],[23, 55],[24, 53],[25, 55],[26, 55],[27, 55]]) as Theme

export const light_orange_active_SliderThumb = n120 as Theme
export const light_orange_active_Tooltip = n120 as Theme
export const light_orange_active_ProgressIndicator = n120 as Theme
const n121 = t([[12, 85],[13, 86],[14, 87],[15, 88],[16, 84],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 93]]) as Theme

export const light_yellow_alt1_ListItem = n121 as Theme
const n122 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 95],[19, 94],[20, 95],[21, 94],[22, 95],[23, 89],[24, 91],[25, 89],[26, 89],[27, 91]]) as Theme

export const light_yellow_alt1_Card = n122 as Theme
export const light_yellow_alt1_DrawerFrame = n122 as Theme
export const light_yellow_alt1_Progress = n122 as Theme
export const light_yellow_alt1_TooltipArrow = n122 as Theme
const n123 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[18, 95],[19, 94],[20, 95],[21, 94],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_yellow_alt1_Button = n123 as Theme
export const light_yellow_alt1_Switch = n123 as Theme
export const light_yellow_alt1_TooltipContent = n123 as Theme
export const light_yellow_alt1_SliderTrack = n123 as Theme
const n124 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 95],[19, 94],[20, 95],[21, 94],[22, 11],[23, 91],[24, 92],[25, 91],[26, 91],[27, 92]]) as Theme

export const light_yellow_alt1_Checkbox = n124 as Theme
export const light_yellow_alt1_RadioGroupItem = n124 as Theme
export const light_yellow_alt1_Input = n124 as Theme
export const light_yellow_alt1_TextArea = n124 as Theme
const n125 = t([[12, 11],[13, 95],[14, 94],[15, 93],[16, 11],[17, 11],[18, 85],[19, 86],[20, 85],[21, 86],[22, 84],[23, 94],[24, 93],[25, 94],[26, 94],[27, 86]]) as Theme

export const light_yellow_alt1_SwitchThumb = n125 as Theme
const n126 = t([[12, 92],[13, 91],[14, 89],[15, 88],[16, 93],[17, 94],[18, 85],[19, 86],[20, 85],[21, 86],[22, 86],[23, 89],[24, 88],[25, 89],[26, 89],[27, 91]]) as Theme

export const light_yellow_alt1_SliderTrackActive = n126 as Theme
const n127 = t([[12, 94],[13, 93],[14, 92],[15, 91],[16, 95],[17, 11],[18, 85],[19, 86],[20, 85],[21, 86],[22, 84],[23, 92],[24, 91],[25, 92],[26, 92],[27, 88]]) as Theme

export const light_yellow_alt1_SliderThumb = n127 as Theme
export const light_yellow_alt1_Tooltip = n127 as Theme
export const light_yellow_alt1_ProgressIndicator = n127 as Theme
const n128 = t([[12, 86],[13, 87],[14, 88],[15, 89],[16, 85],[17, 84],[18, 94],[19, 93],[20, 94],[21, 93],[22, 11],[23, 87],[24, 88],[25, 87],[26, 87],[27, 92]]) as Theme

export const light_yellow_alt2_ListItem = n128 as Theme
const n129 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[18, 94],[19, 93],[20, 94],[21, 93],[22, 94],[23, 89],[24, 91],[25, 89],[26, 89],[27, 89]]) as Theme

export const light_yellow_alt2_Card = n129 as Theme
export const light_yellow_alt2_DrawerFrame = n129 as Theme
export const light_yellow_alt2_Progress = n129 as Theme
export const light_yellow_alt2_TooltipArrow = n129 as Theme
const n130 = t([[12, 89],[13, 91],[14, 92],[15, 93],[16, 88],[17, 87],[18, 94],[19, 93],[20, 94],[21, 93],[22, 93],[23, 89],[24, 91],[25, 89],[26, 89],[27, 88]]) as Theme

export const light_yellow_alt2_Button = n130 as Theme
export const light_yellow_alt2_Switch = n130 as Theme
export const light_yellow_alt2_TooltipContent = n130 as Theme
export const light_yellow_alt2_SliderTrack = n130 as Theme
const n131 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[18, 94],[19, 93],[20, 94],[21, 93],[22, 95],[23, 91],[24, 92],[25, 91],[26, 91],[27, 91]]) as Theme

export const light_yellow_alt2_Checkbox = n131 as Theme
export const light_yellow_alt2_RadioGroupItem = n131 as Theme
export const light_yellow_alt2_Input = n131 as Theme
export const light_yellow_alt2_TextArea = n131 as Theme
const n132 = t([[12, 95],[13, 94],[14, 93],[15, 92],[16, 11],[17, 11],[18, 86],[19, 87],[20, 86],[21, 87],[22, 84],[23, 94],[24, 93],[25, 94],[26, 94],[27, 87]]) as Theme

export const light_yellow_alt2_SwitchThumb = n132 as Theme
const n133 = t([[12, 91],[13, 89],[14, 88],[15, 87],[16, 92],[17, 93],[18, 86],[19, 87],[20, 86],[21, 87],[22, 87],[23, 89],[24, 88],[25, 89],[26, 89],[27, 92]]) as Theme

export const light_yellow_alt2_SliderTrackActive = n133 as Theme
const n134 = t([[12, 93],[13, 92],[14, 91],[15, 89],[16, 94],[17, 95],[18, 86],[19, 87],[20, 86],[21, 87],[22, 85],[23, 92],[24, 91],[25, 92],[26, 92],[27, 89]]) as Theme

export const light_yellow_alt2_SliderThumb = n134 as Theme
export const light_yellow_alt2_Tooltip = n134 as Theme
export const light_yellow_alt2_ProgressIndicator = n134 as Theme
const n135 = t([[12, 87],[13, 88],[14, 89],[15, 91],[16, 86],[17, 85],[19, 92],[20, 93],[21, 92],[22, 95],[23, 88],[24, 89],[25, 88],[26, 88],[27, 91]]) as Theme

export const light_yellow_active_ListItem = n135 as Theme
const n136 = t([[12, 89],[13, 91],[14, 92],[15, 93],[16, 88],[17, 87],[19, 92],[20, 93],[21, 92],[22, 93],[23, 91],[24, 92],[25, 91],[26, 91],[27, 88]]) as Theme

export const light_yellow_active_Card = n136 as Theme
export const light_yellow_active_DrawerFrame = n136 as Theme
export const light_yellow_active_Progress = n136 as Theme
export const light_yellow_active_TooltipArrow = n136 as Theme
const n137 = t([[12, 91],[13, 92],[14, 93],[15, 94],[16, 89],[17, 88],[19, 92],[20, 93],[21, 92],[22, 92],[23, 91],[24, 92],[25, 91],[26, 91],[27, 87]]) as Theme

export const light_yellow_active_Button = n137 as Theme
export const light_yellow_active_Switch = n137 as Theme
export const light_yellow_active_TooltipContent = n137 as Theme
export const light_yellow_active_SliderTrack = n137 as Theme
const n138 = t([[12, 88],[13, 89],[14, 91],[15, 92],[16, 87],[17, 86],[19, 92],[20, 93],[21, 92],[22, 94],[23, 92],[24, 93],[25, 92],[26, 92],[27, 89]]) as Theme

export const light_yellow_active_Checkbox = n138 as Theme
export const light_yellow_active_RadioGroupItem = n138 as Theme
export const light_yellow_active_Input = n138 as Theme
export const light_yellow_active_TextArea = n138 as Theme
const n139 = t([[12, 94],[13, 93],[14, 92],[15, 91],[16, 95],[17, 11],[19, 88],[20, 87],[21, 88],[22, 84],[23, 93],[24, 92],[25, 93],[26, 93],[27, 88]]) as Theme

export const light_yellow_active_SwitchThumb = n139 as Theme
const n140 = t([[12, 89],[13, 88],[14, 87],[15, 86],[16, 91],[17, 92],[19, 88],[20, 87],[21, 88],[22, 88],[23, 88],[24, 87],[25, 88],[26, 88],[27, 93]]) as Theme

export const light_yellow_active_SliderTrackActive = n140 as Theme
const n141 = t([[12, 92],[13, 91],[14, 89],[15, 88],[16, 93],[17, 94],[19, 88],[20, 87],[21, 88],[22, 86],[23, 91],[24, 89],[25, 91],[26, 91],[27, 91]]) as Theme

export const light_yellow_active_SliderThumb = n141 as Theme
export const light_yellow_active_Tooltip = n141 as Theme
export const light_yellow_active_ProgressIndicator = n141 as Theme
const n142 = t([[12, 37],[13, 38],[14, 39],[15, 40],[16, 36],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 45]]) as Theme

export const light_green_alt1_ListItem = n142 as Theme
const n143 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 47],[19, 46],[20, 47],[21, 46],[22, 47],[23, 41],[24, 43],[25, 41],[26, 41],[27, 43]]) as Theme

export const light_green_alt1_Card = n143 as Theme
export const light_green_alt1_DrawerFrame = n143 as Theme
export const light_green_alt1_Progress = n143 as Theme
export const light_green_alt1_TooltipArrow = n143 as Theme
const n144 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[18, 47],[19, 46],[20, 47],[21, 46],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_alt1_Button = n144 as Theme
export const light_green_alt1_Switch = n144 as Theme
export const light_green_alt1_TooltipContent = n144 as Theme
export const light_green_alt1_SliderTrack = n144 as Theme
const n145 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 47],[19, 46],[20, 47],[21, 46],[22, 11],[23, 43],[24, 44],[25, 43],[26, 43],[27, 44]]) as Theme

export const light_green_alt1_Checkbox = n145 as Theme
export const light_green_alt1_RadioGroupItem = n145 as Theme
export const light_green_alt1_Input = n145 as Theme
export const light_green_alt1_TextArea = n145 as Theme
const n146 = t([[12, 11],[13, 47],[14, 46],[15, 45],[16, 11],[17, 11],[18, 37],[19, 38],[20, 37],[21, 38],[22, 36],[23, 46],[24, 45],[25, 46],[26, 46],[27, 38]]) as Theme

export const light_green_alt1_SwitchThumb = n146 as Theme
const n147 = t([[12, 44],[13, 43],[14, 41],[15, 40],[16, 45],[17, 46],[18, 37],[19, 38],[20, 37],[21, 38],[22, 38],[23, 41],[24, 40],[25, 41],[26, 41],[27, 43]]) as Theme

export const light_green_alt1_SliderTrackActive = n147 as Theme
const n148 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 47],[17, 11],[18, 37],[19, 38],[20, 37],[21, 38],[22, 36],[23, 44],[24, 43],[25, 44],[26, 44],[27, 40]]) as Theme

export const light_green_alt1_SliderThumb = n148 as Theme
export const light_green_alt1_Tooltip = n148 as Theme
export const light_green_alt1_ProgressIndicator = n148 as Theme
const n149 = t([[12, 38],[13, 39],[14, 40],[15, 41],[16, 37],[17, 36],[18, 46],[19, 45],[20, 46],[21, 45],[22, 11],[23, 39],[24, 40],[25, 39],[26, 39],[27, 44]]) as Theme

export const light_green_alt2_ListItem = n149 as Theme
const n150 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[18, 46],[19, 45],[20, 46],[21, 45],[22, 46],[23, 41],[24, 43],[25, 41],[26, 41],[27, 41]]) as Theme

export const light_green_alt2_Card = n150 as Theme
export const light_green_alt2_DrawerFrame = n150 as Theme
export const light_green_alt2_Progress = n150 as Theme
export const light_green_alt2_TooltipArrow = n150 as Theme
const n151 = t([[12, 41],[13, 43],[14, 44],[15, 45],[16, 40],[17, 39],[18, 46],[19, 45],[20, 46],[21, 45],[22, 45],[23, 41],[24, 43],[25, 41],[26, 41],[27, 40]]) as Theme

export const light_green_alt2_Button = n151 as Theme
export const light_green_alt2_Switch = n151 as Theme
export const light_green_alt2_TooltipContent = n151 as Theme
export const light_green_alt2_SliderTrack = n151 as Theme
const n152 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[18, 46],[19, 45],[20, 46],[21, 45],[22, 47],[23, 43],[24, 44],[25, 43],[26, 43],[27, 43]]) as Theme

export const light_green_alt2_Checkbox = n152 as Theme
export const light_green_alt2_RadioGroupItem = n152 as Theme
export const light_green_alt2_Input = n152 as Theme
export const light_green_alt2_TextArea = n152 as Theme
const n153 = t([[12, 47],[13, 46],[14, 45],[15, 44],[16, 11],[17, 11],[18, 38],[19, 39],[20, 38],[21, 39],[22, 36],[23, 46],[24, 45],[25, 46],[26, 46],[27, 39]]) as Theme

export const light_green_alt2_SwitchThumb = n153 as Theme
const n154 = t([[12, 43],[13, 41],[14, 40],[15, 39],[16, 44],[17, 45],[18, 38],[19, 39],[20, 38],[21, 39],[22, 39],[23, 41],[24, 40],[25, 41],[26, 41],[27, 44]]) as Theme

export const light_green_alt2_SliderTrackActive = n154 as Theme
const n155 = t([[12, 45],[13, 44],[14, 43],[15, 41],[16, 46],[17, 47],[18, 38],[19, 39],[20, 38],[21, 39],[22, 37],[23, 44],[24, 43],[25, 44],[26, 44],[27, 41]]) as Theme

export const light_green_alt2_SliderThumb = n155 as Theme
export const light_green_alt2_Tooltip = n155 as Theme
export const light_green_alt2_ProgressIndicator = n155 as Theme
const n156 = t([[12, 39],[13, 40],[14, 41],[15, 43],[16, 38],[17, 37],[19, 44],[20, 45],[21, 44],[22, 47],[23, 40],[24, 41],[25, 40],[26, 40],[27, 43]]) as Theme

export const light_green_active_ListItem = n156 as Theme
const n157 = t([[12, 41],[13, 43],[14, 44],[15, 45],[16, 40],[17, 39],[19, 44],[20, 45],[21, 44],[22, 45],[23, 43],[24, 44],[25, 43],[26, 43],[27, 40]]) as Theme

export const light_green_active_Card = n157 as Theme
export const light_green_active_DrawerFrame = n157 as Theme
export const light_green_active_Progress = n157 as Theme
export const light_green_active_TooltipArrow = n157 as Theme
const n158 = t([[12, 43],[13, 44],[14, 45],[15, 46],[16, 41],[17, 40],[19, 44],[20, 45],[21, 44],[22, 44],[23, 43],[24, 44],[25, 43],[26, 43],[27, 39]]) as Theme

export const light_green_active_Button = n158 as Theme
export const light_green_active_Switch = n158 as Theme
export const light_green_active_TooltipContent = n158 as Theme
export const light_green_active_SliderTrack = n158 as Theme
const n159 = t([[12, 40],[13, 41],[14, 43],[15, 44],[16, 39],[17, 38],[19, 44],[20, 45],[21, 44],[22, 46],[23, 44],[24, 45],[25, 44],[26, 44],[27, 41]]) as Theme

export const light_green_active_Checkbox = n159 as Theme
export const light_green_active_RadioGroupItem = n159 as Theme
export const light_green_active_Input = n159 as Theme
export const light_green_active_TextArea = n159 as Theme
const n160 = t([[12, 46],[13, 45],[14, 44],[15, 43],[16, 47],[17, 11],[19, 40],[20, 39],[21, 40],[22, 36],[23, 45],[24, 44],[25, 45],[26, 45],[27, 40]]) as Theme

export const light_green_active_SwitchThumb = n160 as Theme
const n161 = t([[12, 41],[13, 40],[14, 39],[15, 38],[16, 43],[17, 44],[19, 40],[20, 39],[21, 40],[22, 40],[23, 40],[24, 39],[25, 40],[26, 40],[27, 45]]) as Theme

export const light_green_active_SliderTrackActive = n161 as Theme
const n162 = t([[12, 44],[13, 43],[14, 41],[15, 40],[16, 45],[17, 46],[19, 40],[20, 39],[21, 40],[22, 38],[23, 43],[24, 41],[25, 43],[26, 43],[27, 43]]) as Theme

export const light_green_active_SliderThumb = n162 as Theme
export const light_green_active_Tooltip = n162 as Theme
export const light_green_active_ProgressIndicator = n162 as Theme
const n163 = t([[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 23]]) as Theme

export const light_blue_alt1_ListItem = n163 as Theme
const n164 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 25],[19, 24],[20, 25],[21, 24],[22, 25],[23, 19],[24, 21],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_Card = n164 as Theme
export const light_blue_alt1_DrawerFrame = n164 as Theme
export const light_blue_alt1_Progress = n164 as Theme
export const light_blue_alt1_TooltipArrow = n164 as Theme
const n165 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 25],[19, 24],[20, 25],[21, 24],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_alt1_Button = n165 as Theme
export const light_blue_alt1_Switch = n165 as Theme
export const light_blue_alt1_TooltipContent = n165 as Theme
export const light_blue_alt1_SliderTrack = n165 as Theme
const n166 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 25],[19, 24],[20, 25],[21, 24],[22, 11],[23, 21],[24, 22],[25, 21],[26, 21],[27, 22]]) as Theme

export const light_blue_alt1_Checkbox = n166 as Theme
export const light_blue_alt1_RadioGroupItem = n166 as Theme
export const light_blue_alt1_Input = n166 as Theme
export const light_blue_alt1_TextArea = n166 as Theme
const n167 = t([[12, 11],[13, 25],[14, 24],[15, 23],[16, 11],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 16]]) as Theme

export const light_blue_alt1_SwitchThumb = n167 as Theme
const n168 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[18, 15],[19, 16],[20, 15],[21, 16],[22, 16],[23, 19],[24, 18],[25, 19],[26, 19],[27, 21]]) as Theme

export const light_blue_alt1_SliderTrackActive = n168 as Theme
const n169 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[18, 15],[19, 16],[20, 15],[21, 16],[22, 14],[23, 22],[24, 21],[25, 22],[26, 22],[27, 18]]) as Theme

export const light_blue_alt1_SliderThumb = n169 as Theme
export const light_blue_alt1_Tooltip = n169 as Theme
export const light_blue_alt1_ProgressIndicator = n169 as Theme
const n170 = t([[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 11],[23, 17],[24, 18],[25, 17],[26, 17],[27, 22]]) as Theme

export const light_blue_alt2_ListItem = n170 as Theme
const n171 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[18, 24],[19, 23],[20, 24],[21, 23],[22, 24],[23, 19],[24, 21],[25, 19],[26, 19],[27, 19]]) as Theme

export const light_blue_alt2_Card = n171 as Theme
export const light_blue_alt2_DrawerFrame = n171 as Theme
export const light_blue_alt2_Progress = n171 as Theme
export const light_blue_alt2_TooltipArrow = n171 as Theme
const n172 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[18, 24],[19, 23],[20, 24],[21, 23],[22, 23],[23, 19],[24, 21],[25, 19],[26, 19],[27, 18]]) as Theme

export const light_blue_alt2_Button = n172 as Theme
export const light_blue_alt2_Switch = n172 as Theme
export const light_blue_alt2_TooltipContent = n172 as Theme
export const light_blue_alt2_SliderTrack = n172 as Theme
const n173 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[18, 24],[19, 23],[20, 24],[21, 23],[22, 25],[23, 21],[24, 22],[25, 21],[26, 21],[27, 21]]) as Theme

export const light_blue_alt2_Checkbox = n173 as Theme
export const light_blue_alt2_RadioGroupItem = n173 as Theme
export const light_blue_alt2_Input = n173 as Theme
export const light_blue_alt2_TextArea = n173 as Theme
const n174 = t([[12, 25],[13, 24],[14, 23],[15, 22],[16, 11],[17, 11],[18, 16],[19, 17],[20, 16],[21, 17],[22, 14],[23, 24],[24, 23],[25, 24],[26, 24],[27, 17]]) as Theme

export const light_blue_alt2_SwitchThumb = n174 as Theme
const n175 = t([[12, 21],[13, 19],[14, 18],[15, 17],[16, 22],[17, 23],[18, 16],[19, 17],[20, 16],[21, 17],[22, 17],[23, 19],[24, 18],[25, 19],[26, 19],[27, 22]]) as Theme

export const light_blue_alt2_SliderTrackActive = n175 as Theme
const n176 = t([[12, 23],[13, 22],[14, 21],[15, 19],[16, 24],[17, 25],[18, 16],[19, 17],[20, 16],[21, 17],[22, 15],[23, 22],[24, 21],[25, 22],[26, 22],[27, 19]]) as Theme

export const light_blue_alt2_SliderThumb = n176 as Theme
export const light_blue_alt2_Tooltip = n176 as Theme
export const light_blue_alt2_ProgressIndicator = n176 as Theme
const n177 = t([[12, 17],[13, 18],[14, 19],[15, 21],[16, 16],[17, 15],[19, 22],[20, 23],[21, 22],[22, 25],[23, 18],[24, 19],[25, 18],[26, 18],[27, 21]]) as Theme

export const light_blue_active_ListItem = n177 as Theme
const n178 = t([[12, 19],[13, 21],[14, 22],[15, 23],[16, 18],[17, 17],[19, 22],[20, 23],[21, 22],[22, 23],[23, 21],[24, 22],[25, 21],[26, 21],[27, 18]]) as Theme

export const light_blue_active_Card = n178 as Theme
export const light_blue_active_DrawerFrame = n178 as Theme
export const light_blue_active_Progress = n178 as Theme
export const light_blue_active_TooltipArrow = n178 as Theme
const n179 = t([[12, 21],[13, 22],[14, 23],[15, 24],[16, 19],[17, 18],[19, 22],[20, 23],[21, 22],[22, 22],[23, 21],[24, 22],[25, 21],[26, 21],[27, 17]]) as Theme

export const light_blue_active_Button = n179 as Theme
export const light_blue_active_Switch = n179 as Theme
export const light_blue_active_TooltipContent = n179 as Theme
export const light_blue_active_SliderTrack = n179 as Theme
const n180 = t([[12, 18],[13, 19],[14, 21],[15, 22],[16, 17],[17, 16],[19, 22],[20, 23],[21, 22],[22, 24],[23, 22],[24, 23],[25, 22],[26, 22],[27, 19]]) as Theme

export const light_blue_active_Checkbox = n180 as Theme
export const light_blue_active_RadioGroupItem = n180 as Theme
export const light_blue_active_Input = n180 as Theme
export const light_blue_active_TextArea = n180 as Theme
const n181 = t([[12, 24],[13, 23],[14, 22],[15, 21],[16, 25],[17, 11],[19, 18],[20, 17],[21, 18],[22, 14],[23, 23],[24, 22],[25, 23],[26, 23],[27, 18]]) as Theme

export const light_blue_active_SwitchThumb = n181 as Theme
const n182 = t([[12, 19],[13, 18],[14, 17],[15, 16],[16, 21],[17, 22],[19, 18],[20, 17],[21, 18],[22, 18],[23, 18],[24, 17],[25, 18],[26, 18],[27, 23]]) as Theme

export const light_blue_active_SliderTrackActive = n182 as Theme
const n183 = t([[12, 22],[13, 21],[14, 19],[15, 18],[16, 23],[17, 24],[19, 18],[20, 17],[21, 18],[22, 16],[23, 21],[24, 19],[25, 21],[26, 21],[27, 21]]) as Theme

export const light_blue_active_SliderThumb = n183 as Theme
export const light_blue_active_Tooltip = n183 as Theme
export const light_blue_active_ProgressIndicator = n183 as Theme
const n184 = t([[12, 61],[13, 62],[14, 63],[15, 64],[16, 60],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 69]]) as Theme

export const light_mint_alt1_ListItem = n184 as Theme
const n185 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 71],[19, 70],[20, 71],[21, 70],[22, 71],[23, 65],[24, 67],[25, 65],[26, 65],[27, 67]]) as Theme

export const light_mint_alt1_Card = n185 as Theme
export const light_mint_alt1_DrawerFrame = n185 as Theme
export const light_mint_alt1_Progress = n185 as Theme
export const light_mint_alt1_TooltipArrow = n185 as Theme
const n186 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[18, 71],[19, 70],[20, 71],[21, 70],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_mint_alt1_Button = n186 as Theme
export const light_mint_alt1_Switch = n186 as Theme
export const light_mint_alt1_TooltipContent = n186 as Theme
export const light_mint_alt1_SliderTrack = n186 as Theme
const n187 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 71],[19, 70],[20, 71],[21, 70],[22, 11],[23, 67],[24, 68],[25, 67],[26, 67],[27, 68]]) as Theme

export const light_mint_alt1_Checkbox = n187 as Theme
export const light_mint_alt1_RadioGroupItem = n187 as Theme
export const light_mint_alt1_Input = n187 as Theme
export const light_mint_alt1_TextArea = n187 as Theme
const n188 = t([[12, 11],[13, 71],[14, 70],[15, 69],[16, 11],[17, 11],[18, 61],[19, 62],[20, 61],[21, 62],[22, 60],[23, 70],[24, 69],[25, 70],[26, 70],[27, 62]]) as Theme

export const light_mint_alt1_SwitchThumb = n188 as Theme
const n189 = t([[12, 68],[13, 67],[14, 65],[15, 64],[16, 69],[17, 70],[18, 61],[19, 62],[20, 61],[21, 62],[22, 62],[23, 65],[24, 64],[25, 65],[26, 65],[27, 67]]) as Theme

export const light_mint_alt1_SliderTrackActive = n189 as Theme
const n190 = t([[12, 70],[13, 69],[14, 68],[15, 67],[16, 71],[17, 11],[18, 61],[19, 62],[20, 61],[21, 62],[22, 60],[23, 68],[24, 67],[25, 68],[26, 68],[27, 64]]) as Theme

export const light_mint_alt1_SliderThumb = n190 as Theme
export const light_mint_alt1_Tooltip = n190 as Theme
export const light_mint_alt1_ProgressIndicator = n190 as Theme
const n191 = t([[12, 62],[13, 63],[14, 64],[15, 65],[16, 61],[17, 60],[18, 70],[19, 69],[20, 70],[21, 69],[22, 11],[23, 63],[24, 64],[25, 63],[26, 63],[27, 68]]) as Theme

export const light_mint_alt2_ListItem = n191 as Theme
const n192 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[18, 70],[19, 69],[20, 70],[21, 69],[22, 70],[23, 65],[24, 67],[25, 65],[26, 65],[27, 65]]) as Theme

export const light_mint_alt2_Card = n192 as Theme
export const light_mint_alt2_DrawerFrame = n192 as Theme
export const light_mint_alt2_Progress = n192 as Theme
export const light_mint_alt2_TooltipArrow = n192 as Theme
const n193 = t([[12, 65],[13, 67],[14, 68],[15, 69],[16, 64],[17, 63],[18, 70],[19, 69],[20, 70],[21, 69],[22, 69],[23, 65],[24, 67],[25, 65],[26, 65],[27, 64]]) as Theme

export const light_mint_alt2_Button = n193 as Theme
export const light_mint_alt2_Switch = n193 as Theme
export const light_mint_alt2_TooltipContent = n193 as Theme
export const light_mint_alt2_SliderTrack = n193 as Theme
const n194 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[18, 70],[19, 69],[20, 70],[21, 69],[22, 71],[23, 67],[24, 68],[25, 67],[26, 67],[27, 67]]) as Theme

export const light_mint_alt2_Checkbox = n194 as Theme
export const light_mint_alt2_RadioGroupItem = n194 as Theme
export const light_mint_alt2_Input = n194 as Theme
export const light_mint_alt2_TextArea = n194 as Theme
const n195 = t([[12, 71],[13, 70],[14, 69],[15, 68],[16, 11],[17, 11],[18, 62],[19, 63],[20, 62],[21, 63],[22, 60],[23, 70],[24, 69],[25, 70],[26, 70],[27, 63]]) as Theme

export const light_mint_alt2_SwitchThumb = n195 as Theme
const n196 = t([[12, 67],[13, 65],[14, 64],[15, 63],[16, 68],[17, 69],[18, 62],[19, 63],[20, 62],[21, 63],[22, 63],[23, 65],[24, 64],[25, 65],[26, 65],[27, 68]]) as Theme

export const light_mint_alt2_SliderTrackActive = n196 as Theme
const n197 = t([[12, 69],[13, 68],[14, 67],[15, 65],[16, 70],[17, 71],[18, 62],[19, 63],[20, 62],[21, 63],[22, 61],[23, 68],[24, 67],[25, 68],[26, 68],[27, 65]]) as Theme

export const light_mint_alt2_SliderThumb = n197 as Theme
export const light_mint_alt2_Tooltip = n197 as Theme
export const light_mint_alt2_ProgressIndicator = n197 as Theme
const n198 = t([[12, 63],[13, 64],[14, 65],[15, 67],[16, 62],[17, 61],[19, 68],[20, 69],[21, 68],[22, 71],[23, 64],[24, 65],[25, 64],[26, 64],[27, 67]]) as Theme

export const light_mint_active_ListItem = n198 as Theme
const n199 = t([[12, 65],[13, 67],[14, 68],[15, 69],[16, 64],[17, 63],[19, 68],[20, 69],[21, 68],[22, 69],[23, 67],[24, 68],[25, 67],[26, 67],[27, 64]]) as Theme

export const light_mint_active_Card = n199 as Theme
export const light_mint_active_DrawerFrame = n199 as Theme
export const light_mint_active_Progress = n199 as Theme
export const light_mint_active_TooltipArrow = n199 as Theme
const n200 = t([[12, 67],[13, 68],[14, 69],[15, 70],[16, 65],[17, 64],[19, 68],[20, 69],[21, 68],[22, 68],[23, 67],[24, 68],[25, 67],[26, 67],[27, 63]]) as Theme

export const light_mint_active_Button = n200 as Theme
export const light_mint_active_Switch = n200 as Theme
export const light_mint_active_TooltipContent = n200 as Theme
export const light_mint_active_SliderTrack = n200 as Theme
const n201 = t([[12, 64],[13, 65],[14, 67],[15, 68],[16, 63],[17, 62],[19, 68],[20, 69],[21, 68],[22, 70],[23, 68],[24, 69],[25, 68],[26, 68],[27, 65]]) as Theme

export const light_mint_active_Checkbox = n201 as Theme
export const light_mint_active_RadioGroupItem = n201 as Theme
export const light_mint_active_Input = n201 as Theme
export const light_mint_active_TextArea = n201 as Theme
const n202 = t([[12, 70],[13, 69],[14, 68],[15, 67],[16, 71],[17, 11],[19, 64],[20, 63],[21, 64],[22, 60],[23, 69],[24, 68],[25, 69],[26, 69],[27, 64]]) as Theme

export const light_mint_active_SwitchThumb = n202 as Theme
const n203 = t([[12, 65],[13, 64],[14, 63],[15, 62],[16, 67],[17, 68],[19, 64],[20, 63],[21, 64],[22, 64],[23, 64],[24, 63],[25, 64],[26, 64],[27, 69]]) as Theme

export const light_mint_active_SliderTrackActive = n203 as Theme
const n204 = t([[12, 68],[13, 67],[14, 65],[15, 64],[16, 69],[17, 70],[19, 64],[20, 63],[21, 64],[22, 62],[23, 67],[24, 65],[25, 67],[26, 67],[27, 67]]) as Theme

export const light_mint_active_SliderThumb = n204 as Theme
export const light_mint_active_Tooltip = n204 as Theme
export const light_mint_active_ProgressIndicator = n204 as Theme
const n205 = t([[12, 73],[13, 74],[14, 75],[15, 76],[16, 72],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 81]]) as Theme

export const light_red_alt1_ListItem = n205 as Theme
const n206 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 83],[19, 82],[20, 83],[21, 82],[22, 83],[23, 77],[24, 79],[25, 77],[26, 77],[27, 79]]) as Theme

export const light_red_alt1_Card = n206 as Theme
export const light_red_alt1_DrawerFrame = n206 as Theme
export const light_red_alt1_Progress = n206 as Theme
export const light_red_alt1_TooltipArrow = n206 as Theme
const n207 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[18, 83],[19, 82],[20, 83],[21, 82],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_red_alt1_Button = n207 as Theme
export const light_red_alt1_Switch = n207 as Theme
export const light_red_alt1_TooltipContent = n207 as Theme
export const light_red_alt1_SliderTrack = n207 as Theme
const n208 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 83],[19, 82],[20, 83],[21, 82],[22, 11],[23, 79],[24, 80],[25, 79],[26, 79],[27, 80]]) as Theme

export const light_red_alt1_Checkbox = n208 as Theme
export const light_red_alt1_RadioGroupItem = n208 as Theme
export const light_red_alt1_Input = n208 as Theme
export const light_red_alt1_TextArea = n208 as Theme
const n209 = t([[12, 11],[13, 83],[14, 82],[15, 81],[16, 11],[17, 11],[18, 73],[19, 74],[20, 73],[21, 74],[22, 72],[23, 82],[24, 81],[25, 82],[26, 82],[27, 74]]) as Theme

export const light_red_alt1_SwitchThumb = n209 as Theme
const n210 = t([[12, 80],[13, 79],[14, 77],[15, 76],[16, 81],[17, 82],[18, 73],[19, 74],[20, 73],[21, 74],[22, 74],[23, 77],[24, 76],[25, 77],[26, 77],[27, 79]]) as Theme

export const light_red_alt1_SliderTrackActive = n210 as Theme
const n211 = t([[12, 82],[13, 81],[14, 80],[15, 79],[16, 83],[17, 11],[18, 73],[19, 74],[20, 73],[21, 74],[22, 72],[23, 80],[24, 79],[25, 80],[26, 80],[27, 76]]) as Theme

export const light_red_alt1_SliderThumb = n211 as Theme
export const light_red_alt1_Tooltip = n211 as Theme
export const light_red_alt1_ProgressIndicator = n211 as Theme
const n212 = t([[12, 74],[13, 75],[14, 76],[15, 77],[16, 73],[17, 72],[18, 82],[19, 81],[20, 82],[21, 81],[22, 11],[23, 75],[24, 76],[25, 75],[26, 75],[27, 80]]) as Theme

export const light_red_alt2_ListItem = n212 as Theme
const n213 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[18, 82],[19, 81],[20, 82],[21, 81],[22, 82],[23, 77],[24, 79],[25, 77],[26, 77],[27, 77]]) as Theme

export const light_red_alt2_Card = n213 as Theme
export const light_red_alt2_DrawerFrame = n213 as Theme
export const light_red_alt2_Progress = n213 as Theme
export const light_red_alt2_TooltipArrow = n213 as Theme
const n214 = t([[12, 77],[13, 79],[14, 80],[15, 81],[16, 76],[17, 75],[18, 82],[19, 81],[20, 82],[21, 81],[22, 81],[23, 77],[24, 79],[25, 77],[26, 77],[27, 76]]) as Theme

export const light_red_alt2_Button = n214 as Theme
export const light_red_alt2_Switch = n214 as Theme
export const light_red_alt2_TooltipContent = n214 as Theme
export const light_red_alt2_SliderTrack = n214 as Theme
const n215 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[18, 82],[19, 81],[20, 82],[21, 81],[22, 83],[23, 79],[24, 80],[25, 79],[26, 79],[27, 79]]) as Theme

export const light_red_alt2_Checkbox = n215 as Theme
export const light_red_alt2_RadioGroupItem = n215 as Theme
export const light_red_alt2_Input = n215 as Theme
export const light_red_alt2_TextArea = n215 as Theme
const n216 = t([[12, 83],[13, 82],[14, 81],[15, 80],[16, 11],[17, 11],[18, 74],[19, 75],[20, 74],[21, 75],[22, 72],[23, 82],[24, 81],[25, 82],[26, 82],[27, 75]]) as Theme

export const light_red_alt2_SwitchThumb = n216 as Theme
const n217 = t([[12, 79],[13, 77],[14, 76],[15, 75],[16, 80],[17, 81],[18, 74],[19, 75],[20, 74],[21, 75],[22, 75],[23, 77],[24, 76],[25, 77],[26, 77],[27, 80]]) as Theme

export const light_red_alt2_SliderTrackActive = n217 as Theme
const n218 = t([[12, 81],[13, 80],[14, 79],[15, 77],[16, 82],[17, 83],[18, 74],[19, 75],[20, 74],[21, 75],[22, 73],[23, 80],[24, 79],[25, 80],[26, 80],[27, 77]]) as Theme

export const light_red_alt2_SliderThumb = n218 as Theme
export const light_red_alt2_Tooltip = n218 as Theme
export const light_red_alt2_ProgressIndicator = n218 as Theme
const n219 = t([[12, 75],[13, 76],[14, 77],[15, 79],[16, 74],[17, 73],[19, 80],[20, 81],[21, 80],[22, 83],[23, 76],[24, 77],[25, 76],[26, 76],[27, 79]]) as Theme

export const light_red_active_ListItem = n219 as Theme
const n220 = t([[12, 77],[13, 79],[14, 80],[15, 81],[16, 76],[17, 75],[19, 80],[20, 81],[21, 80],[22, 81],[23, 79],[24, 80],[25, 79],[26, 79],[27, 76]]) as Theme

export const light_red_active_Card = n220 as Theme
export const light_red_active_DrawerFrame = n220 as Theme
export const light_red_active_Progress = n220 as Theme
export const light_red_active_TooltipArrow = n220 as Theme
const n221 = t([[12, 79],[13, 80],[14, 81],[15, 82],[16, 77],[17, 76],[19, 80],[20, 81],[21, 80],[22, 80],[23, 79],[24, 80],[25, 79],[26, 79],[27, 75]]) as Theme

export const light_red_active_Button = n221 as Theme
export const light_red_active_Switch = n221 as Theme
export const light_red_active_TooltipContent = n221 as Theme
export const light_red_active_SliderTrack = n221 as Theme
const n222 = t([[12, 76],[13, 77],[14, 79],[15, 80],[16, 75],[17, 74],[19, 80],[20, 81],[21, 80],[22, 82],[23, 80],[24, 81],[25, 80],[26, 80],[27, 77]]) as Theme

export const light_red_active_Checkbox = n222 as Theme
export const light_red_active_RadioGroupItem = n222 as Theme
export const light_red_active_Input = n222 as Theme
export const light_red_active_TextArea = n222 as Theme
const n223 = t([[12, 82],[13, 81],[14, 80],[15, 79],[16, 83],[17, 11],[19, 76],[20, 75],[21, 76],[22, 72],[23, 81],[24, 80],[25, 81],[26, 81],[27, 76]]) as Theme

export const light_red_active_SwitchThumb = n223 as Theme
const n224 = t([[12, 77],[13, 76],[14, 75],[15, 74],[16, 79],[17, 80],[19, 76],[20, 75],[21, 76],[22, 76],[23, 76],[24, 75],[25, 76],[26, 76],[27, 81]]) as Theme

export const light_red_active_SliderTrackActive = n224 as Theme
const n225 = t([[12, 80],[13, 79],[14, 77],[15, 76],[16, 81],[17, 82],[19, 76],[20, 75],[21, 76],[22, 74],[23, 79],[24, 77],[25, 79],[26, 79],[27, 79]]) as Theme

export const light_red_active_SliderThumb = n225 as Theme
export const light_red_active_Tooltip = n225 as Theme
export const light_red_active_ProgressIndicator = n225 as Theme