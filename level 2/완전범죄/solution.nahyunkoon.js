function solution(info, n, m) {
    let answer = 0;
    let aEvidences = info.map(item => item[0]).sort((a, b) => a-b);
    let bEvidences = info.map(item => item[1]).sort((a, b) => a-b);
    let aMin = Math.min(...aEvidences);
    let bMin = Math.min(...bEvidences);
    let aMax = aEvidences.reduce((acc, val) => acc + val, 0);
    let bMax = bEvidences.reduce((acc, val) => acc + val, 0);
    let aAcc = 0;
    let bAcc = 0;
    
    if (n <= aMin && bMax < m) {
        return 0;
    }
    
    if (m <= bMin && aMax < n) {
        return aMax;
    }
    
    for (let i = 0; i < info.length; i++) {
        bAcc = info.length - 1 < i + 1 ? bAcc : info.slice(i + 1, info.length).reduce((acc, val) => acc + val[1], 0);
        aAcc += info[i][0];
                
        if (aAcc < n && bAcc < m) {
            break;
        } else if (n <= aAcc && m <= bAcc) {
            aAcc = -1;
            break;
        } else if (aAcc < n && m <= bAcc) {
            // 최솟값 코드 작성중
        }
    }
    
    return aAcc;
}