/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-28 20:11:46
 * @modify date 2019-05-28 20:11:46
 * @desc [description]
 */

import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const textFontSize = size => {
    return (parseInt(size) * width * (1.8 - 0.002 * width)) / 360;
};
