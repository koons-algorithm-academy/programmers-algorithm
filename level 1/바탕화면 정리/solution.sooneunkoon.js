function solution(wallpaper) {
    let minY = 50
    let maxY = -1
    let minX = 50
    let maxX = -1
    for (let i = 0; i < wallpaper.length; i++) {
        const cur = wallpaper[i]
        const fileIdx = cur.indexOf('#')
        const lastFileIdx = cur.lastIndexOf('#')
        if (fileIdx >= 0) {
            minY = Math.min(i, minY)
            maxY = Math.max(i, maxY)
            minX = Math.min(fileIdx, minX)
            maxX = Math.max(lastFileIdx, maxX)
        }
    }
    return [minY, minX, maxY + 1, maxX + 1];
}