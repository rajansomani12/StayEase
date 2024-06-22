import { Platform } from "react-native";
import { getHeightWidth } from "./utility";

const colors = {
   color_bg_black : '#363638',
   light_sky_blue : '#54d5f5',
   color_white : '#ffffff',
   color_black: '#000000',
   color_border: '#DDDDDD',
   color_gray_placeholder : '#818181',
   color_red : '#ff0000'
};

const fonts ={
    Black : Platform.OS == 'ios' ?  'INTER-BLACK' : 'black',
    Bold : Platform.OS == 'ios' ? 'INTER-BOLD' : 'bold',
    LIGHT : Platform.OS == 'ios' ? 'INTER-LIGHT' :'light',
    Medium : Platform.OS == 'ios' ? 'INTER-MEDIUM' : 'medium',
    Regular : Platform.OS == 'ios' ? 'INTER-REGULAR' : 'regular',
    Thin : Platform.OS == 'ios' ? 'INTER-THIN': 'thin',
  }

const fontsWeight = {
    weight_400 : '400',
    weight_500 : '500',
    weight_600 : '600',
    weight_700 : '700',
};

const opacity = {
  OP_00 : '0',
  OP_10 : '10',
  OP_15 : '15',
  OP_20 : '20',
  OP_30 : '30',
  OP_35 : '35',
  OP_40 : '40',
  OP_41 : '41',
  OP_50 : '50',
  OP_60 : '60',
  OP_70 : '70',
  OP_80 : '80',
  OP_90 : '90',

  PP_0_0 : 0.0,
  PP_0_1 : 0.1,
  PP_0_41 : 0.41,
  PP_0_5 : 0.5,
  PP_1_0 : 1.0,
  PP_1_0 : 1.0,

};

const fontSize = {
  px_20 : getHeightWidth(false,20),
  px_26 : getHeightWidth(false,26),
  px_12 : getHeightWidth(false,12),
  px_18 : getHeightWidth(false,18),
  px_14 : getHeightWidth(false,14),
  px_16 : getHeightWidth(false,16),
  px_22 : getHeightWidth(false,22),
  px_25 : getHeightWidth(false,25),
  px_30 : getHeightWidth(false,30),
  px_50 : getHeightWidth(false,50),
  px_10 : getHeightWidth(false,10),
  px_15 : getHeightWidth(false,15),
}

export {colors, fonts, fontsWeight, fontSize};