const regex = {
    str: /\D+/g,
    num: /\d+/g
}

const divideString = (str) => {
    const NUMBER = str.match(regex.num)[0];
    const index = str.indexOf(NUMBER);
    const head = str.substring(0, index);
    const tail = str.substring(index + NUMBER.length);
    return [head, NUMBER, tail];
}

function solution(files) {
    const answer = files.map((file) => divideString(file))
    answer.sort(([head_1, num_1], [head_2, num_2]) => {
        if(head_1.toLowerCase() === head_2.toLowerCase()) return parseInt(num_1) - parseInt(num_2)
        return head_1.toLowerCase() > head_2.toLowerCase() ? 1 : -1
    })
    return answer.map((w) => w.join(""));
}