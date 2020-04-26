# 해야 할 것

## 1. 파일 나누기

### Components Dircetory

- [x] App.js <- (GlobalStyles, Router)
- [x] GlobalStyles.js <- styled-components, reset
- [x] Header.js <- react-router-dom, withRouter
- [x] Router.js <- react-rotuer-dom(Rotuer, Route, Switch, Redirect)

### Routes Directory

- [x] Detail.js <- Header.js 에 없음. 클릭하면 들어가지는 페이지.
- [x] Home.js
- [x] Search.js
- [x] TV.js

## 2. 작업 순서 정하기

1. Header.js

2. api.js

   - [x] movie(현재 상영작, 개봉예정작, 인기, 영화 세부내용, search) 필요 한 것들 객체화
   - [x] tv(상위 등급, 인기, 금일 방송, 방송 세부내용, search) 필요 한 것들 객체화

3. HomeContainer.js, TVContainer.js

### HomeContainer.js

- [x] nowPlaying(), upcoming(), popular(), error, loading 값을 정의
- [x] 정의한 값을 HomePresenter.js에 넘겨줌

### TVContainer.js

- [x] topRated(), popular(), airingToday(), onTheAir(), error, loading 값을 정의
- [x] 정의한 값을 TVPresenter.js에 넘겨줌

4. HomePresenter.js

### 만들어야 되는 js파일들

- [x] Loader.js
- [x] Section.js
- [x] Poster.js
- [x] Message.js

### 받아온 값들에서 필요한 것들만 추림.

- [x] nowPlaying() (title, poster_path, id, release_date, overview, vote_average)
- [x] upcoming() (title, poster_path, id, release_date, overview,vote_average)
- [x] popular() (title, poster_path, id, release_date, overview,vote_average)

### 따로 만들어서 줘야 하는 props

- [x] Poster.js에게 isMovie라는 props를 줘야 된다. 클랙했을 경우 movie poster인지 tv poster인지 구분하기 위해서.
