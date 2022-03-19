import React, { Component } from 'react'; 

class Subject extends Component{ // subject라는 컴포넌트를 만든 다는 의미.
    render() { // funtion을 생략 함 -> 함수이다.
      console.log('Subject render');  
      return (
        <header>  
          <h1><a href="/" onClick={function (e) {
            e.preventDefault();// a 태그의 기본적이 동작 방법을 금지 시키는 것.
            this.props.onChangePage();
          }.bind(this)}>{ this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
}
  

// Subject.js를 가져다 쓰는 쪽에서 Subject 라는 클래스를 가져다 쓸 수 있다.  
export default Subject; 