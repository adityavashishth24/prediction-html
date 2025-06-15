const questions = [
      "Did she insist on life insurance?",
      "Does she binge-watch crime shows?",
      "Has she taken control of all bank accounts?",
      "Is joint property only in her name?",
      "Does she isolate you from friends/family?",
      "Has she taken you on a surprise mountain/lake trip?",
      "Are blunt objects near the bed common?",
      "Did she gift you an expensive life insurance policy on your birthday?",
      "Has she asked about your will or nominee?",
      "Has she joked about killing you?"
];

const scores = [10, 9, 8, 9, 7, 10, 10, 8, 9, 10];

const container = document.getElementById("questions");
questions.forEach((q, i) => {
  const block = document.createElement("div");
  block.className = "question";
  block.innerHTML = `
    <label>${i + 1}. ${q}</label>
    <input type="radio" name="q${i}" value="y" required /> Yes
    <input type="radio" name="q${i}" value="n" /> No
  `;
  container.appendChild(block);
});

document.getElementById("hazardForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    const val = document.querySelector(`input[name="q${i}"]:checked`).value;
    if (val === "y") score += scores[i];
  }
  score += Math.floor(Math.random() * 5); 
  localStorage.setItem("hazardScore", score);
  window.location.href = "hazard1.html";
});



    