import React, { Component } from 'react'; 

class UpdateContent extends Component{ // subject라는 컴포넌트를 만든 다는 의미.
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    };
    this.inputFromHandler = this.inputFromHandler.bind(this); // 바꿔주는 것
  }
  inputFromHandler(e) {
    // 최신 html 문법으로 [e.target.name]은 해당 태그의 name을 가져온다.
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() { // funtion을 생략 함 -> 함수이다.
    console.log('UpdateContent render');
    console.log(this.props.data);
    return (
      <article>
          <h2>Update</h2>
          <form action='/update_process' method='post'
            onSubmit={function (e){
              e.preventDefault();
              this.props.onSubmit(
                this.state.id,
                this.state.title,
                this.state.desc
              );
            }.bind(this)}
          >
          <input type="hidden" name="id" value={this.state.id}></input>
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFromHandler}
            >
            </input>
          </p>
          <p>
            <textarea
              onChange={this.inputFromHandler}
              name="desc"
              placeholder="description"
              value={this.state.desc}></textarea></p>
            <p><input type="submit"></input></p> 
          </form>
      </article>
    );
  }
}
// UpdateContent.js를 가져다 쓰는 쪽에서 UpdateContent 라는 클래스를 가져다 쓸 수 있다.  
export default UpdateContent; 