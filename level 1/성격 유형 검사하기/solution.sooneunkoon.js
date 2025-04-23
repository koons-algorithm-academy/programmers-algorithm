function solution(survey, choices) {
    var answer = '';
    const pointMap = {}
    const indicators = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
    survey.forEach((el, idx) => {
        const type1 = el[0]
        const type2 = el[1]
        const select = choices[idx]
        const selectType1 = select < 4 ? type1 : type2
        const point = select === 4 ? 0 : select < 4 ? 4 - select : select - 4
        if (point) {
            pointMap[selectType1] = (pointMap[selectType1] || point) + point
        }
        
    })
    indicators.forEach(el => {
        const type1Point = pointMap[el[0]] ?? 0
        const type2Point = pointMap[el[1]] ?? 0
        if (type1Point === type2Point) {
            answer += el[0]
        } else {
            answer += type1Point > type2Point ? el[0] : el[1]
        }
    })
    return answer;
}

/**
 * 95 / 100
 * 엣지 케이스를 아직 찾지 못함
 */