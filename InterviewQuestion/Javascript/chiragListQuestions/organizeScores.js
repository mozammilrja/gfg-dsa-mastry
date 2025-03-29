function organizeScores(scores) {
  let highestScore = Math.max(...scores);
  let remainingScores = scores.filter((score) => score !== highestScore);

  return { highestScore, remainingScores };
}

const scores = [95, 88, 76, 64, 89, 92];

console.log(organizeScores(scores));
