# 2023.05.23
## fork repo <- origin repo 로 pull request 시
###  pull request 옵션을 squash로 설정 시
1. 커밋들이 하나로 합쳐져서 merge 당시의 잔디 하나만 심어지는가? 
    - ㅇㅇ/ 1일 1개, 2일 2개 커밋하고 3일차에 squash merge 하면 3일꺼 하나로 합쳐진다
    - fork 레포지토리를 bare clone 후 새 레포지토리 파고 bare clone을 하면 그동안 모든 커밋들이 심어지긴 한다.
    - 그러나 이 방법으로 하나의 프로젝트에서 3개의 레포를 파야 된다는 게 비효율적이라 생각. 
2. upstream repo의 파일이 수정됐을 때 pull request가 안되므로 git pull 로 받아온 후 충돌 해결하고 merge 후 push 
### pull request 옵션을 rebase 설정 시
1. 커밋들이 브랜치에 종속된 채 붙는 게 아니라 커밋들이 일렬로 주르륵 추가된다. <<프로젝트 규모가 커지면 커밋이 너무 많이 쌓인다?
2. pull request 날렸을 당시 template 작성한 게 의미가 없어진다 << 3번에서 확인
3. 
