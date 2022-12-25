type RGBA = [number, number, number, number];

type RGB = [number, number, number];

type COLOR = RGB | RGBA;

/**
 * Returns a color value
 */
function getColor(): COLOR {
  return [200, 2, 3];
}

export default getColor;
