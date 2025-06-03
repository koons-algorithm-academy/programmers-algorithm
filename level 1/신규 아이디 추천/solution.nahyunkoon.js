function solution(new_id) {
    // step 1
    let answer = new_id.toLowerCase();
    
    // step 2
    const step2Regex = /[^0-9a-z-_.]/g;
    answer = answer.replaceAll(step2Regex, '');
    
    // step 3
    const step3Regex = /\.{2,}/g;
    answer = answer.replaceAll(step3Regex, '.');
    
    // step 4
    const startDotRegex = /^\./g;
    const endDotRegex = /\.$/g;
    answer = answer.replaceAll(startDotRegex, '');
    answer = answer.replaceAll(endDotRegex, '');
    
    // step 5
    if (answer.length === 0) {
        answer = 'a';
    } 
    
    // step 6
    if (answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replaceAll(endDotRegex, '');
    } 
    
    // step 7
    if (answer.length <= 2) {
        answer = `${answer}${Array(3 - answer.length).fill(answer.slice(-1)).join('')}`;
    }
                               
    return answer;
}