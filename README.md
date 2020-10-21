# Movie App(React)

<https://jgiraffe.github.io/movie_app/> (ROUTING BONUS part는 github page에 적용되지 않았음)

nomard coders React JS Fundamentals Course

노마드 코더 리액트 JS 기본 과정 실습입니다.

## 공부한 내용

### library
- react, prop-types, axios, gh-pages, react-router-dom

### component, JSX
- component는 function component와 class component가 있다. 
- JSX 예시
```
<Food fav = "kimchi" asd = {true} />
```
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

### render 
- 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render()를 호출

### Mounting : component가 태어나는 것

- 호출 순서 : constructor() -> render() -> componentDidMount()

### Updating : state를 변경할 때

- 호출 순서 : render() -> componentDidUpdate()

### Unmounting : component가 죽는 것

- 호출 순서 : componentWillUnmount()

### state 가져오기 (ES6)
{ }는 객체!
```
const { isLoading } = this.state;
```
### gh-pages

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
