const formatIntoMinutes = (time) => {
    const [hour, minute] = time.split(":");
    return Number(hour) * 60 + Number(minute)
}

const getTimeDiff = (start, end) => formatIntoMinutes(end) - formatIntoMinutes(start)

const replaceHash = (s) => s.replace(/(C|D|F|G|A|B)#/g, (_, a) => a.toLowerCase());

const makeMusicMap = (musics) => {
    const musicMap = new Map();
    
    for([start, end, title, score] of musics){
        const playTime = getTimeDiff(start, end)
        const removeHashScore = replaceHash(score)
        const repeat = removeHashScore.repeat(Math.ceil(playTime / removeHashScore.length));
        const playSound = repeat.slice(0, playTime)
        musicMap.set(title, playSound)
    }
    
    return musicMap;
}

function solution(m, musicinfos) {
    const musics = musicinfos.map((music) => music.split(","))
    m = replaceHash(m)
    const musicMap = makeMusicMap(musics)
    const musicArr = [...musicMap]
    let answer = "(None)";
    
    const result = musicArr.filter(([title, score]) => score.indexOf(m) >= 0)
    result.sort(([title_a, score_a], [title_b, score_b]) => score_b.length - score_a.length)
    
    return result.length ? result[0][0] : "(None)";
}