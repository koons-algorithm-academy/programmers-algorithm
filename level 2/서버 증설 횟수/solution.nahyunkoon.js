function solution(players, m, k) {
    let expansionServerCount = 0;
    let currentServerCount = 0;
    let operationTimes = [];
    
    for (let i = 0; i < players.length; i++) {
        let users = players[i];
        let [operationTime, expansionServer] = operationTimes[0] || [0, 0];
        
        
        if (operationTime < i) {
            currentServerCount -= expansionServer;
            operationTimes.shift();
        }
        
        if (Math.floor(users / m) - currentServerCount > 0) {
            operationTimes.push([i + k - 1, Math.floor(users / m) - currentServerCount]);
            expansionServerCount += Math.floor(users / m) - currentServerCount;
            currentServerCount = Math.floor(users / m);
        }
    }
    
    return expansionServerCount;
}

/**
 * 문제 풀이
 * 1. 증설된 서버가 운영 종료되는 시간과 증설된 서버 수를 저장하는 배열(operationTimes)을 생성
 * 2. players 배열 길이만큼 순회
 *    - 현재 시간(players[i])가 operationTimes 배열의 첫 번째 요소의 운영 종료 시간보다 크면 현재 운영중인 서버 수에서 증설한 서버 수를 뺌. 그리고 operationTimes 배열의 첫 번째 요소를 제거
 *    - 최대 증설 가능 서버 수(Math.floor(players[i] / m))에서 현재 운영중인 서버수를 뺐을 때 0보다 크면, 새로운 서버가 증설되었다는 의미이므로 operationTimes 배열에 증설된 서버의 운영 종료 시간과 증설된 서버 수를 추가
 *    - 그리고 증설 횟수를 증가시키고 현재 운영중인 서버 수를 최대 증설 가능 서버 수로 업데이트
 * 3. 증설 횟수 반환
 */