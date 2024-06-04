import { borders } from "@/constants/BorderStyles";
import { col } from "@/constants/Colors";
import { boxShadows } from "@/constants/ShadowStyles";

export const animatedElementStyle = [
  borders.borderSm600,
  boxShadows.xl,
  {
    backgroundColor: col[500],
    borderRadius: 50,
  },
];
