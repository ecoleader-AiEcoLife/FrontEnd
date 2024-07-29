- **재활용품 홈페이지**  <br/>
대구 지방청과 협업을 맺어 재활용 웹사이트 팀 프로젝트 (백엔드, AI 협업)


<br/>

**Framework** <br/>
1) Next.js <br/>
- Typescript <br/>
- CSS - tailwind <br/>

2) json server <br/>

<br/><br/>

<구현>

1) 재활용 정보 게시판 기능
   - 슬라이딩(Swiper) , Dynamic Routes , Restful API
  
2) 상세한 제품 검색 기능
   - Restful API, filter함수

4) 게시판 기능
   - Restful API - axios (GET, POST)

5) 재활용 쓰레기통 지도
   - Restful API , 카카오 라이브러리, 지도 API 이용
6) 인공지능 AI GPT
   - API

<br/><br/>

< 추가해야 할 기능 >
1) To-Do list?
2) 회원가입
3) Chat GPT
4) 장바구니


<br/><br/>


<고난>
<br/>

1. 마커 isVisible  status가 한 컴포넌트에서 setStatus()를 통해 전체 마커한테 적용되서 
모든 마커가 적용이됌
-> status 컴포넌트를 따로 만들어서 하나의 마커에게만 적용하게 함
   
<br/>

2. 네이버 뉴스 API -> CORS 에러

<br/>
SOP(동일 출처 정책)
자신과 동일한 도메인만 서버로부터 데이터를 요청하여 받을 수 있도록 하는 정책.
브라우저는 기본적으로 내 서버가 아닌 다른 서버(url이 다른)에서 받은 데이터는 차단한다. 브라우저가 사용자가 방문하는 사이트를 신뢰하지 않기 때문이다.
<br/>
CORS (교차 출처 정책)
CORS는 웹 어플리케이션이 다른 출처에 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제이다.

<br/>
해결법:
app 디렉토리 내의 route.ts 파일은 자동으로 서버 사이드에서 실행되는 API 엔드포인트로 취급 (이 파일 내의 코드는 클라이언트의 JavaScript 번들에 포함되지 않고, 오직 서버에서만 실행됌)
-> 이 파일 내에서 정의된 함수(GET, POST 등)는 해당 HTTP 메서드의 요청을 처리합니다. 서버에서 API를 호출하므로 브라우저의 동일 출처 정책을 우회할 수 있습니다.
 
<br/><br/>

3. 슬라이더 통해서 동적 페이지 매번 이동 -> props drilling 문제 발생
   <br/>
   (params, searchParams) 이용
     <br/>
=> encodeURIComponent, decodeURIComponent 로 해결하려고 시도..
  <br/>

하지만 문제점이 URL 주소에 쿼리까지 나타나있어서 나중에 특정한 재활용품을 search할때 해당 정보가 있는 동적 페이지로 이동을 못함..
  <br/>
-> 매번 page 마다 rest api 호출

  <br/>
4. <view 조회수 아직 실패>   <br/>
fake server 의 db.json 에서 board 의 data들이 리스트 형태로 되있어서 patch를 시도해보았지만 객체들의 리스트에서 특정한 객체의 id를 비교해서 조회수(view)를 바꾸는것이 불가하여
patch가 아닌 put의 rest API를 통해 전체 data를 바꿈

<br/><br/><br/><br/><br/>
***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
