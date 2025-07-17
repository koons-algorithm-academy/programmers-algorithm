let answer = [];

function hanoi (count, from, to, temp) {
    if (count ===  0) return;
    
    hanoi(count - 1, from, temp, to);
    answer.push([from, to]);
    hanoi(count - 1, temp, to, from);
}

function solution(n) {
    hanoi(n, 1, 3, 2);
    
    return answer;
}

/** 문제풀이
 * - 재귀 함수를 사용하여 하노이의 탑 문제를 풀이
 * - 인프런 알고리즘 강의를 듣고 문제를 풀었음.
 * 1. 먼저 count - 1개의 원판을 보조 기둥(temp)으로 옮겨줌.
 * 2. 기저 조건인 count가 0이 되면 함수를 종료함.
 * 3. from 기둥에 있는 원판을 to 기둥으로 옮김. answer에 옮긴 원판의 순서를 담음.
 * 4. count - 1개의 원판을 보조 기둥에서 to 기둥으로 옮김.
 * 5. 재귀 함수 호출이 완전히 끝나고 나면 answer 반환
 */