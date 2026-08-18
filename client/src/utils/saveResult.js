export default function saveResult(result) {
  
  const previousResults =
    JSON.parse(localStorage.getItem("typingResults")) || [];

  
  previousResults.push(result);

  localStorage.setItem(
    "typingResults",
    JSON.stringify(previousResults)
  );
}