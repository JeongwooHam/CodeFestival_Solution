function solution(keymap, targets) {
    const getMinIndex = (target) => {
        let minIndex = -1;
        
        for(let i = 0; i < keymap.length; i++){
            const newIndex = [...keymap[i]].findIndex((word) => word === target)
            if(newIndex < 0) continue;
            if(minIndex >= 0) minIndex = Math.min(minIndex, newIndex)
            else minIndex = newIndex
        }
        
        return minIndex < 0 ? minIndex : minIndex+1;
    }

    return targets.map((str) => {
        const indexArr = str.split("").map((word) => getMinIndex(word))
        if(indexArr.includes(-1)) return -1
        return indexArr.reduce((sum, num) => sum + num)
    })

}