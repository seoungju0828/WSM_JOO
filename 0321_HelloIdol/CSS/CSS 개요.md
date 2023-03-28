# Style 적용 3가지 방법
1. <... style="..."> in HTML
1. ```<style>...</style>``` in HTML ```<head>```
1. __.css 파일 만들어서 link__

# 형식
```css
selector {
    attribute: value;       /* comment */
}
```

## selector
<pre>
*
#id
.class
TAG

selector1 selector2 : 앞의 요소 내의 모든 뒤에 요소를 선택  (div, p -  div요소 내의 p태그를 모두 선택한다)
selector1 > selector2 : 부모가 selector1인 모든 selector2요소를 선택한다 (div > p - 부모가 div인 모든 p요소를 선택한다)
selector1, selector2 : 모든 selector1요소와 모든 selector2요소 선택 (div, p - 모든 div요소와 p모든 요소 선택)
selector1 + selector2 : : 인접선택자 - 앞에 요소 바로 뒤에 있는 요소를 선택한다 (단 selector1은 선택하지 않는다 | 정훈쌤 : selector1의 첫째 자매 selector2 하나 선택)
selector1 ~ selector2 : 요소 뒤에 배치 된 모든 형제 요소 선택 (p ~ ul - p요소 뒤에 배치 된 모든 형제 ul 요소 선택)

selector:first-child() : select 요소 중 첫번째 요소를 선택하는 것(자식이 아니다)
selector:nth-child() : 형제 요소 중에서 특정 순서(n)에 있는 요소를 선택
selector:hover : 요소의 마우스가 올라가는 동안 selector를 선택

<... 속성="값">인 모든 태그 선택

~과 +의 차이 : +는 뒤에 나오는 딱 한개만 선택한다 그런데 ~은 뒤에 몇개가 나오던지 계속 선택한다

</pre>

# 우선순위
1. !important
2. #id
3. .class
4. TAG
5. /*
- 구체 > 포괄
- 같은 우선순위일 때는 나중에 쓴게 적용 (빨간색->검정색 : 검정색)

+다 똑같은 속성을 넣었을 때 딱 하나만 집었을 때는 집은게 우선순위다 -> 다 초록색 먹어 근데 너만 흰색먹어 : 흰색이 더 높다