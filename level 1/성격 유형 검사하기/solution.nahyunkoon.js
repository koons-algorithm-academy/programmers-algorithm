function solution(survey, choices) {
    let answer = '';
    const type = {R: 0, T:0, C: 0, F: 0, J: 0, M: 0, A:0, N:0};
    const point = {1:3, 2:2, 3:1, 4:0, 5:1, 6:2, 7:3};
    
    for (let i=0; i < survey.length; i++) {
        const disagreeChar = survey[i][0];
        const agreeChar = survey[i][1];
        
        if (choices[i] < 4) {
            type[disagreeChar] = type[disagreeChar] + point[choices[i]];
        } else if (choices[i] > 4) {
            type[agreeChar] = type[agreeChar] + point[choices[i]];
        }
    }
    
    answer += type.R >= type.T ? 'R' : 'T';
    answer += type.C >= type.F ? 'C' : 'F';
    answer += type.J >= type.M ? 'J' : 'M';
    answer += type.A >= type.N ? 'A' : 'N';
    
    return answer;
}