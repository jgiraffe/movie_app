# Movie App(React)

<https://jgiraffe.github.io/movie_app/> (ROUTING BONUS part는 github page에 적용되지 않았음)

nomard coders React JS Fundamentals Course

노마드 코더 리액트 JS 기본 과정 실습입니다.

## 공부한 내용

### library : react, prop-types, axios, gh-pages, react-router-dom

### component는 function과 class가 있고 <Food fav = "kimchi" asd = {true} /> 같이 호출 : JSX

- JSX 문법 안에서 js를 쓰기위해 {}를 사용
- fav, asd는 props
- function component는 props를 props로 받거나 {fav}로 받을 수 있다.
- map 사용 예시

```
   <div> { foodILike.map(dish => (<Food key={dish.id} />))} </div>
```

### setState시 현재의 state에 접근하기 적절한 방법

```
this.setState(current => ({ count: current.count + 1 }));
```

### 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render을 호출

### Mounting : component가 태어나는 것

- 순서 constructor() -> render() -> componentDidMount()

### Updating : state를 변경할 때

- 순서 render -> componentDidUpdate()

### Unmounting : component가 죽는 것

- 순서 componentWillUnmount()

### const { isLoading } = this.state; -> es6 문법으로 { }안은 객체

8. gh-pages


```
npm install gh-pages -g
```
package.json에 추가
```
"hompage" = "username.github.io/reponame"
```
package.json scrtipt에 추가
```
"deploy": "gh-pages -d build",
"predeploy": "npm run build"
```
실행
```
npm run deploy
```
