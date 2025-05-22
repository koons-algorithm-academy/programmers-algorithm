function solution(s, skip, index) {
    var answer = '';
    const regex = new RegExp(`[${skip}]`, 'g')
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.replace(regex, '')
    s.split('').forEach((str) => {
        const idx = alpha.indexOf(str)
        const newIdx = (idx + index) % alpha.length
        answer += alpha[newIdx]
    })
    return answer;
}