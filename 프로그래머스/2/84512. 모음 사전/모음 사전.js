/*
@ 풀이 방법 생각하기

- 'A, E, I, O, U' 만으로 구성된 단어들
- 몇 번째 단어일까? -> 생성할 수 있는 모든 단어들로 구성된 사전 배열을 만들고 word에 대해 findIndex
- bfs(재귀함수)를 사용하여 단어 사전을 생성한다. > 정렬하여 순서대로 놓이도록 만든다.
*/

const v = ['A', 'E', 'I', 'O', 'U']

function solution(word) {
   const d = [];
    
   const makeWord = (cnt, w) => {
       if(cnt > 5) return;
       
       // 전체 모음에 대해 한 번씩 진행
       d.push(w);
       
       //기준 단어에 각 모음을 하나씩 붙여 다시 넣기
       for(let i = 0; i < v.length; i++){
           makeWord(cnt+1, w + v[i])
       }  
    }
   
   makeWord(0, "")
    
   d.sort().shift()
    
   return d.indexOf(word)+1
}