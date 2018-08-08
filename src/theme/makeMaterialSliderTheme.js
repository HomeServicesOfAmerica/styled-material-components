import Color from 'color';
import { black, white } from './colors';

const DEFAULT_MAIN_COLOR = Color('#479c10');
const DEFAULT_MAIN_OPACITY = 1;
const DEFAULT_FOCUS_HALO_OPACITY = 0.12;

const DEFAULT_LIGHT_COLOR = black;
const DEFAULT_LIGHT_PAGE_COLOR = white;
const DEFAULT_LIGHT_TRACK_OPACITY = 0.26;
const DEFAULT_LIGHT_FOCUSED_TRACK_OPACITY = 0.38;

const DEFAULT_DARK_COLOR = white;
const DEFAULT_DARK_PAGE_COLOR = black;
const DEFAULT_DARK_TRACK_OPACITY = 0.3;
const DEFAULT_DARK_FOCUSED_TRACK_OPACITY = DEFAULT_DARK_TRACK_OPACITY;

export const makeMaterialSliderColorTheme = (overrides = {}, isLight = true) => {
  const mainColorOverride = overrides.mainColor;
  const mainColorAtZeroOverride = overrides.mainColorAtZero;
  const mainOpacityOverride = overrides.mainOpacity;
  const trackColorOverride = overrides.trackColor;
  const trackOpacityOverride = overrides.trackOpacity;
  const focusHaloColorOverride = overrides.focusHaloColor;
  const focusHaloOpacityOverride = overrides.focusHaloOpacity;
  const focusTrackOpacityOverride = overrides.focusTrackOpacity;
  const disabledColorOverride = overrides.disabledColor;
  const disabledOpacityOverride = overrides.disabledOpacity;
  const pageColorOverride = overrides.pageColor;

  const mainColor = mainColorOverride ? Color(mainColorOverride) : DEFAULT_MAIN_COLOR;
  const mainOpacity = mainOpacityOverride || DEFAULT_MAIN_OPACITY;

  let mainColorAtZero = isLight ? DEFAULT_LIGHT_COLOR : DEFAULT_DARK_COLOR;
  if (mainColorAtZeroOverride) mainColorAtZero = Color(mainColorAtZeroOverride);

  let trackColor = mainColorAtZero;
  if (trackColorOverride) trackColor = Color(trackColorOverride);

  let trackOpacity = isLight ? DEFAULT_LIGHT_TRACK_OPACITY : DEFAULT_DARK_TRACK_OPACITY;
  if (trackOpacityOverride) trackOpacity = trackOpacityOverride;

  let focusHaloColor = isLight ? mainColor : mainColor;
  if (focusHaloColorOverride) focusHaloColor = Color(focusHaloColorOverride);

  const focusHaloOpacity = focusHaloOpacityOverride || DEFAULT_FOCUS_HALO_OPACITY;

  let focusTrackOpacity = isLight
    ? DEFAULT_LIGHT_FOCUSED_TRACK_OPACITY
    : DEFAULT_DARK_FOCUSED_TRACK_OPACITY;
  if (focusTrackOpacityOverride) focusTrackOpacity = focusTrackOpacityOverride;

  let disabledColor = isLight ? DEFAULT_LIGHT_COLOR : DEFAULT_DARK_COLOR;
  if (disabledColorOverride) disabledColor = Color(disabledColorOverride);

  let disabledOpacity = isLight ? DEFAULT_LIGHT_TRACK_OPACITY : DEFAULT_DARK_TRACK_OPACITY;
  if (disabledOpacityOverride) disabledOpacity = disabledOpacityOverride;

  let pageColor = isLight ? DEFAULT_LIGHT_PAGE_COLOR : DEFAULT_DARK_PAGE_COLOR;
  if (pageColorOverride) pageColor = Color(pageColorOverride);

  return {
    main: mainColor.alpha(mainOpacity).toString(),
    mainAtZero: mainColorAtZero.alpha(mainOpacity).toString(),
    track: trackColor.alpha(trackOpacity).toString(),
    focusHalo: focusHaloColor.alpha(focusHaloOpacity).toString(),
    focusTrack: trackColor.alpha(focusTrackOpacity).toString(),
    disabled: disabledColor.alpha(disabledOpacity).toString(),
    pageColor: pageColor.toString(),
  };
};

export const makeMaterialSliderTransitions = (overrides = {}) => {
  const main = overrides.main || '50ms';
  const slider = overrides.slider || '50ms';
  return {
    main,
    slider,
  };
};

export const makeMaterialSliderSizes = (overrides = {}) => {
  const thumb = overrides.thumb || 10;
  const thumbBorder = overrides.thumbBorder || 2;
  const thumbClicked = overrides.thumbClicked || 14;
  const thumbDisabled = overrides.thumbDisabled || 8;
  const thumbDisabledBorder = overrides.thumbDisabledBorder || 2;
  const focusHalo = overrides.focusHalo || 24;
  const trackHeight = overrides.trackHeight || 2;
  const clickableHeight = overrides.clickableHeight || 10;
  return {
    thumb,
    thumbBorder,
    thumbClicked,
    thumbDisabled,
    thumbDisabledBorder,
    focusHalo,
    trackHeight,
    clickableHeight,
  };
};

export const makeMaterialSliderTheme = (overrides = {}, isLight = true) => ({
  colors: makeMaterialSliderColorTheme(overrides.colors, isLight),
  transitions: makeMaterialSliderTransitions(overrides.transitions),
  sizes: makeMaterialSliderSizes(overrides.sizes),
});
