function solution(X, Y) {
    let result = '';

    for (const a of X) {
        if (Y.includes(a)) {
            result += a;
            Y = Y.replace(a, '');
        }
    }

    if (!result) return '-1';
    
    if (/^0+$/.test(result)) return '0';
    
    if (result.length) {
        result = [...result].sort((a, b) => b - a).join('');
    }
    return result
}