### 📁 public

* index.html
* data (mock data관리)

* + 오류관련으로 정리해놓음

---

### 📁 src

1. assets

* 말 그대로 자산을 의미한다.
* 프로젝트에서 사용할 이미지, 비디오, json파일 등 미디어 파일들을 모아두어 저장하는 곳.

2. components

* 공통 컴포넌트 관리 (Header, Footer, Nav 등)

3. pages

* 페이지 단위의 컴포넌트 폴더로 구성
* ex) Login - Login.js, Login.scss / Main - Main.js, Main.scss

### 💡 components vs pages

* 여러 페이지에서 동시에 사용되는 컴포넌트의 경우 components 폴더에서 관리
* 페이지 컴포넌트의 경우 pages 폴더에서 관리
* 해당 페이지 내에서만 사용하는 컴포넌트의 경우 해당 페이지 폴더 하위에서 관리하는 것이 좋음!

---

### 📁 styles

1. sass 사용시
    * reset.scss => css 초기화
    * common.scss => 공통으로 사용하는 css 속성 정의
2. styled component사용 시
    * GlobalStyle.js => css 초기화
    * theme.js => 공통으로 사용하는 css 속성 정의 이외에 media.js 등등 다양한 css 파일을 속성에 맞게 분류하여 모듈화.

---

### 📁 services

* 자바스크립트 모듈을 담는 폴더

---

### 📁 utils

* 상수나 공통 함수, 유틸리티를 담는 폴더.

---

### 📁 services

* The services directory is less essential than components, but if you're making a plain JavaScript module that the rest of the application is using, it can be handy. A common contrived example is a LocalStorage module.

* components 폴더보다는 덜 중요하지만 애플리케이션에서 여분으로 사용되는 일반적인 자바스크립트 모듈을 만들때 편리한 모듈들을 담는 폴더. 일반적으로 로컬스토리지 모듈 등이 있다.

---

### 📁 context

* context API로 프로젝트를 작업하는 경우 관련 API를 담아놓는 폴더.

---

### 📁 hoc

* 함수형 컴포넌트를 사용하면서 커스텀 훅을 모듈화하여 담아놓는 폴더.

---

### 📁 store

* 상태에 저장하고 관리할 정보가 많은 대형 프로젝트에서는 리덕스와 같은 전역상태 관리 라이브러리를 많이 사용하는데 store폴더에 관련 데이터들을 저장하고 모듈화해서 관리하는 폴더라 생각하면 된다. 일반적으로 하위에 Actions, Reducers, Types의 세가지 주요 부분으로 구성! 아직 이 폴더를 만들어 사용해보진 않았지만 리덕스를 사용할 때 폴더에서 따로 관리해주면 될것같다.