import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 2500);
  }
  render() {
    const { isLoading } = this.state; // es6 magic ~~
    return (
      <div>
        { isLoading ? "Loaing..." : "We are ready" }
      </div>
    );
  }
}

export default App;

/*
MEMO
1. component는 function과 class가 있고 <Food fav = "kimchi" asd = {true} /> 같이 호출 : JSX
 - JSX 문법 안에서 js를 쓰기위해 {}를 사용
 - fav, asd는 props
 - function component는 props를 props로 받거나 {fav}로 받을 수 있다.
 - map 사용 예시
   <div> { foodILike.map(dish => (<Food key={dish.id} />))} </div>
2. setState시 현재의 state에 접근하기 적절한 방법 this.setState(current => ({ count: current.count + 1 }));
3. 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render을 호출
4. Mounting : component가 태어나는 것
 - constructor() -> render() -> componentDidMount()
5. Updating : state를 변경할 때
 - render -> componentDidUpdate()
6. Unmounting : component가 죽는 것
 - componentWillUnmount()
7. const { isLoading } = this.state; -> es6 문법으로 { }안은 객체 
*/
