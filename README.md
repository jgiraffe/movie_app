# Movie App (Nomadcoders React Fundamentals Course)

<https://jgiraffe.github.io/movie_app/>

## 공부한 내용

### 0. library
- react, prop-types, axios, gh-pages, react-router-dom

### 1. component, JSX
- component 종류 : function, class
- function component
```
function 이름(props or {...//prop name}) { return (...) }
// es6
const 이름 = (props or {...//prop name}) => (...)
```
- class component
```
class 이름 extends React.Component {
 state = { ... };
 render() { return (...) }
}
```
- JSX
```
const element = <h1>Hello, world!</h1>;
<Food fav = "kimchi" />
```
- 대문자로 시작하는 JSX 태그는 React 컴포넌트를 지정한다.
- JSX 문법 안에서 js를 쓰기위해 { }를 사용
### 2. 아주 유용한 map
- React에서는 map으로 반복 component를 작성하는 경우 key가 필수!

```
<div> { foodILike.map(dish => (<Food key={dish.id} />))} </div>
```

### 3. setState시 현재의 state에 접근하기 적절한 방법

```
this.setState(current => ({ count: current.count + 1 }));
```

### 4. render : class component에서 쓰이며 return 필수!
- 매순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render()를 호출

### 5. Mounting : component가 태어나는 것

- 호출 순서 : constructor() -> render() -> componentDidMount()

### 6. Updating : state를 변경할 때

- 호출 순서 : render() -> componentDidUpdate()

### 7. Unmounting : component가 죽는 것

- componentWillUnmount() : 죽으면 호출 됨

### 8. state 가져오기 (es6)
{ }는 객체!
```
const { isLoading } = this.state;
```
### 9. gh-pages

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
### 10. axios : http 통신 library
비동기로 영화 정보를 가져오는 예시 
```

getMovies = async () => {
// movies.data.data.movies를 {data: {data: {movies}}}로 // ES6
// api에 data가 2개임...
 const {
  data: {
   data: { movies },
  },
 } = await axios.get("주소");
 this.setState({ movies, isLoading: false });
 };
componentDidMount() { this.getMovies(); }
render() { ... }
```
### 11. prop-types : 말 그대로 props의 type을 검사해준다
간단예시
```
function Movie({ id, year, title, summary, poster, genres }) {... }
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
```

