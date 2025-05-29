function solution(keymap, targets) {
    var answer = [];
    const keymapObj = {}
    for (let i = 0; i < keymap.length; i++) {
        const key = keymap[i]
        for (let j = 0; j < key.length; j++) {
            const str = key[j]
            if (!keymapObj[str]) {
                keymapObj[str] = j + 1
            } else {
                keymapObj[str] = Math.min(keymapObj[str], j + 1)
            }
        }
    }
    
    for (let i = 0; i < targets.length; i++) {
        const target = targets[i]
        let cnt = 0
        for (let j = 0; j < target.length; j++) {
            const str = target[j]
            if (!keymapObj[str]) {
                answer.push(-1)
                break
            } else {
                cnt += keymapObj[str]
                if (target.length - 1 === j) {
                    answer.push(cnt)
                }
            }
        }
    }
    return answer;
}