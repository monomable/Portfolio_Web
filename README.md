# Heo Won Portfolio

Next.js 14 기반의 개인 포트폴리오 웹사이트입니다. 현재 버전은 Heo Won(`monomable`)의 개발자 프로필, 기술 스택, 프로젝트, 경력, 오픈소스 기여, 연락 채널을 정리하는 것을 목표로 합니다.

## 현재 점검 결과

- **빌드 안정성**: 외부 Google Fonts 요청 때문에 네트워크가 제한된 환경에서 `next build`가 실패하던 문제를 로컬 폰트 사용으로 정리했습니다.
- **개인화 상태**: 사이트 기본 메타데이터, GitHub 링크, 소셜 링크 일부는 Heo Won 기준으로 반영되어 있으나, 프로젝트/경력 데이터에는 원본 템플릿 작성자의 샘플 콘텐츠가 아직 많이 남아 있습니다.
- **SEO/PWA 상태**: sitemap, robots, manifest가 존재하지만 사이트 URL과 메타 설명을 현재 배포 도메인 기준으로 지속 관리해야 합니다.
- **운영 상태**: Google Analytics는 `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID`가 있을 때만 활성화되도록 두는 것이 로컬/CI 빌드에 안전합니다.

## 맞춤 최신화를 위해 답변이 필요한 질문

1. **포트폴리오의 1순위 목적**은 무엇인가요?
   예: 신입/경력 구직, 프리랜스 수주, 게임 클라이언트 포지션 지원, 개인 브랜딩, 프로젝트 아카이브.
2. **대표로 노출할 프로젝트 3개**는 무엇인가요?
   각 프로젝트별로 역할, 사용 기술, 문제 해결 과정, 성과 지표, GitHub/배포 링크를 알려주세요.
3. **현재 경력/학력/활동 이력** 중 공개 가능한 항목은 무엇인가요?
   기간, 조직명, 직무/역할, 핵심 성과를 함께 알려주면 좋습니다.
4. **기본 언어와 다국어 전략**은 어떻게 가져갈까요?
   예: 한국어 기본 + 영어 지원, 영어 기본 + 한국어 지원, 한국어만 우선 운영.
5. **연락 채널**은 무엇을 공개할까요?
   예: 이메일, GitHub, LinkedIn, 블로그, Instagram, Discord, 이력서 PDF.
6. **원하는 톤앤매너**가 있나요?
   예: 채용 담당자용 간결한 톤, 개발 블로그형 상세 톤, 게임 개발자 포트폴리오 톤.

## 우선순위 TODO

- [ ] `config/projects.ts`의 템플릿 샘플 프로젝트를 실제 프로젝트로 교체
- [ ] `config/experience.ts`의 템플릿 샘플 경력을 실제 이력으로 교체
- [ ] `config/contributions.ts`의 샘플 오픈소스 기여를 실제 기여/활동으로 교체
- [ ] `/resume` 페이지에 최신 이력서 PDF 또는 다운로드 링크 연결
- [ ] 한국어/영어 다국어 라우팅 또는 콘텐츠 구조 결정
- [ ] 배포 도메인이 바뀌면 `config/site.ts`, `public/robots.txt`의 URL 동시 갱신

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 린트 검사
npm run lint

# 프로덕션 빌드
npm run build
```

## 주요 구조

```text
app/                  Next.js App Router 페이지와 API route
components/           공통 UI, 섹션, 카드, 폼 컴포넌트
config/               사이트 정보, 라우트, 프로젝트, 경력, 기술 스택 데이터
public/               이미지와 정적 에셋
assets/fonts/         로컬 폰트 파일
```

## 환경 변수

```bash
# 선택 사항: 값이 있을 때만 Google Analytics가 활성화됩니다.
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=

# 선택 사항: Google Search Console 인증 값
NEXT_PUBLIC_GOOGLE_VERIFICATION=
```

## 출처

이 프로젝트는 [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)를 기반으로 수정 및 추가 개발한 버전입니다. 원작자에게 감사드립니다.
