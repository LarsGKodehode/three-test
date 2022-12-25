type RGBA = [
  number,
  number,
  number,
  number,
]

type RGB = [
  number,
  number,
  number,
]

type COLOR = RGB | RGBA
type ColorSpec = 'rgb' | 'rgba'

/**
 * Returns a color value
 */
function getColor(colorSpecification: ColorSpec): COLOR {
  switch (colorSpecification) {
    case 'rgb':
      return [
        200,
        2,
        3,
      ] as RGB
      break;
    case 'rgba':
      return [
        200,
        2,
        3,
        1,
      ] as RGBA
  }
  
}

export default getColor;