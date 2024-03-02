const makeGenreMap = (genres, plays) => {
    const genreMap = new Map();
    for(let i = 0; i < genres.length; i++){
        if(genreMap.has(genres[i])){
            const previous = genreMap.get(genres[i])
            genreMap.set(genres[i], previous + plays[i]) 
        }else{
            genreMap.set(genres[i], plays[i])
        }
    }
    return genreMap
}

const makeInfoMap = (genres, plays) => {
    const infoMap = new Map();
    for(let i = 0; i < genres.length; i++){
        infoMap.set(i, [genres[i], plays[i]])
    }
    return infoMap
}

const handleBestSongs = (songs) => {
    const bestSongs = new Map();
    for(let [idx, [genre, _]] of songs){
        if(bestSongs.get(genre)&&bestSongs.get(genre).length === 2) continue;
        if(bestSongs.get(genre)){
            const previous = bestSongs.get(genre)
            bestSongs.set(genre, [...previous, idx])
        }else{
            bestSongs.set(genre, [idx])
        }
    }
    return bestSongs
}

function solution(genres, plays) {
    const genreMap = makeGenreMap(genres, plays)
    const infoMap = [...makeInfoMap(genres, plays)]
    infoMap.sort(([idx_a, [genre_a, play_a]], [idx_b, [genre_b, play_b]]) => {
        // 고유 번호가 낮은 노래
        if(genre_a === genre_b && play_a === play_b) return idx_a - idx_b
        // 장르 내에서 많이 재생된 노래
        if(genre_a === genre_b) return play_b - play_a
        // 속한 노래가 많이 재생된 장르
        return genreMap.get(genre_b) - genreMap.get(genre_a)
    })
    return [...handleBestSongs(infoMap)].map(([genre, idx]) => idx).flatMap(songs => songs);
}