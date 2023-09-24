const colorNames = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Orange",
    "MidnightBlue",
    "Brown",
    "DarkGoldenRod",
    "Maroon",
    "Olive",
];
export function getRandomColor() {
    return colorNames[Math.floor(Math.random() * colorNames.length)];
}

export function shortName(str) {
    const words = str.split(" ");
    if (words.length === 1) {
      return words[0][0]+words[0][1];
    } else if (words.length >= 2) {
      return words[0][0] + words[1][0];
    } else {
      return "";
    }
  }