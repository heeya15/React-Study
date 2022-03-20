import React, { Component } from 'react'; 

class Control extends Component{ // Control 컴포넌트를 만든 다는 의미.
    render() { // funtion을 생략 함 -> 함수이다.
      console.log('Control render');  
      return (
        <ul>
          <li>
            <a href='/create'
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('create'); // 그 때 mode가 뭔지를 알려준다.
              }.bind(this)}>create</a></li>
          <li>
            <a href='/update'
              onClick={function (e) {
                e.preventDefault();
                this.props.onChangeMode('update'); // 그 때 mode가 뭔지를 알려준다.
            }.bind(this)}
            >update</a>
          </li>
          <li>
            <input onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode('delete'); // 그 때 mode가 뭔지를 알려준다.
            }.bind(this)} type="button" value="delete"></input>
          </li>
        </ul>
      );
    }
}
  
export default Control; 