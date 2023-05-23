# 2023.05.23
## fork repo <- origin repo 로 pull request 시
###  pull request 옵션을 squash로 설정 시
1. 커밋들이 하나로 합쳐져서 merge 당시의 잔디 하나만 심어지는가? 
    - ㅇㅇ/ 정확히는 pull request 이력 1개 통합된 커밋에 대한 잔디 1개 -> 2개 심어짐
2. upstream repo의 파일이 수정됐을 때 pull request가 안되므로 git pull 로 받아온 후 충돌 해결하고 merge 후 push 
### pull request 옵션을 rebase 설정 시
1. 커밋들이 브랜치에 종속된 채 붙는 게 아니라 커밋들이 일렬로 주르륵 추가된다. <<프로젝트 규모가 커지면 커밋이 너무 많이 쌓인다?
2. pull request 날렸을 당시 template 작성한 게 의미가 없어진다 <<커밋에 대한 부가 설명을 붙일 수 없다.
3. 잔디는 잘 심어짐
