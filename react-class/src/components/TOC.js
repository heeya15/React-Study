import React, { Component } from 'react'; 

class TOC extends Component{ // subject라는 컴포넌트를 만든 다는 의미.
  render() { // funtion을 생략 함 -> 함수이다.
      console.log('TOC render');  
      var lists = []; 
      var data = this.props.data;
      var i = 0;
      // 반복문이 실행될 때 마다 lists 라는 배열에 부모에게 받은 데이터를 담아 줌.
      while (i < data.length) { 
        lists.push(
          <li key={data[i].id}>
            <a
              href={"/content/" + data[i].id}
              onClick={function (id,e) {
                // e.target.dataset.id //이벤트가 소지하고 있는 a태그를 의미한다.
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this,data[i].id)}
            > 
            {data[i].title}
            </a>
          </li>);
        i = i+1;
      }
      return (
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
}
  
export default TOC; // TOC.js를 가져다 쓰는 쪽에서 TOC 라는 클래스를 가져다 쓸 수 있다.