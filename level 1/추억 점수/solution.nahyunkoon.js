function solution(name, yearning, photo) {
    let pointObj = {};
    
    for (let i = 0; i < name.length; i++) {
        pointObj[name[i]] = yearning[i];
    }
    
    const answer = photo.map((item) => 
        item.reduce((acc, cur) => pointObj[cur] ? acc + pointObj[cur] : acc
        , 0));
    
    return answer;
}