# 해야 할 것

## 1. 파일 나누기

### Components Dircetory

- [v] App.js <- <GlobalStyles>, <Router>
- [v] GlobalStyles.js <- styled-components, reset
- [v] Header.js <- react-router-dom, withRouter
- [v] Router.js <- reacr-rotuer-dom(<Rotuer>, <Route>, <Switch>, <Redirect>)

### Routes Directory

- [v] Detail.js <- Header.js 에 없음. 클릭하면 들어가지는 페이지.
- [v] Home.js
- [v] Search.js
- [v] TV.js

## 2. 작업 순서 정하기

- [1] Header.js
- [2] api.js
  <- movie(현재 상영작, 개봉예정작, 인기, 영화 세부내용, search)
  <- tv(상위 등급, 인기, 금일 방송, 방송 세부내용, search)
- [3] HomeContainer.js
  <- nowPlaying(), upcoming(), popular(), error, loading 값을 정의
  <- 정의한 값을 HomePresenter.js에 넘겨주는 역할을 한다.
- [4] HomePresenter.js
  <- nowPlaying() (title, poster_path, id, release_date, overview, vote_average)
  <- upcoming() (title, poster_path, id, release_date, overview,vote_average)
  <- popular() (title, poster_path, id, release_date, overview,vote_average)
