# Pretendard local font

이 디렉터리는 Pretendard variable webfont를 로컬 에셋으로 보관하기 위한 위치입니다.

```bash
npm run font:pretendard
```

위 명령은 공식 npm/CDN 배포본의 `pretendard@1.3.9`에서 `PretendardVariable.woff2`를 받아 다음 경로에 저장합니다.

```text
assets/fonts/pretendard/PretendardVariable.woff2
```

## Next.js 적용 예시

`app/layout.tsx`의 `fontSans` 설정을 아래처럼 바꾸면 Pretendard variable font를 `--font-sans`로 사용할 수 있습니다.

```ts
const fontSans = localFont({
  src: "../assets/fonts/pretendard/PretendardVariable.woff2",
  variable: "--font-sans",
  weight: "45 920",
  display: "swap",
});
```

> 참고: 폰트 파일이 없는 상태에서 위 설정을 먼저 적용하면 `next build`가 실패합니다.
