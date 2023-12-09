# [level 2] 피보나치 수 - 12945 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12945) 

### ⚠️ 주의 사항

> 처음 문제 풀이 시 아래의 예외 상황을 예측하지 못해 시간 초과 오류가 발생하였다.

n이 매우 큰 경우 n번째 피보나치 수는 언어가 표현할 수 있는 자료형의 범위를 넘어가 시간 초과 에러가 발생한다. <br/>
모든 단계에서 % 연산을 사용하여, 모든 연산에서 오버플로우가 일어나지 않게 만들어 주어야 한다.

### 성능 요약

메모리: 38.8 MB, 시간: 4.38 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2023년 12월 6일 17:11:59

### 문제 설명

<p>피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다. </p>

<p>예를들어 </p>

<ul>
<li>F(2) = F(0) + F(1) = 0 + 1 = 1</li>
<li>F(3) = F(1) + F(2) = 1 + 1 = 2</li>
<li>F(4) = F(2) + F(3) = 1 + 2 = 3</li>
<li>F(5) = F(3) + F(4) = 2 + 3 = 5</li>
</ul>

<p>와 같이 이어집니다.</p>

<p>2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.</p>

<h5>제한 사항</h5>

<ul>
<li>n은 2 이상 100,000 이하인 자연수입니다.</li>
</ul>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>3</td>
<td>2</td>
</tr>
<tr>
<td>5</td>
<td>5</td>
</tr>
</tbody>
      </table>
<h5>입출력 예 설명</h5>

<p>피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.</p>

<h5>문제가 잘 안풀린다면😢</h5>

<p>힌트가 필요한가요? [코딩테스트 연습 힌트 모음집]으로 오세요! → <a href="https://school.programmers.co.kr/learn/courses/14743?itm_content=lesson12945" target="_blank" rel="noopener">클릭</a></p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges
>
