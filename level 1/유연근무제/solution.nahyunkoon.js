// limitTime 계산식 개선 코드
function solution2(schedules, timelogs, startday) {
    let answer = 0;
    let day = startday;
    const workDays = Array(7).fill('').reduce((acc, val, idx) => {
        acc[idx+1] = day;
        day++;
        
        if (day === 8) {
            day = 1;
        }
        
        return acc;
    }, {});
    
    
    for (let i = 0; i < schedules.length; i++) {
        let limitTime = schedules[i] + 10;
        const limitTimeHours = Math.floor(limitTime / 100);
        const limitTimeMinutes = limitTime % 100;

        if (60 <= limitTimeMinutes) { 
            limitTime = Number(`${limitTimeHours + 1}0${limitTimeMinutes - 60}`);
        }
        
        const lateDays = timelogs[i].filter((realTime, idx) => (limitTime < realTime) && (workDays[idx + 1] !== 6 && workDays[idx + 1] !== 7)).length;
                        
        if (lateDays === 0) {
            answer++;
        }
    }    
        
    return answer;
}

/**
 * limitTime 계산식 개선 코드 설명
 * 1. 직원이 설정한 시간 중에 855가 있다면, 855 + 10은 865가 됨. 865는 905라는 시간으로 변환해준 후 계산을 해줘야 함.
 * 2. 따라서 먼저 setting[i] + 10한 값에서 시간과 분을 나누고, 문자열로 분이 60분 이상이면 시간을 1시간 증가시키고 분은 60분 빼줌.
 */

function solution1(schedules, timelogs, startday) {
    let answer = 0;
    let day = startday;
    const workDays = Array(7).fill('').reduce((acc, val, idx) => {
        acc[idx+1] = day;
        day++;
        
        if (day === 8) {
            day = 1;
        }
        
        return acc;
    }, {});
    
    
    for (let i = 0; i < schedules.length; i++) {
        let limitTime = schedules[i] + 10;
        
        if (50 <= `${schedules[i]}`.slice(-2)) {
            limitTime = Number(`${Number(`${limitTime}`.slice(0, `${schedules[i]}`.length - 2)) + 1}0${`${limitTime}`.slice(-1)}`);
        }
        
        const lateDays = timelogs[i].filter((realTime, idx) => (limitTime < realTime) && (workDays[idx + 1] !== 6 && workDays[idx + 1] !== 7)).length;
                        
        if (lateDays === 0) {
            answer++;
        }
    }    
        
    return answer;
}

/**
 * 문제 풀이
 * 1. startday 기준으로 timelogs의 주말 index를 찾아야하기 때문에, 객체로 각 배열에 인덱스에 대칭되는 요일을 저장
 * 2. schedules 배열 순회
 *    - 먼저 제한 시간을 계산함.
 *    - 제한 시간에서 분이 50분 이상이면 시간을 1시간 증가시키고, 1분 단위만 표현하고 10분 단위는 0으로 처리함.
 *    - filter 메서드를 통해 주말을 제외한 제한 시간보다 늦게 출근한 날짜를 찾음.
 *    - 늦은 날짜가 0개면, 평일에 늦지 않고 출근했다는 의미이미로 answer에  +1을 해줌.
 * 3. answer 반환
 */