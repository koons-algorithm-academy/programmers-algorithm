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

/**
 * 문제 풀이
 * 1. 왼손과 오른손의 위치를 각각 Rnum, Lnum 변수에 초기화
 * 2. 1, 4, 7, * 번호는 왼손으로 누르고, 3, 6, 9, # 번호는 오른손으로 누르는 것으로 이미 정해져 있으므로 이를 handOfNum 객체에 저장
 * 3. 그 외에 2, 5, 8, 0 번호는 왼손과 오른손 중 거리가 가까운 손으로 눌러야하기 때문에 거리 계산을 위해 각 번호의 위치를 locationOfKey 객체에 저장
 * 4. 눌러야 하는 각 번호를 순회하며 answer에 눌러야하는 손을 저장한다.
 *    - 2, 5, 8, 0 번호를 눌러야 하는 경우에는 '현재 위치하는 왼손 기준 눌러야하는 번호 거리'와 '현재 위치하는 오른손 기준 눌러야 하는 번호 거리'를 비교하여 더 가까운 손으로 누른다.
 *      - 만약, 거리가 같은 경우에는 오른손잡이인 경우에는 오른손으로, 왼손잡이인 경우에는 왼손으로 누른다.
 *    - 눌러야 하는 번호가 1, 4, 7, * 번호인 경우에는 왼손으로 누르고, 3, 6, 9, # 번호인 경우에는 오른손으로 누른다.
 * 5. 눌러야 하는 번호를 모두 순회한 후, answer를 반환한다.
 */