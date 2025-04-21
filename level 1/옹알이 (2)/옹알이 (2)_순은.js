function solution(babbling) {
    var answer = 0;
    babbling.forEach((el) => {
        if (match(el)) {
            answer++;
        }
    });
    return answer;
}

const match = (
    babbling,
    speak = ['aya', 'ye', 'woo', 'ma'],
    pastBabbling = ''
) => {
    if (babbling.length === 0) {
        return true;
    }
    for (let i = 0; i < speak.length; i++) {
        const cur = speak[i];
        if (babbling.slice(0, cur.length) === cur && cur !== pastBabbling) {
            return match(babbling.slice(cur.length), speak, cur);
        }
    }
    return babbling.length === 0;
};