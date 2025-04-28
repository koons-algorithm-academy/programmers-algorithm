function solution(ingredient) {
    const stack = [];
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            const len = stack.length;
            if (
                stack[len - 4] === 1 &&
                stack[len - 3] === 2 &&
                stack[len - 2] === 3 &&
                stack[len - 1] === 1
            ) {
                stack.splice(stack.length - 4, 4);
                count++;
            }
        }
    }

    return count;
}
