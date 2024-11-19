# misskey-js용 타입 생성 모듈
백엔드에서 생성하는 OpenAPI 호환 `api.json`에서 타입 별칭을 생성하는 모듈입니다.
이 모듈이 misskey-js 자체에 포함되어 배포되는 것은 상정하지 않으나, misskey-js의 소스 아래에서 사용하는 것을 의도했습니다.

## 사용 방법
먼저 Misskey의 백엔드에서 `api.json` 파일을 가져와야 합니다.
아무 Misskey 서버에서 `/api-doc` 페이지를 열어 다운받거나,
백엔드 모듈에서 `pnpm generate-api-json`을 실행해 얻을 수 있습니다.
> `pnpm generate-api-json`을 실행하기 전에 `default.yml`을 생성해야 합니다.

`api.json`을 얻었다면, 이 파일이 있는 디렉토리로 가져와, 다음 명령어를 실행합니다.

```sh
pnpm generate
```

이를 실행하면, `./built` 디렉토리 아래에 `.ts` 파일이 생성됩니다.
