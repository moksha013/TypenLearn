import words from "../data/words";

function generateParagraph(totalWords = 50) {
  return Array.from({ length: totalWords }, () => {
    return words[Math.floor(Math.random() * words.length)];
  }).join(" ");
}

export default generateParagraph;