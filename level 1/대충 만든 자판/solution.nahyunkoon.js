function solution(keymap, targets) {
    let answer = [];
    let keymapData = {};
    
    keymap.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
            const alphabet = item[i];
            
            if (!keymapData.hasOwnProperty(alphabet)) {
                keymapData[alphabet] = i + 1;
                continue;
            }
            
            if (keymapData[alphabet] > i + 1) {
                keymapData[alphabet] = i + 1;
                continue;
            }   
        }
    });
        
    for (let i = 0; i < targets.length; i++) {
        const str = targets[i];
        let totalClick = 0;
        
        for (let j = 0; j < str.length; j++) {
            if (!keymapData.hasOwnProperty(str[j])) {
                answer.push(-1);
                break;
            }
            
            totalClick += keymapData[str[j]];
            
            if (str.length - 1 === j) {
                answer.push(totalClick);
            }
        }
    }
        
    return answer;
}

/**
 * 문제 풀이
 * 1. keymap 배열을 순회하며 각 알파벳 최소 키 위치를 객체에  저장
 * - 만약 i 번째 알파벳이 미리 저장한 동일한 알파벳 키 위치 값보다 더 크면 값을 갱신하지 않음.
 * - 혹은 i 번째 알파벳이 미리 저장한 동일한 알파벳 키 위치보다 더 작으면 값을 갱신함.
 * - 그 외에 같은 값이면 갱신하지 않음.
 * 2. targets 배열을 순회하며 각 알파벳 키 위치를 객체에서 찾아서 클릭 수를 더함.
 * - 만약 찾는 알파벳이 하나라도 없으면 바로 answer 배열에 -1을 저장하고 반복문 종료
 * - 만약 찾는 알파벳이 있으면 클릭 수를 더함.
 * - 만약 마지막 알파벳이면 총 클릭 수를 answer 배열에 저장함.
 * 3. 최종적으로 answer 배열을 반환함.
 */