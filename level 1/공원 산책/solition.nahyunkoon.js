function solution(park, routes) {
    let xLocation = {};
    let curLocation = [];
    let newLocation = [];
    const maxWidth = park[0].length - 1;
    const maxHeight = park.length - 1;
    let isBarrier = false;

    // S위치 = 현재 위치
    for (let i = 0; i < park.length; i++) {
        const sIndex = park[i].indexOf('S');
        
        if (0 <= sIndex) {
            curLocation = [i, sIndex];
            break;
        }
    }
    
    // X 위치
    for (let i = 0; i < park.length; i++) {
        xLocation[i] = {};
        
        for (let j = 0; j < park[i].length; j++) {
            const char = park[i][j];

            if (char === 'X') {
                xLocation[i] = {...xLocation[i], [j] : true};
            }
        }
    }
    
    for (let i = 0; i < routes.length; i++) {
        const direction = routes[i][0];
        const moves = Number(routes[i][2]);
                        
        if (direction === 'E') {
            newLocation = [curLocation[0], curLocation[1] + moves];
            
            for (let i = curLocation[1] + 1; i <= Math.min(curLocation[1] + moves, maxWidth); i++) {
                if (xLocation[newLocation[0]][i]) {
                    isBarrier = true;
                    break;
                }
            }
        } else if (direction === 'W') {
            newLocation = [curLocation[0], (curLocation[1] - moves)];
            
            for (let i = Math.max(0, curLocation[1] - moves); i <= Math.max(0, curLocation[1] - 1); i++) {
                if (xLocation[newLocation[0]][i]) {
                    isBarrier = true;
                    break;
                }
            }
        } else if (direction === 'S') {
            newLocation = [curLocation[0] + moves, curLocation[1]];
            
            
            for (let i = curLocation[0] + 1; i <= Math.min(curLocation[0] + moves, maxHeight); i++) {
                if (xLocation[i][newLocation[1]]) {
                    isBarrier = true;
                    break;
                }
            }
        } else if (direction === 'N') {
            newLocation = [curLocation[0] - moves, curLocation[1]];
            
            for (let i = Math.max(0, curLocation[0] - moves); i <= Math.max(0, curLocation[0] - 1); i++) {
                if (xLocation[i][newLocation[1]]) {
                    isBarrier = true;
                    break;
                }
            }
        }
        
        if (isBarrier) {
            isBarrier = false;
            continue;
        }
                
        if ((0 <= newLocation[0] &&  newLocation[0] <= maxHeight) && (0 <= newLocation[1] && newLocation[1] <= maxWidth)) {
            curLocation = newLocation;
        }
    }
    
        
    return curLocation;
}

/**
 * 문제 풀이
 * 1. 현재 위치를 찾음.
 * 2. 장애물 위치를 찾음.
 * 3. 현재 위치에서 주어진 방향으로 이동하면서 장애물이 있는지 확인함.
 * 4. 장애물이 없으면 현재 위치를 업데이트함.
 * 5. 장애물이 있으면 이동을 취소함.
 * 5. 모든 이동이 끝나면 현재 위치를 반환함.
 */