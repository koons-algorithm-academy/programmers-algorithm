function solution(X, Y) {
    xData = {'0':0, '1':0, '2':0, '3':0, '4':0,'5':0,'6':0,'7':0,'8':0,'9':0};
    yData = {'0':0, '1':0, '2':0, '3':0, '4':0,'5':0,'6':0,'7':0,'8':0,'9':0};
    
    for(let i = 0; i < 10; i++) {
        const regex = new RegExp(i, 'g');
        const match = X.match(regex)
        if(match) {
            xData[i] =match.length
        }
    }
    
    for(let i = 0; i < 10; i++) {
        const regex = new RegExp(i, 'g');
        const match = Y.match(regex)
        if(match) {
            yData[i] =match.length
        }
    }
    
    result = [];
    for(const a in xData) {
        const mini = Math.min(xData[a], yData[a])
        if(mini > 0) {
            result = result.concat(a.repeat(mini).split(""))   
        }
    }
    
    if(result.length ) {
        const sortResult = result.sort((a, b) => b - a).join("");
        return /^0+$/.test(sortResult) ? "0" : sortResult;
    } else {
        return '-1'
    }
}
