function solution(s) {
    let answer = '';
    let englishNum = '';
    
    const numberConverter = {'zero' : 0, 'one': 1, 'two': 2, 'three' : 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
    
    for (let i = 0; i < s.length; i++) {
        if(+s[i] >= 0) {
            answer += s[i];
       } else {
           
            englishNum += s[i];
                      
           if (numberConverter[englishNum] >= 0) {
               answer += numberConverter[englishNum]
               englishNum = '';
           }
       }
    }
    
    return +answer;
}
