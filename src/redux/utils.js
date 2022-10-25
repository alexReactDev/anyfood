export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const converter = {
    "$": (value) => value + " $",
    "₽": (value) => Math.trunc(value * 72.65) + " ₽",
    "€": (value) => Math.trunc(value * 0.86) + " €",
    "£": (value) => Math.trunc(value * 0.74) + " £",
  }