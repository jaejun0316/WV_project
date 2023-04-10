### Git 기본 명령어


1. 현재 상태 확인 (내가 제일 많이 사용하는 명령어)

`git status`
 
<br/ >

2. 전체 로그 확인 

`git log`
 
<br/ >

3. git 저장소 생성하기 

`git init`
 
<br/ >

4. 저장소 복제 및 다운로드 

`git clone [https: ~~~~ ]`
 
<br/ >

5. 저장소에 코드 추가

`git add`

`git add *`
 
<br/ >

6. 커밋에 파일의 변경 사항을 한번에 모두 포함 

`git add -A`
 
<br/ >

7. 커밋 생성

`git commit -m "message"`
 
 <br/ >

8. 변경 사항 원격 서버 업로드 (push)

`git push origin master`
 
<br/ >

9. 원격 저장소의 변경 내용을 현재 디렉토리로 가져오기 (pull)

<br/ >

10. git pull
 

<br/ >

11. 변경 내용을 merge 하기 전에 바뀐 내용 비교

`git diff [브랜치 이름] [다른 브랜치 이름]`
 

<br/ ><br/ ><br/ >

### Git Branch 관련 (생성, 브랜치 확인, push 까지의 과정 포함)
 

1. git init을 설정하면 해당 폴더에 .git 이라는 파일이 생성됨 

`git init`
 
 <br/ >

2. github 주소와 연결 

`git remote add origin [github 주소]`
 
<br/ >

3. 브랜치 생성

`git branch [브랜치명]`
 
<br/ >

4. 해당 브랜치로 이동

`git checkout [브랜치명]`
 
<br/ >

5. 브랜치를 생성하고 해당 브랜치로 바로 이동

`git branch -d [브랜치명]`
 
 <br/ >

6. 원하는 브랜치로 이동했는지 확인 

`git branch`
 
<br/ >

7. 모든 브랜치 확인 

`git brach -a`
 
<br/ >

8. 파일 및 폴더 add

`git add .`
 
<br/ >

9. 커밋 

`git commit -m "commit message"`
 
<br/ >

10. 원하는 브랜치로 push하여 원격 서버에 전송 

`git push origin [브랜치명]`
 
<br/ >

11. 브랜치 삭제 

`git branch -d [브랜치 이름]`
 
<br/ >

12. 현재 브랜치에 다른 브랜치 수정사항 병합

`git merge [다른 브랜치 이름]`
 

 
<br/ ><br/ ><br/ >
 
### Git Config 설정 관련 
 
1. 전체 config 리스트 확인 

`git config --list`
 
<br/ >

2. git config 설정하는 방법

`git config --global user.name "홍길동"`
`git config --global user.email "name@naver.com"`
 
<br/ >

3. git config 삭제하기 

`git config --unset user.name`
`git config --unset user.email`
 
<br/ >

<br/ >

4. 삭제해도 계속 남아있는 경우 global 옵션을 주어 설정했을 것임, global로 설정된 사용자를 지울 경우 아래와 같이 global 추가


`git config --unset --global user.name`
`git config --unset --global user.email`