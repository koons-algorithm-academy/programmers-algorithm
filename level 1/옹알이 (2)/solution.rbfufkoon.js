function solution(babbling) {
  const word = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let now = babbling[i];
    let pass = false;

    for (let j = 0; j < word.length; j++) {
      const patten = new RegExp(`(${word[j]})\\1`);
      if (patten.test(now)) {
        pass = true;
        break;
      }
    }

    if (pass) {
      continue;
    }

    for (let j = 0; j < word.length; j++) {
      const del = new RegExp(word[j], "g");
      now = now.replace(del, "");
    }

    if (now === "") {
      count++;
    }
  }

  return count;
}
