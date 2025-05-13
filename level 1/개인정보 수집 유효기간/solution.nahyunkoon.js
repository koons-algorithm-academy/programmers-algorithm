function solution(today, terms, privacies) {
    let answer = [];
    const todayDate = new Date(...today.split('.'));
    todayDate.setHours(todayDate.getHours() + 9);
    todayDate.setMonth(todayDate.getMonth() - 1);
    
    const termsCategory = terms.reduce((acc, val) => {
        const item = val.split(' ');
        
        acc[item[0]] = Number(item[1]);
        
        return acc;
    }, {});
    
    for (let i = 0; i < privacies.length; i++) {
        const privaciesItem = privacies[i].split(' ');
        const privaciesItemDate = privaciesItem[0].split('.');
        const privaciesItemTerms = privaciesItem[1];
        let endDate = new Date(privaciesItemDate[0], +privaciesItemDate[1] - 1, +privaciesItemDate[2]);
        
        endDate.setHours(endDate.getHours() + 9)
        endDate.setMonth(endDate.getMonth() + termsCategory[privaciesItemTerms]);
        endDate.setDate(endDate.getDate() - 1)

        if (endDate < todayDate) {
            answer.push(i + 1);
        }
    }

    return answer;
}

/**
 * 풀이 과정
 * 비고: 문제에서 다루는 모든 날짜는 한국 시간 기준으로 +9시간해서 변환함.
 * 
 * 1. terms를 순회하면서 약관 종류와 유효기간을 객체에 저장함.
 * 2. privacies를 순회한다.
 *    - 1) 개인정보 수집 일자와 약관 종류를 분리함.
 *    - 2) 개인정보 수집 일자를 Date 객체로 변환함.
 *    - 3) 유효기간을 '개인정보 수집 날짜 + 약관 유효기간 - 1'로 계산하여 만료일을 구함.
 *    - 4) 만료일이 오늘 날짜보다 이전이면 인덱스를 answer에 저장함.
 * 3. answer를 반환함.
 */