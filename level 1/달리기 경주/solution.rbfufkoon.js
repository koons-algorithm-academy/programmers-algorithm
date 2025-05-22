function solution(players, callings) {
  let playerIndex = new Map();

  for (let i = 0; i < players.length; i++) {
    playerIndex.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    let target = callings[i];
    let index = playerIndex.get(target);

    if (index > 0) {
      let prevPlayer = players[index - 1];

      [players[index - 1], players[index]] = [
        players[index],
        players[index - 1],
      ];

      playerIndex.set(target, index - 1);
      playerIndex.set(prevPlayer, index);
    }
  }

  return players;
}
