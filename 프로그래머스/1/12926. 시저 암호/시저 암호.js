const solution = (s, n) => s.split('').map((string)=>{
        const code = string.charCodeAt()
        // n을 더한 값에서 시작값을 뺀 뒤 26으로 나누면 나머지의 범위인 0 - 25 사이의 값이 나온다.
        const handleCharCode = (start) => String.fromCharCode((code+n - start) % 26 + start)
        // 소문자면
        if(97 <= code && code <= 122){
            return handleCharCode(97)
        }
        // 대문자면
        if(65 <= code && code <= 90){
            return handleCharCode(65)
        }
        // 공백이면
        return ' '
    }).join('')
