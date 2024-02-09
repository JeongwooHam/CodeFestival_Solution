const makeMultiSet = (str) => {
    const multiset = [];
    for(let i = 0; i < str.length-1; i++){
        const word = str[i].toLowerCase()+str[i+1].toLowerCase()
        if(!word.match(/^[a-zA-Z]*$/g)) continue;
        multiset.push(word)
    }
    return multiset;
}

const getJaccard = (arr1, arr2) => {
    if(!arr1.length && !arr2.length) return 1
    // 다중집합의 교집합
    const copiedA = [...arr1]
    const copiedB = [...arr2]
    const union = []
    for(let i = 0; i < arr1.length; i++){
        if(copiedA.includes(arr1[i]) && copiedB.includes(arr1[i])){
            union.push(arr1[i])
            copiedA.splice(copiedA.findIndex((w => w === arr1[i])), 1)
            copiedB.splice(copiedB.findIndex((w => w === arr1[i])), 1)
        }
    }
    // 교집합
    const intersection = copiedA.length + copiedB.length + union.length
    return union.length / intersection
}

function solution(str1, str2) {
    const word1 = makeMultiSet(str1)
    const word2 = makeMultiSet(str2)
    const jaccard = getJaccard(word1, word2)
    return Math.floor(jaccard*65536);
}