function solution(id_list, report, k) {
    let answer = [];
    let reportResult = id_list.reduce((acc, val) => {
        acc[val] = {total: 0};
        return acc;
    }, {});;
    let mailUserResult = id_list.reduce((acc, val) => {
        acc[val] = 0;
        return acc;
    }, {});
    
    for (let i = 0; i < report.length; i++) {
        const [reporterId, suspendedUserId] = report[i].split(' ');
        
        if (reportResult[suspendedUserId]?.hasOwnProperty(reporterId)) {
            continue;
        } else {
            reportResult[suspendedUserId][reporterId] = true;   
            ++reportResult[suspendedUserId].total;
        }
    };
        
    for (const mainItem in reportResult) {
        if (reportResult[mainItem]?.total >= k) {
            for (const detailItem in reportResult[mainItem]) {
                if (detailItem === 'total') {
                    continue;
                }
                
                ++mailUserResult[detailItem]
            }
        }
    }
    
    for (const item in mailUserResult) {
        answer.push(mailUserResult[item]);
    }
        
    return answer;
}