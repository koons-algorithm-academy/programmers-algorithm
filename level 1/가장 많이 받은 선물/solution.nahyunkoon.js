function solution(friends, gifts) {
    let answer = 0;
    let totalArr =  [];
    let friendsData = friends.reduce((acc, val) => {
        acc[val] = {};
        
        return acc;
    }, {});
    let giftsData = friends.reduce((acc, val) => {
        acc[val] = {giver: 0, receiver: 0, point: 0, total: 0};
        
        return acc;
    }, {});
    
    for (let i = 0; i < gifts.length; i++) {
        const [giver, receiver] = gifts[i].split(' ');
                
        if (friendsData[giver][receiver]) {
            ++friendsData[giver][receiver];
            ++giftsData[giver]["giver"]; 
            ++giftsData[receiver]["receiver"];
            ++giftsData[giver].point;
            --giftsData[receiver].point;
        } else {
            friendsData[giver][receiver] = 1;
            ++giftsData[giver]["giver"]; 
            ++giftsData[receiver]["receiver"];
            ++giftsData[giver].point;
            --giftsData[receiver].point;
        }
    }
    
    for (const giver in friendsData) {
        for (const receiver in friendsData) {
            if (giver === receiver) {
                continue;
            }
            
            const giverGiftCount = friendsData[giver][receiver] || 0;
            const receiverGiftCount = friendsData[receiver].hasOwnProperty(giver) ? friendsData[receiver][giver] : 0;
            
            if (giverGiftCount > receiverGiftCount) {
                ++giftsData[giver].total;
            } else if ((giverGiftCount === 0 && receiverGiftCount === 0) || giverGiftCount === receiverGiftCount) {
                if (giftsData[giver].point > giftsData[receiver].point) {
                    ++giftsData[giver].total;
                }
            }
        }
    }

    for (const name in giftsData) {
        totalArr.push(giftsData[name].total);
    }
    
    answer = Math.max(...totalArr);
            
    return answer;
}