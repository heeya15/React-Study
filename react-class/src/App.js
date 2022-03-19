import './App.css';   // App 컴포넌트의 디자인을 App안에 넣는다라고 생각하면 된다.
import { Component } from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import Content from './components/Content'

class App extends Component{ // 여기 블록 부분이 컴포넌트를 만드는 코드
  // 어떠한 컴포넌트가 실행될 때 render 라는 함수보다 먼저 실행되면서,
  // 그 컴포넌트를 초기화 시켜주고 싶은 코드는 constructor 안에 다가 코드를 작성한다.
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id:2, // 기본적으로 2번 컨텐트가 선택되게 할 것이다.
      subject: { title: 'WEB', sub: 'World wide web!' },
      welcome: {title:'Welcome', desc:'Hello, React!!!' },
      contents: [
        {id: 1 , title:'HTML', desc : 'HTML is HyperText'},
        {id: 2 , title:'CSS', desc : 'CSS is for design'},
        {id: 3 , title:'JavaScript', desc : 'JavaScript is for interactive'},
      ]  // 데이터가 여러개 들어가기 때문에 배열로 선언.
    }; // state 값을 초기화.
  }
  render() { // render 라는 메서드를 가지고 있다.
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)} 
        > 
        </Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
