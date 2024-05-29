firebase version: 11.24.0

npm version: 9.2.0

node version: 16.15.0

node, npm, firebase를 설치한 후 firebase에 로그인해야 합니다. 다만 디렉토리는 piot-release여야 합니다.

홈페이지 관련 소스코드와 기타 자료들은 public 폴더 안에 있습니다. 

수정하실 때는 public 폴더 안의 소스코드를 수정하시면 됩니다.

piot.co.kr로 접속하면 등장하는 페이지는 index.html입니다. 이걸 기준으로 각 페이지가 연결되어 있습니다. 

프론트엔드 관련된 프레임워크는 사용하지 않았습니다. 수작업으로 html 파일을 만들었고 news, products, projects, services와 같은 각 폴더에서 html 파일을 확인하실 수 있습니다. 



**Git Bash에서 로그인하는 방법**

```shell
firebase login -i
```

이후 piotrobotics@gmail.com 계정으로 연결되면서 firebase에 로그인하게 되면 firebase로 코드를 배포할 수 있게 됩니다.

**Git Bash를 통해 firebase에 수정된 버전 배포하는 방법**

```shell
firebase deploy
```

