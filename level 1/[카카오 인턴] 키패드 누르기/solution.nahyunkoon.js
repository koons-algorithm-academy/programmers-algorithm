function solution(numbers, hand) {
    let answer = '';
    const handFlag = hand === 'right' ? 'R' : 'L';
    let Rnum = '#', Lnum = '*';
    const handOfNum = {1: 'L', 4:  'L', 7: 'L', '*': 'L', 3: 'R', 6: 'R', 9: 'R', '#': 'R'};
    const locationOfKey = {1: [0,0], 2: [0,1], 3: [0,2], 4: [1,0], 5: [1,1], 6:[1,2], 7: [2,0], 8: [2,1], 9: [2,2], '*': [3,0], 0: [3,1], '#': [3,2]};
    
    numbers.forEach((num) => {
        if ([2, 5, 8, 0].includes(num)) {
            const Rdistance = Math.abs(locationOfKey[num][0] - locationOfKey[Rnum][0]) + Math.abs(locationOfKey[num][1] - locationOfKey[Rnum][1]);
            const Ldistance = Math.abs(locationOfKey[num][0] - locationOfKey[Lnum][0]) + Math.abs(locationOfKey[num][1] - locationOfKey[Lnum][1]);
            
            if (Rdistance < Ldistance) {
                answer += 'R';
                Rnum = num;
            } else if (Rdistance > Ldistance) {
                answer += 'L';
                Lnum = num;
            } else if (Rdistance === Ldistance) {
                answer += handFlag;
                
                if (handFlag === 'R') {
                    Rnum = num;
                } else {
                    Lnum = num;
                }
            }
        } else {
            answer += handOfNum[num];
            
            if (handOfNum[num] === 'R') {
                Rnum = num;
            } else {
                Lnum = num;
            }
        }
    });
    
    return answer;
}