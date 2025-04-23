function solution(ingredient) {
  let answer = 0;
  const hambergerStack = []
  ingredient.forEach((el) => {
    hambergerStack.push(el)
    if (hambergerStack.length >= 4) {
        answer += hambergerCheck(hambergerStack)
    }
  });

  return answer;
}

const hambergerCheck = (hambergerStack, answer = 0) => {
    if (hambergerStack.slice(-4).join('') === '1231') {
        answer++
        hambergerStack.splice(-4)
        return hambergerCheck(hambergerStack, answer)
    }
    return answer
}

/**
 * 재료가 1231형태로 쌓일때 햄버거 하나를 만들 수 있음.
 * hambergerStack에 재료하나하나를 쌓고 stack에 4개이상의 재료가 쌓였을떄 온전한 햄버거를 하나 만들 수 있는지 확인함.
 * 햄버거를 만들 수 있는 경우 stack에 쌓인 재료중 햄버러를 만들기 위해서 쌓은 재료를 없애고 다음 재료를 쌓기전에
 * 다시 재료가 1231이 되어있을 수 있으므로 재귀를 선택했는데 그럴 수는 없기 때문에 굳이 재귀함수를 쓸 필요는 없었음.
 */