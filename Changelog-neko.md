## Unreleased (2024.9.0+neko.rc-2)

### General
- Feat: 사용자 등록을 승인제로 할 수 있도록
(pull from 0e2e4c353f6d2fd2cc650007ec2f6a876acde8f7)

### Frontend

### Backend

### misskey-js

### develop

## 2024.9.0+neko-rc

### General
- Fix: 프론트엔드의 타입 이슈
- Feat: 노트 수정 기능 부활  
(cherry-pick from yunochi#4)
- Feat: 리모트 아바타 데코 연합  
(cherry-pick from yunochi#1 and 7dc3d230dda0f1ccac7e82e64c0cf4848994e1fc)
- Style: 기본 폰트 및 스킨셋 변경
- Feat (locale): 어딘가에 묻혀 있던 로케일 추가
- 각종 디펜던시 업데이트 및 수정

### Backend
- 최신 nsfwjs의 import 오류 대응

### Frontend
- Feat: "다른 계정 추가" 버튼 아래에 "새 계정 추가" 버튼이 살아 있어서 지웠습니다
- Fix (test): 회원가입 관련 테스트 삭제

### develop
- QoL: `misskey-js`의 갱신과 이를 적용한 전체 빌드의 자동화 스크립트 추가