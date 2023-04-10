
| npm | 내용 | 기타 |
|------|--------------------|--------------------|
|`npm init` | `package.json` 생성 |
|`npm help` | 명령어를 모를 때, 역할, 옵션 등을 알 수 있다. |
|`npm (명령어)`, `help`, `npm install` `help` | 해당 명령어에 대해 알고 싶을 때 |
|`npm install`, `npm i` |  `npm` 모듈 로컬 설치 | 1. `--save or -S : dependencies`에 추가 2. `--save-dev or -D : devDependencies`에 추가 3.   `-g : global` 패키지에 추가 |
|`npm uninstall moduleName` | npm 모듈 삭제 |
|`npm update` | npm 모듈 업데이트 |
|`npm dedupe` | 중복된 모듈 정리 |
|`npm root` | `node_modules`의 위치를 알려준다.|
|`npm oudated` | 오래된 패키지의 존재 유무를 알려준다.|
|`npm ls` |패키지를 조회한다. |`npm ls` 패키지명 해당 패키지의 유무, 어떤 패키지의 dependencies인지 알려준다.|
|`npm ll` | 패키지의 더 자세한 정보를 알려준다. |
|`npm cache`|npm내의 cache 목록 확인|캐시(Cache)|
|`npm cache`, `clean --`, `force` |캐시 삭제|캐시(Cache)|
|`npm rebuild` | npm 재설치 | 에러가 발생했을 때 주로 `npm cache clean`을 해주고|
|`npm -v`, `node -v`, `npm -version` | 버전 확인|
|`npm install rimraf`| `rimraf` 설치 | `node_modules` 폴더 삭제 전|
|`rimraf`, `node_modules` | `node_modules` 폴더 삭제 | `node_modules` 폴더 삭제 실행|
|`npm prune` | `package.json` 내에 정의 되지 않은 패키지 삭제 |
|`npm start` | `package.json`의 `scripts`에 있는 `start` 명령어를 실행|따로 설정하지 않았다면 `node server.js`가 실행|
| `npm stop` | 실행중인 npm을 중지|
| `npm restart` | stop후에 다시 start |
| `npm run` | 그 이외의 scripts 실행 | `npm run` 명령어 |
|`npm config` | npm의 설정을 조작|
