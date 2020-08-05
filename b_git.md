# 깃이란 무엇인가?

> 소프트웨어 개발 및 관리에서 자료를 버전/기간/작성내용 순서에 따라 <br />
문서를 관리하는 버전관리 시스템이라고 한다.

- git config --global user.name "사용자이름"
- git config --global user.email "사용자이메일"
- git clone
- git status
- git add
- git commit -m "내용요약"
- git push
- git pull
- git reset : = ctrl+z (한번만 뒤로 되돌려줌)
- git reset HEAD^ : commit 전으로 되돌림

---

## 깃 사용법 기초 1

1. 컴퓨터에 연결할 사용자의 계정을 등록한다. (사용자이름,이메일주소)<br />
``` shell

git config --global user.name "who?"
git config --global user.email "mail@mail.com"

```

2. github 사이트에서 개인 저장소 생성
     - 사이트에서 `new repository`를 클릭
     - 이름 생성, 자료공개여부(공개), readme파일 생성여부

3. 내pc에서 github사이트에 있는 주소에 담긴 자료(주소를 복사해서 처리)를 그대로 복제
    - 웹에 존재하는 github 저장소 이름이 내pc에 폴더명으로 저장되기 때문에, 이름이 겹치지 않도록 주의

``` shell

git clone http://_________.git

```

4. 최초의 테스트 및 파일 인식은 `README.md` 파일 생성 후 내용 작성

``` shell

touch README.md
echo "readme 파일 생성 및 체크" >> README.md

```

5. 선택 자료를 첨부 및 요약 작성 그리고 전송

``` shell

git add 파일/폴더명

git add . : 전부 첨부

git commit -m "첨부되는 내용 요약작성"
git push

```

6. 자료의 상태는 수시로 점검

```
git status
```

7. 다른 컴퓨터에도 clone되어 있는 상태라면, 서버의 자료를 업데이트 해야 한다
``` shell
git pull
```

---







