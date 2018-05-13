// @flow
import { css } from "styled-components";

type RowMixinConfigType = {
  distribution?: "around" | "between",
  horizontal: "left" | "center" | "right",
  stretch?: boolean,
  vertical: "top" | "middle" | "bottom"
};

/**
 * computeDirection
 *
 * Styled Mixin for determining how to justify and align the row
 * @param {Object} props               Props provided by the user
 * @param {String} props.horizontal    horizontal positioning ('left'|'center'|'right')
 * @param {String} props.distribution  Item spacing ('around' | 'between')
 * @param {String} props.vertical      vertical positioning ('top'|'middle'|'bottom')
 * @param {Boolen} props.stretch       Stretch items to fit parent ?
 */
const computeDirection = ({
  horizontal,
  distribution,
  vertical,
  stretch
}: RowMixinConfigType): string => {
  let justifyContent = "flex-start";
  let alignItems = "flex-start";

  switch (horizontal) {
    case "center":
      justifyContent = "center";
      break;
    case "right":
      justifyContent = "flex-end";
      break;
    default:
      break;
  }

  switch (distribution) {
    case "around":
      justifyContent = "space-around";
      break;
    case "between":
      justifyContent = "space-between";
      break;
    default:
      break;
  }

  switch (vertical) {
    case "top":
      alignItems = "flex-start";
      break;
    case "bottom":
      alignItems = "flex-end";
      break;
    case "middle":
      alignItems = "center";
      break;
    default:
      break;
  }

  if (stretch) {
    alignItems = "stretch";
  }

  return css`
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `;
};

const defaultRow = {
  horizontal: "left",
  vertical: "top"
};

export const rowMixin = (
  configuration: RowMixinConfigType = defaultRow
): string => css`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  ${({ relative }) =>
    relative &&
    css`
      position: relative;
    `} ${computeDirection(configuration)};
`;
