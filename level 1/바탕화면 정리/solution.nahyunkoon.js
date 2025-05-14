function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [null, null, null, null];
    
    for (let i = 0; i < wallpaper.length; i++) {
        let [sx, sy] = [i, wallpaper[i].indexOf('#')]; // start 지점 좌표
        let [ex, ey] = [i + 1, wallpaper[i].lastIndexOf('#') + 1]; // end 지점 좌표
        
        if (sy === -1) {
            continue;
        }
        
        // lux에 아무런 값도 저장되어 있지 않고, sy에 값이 있다면 lux와 luy에 값 저장
        if (lux === null && sy >= 0) {
            lux = sx;
            luy = sy;
        }        
        
        // rdx에 아무런 값도 저장되어 있지 않고, ey에 값이 있다면, rdx와 rdy에 값 저장
        if (rdx === null && ey >= 1) {
            rdx = ex;
            rdy = ey;
        }
        
        // start지점 y좌표 값이 기존 luy 값보다 작다면, luy값에 sy 저장
        if (sy < luy) {
            luy = sy;
        }
        
        // end지점 y좌표 값이 기존 rdy 값보다 작다면, rdy값에 ey 저장
        if (ey < rdy) {
            rdx = ex;
        }
        
        // rdx의 값이 end지점 x값보다 작거나, rdy 값이 ey 값보다 작다면 rdx에 ex를, rdy에 ey 저장
        if (rdx < ex || rdy < ey) {
            rdx = ex;
            rdy = ey;
        }
    }
    
    return [lux, luy, rdx, rdy];
}

/**
 * 개선해야할 점
 * - 문제 풀이는 성공했지만, 잘 작성한 코드는 아니라고 생각함. 
 * - 코드를 설계할 때, 실제로 파일을 옮기는 것을 상상하며 코드를 작성해버림.
 * - 실제로 이런 코드를 작성한다면 유지보수 하기가 힘들 것이라고 생각함. 일단 주석이 없으면 바로 명확하게 이해하기가 힘든 코드임.
 * - 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 찾는 것이 문제의 핵심이기 때문에, 좌표의 최소값과 최대값을 찾는 것이 더 좋은 코드라고 생각함.
 */