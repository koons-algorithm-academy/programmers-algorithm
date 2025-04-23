function solution(bandage, health, attacks) {
    let curHealth = health
    let prevTime = 1
    const healTime = bandage[0]
    const healPerSecound = bandage[1]
    const successHeal = bandage[2]
    for (let i = 0; i < attacks.length; i++) {
        const damege = attacks[i][1]
        const time = attacks[i][0]
        const timeDiff = time - prevTime
        const bonusHeal = (Math.floor(timeDiff / healTime) * successHeal)
        const heal = timeDiff * healPerSecound + bonusHeal
        curHealth = curHealth + heal >= health ? health : curHealth + heal
        curHealth -= damege
        prevTime = time + 1
        
        if (curHealth <= 0) break
    }

    return curHealth <= 0 ? -1 : curHealth;
}