function failSolution(ingredient) {
    let answer = 0;
    const hamburger = '1231';
    let ingredientStr = ingredient.join('');
    
    for (let i = 0; i < Math.round(ingredient.length / 4); i++) {
        const newIngredientStr = ingredientStr.replace(hamburger, '');
        
        if (newIngredientStr === ingredientStr) {
            break;
        }
        
        if (ingredientStr !== newIngredientStr) {
            ingredientStr = newIngredientStr;
            answer++;   
        }
    }
    
    return answer;
}

/**
 * 시간 초과로 인해 테스트 4, 5, 12 통과 못함
 * 
 * [ 처음 시도한 방법 ]
 * replace 메서드를 사용해서 햄버거 패턴인 1231이 존재하는 경우를 계속 찾는 방식을 사용함.
 * 그러나 replace 메서드는 문자열을 처음부터 끝까지 검색하면서 패턴을 찾기 때문에 비효율적임.
 * 이로 인해 시간 초과가 되어 테스트 케이스를 통과하지 못함.
 *  */ 

function solution(ingredient) {
    let answer = 0;
    const stack = [];
    
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        if (stack.length >= 4) {
            if (stack.slice(-4).join('') === '1231') {
                stack.splice(-4);
                answer++;
            }
        }
    }
    
    return answer;
}

/**
 * [ 두번째 시도한 방법 ]
 * 스택을 사용해서 햄버거 패턴을 찾는 방식을 사용함.
 * 처음에는 스택에 요소를 저장하고, 뒤에서부터 4개씩 자르며 햄버거 패턴을 찾는 방법을 생각하지 못함.
 * 순은님이 작성하신 코드와 질문하기 등을 참고하여 문제를 해결함.
 * 
 * 스택을 사용하면 문자열을 처음부터 끝까지 검색하지 않아도 되기 때문에 효율적임.
 * 햄버거 패턴을 찾아서 제거한 뒤에도 
 * 햄버거 패턴 이전에 쌓았던 재료들이 스택에 남아있기 때문에 다음 재료를 쌓아서 새로운 햄버거를 만들 수 있음.
 * 
 */