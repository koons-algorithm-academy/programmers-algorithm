function solution(number) {
	var answer = 0;
	for (let i = 0; i < number.length; i++) {
		for (let j = i + 1; j < number.length; j++) {
			for (let m = j + 1; m < number.length; m++) {
				if (number[i] + number[j] + number[m] === 0) {
					answer++;
				}
			}
		}
	}
	return answer;
}
