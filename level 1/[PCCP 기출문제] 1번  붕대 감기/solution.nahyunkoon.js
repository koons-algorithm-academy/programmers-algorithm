function solution(bandage, health, attacks) {
    let answer = health;
    const [t, x, y] = bandage;
    let successTime = 0;
    const lastDamageTime = attacks[attacks.length - 1][0];
    const attacksObj = attacks.reduce((acc, val, idx) => {
        const [time, damage] = val;
        acc[time] = damage;
        
        return acc;
    }, {});
    
    for (let i = 1; i <= lastDamageTime; i++) {
        if (attacksObj.hasOwnProperty(i)) {
            answer = answer - attacksObj[i] <= 0 ? -1 : answer - attacksObj[i];
            successTime = 0;
            
            if (answer === -1) {
                break;
            }
        } else {
            successTime++;
            
            if (t === successTime) {
                successTime = 0;
                answer += x + y; 
            } else {
                answer += x;
            }
            
            if (health < answer) {
                answer = health;
            }
        }
    }
    
    return answer;
}

/**
 * 문제 풀이
 * 1. attacks 2차원 배열을 객체로 변환
 * 2. 1초부터 마지막 공격 시간까지 순회
 *    1) 공격 시간이 있는 경우, 현재 체력에서 attacksObj[i]만큼 체력 감소하고 연속 성공 시간 초기화. 이 때, 체력이 0 이하가 되면 -1 반환
 *    2) 공격 시간이 없는 경우, 연속 성공 시간을 증가 시킴. 
 *       - 만약에 연속 성공 시간이 t와 같다면, 연속 성공 시간을 초기화 하고 현재 체력에 추가 회복량을 더해줌. (연속 성공 시간을 초기화 해주지 않으면, 테스트 14, 16, 18, 20번 실패함.)
 *       - 만약에 연속 성공 시간이 t와 다르다면, 현재 체력에 x만큼 회복량을 더해줌.
 *       - 현재 체력이 최대 체력을 초과하면, 현재 체력을 최대 체력으로 설정.
 * 3. 반환값 반환
 */