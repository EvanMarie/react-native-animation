export const col= {
  "light": "rgba(252, 250, 220, 1)",
  "dark": "rgba(10, 0, 7, 1)",
          100: "rgba(250, 244, 177, 1)",
          110: "rgba(250, 244, 177, 0.1)",
          120: "rgba(250, 244, 177, 0.2)",
          130: "rgba(250, 244, 177, 0.3)",
          140: "rgba(250, 244, 177, 0.4)",
          150: "rgba(250, 244, 177, 0.5)",
          160: "rgba(250, 244, 177, 0.6)",
          170: "rgba(250, 244, 177, 0.7)",
          180: "rgba(250, 244, 177, 0.8)",
          190: "rgba(250, 244, 177, 0.9)",

          200: "rgba(244, 231, 83, 1)",
          210: "rgba(244, 231, 83, 0.1)",
          220: "rgba(244, 231, 83, 0.2)",
          230: "rgba(244, 231, 83, 0.3)",
          240: "rgba(244, 231, 83, 0.4)",
          250: "rgba(244, 231, 83, 0.5)",
          260: "rgba(244, 231, 83, 0.6)",
          270: "rgba(244, 231, 83, 0.7)",
          280: "rgba(244, 231, 83, 0.8)",
          290: "rgba(244, 231, 83, 0.9)",

          300: "rgba(245, 175, 55, 1)",
          310: "rgba(245, 175, 55, 0.1)",
          320: "rgba(245, 175, 55, 0.2)",
          330: "rgba(245, 175, 55, 0.3)",
          340: "rgba(245, 175, 55, 0.4)",
          350: "rgba(245, 175, 55, 0.5)",
          360: "rgba(245, 175, 55, 0.6)",
          370: "rgba(245, 175, 55, 0.7)",
          380: "rgba(245, 175, 55, 0.8)",
          390: "rgba(245, 175, 55, 0.9)",

          400: "rgba(241, 109, 61, 1)",
          410: "rgba(241, 109, 61, 0.1)",
          420: "rgba(241, 109, 61, 0.2)",
          430: "rgba(241, 109, 61, 0.3)",
          440: "rgba(241, 109, 61, 0.4)",
          450: "rgba(241, 109, 61, 0.5)",
          460: "rgba(241, 109, 61, 0.6)",
          470: "rgba(241, 109, 61, 0.7)",
          480: "rgba(241, 109, 61, 0.8)",
          490: "rgba(241, 109, 61, 0.9)",

          500: "rgba(189, 76, 76, 1)",
          510: "rgba(189, 76, 76, 0.1)",
          520: "rgba(189, 76, 76, 0.2)",
          530: "rgba(189, 76, 76, 0.3)",
          540: "rgba(189, 76, 76, 0.4)",
          550: "rgba(189, 76, 76, 0.5)",
          560: "rgba(189, 76, 76, 0.6)",
          570: "rgba(189, 76, 76, 0.7)",
          580: "rgba(189, 76, 76, 0.8)",
          590: "rgba(189, 76, 76, 0.9)",

          600: "rgba(113, 73, 100, 1)",
          610: "rgba(113, 73, 100, 0.1)",
          620: "rgba(113, 73, 100, 0.2)",
          630: "rgba(113, 73, 100, 0.3)",
          640: "rgba(113, 73, 100, 0.4)",
          650: "rgba(113, 73, 100, 0.5)",
          660: "rgba(113, 73, 100, 0.6)",
          670: "rgba(113, 73, 100, 0.7)",
          680: "rgba(113, 73, 100, 0.8)",
          690: "rgba(113, 73, 100, 0.9)",

          700: "rgba(77, 33, 62, 1)",
          710: "rgba(77, 33, 62, 0.1)",
          720: "rgba(77, 33, 62, 0.2)",
          730: "rgba(77, 33, 62, 0.3)",
          740: "rgba(77, 33, 62, 0.4)",
          750: "rgba(77, 33, 62, 0.5)",
          760: "rgba(77, 33, 62, 0.6)",
          770: "rgba(77, 33, 62, 0.7)",
          780: "rgba(77, 33, 62, 0.8)",
          790: "rgba(77, 33, 62, 0.9)",

          800: "rgba(59, 21, 8, 1)",
          810: "rgba(59, 21, 8, 0.1)",
          820: "rgba(59, 21, 8, 0.2)",
          830: "rgba(59, 21, 8, 0.3)",
          840: "rgba(59, 21, 8, 0.4)",
          850: "rgba(59, 21, 8, 0.5)",
          860: "rgba(59, 21, 8, 0.6)",
          870: "rgba(59, 21, 8, 0.7)",
          880: "rgba(59, 21, 8, 0.8)",
          890: "rgba(59, 21, 8, 0.9)",

          900: "rgba(26, 11, 21, 1)",
          910: "rgba(26, 11, 21, 0.1)",
          920: "rgba(26, 11, 21, 0.2)",
          930: "rgba(26, 11, 21, 0.3)",
          940: "rgba(26, 11, 21, 0.4)",
          950: "rgba(26, 11, 21, 0.5)",
          960: "rgba(26, 11, 21, 0.6)",
          970: "rgba(26, 11, 21, 0.7)",
          980: "rgba(26, 11, 21, 0.8)",
          990: "rgba(26, 11, 21, 0.9)",
        }

export const buttonBg = col[500];
export const buttonText = col[800];
export const buttonPressBg = col[800];
export const buttonPressText = col[100];

const tintColorLight = col[500];
const tintColorDark = col[300];

export const Colors = {
  light: {
    text: col["100"],
    background: col[990],
    tint: tintColorLight,
    icon: col[500],
    tabIconDefault: col[100],
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: col[100],
    background: col[800],
    tint: tintColorLight,
    icon: col[200],
    tabIconDefault: col[300],
    tabIconSelected: tintColorLight,
  },
};
