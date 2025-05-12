function solution(food) {
  const patten = [];

  for (let i = 1; i < food.length; i++) {
    patten.push({ [i]: Math.floor(food[i] / 2) });
  }

  let result = "";

  for (let j = 0; j < patten.length; j++) {
    const key = Object.keys(patten[j])[0];
    const value = patten[j][key];
    result += key.repeat(value);
  }

  result += "0";

  for (let k = patten.length - 1; k >= 0; k--) {
    const key = Object.keys(patten[k])[0];
    const value = patten[k][key];
    result += key.repeat(value);
  }

  return result;
}
