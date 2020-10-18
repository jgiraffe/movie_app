import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component did mount");
  }
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>ADD</button>
        <button onClick={this.minus}>MINUS</button>
      </div>
    );
  }
}

export default App;

/*
MEMO
1. setState시 현재의 state에 접근하기 적절한 방법 this.setState(current => ({ count: current.count + 1 }));
2. 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render을 호출
3. Mounting : component가 태어나는 것
 - constructor()
 - render()
 - componentDidMount()
4. Updating : 의미 그대로
5. Unmounting : component가 죽는 것 
*/
