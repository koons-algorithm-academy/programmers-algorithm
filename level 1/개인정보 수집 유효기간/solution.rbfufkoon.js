function solution(today, terms, privacies) {
  let typeList = {};
  for (let i = 0; i < terms.length; i++) {
    let [name, month] = terms[i].split(" ");
    typeList[name] = Number(month);
  }

  const date = (dateStr) => {
    const [year, month, day] = dateStr.split(".").map(Number);
    return year * 12 * 28 + month * 28 + day;
  };

  const todayInDays = date(today);
  const answer = [];

  for (let i = 0; i < privacies.length; i++) {
    const [dateStr, type] = privacies[i].split(" ");
    const dateResult = date(dateStr);
    const limitDate = dateResult + typeList[type] * 28;

    if (limitDate <= todayInDays) {
      answer.push(i + 1);
    }
  }

  return answer;
}
