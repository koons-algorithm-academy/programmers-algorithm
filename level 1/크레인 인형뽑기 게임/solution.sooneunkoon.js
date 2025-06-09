function solution(board, moves) {
    var answer = 0;
    let temp = [];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] !== 0) {
                if (board[j][moves[i] - 1] === temp[temp.length - 1]) {
                    answer+=2;
                    temp.pop();
                    board[j][moves[i] - 1] = 0;
                    break;
                } else if (board[j][moves[i] - 1] !== temp[temp.length - 1]) {
                    temp.push(board[j][moves[i] - 1]);
                    board[j][moves[i] - 1] = 0;
                    break;
                }
            }
        }
    }
    return answer;
}