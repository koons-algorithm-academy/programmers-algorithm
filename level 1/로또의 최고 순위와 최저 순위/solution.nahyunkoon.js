function solution(lottos, win_nums) {
    const rank = { 6 : 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
    const zeroCount = lottos.filter((item) => item === 0).length;
    let matchCount = 0;
    let maxRank = 0;
    let minRank = 0;
    
    
    for (let i = 0; i < lottos.length; i++) {
        if (win_nums.includes(lottos[i])) {
            matchCount++;
        }
    };
        
    maxRank = rank[matchCount + zeroCount];
    minRank = rank[matchCount];
    
    return [maxRank, minRank];
}

/**
 * 문제 풀이
 * 1. rank 객체를 생성하여 key는 점수를, value는 순위를 저장
 * 2. lottos 배열에서 0의 개수와 일치하는 로또 번호수를 찾음.
 * 3. 일치하는 로또 번호 수는 최저 순위이고, 0의 개수 + 일차하는 로또 번호수는 최고 순위
 * 4. 최고 순위와 최저 순위를 배열에 담아 반환
*/