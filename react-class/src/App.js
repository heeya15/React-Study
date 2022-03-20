import './App.css';   // App 컴포넌트의 디자인을 App안에 넣는다라고 생각하면 된다.
import { Component } from 'react';
import Subject from './components/Subject'
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
class App extends Component{ // 여기 블록 부분이 컴포넌트를 만드는 코드
  // 어떠한 컴포넌트가 실행될 때 render 라는 함수보다 먼저 실행되면서,
  // 그 컴포넌트를 초기화 시켜주고 싶은 코드는 constructor 안에 다가 코드를 작성한다.
  constructor(props) {
    super(props);
    // state 값으로 하지 않고, 객체의 값으로 한 이유는
    // 어떤 데이터를 push 할 때 id 값을 뭐로 할때 사용하는 정보 일 뿐
    // UI에 영향을 줄 이유가 없기 때문에 state 값으로 안 한다. -> 하게 되면 불필요한 랜더링이 됨.
    this.max_content_id = 3; 
    this.state = {
      mode: 'welcome',
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
  getReadContent() {
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent() {
    var _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if (this.state.mode === 'read') {   
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function (_title, _desc) {
        console.log(_title, _desc);
        this.max_content_id = this.max_content_id + 1;
        // this.state.contents.push({ id: this.max_content_id, title: _title, desc: _desc });
        
        // concat을 사용한 방법
        // var _contents = this.state.contents.concat(
        //   { id: this.max_content_id, title: _title, desc: _desc }
        // )
        // Array.from을 통해 contents 배열을 복사하기. 주소가 달라서 원본 참조 x.
        var newContents = Array.from(this.state.contents);
        newContents.push({ id: this.max_content_id, title: _title, desc: _desc });
        // add content to this.state.contents
        this.setState({
          contents: newContents,
          mode: 'read',
          selected_content_id: this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if (this.state.mode === 'update') {
        _content = this.getReadContent();
        _article = <UpdateContent data={_content} onSubmit={
        function (_id, _title, _desc) {
            var _contents =  Array.from(this.state.contents); // 새로운 배열이 만들어진다.
            var i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i = i + 1;
            }
            this.setState({
              contents: _contents,
              mode:'read'  // Update가 끝난 다음에 여기서 mode를 read로 변경.
            });
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }
  render() { // render 라는 메서드를 가지고 있다.
    console.log('App render');
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
        <Control onChangeMode={function (_mode) {
          if (_mode === 'delete') {
            if (window.confirm('정말 삭제하실건가여?')) { // 확인 버튼을 누르면 true
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while (i < _contents.length) {
                if (_contents[i].id === this.state.selected_content_id) {
                  _contents.splice(i,1); // 발견한 [ 원소의 id 값 부터 ] 1개를 지우겠다.
                  break; // 지우고 나서 while문 탈출
                }
                i = i + 1;
              }
              this.setState({
                mode: 'welcome',
                contents:_contents
              });
              alert('삭제 되었습니다!');
            }
          } else {
            this.setState({
              mode: _mode // 자식 컴포넌트에서 받은 mode 값으로 변경해 준다.
            });
          }
        }.bind(this)}
        ></Control>
        {this.getContent()}
      </div>
    );
  }
}

export default App;
