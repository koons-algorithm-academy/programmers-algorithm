function solution(today, terms, privacies) {
    today = today.replace(/[.]/g, '-')
    var answer = [];
    const termsObj = {}
    terms.forEach(el => {
        const [type, month] = el.split(' ')
        termsObj[type] = +month
    })
    privacies.forEach((el, idx) => {
        const [dateString, termsType] = el.split(' ')
        const date = new Date(dateString.replace(/[.]/g, '-'))
        date.setMonth(date.getMonth() + termsObj[termsType])
        const [limitDateString] = date.toISOString().split('T')

        if (limitDateString <= today) {
            answer.push(idx + 1)
        }
    })
    return answer;
}