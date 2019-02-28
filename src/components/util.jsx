export const POKECOLOR = {
  'bug': 'LawnGreen',
  'dark': 'DimGrey',
  'poison': 'DarkViolet',
  'electric': 'Gold',
  'dragon': 'DarkSlateBlue',
  'fairy': 'violet',
  'fighting': 'Crimson',
  'fire': 'OrangeRed',
  'flying': 'SteelBlue',
  'ghost': 'indigo',
  'grass': 'DarkGreen',
  'ground': 'DarkGoldenrod',
  'ice': 'Cyan',
  'normal': 'Goldenrod',
  'psychic': 'DeepPink',
  'rock': 'Peru',
  'steel': 'Silver',
  'water': 'RoyalBlue'
}

export const capitalize = string => {
  let new_str = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === '-') {
      new_str += string[i].toUpperCase()
    } else {
      new_str += string[i]
    }
  }
  return new_str
}
