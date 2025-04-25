function solution(ingredient) {
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
 *  */ 

