# JSX 소개

다음 변수 선언을 고려하십시오.

```
const element = <h1>Hello, world!</h1>;
```

이 재미있는 태그 구문은 문자열도 HTML도 아닙니다.

JSX라고 하며 JavaScript에 대한 구문 확장입니다. UI가 어떻게 생겼는지 설명하기 위해 React와 함께 사용하는 것이 좋습니다. JSX는 템플릿 언어를 생각나게 할 수 있지만 JavaScript의 모든 기능과 함께 제공됩니다.

JSX는 React "요소"를 생성합니다. [다음 섹션](https://reactjs.org/docs/rendering-elements.html) 에서 DOM으로 렌더링하는 방법을 살펴 보겠습니다 . 아래에서 시작하는 데 필요한 JSX의 기본 사항을 찾을 수 있습니다.



### 왜 JSX인가?

React는 **렌더링 로직이 본질적**으로 **다른 UI 로직과 결합되어 있다는 사실을 받아**들입니다. 이벤트 처리 방식, 시간 경과에 따른 상태 변경 방식, 데이터 표시 준비 방식 등입니다.

마크업과 로직을 별도의 파일에 넣어 인위적으로 *기술* 을 분리하는 대신 React 는 두 가지를 모두 포함하는 "구성 요소"라고 하는 느슨하게 결합된 단위로 [*문제*](https://en.wikipedia.org/wiki/Separation_of_concerns)[ 를 분리 합니다. ](https://en.wikipedia.org/wiki/Separation_of_concerns)[다음 섹션](https://reactjs.org/docs/components-and-props.html) 에서 구성 요소에 대해 다시 다루 겠지만, 아직 JS에 마크업을 넣는 것이 익숙하지 않다면 [이 강연](https://www.youtube.com/watch?v=x7cQ3mrcKaY) 을 통해 다른 방법으로 설득할 수 있을 것입니다.

React 는 JSX를 사용할 [필요가](https://reactjs.org/docs/react-without-jsx.html) 없지만 대부분의 사람들은 JavaScript 코드 내에서 UI로 작업할 때 시각적 보조 수단으로 도움이 된다고 생각합니다. 또한 React가 더 유용한 오류 및 경고 메시지를 표시할 수 있습니다.

그 이상으로 시작하겠습니다!



### JSX에 표현식 포함

아래 예제에서는 호출된 변수를 선언한 `name`다음 중괄호로 묶어 JSX 내에서 사용합니다.

```
const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

JSX의 중괄호 안에 유효한 [JavaScript 표현식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) 을 넣을 수 있습니다 . 예를 들어, `2 + 2`, `user.firstName`또는 `formatName(user)`모두 유효한 JavaScript 표현식입니다.

아래 예에서는 JavaScript 함수를 호출한 결과를 요소에 포함 `formatName(user)`합니다 `<h1>`.

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**[CodePen에서 사용해 보세요](https://codepen.io/gaearon/pen/PGEjdG?editors=1010)**

가독성을 위해 JSX를 여러 줄로 나눕니다. [필수는 아니지만 이 작업을 수행할 때 자동 세미콜론 삽입](https://stackoverflow.com/q/2846283) 의 위험을 피하기 위해 괄호로 묶는 것이 좋습니다 .

### JSX도 표현입니다

컴파일 후 JSX 표현식은 일반 JavaScript 함수 호출이 되어 JavaScript 객체로 평가됩니다.

`if`즉, 명령문 및 루프 내에서 JSX를 사용 하고 `for`, 변수에 할당하고, 인수로 수락하고, 함수에서 반환할 수 있습니다.

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}
```

