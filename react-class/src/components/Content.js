import React, { Component } from 'react'; 

class Content extends Component{ // subject라는 컴포넌트를 만든 다는 의미.
  render() { // funtion을 생략 함 -> 함수이다.
    console.log('Content render');
    return (
      <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
      </article>
    );
  }
}
// TOC.js를 가져다 쓰는 쪽에서 TOC 라는 클래스를 가져다 쓸 수 있다.  
export default Content; 