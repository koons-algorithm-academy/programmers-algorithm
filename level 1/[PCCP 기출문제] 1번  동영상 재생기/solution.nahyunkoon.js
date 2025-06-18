function solution(video_len, pos, op_start, op_end, commands) {
    const video_len_s = +video_len.split(":")[0] * 60 + +video_len.split(":")[1];
    const pos_s = +pos.split(":")[0] * 60 + +pos.split(":")[1];
    const op_start_s = +op_start.split(":")[0] * 60 + +op_start.split(":")[1];
    const op_end_s = +op_end.split(":")[0] * 60 + +op_end.split(":")[1];
    let currentTime = pos_s;
    let min = '';
    let sec = '';
    
    for (let i = 0; i < commands.length; i++) {
        if (op_start_s <= currentTime && currentTime <= op_end_s) {
            currentTime = op_end_s;
        }
        
        if (commands[i] === 'next') {
            currentTime = currentTime + 10 > video_len_s ? video_len_s : currentTime + 10;
        } else if (commands[i] === 'prev') {
            currentTime = currentTime - 10 < 0 ? 0 : currentTime - 10;
        }
        
        if (op_start_s <= currentTime && currentTime <= op_end_s) {
            currentTime = op_end_s;
        }
    }
    
    min = Math.floor(currentTime / 60) < 10 ? `0${Math.floor(currentTime / 60)}` : Math.floor(currentTime / 60);
    sec = currentTime % 60 < 10 ? `0${currentTime % 60}` : currentTime % 60;
    
    return `${min}:${sec}`;
}

/**
 * 문제 풀이
 * 1. 모든 시간을 초 단위로 변환
 * 2. commands 배열을 순회하며 현재 시간을 업데이트
 *    - 명령어 체크전, 현재 시간이 op_start_s 와 op_end_s 사이에 있으면 op_end_s 로 업데이트
 *    - next 명령어 실행 시, 현재 시간 + 10초가 video_len_s 보다 크면 video_len_s 로 업데이트, 아니면 현재 시간 + 10초
 *    - prev 명령어 실행 시, 현재 시간 - 10초가 0보다 작으면 0으로 업데이트, 아니면 현재 시간 - 10초
 *    - 명령어 체크 후, 현재 시간이 op_start_s 와 op_end_s 사이에 있으면 op_end_s 로 업데이트
 * 3. 최종 시간을 분과 초로 변환하여 반환
 */