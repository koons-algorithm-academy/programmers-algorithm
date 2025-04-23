function solution(X, Y) {
    var answer = '-1';
    const set = new Set(Y.split(''))
    const pair = X.split('').filter((el) => {
        if (set.has(el)) {
            set.delete(el)
            return true
        }
        return false
    })
    const regex = new RegExp(`[^${pair.join('')}]`, 'g')
    X = X.replace(regex, '')
    Y = Y.replace(regex, '')
    let numbers = ''
    for (let i = 0; i < pair.length; i++) {
        const number = pair[i]
        const regex = new RegExp(`[^${number}]`, 'g')
        const xRegexLength = X.replace(regex, '').length
        const yRegexLength = Y.replace(regex, '').length
        numbers += number.repeat(Math.min(xRegexLength, yRegexLength))
    }
    if (pair.length) {
        const sortedNumbers = numbers.split('').sort((a, b) => b - a).join('')
        if (sortedNumbers[0] === '0') {
            answer = '0'
        } else {
            answer = sortedNumbers
        }
        
    }
    
    return answer;
}