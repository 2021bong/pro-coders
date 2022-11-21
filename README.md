# 🤾‍♂️ 프로코더스(Pro-Coders)

## 👋 소개

학습 목적으로 진행한 [프로스펙스(Prospecs)](https://www.prospecs.com/display.do?cmd=mallMain) 모티프 프로젝트입니다.

<br />
<br />

## 🤹‍♂️ 팀원

**✨FE** [- GitHub Repo](https://github.com/wecode-bootcamp-korea/justcode-6-1st-pro-coders-front)

이다익 - https://github.com/kkukileon305

봉원희 - https://github.com/2021Bong

최승철 - https://github.com/tmdcjf152

<br />

**✨BE** [- GitHub Repo](https://github.com/wecode-bootcamp-korea/justcode-6-1st-pro-coders-back)

이신희 - https://github.com/shlee2227

조윤식 - https://github.com/younsik2

<br/>

-------------

<br/>

## 🔧 사용 기술 및 파일 구조

<br/>

- 사용 기술

> Vite

> JavaScript

> React.js

> styled-components

> Git

<br/>

- 파일 구조

```
├── .gitignore
├── .github
│   └── pull_request_template.md
├── .prettierrc
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── data
│   │   ├── archive.json
│   │   ├── event.json
│   │   ├── nominationData.JSON
│   │   ├── product.json
│   │   └── shoesData.JSON
│   └── images
│       ├── archive
│       │   ├── img1.jpg
│       │   ├── img10.jpg
│       │   ├── img11.jpg
│       │   ├── img12.jpg
│       │   ├── img2.jpg
│       │   ├── img3.jpg
│       │   ├── img4.jpg
│       │   ├── img5.jpg
│       │   ├── img6.jpg
│       │   ├── img7.jpg
│       │   ├── img8.jpg
│       │   └── img9.jpg
│       ├── logo-black.svg
│       ├── logo-white.svg
│       └── nav
│           ├── icon
│           │   ├── btn_arrow_next.svg
│           │   ├── btn_arrow_prev.svg
│           │   ├── footer_logo.svg
│           │   ├── icon_arrow_L_white.svg
│           │   ├── icon_arrow_R_white.svg
│           │   ├── icon_cart_white.svg
│           │   ├── icon_facebook.svg
│           │   ├── icon_insta.svg
│           │   ├── icon_quick_01.svg
│           │   ├── icon_quick_02.svg
│           │   ├── icon_quick_03.svg
│           │   ├── icon_search.svg
│           │   ├── icon_search_close.svg
│           │   ├── icon_search_white.svg
│           │   ├── icon_top_arrow.svg
│           │   ├── icon_youtube.svg
│           │   └── logo_white.svg
│           └── img
│               ├── ad1.png
│               ├── ad2.png
│               ├── ad3.png
│               ├── ad4.png
│               ├── gnb_banner_smartfit.png
│               └── search_add.png
├── README.md
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── LoginModal.jsx
│   │   ├── Nav.jsx
│   │   ├── Skeleton
│   │   │   ├── BestSkeleton.jsx
│   │   │   ├── EventSkeleton.jsx
│   │   │   ├── LookbookSkeleton.jsx
│   │   │   ├── ProductSkeleton.jsx
│   │   │   ├── SearchSkeleton.jsx
│   │   │   ├── ShoesSkeleton.jsx
│   │   │   ├── StoreSkeleton.jsx
│   │   │   └── SwiperSkeleton.jsx
│   │   ├── Spinner.jsx
│   │   └── TopButton.jsx
│   ├── hooks
│   │   ├── useInfiniteSwiper.js
│   │   ├── useScroll.js
│   │   └── useSwiper.js
│   ├── main.jsx
│   ├── pages
│   │   ├── Shop
│   │   │   ├── Shoes
│   │   │   │   ├── AllShoes.jsx
│   │   │   │   └── sections
│   │   │   │       ├── FilterModal.jsx
│   │   │   │       ├── Item.jsx
│   │   │   │       ├── ItemBox.jsx
│   │   │   │       ├── MdPick.jsx
│   │   │   │       └── Nomination.jsx
│   │   │   ├── ShopPage.jsx
│   │   │   └── sections
│   │   │       ├── FirstSection.jsx
│   │   │       ├── FourthSection.jsx
│   │   │       ├── SecondSection.jsx
│   │   │       └── ThirdSection.jsx
│   │   ├── archive
│   │   │   └── Archive.jsx
│   │   ├── cart
│   │   │   ├── Cart.jsx
│   │   │   └── CartSkeleton.jsx
│   │   ├── event
│   │   │   ├── CardContent.jsx
│   │   │   ├── Event.jsx
│   │   │   └── EventCard.jsx
│   │   ├── main
│   │   │   ├── Header.jsx
│   │   │   ├── Main.jsx
│   │   │   └── Sections
│   │   │       ├── FifthSection.jsx
│   │   │       ├── FirstSection.jsx
│   │   │       ├── FourthSection.jsx
│   │   │       ├── Item.jsx
│   │   │       ├── SecondSection.jsx
│   │   │       └── ThirdSection.jsx
│   │   ├── product
│   │   │   ├── Product.jsx
│   │   │   └── Sections
│   │   │       ├── AccordionCard.jsx
│   │   │       ├── AiFilter.jsx
│   │   │       ├── ProductDetail.jsx
│   │   │       └── ProductOption.jsx
│   │   ├── search
│   │   │   └── Search.jsx
│   │   ├── signUp
│   │   │   └── SignUp.jsx
│   │   ├── smartfit
│   │   │   └── SmartFit.jsx
│   │   └── store
│   │       ├── Map.jsx
│   │       ├── Store.jsx
│   │       └── StoreInfo.jsx
│   └── styles
│       ├── GlobalStyle.jsx
│       └── theme.js
└── vite.config.js
```

-------------

<br/>

## ⚙️ 프로젝트 설치 및 실행 방법

<br/>

- 설치 방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다. [참고](https://nodejs.org/)

<br/>

2. 레포지토리를 받아주세요.

```
 git clone https://github.com/wecode-bootcamp-korea/justcode-6-1st-pro-coders-front.git
```
<br/>

3. dependencies를 설치해주세요.

```
npm install
```

<br/>
<br/>

- 실행 방법

1. 다음 명령어를 이용해 Dev server를 실행해주세요.

```
npm run dev
```
<br/>

2. 브라우저에서 <http://localhost:5173>에 접속해주세요.

<br/>

------------------

<br/>

## 🔐 저작권, 라이선스 정보

#### 📞 프로스펙스의 허락을 받아 제품사진만 사용 하였습니다.

#### 🚨 모든 이미지의 저작권은 [프로스펙스](https://www.prospecs.com)에 있습니다.

<br/>

------------

<br/>

## 📌 기능 구현 및 설명

<br/>

## 최승철

### ✅ SHOP > SHOES 카테고리별 제품 필터링

<img width="965" alt="기능1-1" src="https://user-images.githubusercontent.com/49029756/202986059-498e2c95-3d3b-400f-89eb-d8540f837126.png">

<img width="967" alt="기능1-2" src="https://user-images.githubusercontent.com/49029756/202986084-09c781c0-ce14-4ee6-b6b4-d92c2b91b9bb.png">

<br/>

### ✅ SHOP > SHOES 제품데이터별 정상가/할인율/할인가/성별 필터링

<img width="959" alt="기능2" src="https://user-images.githubusercontent.com/49029756/202986100-f31f4ad5-cb05-486f-aaaf-3f904f72a9fe.png">

<br/>

### ✅ SHOP > SHOES 필터검색 클릭시 필터모달 등장

<img width="978" alt="기능3" src="https://user-images.githubusercontent.com/49029756/202986111-04d42765-40d9-4b3d-b607-2b551a38028b.png">

<br/>

### ✅ 제품 클릭시 해당 제품 상세페이지 이동

<img width="1068" alt="기능4" src="https://user-images.githubusercontent.com/49029756/202986120-efe1db5d-c794-4876-9fa6-6678bd125614.png">

<br />
<br />
<br />

## 이다익

<br/>

### ✅ 메인페이지 및 Shop페이지 레이아웃 및 swiper 구현

클릭 시작시의 clientX값을 저장해서 이동시의 clientX값과의 차이를 이용해 transform속성을 직접 조작하는 방식을 이용하였습니다.

![swiper1](https://user-images.githubusercontent.com/102274941/188801806-03921d8b-f60a-408e-9666-1b2c4590ecc5.png)

![swiper2](https://user-images.githubusercontent.com/102274941/188801958-b043f477-48a8-49ed-9b5a-653bd7cf37a2.png)

![swiper3](https://user-images.githubusercontent.com/102274941/188801918-1234c679-4667-4e1c-805e-9d8e3e9b1e83.png)

![swiper4](https://user-images.githubusercontent.com/102274941/188801962-1d15f3b0-dc9c-468a-b973-587eeebbacb9.png)

<br />

### ✅ 메인페이지 스크롤효과 구현

Intersection observer를 활용하였습니다.

![intersection-observer](https://user-images.githubusercontent.com/102274941/188809862-a437974c-15f8-462e-b5fe-6f001909a2b8.png)

<br />

### ✅ Nav bar 구현

원본 사이트의 메뉴가 너무 좁다는 느낌이 들어서 위아래로 스크롤 할 수 있도록 분리하였습니다.

![nav1](https://user-images.githubusercontent.com/102274941/188806927-e2336f33-05cf-4e2a-adf6-96590d3aa567.png)
![nav2](https://user-images.githubusercontent.com/102274941/188806933-a3a45f88-7f94-4747-a1dc-8a9c5a186134.png)

<br />

### ✅ 로그인, 회원가입 레이아웃 및 로직 구현, 유효성 로직 구현

![login2](https://user-images.githubusercontent.com/102274941/188804459-9256a662-7076-449c-bd14-6ec6cb1c1b86.png)

![signup](https://user-images.githubusercontent.com/102274941/188804448-66113b40-6cb2-47f1-a6b5-978a5714d4fb.png)

<br />

### ✅ Shoes 페이지 Pagination 구현 및 Skeleton 구현

![pagination](https://user-images.githubusercontent.com/102274941/188805683-d9256905-9db5-4083-af9d-5d4295f9aeeb.png)

![pagination-skeleton](https://user-images.githubusercontent.com/102274941/188805836-486dd20f-7902-4b0d-aaf9-e2a64f24d0bc.png)

<br />

### ✅ 상품 상세페이지 Skeleton 구현 및 카트 추가 로직 구현

![cart-skeleton](https://user-images.githubusercontent.com/102274941/188807081-abb47f2b-7bb4-41a2-9d01-9119d30a7283.png)

![cart-validation2](https://user-images.githubusercontent.com/102274941/188807975-d77758a3-f839-4ab7-80ab-d8a9fa533e1f.png)

![cart-add](https://user-images.githubusercontent.com/102274941/188807088-840022f0-683e-4a07-b8a9-809d2bebd4d3.png)

![cart-validation](https://user-images.githubusercontent.com/102274941/188807092-edb9262b-1659-4c43-89f3-5c72fc4ecafd.png)

<br />

### ✅ Cart 페이지 레이아웃 및 카트 제품 삭제 등 로직 구현

![cart-skeleton2](https://user-images.githubusercontent.com/102274941/188808671-a98e117f-1f1f-463a-9787-9b69cc2bb4d3.png)

![cart](https://user-images.githubusercontent.com/102274941/188808444-683d9d62-fc23-4980-b53e-e59ca348d8a9.png)

<br />
<br />
<br />

## 봉원희

<br />

### ✅ Event 페이지 레이아웃 및 Skeleton 구현

- Skeleton 구현
- UI 구현
- 카테고리 별로 달라지는 목록

![event](https://user-images.githubusercontent.com/49029756/188876206-a6ad2cb1-19fc-4a45-9668-c4241af798b4.png)

<br />

### ✅ Archive 페이지 레이아웃 및 Skeleton 구현

- Skeleton 구현
- 슬라이드 구현
- 토글 UI 및 기능 구현

![archive](https://user-images.githubusercontent.com/49029756/188876390-0019dc06-6a92-4a61-b4bd-39732c2a91f7.png)

<br />

### ✅ Store 페이지 레이아웃 및 Skeleton 구현

- Skeleton 구현
- 카카오맵 API를 이용한 매장 지도
- 매장 타입별 지도 & 상세 지도 구현

![store-img1](https://user-images.githubusercontent.com/49029756/188876540-5bad27f2-beb6-4f00-8b4b-9de96f1c5b48.png)

![store-img2](https://user-images.githubusercontent.com/49029756/188953505-b8e39f31-290b-4b3a-bc8e-a0a4ab558d1f.png)

<br />

### ✅ Smartfit 페이지 레이아웃 및 로그인 기능 추가

- Smartfit 페이지 UI 구현
- GO 클릭시 로그인 모달 또는 로그인 확인 모달이 나오도록 구현
- topbutton 구현

![smartfit-img1](https://user-images.githubusercontent.com/49029756/188876756-24941826-6d58-4b35-8155-59647a200d6a.png)

![smartfit-img2](https://user-images.githubusercontent.com/49029756/188876780-758aa3ce-0800-462c-b83e-2c2439ee8420.png)

<br />

### ✅ 검색 기능 구현 및 Skeleton 구현

- Skeleton 구현
- 키워드 검색 기능 구현
- 인기검색어 검색 기능 구현

![search-skeleton](https://user-images.githubusercontent.com/49029756/188876916-32932e80-61a5-4b07-a38d-7857015966b9.png)

![search-img1](https://user-images.githubusercontent.com/49029756/188877086-ed15d717-ea8a-42bd-811a-1ab745bb97bb.png)

![search-img2](https://user-images.githubusercontent.com/49029756/188877105-04ee4d56-8a10-4a4c-99c3-3cd09fe02999.png)