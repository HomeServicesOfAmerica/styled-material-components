// @flow
// This is a helper that receives a color in any format
// and calculates an appropriate "light" version of that color
// This is useful for cases where we can't achieve a lighter
// color using opacity.
// The goal is to create an opaque color value that closely matches
// an rgba color value with < 1 opacity over a white background.

import Color from "color";

export const deriveLightColor = (
  color: string,
  opacity: number = 0.5
): string => {
  // calculate based on white background
  const BG_COLOR = Color("#fff");
  const baseColor = Color(color).alpha(opacity);
  const lightColor = baseColor.color.reduce((acc, ele, i) => {
    const newValue =
      ele * baseColor.valpha + BG_COLOR.color[i] * (1 - baseColor.valpha);
    acc.push(newValue);
    return acc;
  }, []);
  return Color(lightColor).string();
};
