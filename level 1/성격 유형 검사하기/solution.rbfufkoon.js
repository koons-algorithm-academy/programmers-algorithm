function solution(survey, choices) {
  const type = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    const [disagree, agree] = survey[i];
    const choice = choices[i];

    const score = Math.abs(choice - 4);
    if (choice < 4) scores[disagree] += score;
    else if (choice > 4) scores[agree] += score;
  }

  return type.map(([a, b]) => (scores[a] >= scores[b] ? a : b)).join("");
}
