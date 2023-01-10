import { Dimensions } from "react-native";
export const {width,height}=Dimensions.get('window');
export const SIZE=64
export const ITEM_WIDTH=width*.6
export const SPACING=16
export const ICON_Size=SIZE*0.6

const S=width*0.68
export const tutorial2Spec={
    ITEM_WIDTH:S,
    ITEM_HEIGHT:S*1.5,
    RADIUS:18,
    SPACING,
    FULL_SIZE:S+SPACING*2,
}
