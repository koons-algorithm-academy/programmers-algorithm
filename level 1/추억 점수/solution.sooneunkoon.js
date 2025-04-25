function solution(name, yearning, photo) {
    const pointMap = {}
    name.forEach((el, idx) => pointMap[el] = yearning[idx])
    return photo.map(el => {
        return el.reduce((a, b) => {
            return a + (pointMap[b] ?? 0)
        }, 0)
    });
}