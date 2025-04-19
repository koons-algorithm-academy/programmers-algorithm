function solution(X, Y) {
    let result = [];
    let xArr = Array.from(X);
    let yArr = Array.from(Y);
    const yObj = yArr.reduce((acc, val, index) => {
        if (acc[val]) {
            acc[val] = ++acc[val];
        } else {
          acc[val] = 1;   
        }
  return acc;
}, {});
        
    for (let i=0; i<xArr.length; i++) {
        if (yObj[xArr[i]] > 0) {
            result.push(+xArr[i])
            yObj[xArr[i]] = --yObj[xArr[i]];
        }
    }
    
    if (result.length === 0) {
        return '-1';
    }
    
    if (+result.join('') === 0) {
        return '0';
    }
    
    return result.sort((a,b) => b-a).join('');
}