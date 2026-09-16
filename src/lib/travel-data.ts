// =============================================================================
// Tokyo Trip 2026 — Travel Data (부모님 친화형: 한국어 메인 + 영어 서브)
// 정가네 가족 · 2026.09.25–27 · 2박 3일
// =============================================================================

export interface KeywordBadge {
  ko: string;
  en: string;
}

export interface TimelineItem {
  time: string;
  timeEnd?: string;
  titleKo: string;
  titleEn: string;
  subtitleKo?: string;
  subtitleEn?: string;
  categoryKo: string;
  categoryEn: string;
  descriptionKo?: string;
  noteKo?: string;
  links?: { labelKo: string; labelEn: string; url: string }[];
  isTransit?: boolean;
  transitLabelKo?: string;
  transitLabelEn?: string;
}

export interface DaySummary {
  day: number;
  dateKo: string;
  dateEn: string;
  dayOfWeekKo: string;
  shortDateKo: string;
  shortDateEn: string;
  themeKo: string;
  themeEn: string;
  routeKo: string[];
  routeEn: string[];
  keywords: KeywordBadge[];
  description: string;
}

export interface PlaceCard {
  nameKo: string;
  nameEn: string;
  categoryKo: string;
  categoryEn: string;
  descriptionKo: string;
  hours?: string;
  links: { labelKo: string; labelEn: string; url: string }[];
}

export interface FoodItem {
  emoji: string;
  categoryKo: string;
  categoryEn: string;
  restaurantKo: string;
  restaurantEn: string;
  day: number;
  descriptionKo: string;
}

export interface ShoppingItem {
  brandKo: string;
  brandEn: string;
  storeKo: string;
  storeEn: string;
  storeLocationKo: string;
  checkKey: string;
  items: { ko: string; en: string }[];
}

export interface ReservationItem {
  dayLabelKo: string;
  dayLabelEn: string;
  time: string;
  nameKo: string;
  nameEn: string;
  subtitleKo: string;
  subtitleEn: string;
  status: "reserved" | "check" | "needed";
  statusLabelKo: string;
  statusLabelEn: string;
}

export interface ChecklistCategory {
  titleKo: string;
  titleEn: string;
  key: string;
  items: { labelKo: string; labelEn: string; key: string }[];
}

// ─── 일차별 개요 (Day Summaries) ───────────────────────────────────────────

export const daySummaries: DaySummary[] = [
  {
    day: 1,
    dateKo: "9월 25일 (금)",
    dateEn: "SEP 25 · FRI",
    dayOfWeekKo: "금요일",
    shortDateKo: "1일차 (9/25)",
    shortDateEn: "DAY 1 · FRI",
    themeKo: "도쿄의 첫날 밤, 설레는 시작",
    themeEn: "TOKYO NIGHT",
    routeKo: ["나리타 공항", "고엔지 숙소", "신주쿠 와규", "롯폰기 야경", "고엔지"],
    routeEn: ["Narita Airport", "Koenji", "Shinjuku", "Roppongi", "Koenji"],
    keywords: [
      { ko: "도쿄 도착", en: "ARRIVAL" },
      { ko: "와규 디너", en: "WAGYU" },
      { ko: "도쿄타워 야경", en: "NIGHT VIEW" },
    ],
    description:
      "도쿄에 도착하는 첫날! 무리해서 돌아다니기보다 맛있는 최고급 와규 저녁 식사와 롯폰기 힐즈에서 도쿄타워 야경을 감상하며 기분 좋게 여행을 시작합니다.",
  },
  {
    day: 2,
    dateKo: "9월 26일 (토)",
    dateEn: "SEP 26 · SAT",
    dayOfWeekKo: "토요일",
    shortDateKo: "2일차 (9/26)",
    shortDateEn: "DAY 2 · SAT",
    themeKo: "전망대와 쇼핑, 스시로 꽉 찬 하루",
    themeEn: "THE MAIN DAY",
    routeKo: ["고엔지", "시부야 스카이", "긴자 장어덮밥", "긴자·유라쿠초 쇼핑", "신주쿠 스시", "고엔지"],
    routeEn: ["Koenji", "Shibuya Sky", "Ginza Hitsumabushi", "Ginza Shopping", "Shinjuku Sushi", "Koenji"],
    keywords: [
      { ko: "시부야 전망대", en: "SHIBUYA SKY" },
      { ko: "주술회전 팝업", en: "JUJUTSU KAISEN" },
      { ko: "긴자 쇼핑", en: "SHOPPING" },
      { ko: "스시 오마카세", en: "SUSHI" },
    ],
    description:
      "이번 여행의 하이라이트 데이! 오전엔 탁 트인 시부야 스카이 전망대, 오후엔 유명 백화점 쇼핑과 히츠마부시, 저녁엔 신선한 스시 오마카세와 숙소 동네 이자카야를 즐깁니다.",
  },
  {
    day: 3,
    dateKo: "9월 27일 (일)",
    dateEn: "SEP 27 · SUN",
    dayOfWeekKo: "일요일",
    shortDateKo: "3일차 (9/27)",
    shortDateEn: "DAY 3 · SUN",
    themeKo: "여유로운 아침과 따뜻한 라멘 한 그릇",
    themeEn: "SLOW MORNING",
    routeKo: ["고엔지 숙소", "토모친 라멘", "신주쿠역", "나리타 공항", "인천 도착"],
    routeEn: ["Koenji", "Tomochin Ramen", "Shinjuku", "Narita Airport", "Seoul"],
    keywords: [
      { ko: "인생 라멘", en: "RAMEN" },
      { ko: "특급열차 탑승", en: "N'EX 29" },
      { ko: "공항 면세점", en: "DUTY FREE" },
      { ko: "귀국", en: "DEPARTURE" },
    ],
    description:
      "느긋하게 일어나 짐을 챙기고 동네 최고 맛집 토모친 라멘으로 든든하게 아침 식사! 복잡한 쇼핑 없이 편안하게 특급열차를 타고 공항으로 이동합니다.",
  },
];

// ─── 타임라인 일정 상세 (Daily Timeline) ───────────────────────────────────

export const timelineData: Record<number, TimelineItem[]> = {
  1: [
    {
      time: "13:00",
      titleKo: "나리타 국제공항 도착",
      titleEn: "NARITA AIRPORT",
      subtitleKo: "도쿄 도착 및 입국 절차",
      subtitleEn: "Tokyo, we're here.",
      categoryKo: "공항 도착",
      categoryEn: "ARRIVAL",
      descriptionKo: "나리타 공항 도착 후 입국 심사와 위탁 수하물을 찾고, 신주쿠행 나리타 익스프레스(N'EX) 열차에 탑승합니다.",
      noteKo: "N'EX 특급열차 타고 신주쿠역으로 이동 (약 80분 소요)",
    },
    {
      time: "",
      titleKo: "나리타 익스프레스 (N'EX)",
      titleEn: "N'EX EXPRESS",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "나리타 공항 → 신주쿠역 (특급열차 약 80분)",
      transitLabelEn: "Narita → Shinjuku via N'EX",
    },
    {
      time: "17:10",
      titleKo: "고엔지 숙소 도착 & 체크인",
      titleEn: "KOENJI AIRBNB",
      subtitleKo: "짐 풀고 잠시 휴식",
      subtitleEn: "Hotel Check-in & Refresh",
      categoryKo: "숙소 휴식",
      categoryEn: "CHECK-IN",
      descriptionKo: "고엔지역 인근 숙소에 무거운 짐을 풀고 신발을 편하게 갈아신은 뒤 저녁 식사를 위해 신주쿠로 출발합니다.",
    },
    {
      time: "18:30",
      timeEnd: "20:00",
      titleKo: "우시고로 신주쿠점 (최고급 와규 디너)",
      titleEn: "USHIGORO SHINJUKU",
      subtitleKo: "첫날 저녁: 입에서 녹는 일본 흑우 와규 구이",
      subtitleEn: "Wagyu Dinner",
      categoryKo: "와규 디너",
      categoryEn: "WAGYU",
      descriptionKo: "도쿄 여행 첫날의 만찬! 일본 최고급 A5 흑우 와규를 편안하고 분위기 좋은 룸에서 즐깁니다.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Ushigoro+Shinjuku" },
        { labelKo: "식당 공식 안내", labelEn: "OFFICIAL ↗", url: "https://www.ushigoro.com" },
      ],
    },
    {
      time: "",
      titleKo: "",
      titleEn: "",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "신주쿠역 → 롯폰기 힐즈 (지하철 약 20분)",
      transitLabelEn: "Shinjuku → Roppongi",
    },
    {
      time: "20:40",
      timeEnd: "21:50",
      titleKo: "도쿄 시티뷰 전망대 (롯폰기 힐즈 52층)",
      titleEn: "TOKYO CITY VIEW",
      subtitleKo: "눈앞에 도쿄타워가 펼쳐지는 파노라마 야경",
      subtitleEn: "Roppongi Hills Observation Deck",
      categoryKo: "도쿄 야경",
      categoryEn: "NIGHT VIEW",
      descriptionKo: "롯폰기 힐즈 타워 52층에서 붉게 빛나는 도쿄타워와 도쿄 시내 전체가 한눈에 들어오는 환상적인 야경을 감상하고 가족 기념사진을 남깁니다.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Roppongi+Hills+Tokyo+City+View" },
        { labelKo: "전망대 티켓 안내", labelEn: "TICKET ↗", url: "https://tcv.roppongihills.com" },
      ],
    },
    {
      time: "",
      titleKo: "",
      titleEn: "",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "롯폰기 → 고엔지 숙소로 복귀 (지하철)",
      transitLabelEn: "Roppongi → Koenji",
    },
    {
      time: "22:30",
      titleKo: "고엔지 숙소 복귀 및 휴식",
      titleEn: "BACK TO KOENJI",
      subtitleKo: "내일의 활기찬 일정을 위해 편안한 꿀잠!",
      subtitleEn: "Rest for Day 2",
      categoryKo: "일정 종료",
      categoryEn: "REST",
      descriptionKo: "첫날은 장거리 비행과 이동이 있었으므로 무리하지 않고 숙소 근처 편의점에 들러 시원한 음료와 간식을 사서 편안하게 쉽니다.",
    },
  ],
  2: [
    {
      time: "08:50",
      titleKo: "기상 및 시부야 이동",
      titleEn: "GOOD MORNING",
      subtitleKo: "고엔지 숙소 → 시부야역",
      subtitleEn: "Koenji → Shibuya",
      categoryKo: "아침 출발",
      categoryEn: "START",
      descriptionKo: "아침에 가볍게 준비하고 시부야 스카이 10시 입장 시간에 맞춰 여유 있게 시부야로 이동합니다.",
    },
    {
      time: "10:00",
      timeEnd: "11:20",
      titleKo: "시부야 스카이 전망대",
      titleEn: "SHIBUYA SKY",
      subtitleKo: "도쿄 상공 229m 루프탑에서 즐기는 360도 전망",
      subtitleEn: "Tokyo from above",
      categoryKo: "전망대",
      categoryEn: "VIEW & PHOTO",
      descriptionKo: "도쿄에서 가장 인기 있는 옥상 루프탑 전망대! 맑은 아침 시부야 스크램블 교차로와 후지산, 도쿄 전경을 가장 시원하게 내려다봅니다.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Shibuya+Sky" },
        { labelKo: "예약 바우처 확인", labelEn: "TICKET ↗", url: "https://shibuya-sky.jp" },
      ],
    },
    {
      time: "11:20",
      timeEnd: "11:50",
      titleKo: "시부야 히카리에 & 스크램블 교차로",
      titleEn: "JUJUTSU KAISEN × SHIBUYA",
      subtitleKo: "엄마를 위한 주술회전 시부야 사변 성지 산책",
      subtitleEn: "Shibuya Hikarie · Scramble Crossing",
      categoryKo: "인기 스팟",
      categoryEn: "JUJUTSU KAISEN",
      descriptionKo: "애니메이션 주술회전에 등장한 시부야 히카리에와 전 세계에서 가장 붐비는 스크램블 교차로에서 재미있는 인증샷을 남깁니다.",
    },
    {
      time: "12:00",
      timeEnd: "12:50",
      titleKo: "주술회전 5주년 공식 팝업스토어",
      titleEn: "JUJUTSU KAISEN 5TH ANNIVERSARY POP UP",
      subtitleKo: "시부야 파르코(PARCO) 백화점",
      subtitleEn: "Shibuya PARCO Pop-up Shop",
      categoryKo: "팝업스토어",
      categoryEn: "POP-UP",
      descriptionKo: "여행 일정과 딱 겹치는 주술회전 5주년 특별 한정판 굿즈 팝업스토어! 기념품과 한정판 굿즈 구경.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Shibuya+PARCO" },
        { labelKo: "팝업 행사 안내", labelEn: "EVENT INFO ↗", url: "https://www.shibuyaparco.jp" },
      ],
    },
    {
      time: "",
      titleKo: "",
      titleEn: "",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "시부야역 → 긴자역 (긴자선 지하철 15분)",
      transitLabelEn: "Shibuya → Ginza via Ginza Line",
    },
    {
      time: "13:40",
      timeEnd: "14:40",
      titleKo: "히츠마부시 빈쵸 긴자점 (정통 나고야 장어덮밥)",
      titleEn: "HITSUMABUSHI BINCHO GINZA",
      subtitleKo: "숯불 향 가득한 최고급 보양식 장어덮밥 점심",
      subtitleEn: "Unagi Lunch · Ginza",
      categoryKo: "장어덮밥",
      categoryEn: "UNAGI",
      descriptionKo: "겉은 바삭하고 속은 부드러운 숯불 장어구이! 그냥도 먹고, 파·와사비와도 비벼먹고, 따뜻한 녹차 육수를 부어 오차즈케로도 즐기는 3가지 맛의 별미.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Hitsumabushi+Bincho+Ginza" },
        { labelKo: "예약 내역 확인", labelEn: "RESERVATION ↗", url: "https://www.tablecheck.com" },
      ],
    },
    {
      time: "",
      titleKo: "오후 쇼핑 타임 시작",
      titleEn: "SHOPPING TIME",
      categoryKo: "쇼핑",
      categoryEn: "SHOPPING",
      isTransit: true,
      transitLabelKo: "긴자 ↔ 유라쿠초 ↔ 교바시 도보 쇼핑 코스",
      transitLabelEn: "Ginza → Yurakucho → Kyobashi",
    },
    {
      time: "14:45",
      timeEnd: "15:30",
      titleKo: "하루타 (HARUTA) 루미네 유라쿠초점",
      titleEn: "HARUTA LUMINE YURAKUCHO",
      subtitleKo: "구두 쇼핑: 일본 대표 명품 로퍼",
      subtitleEn: "To Buy: Classic Leather Loafers",
      categoryKo: "신발 쇼핑",
      categoryEn: "SHOPPING",
      descriptionKo: "가볍고 발이 편한 일본 전통 수제화 브랜드 하루타에서 마음에 쏙 드는 클래식 가죽 로퍼 쇼핑.",
      links: [{ labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Lumine+Yurakucho" }],
    },
    {
      time: "15:35",
      timeEnd: "16:25",
      titleKo: "GU 마로니에 게이트 긴자점",
      titleEn: "GU GINZA",
      subtitleKo: "의류 쇼핑: 가성비 셋업 수트 & 캐주얼",
      subtitleEn: "To Buy: Cordlane Setup & Basics",
      categoryKo: "의류 쇼핑",
      categoryEn: "SHOPPING",
      descriptionKo: "트렌디하고 편안한 핏의 가성비 브랜드 GU에서 깔끔한 코드레인 셋업과 데일리 의류 구경.",
    },
    {
      time: "16:25",
      timeEnd: "17:15",
      titleKo: "유니클로 도쿄 플래그십 스토어 (긴자)",
      titleEn: "UNIQLO TOKYO GINZA",
      subtitleKo: "세계 최대 규모 4층 플래그십 매장",
      subtitleEn: "To Buy: Cardigan & Japan Exclusive",
      categoryKo: "패션 쇼핑",
      categoryEn: "SHOPPING",
      descriptionKo: "도쿄에서 가장 크고 고급스러운 유니클로 매장. 일본 현지 한정 상품, 고품질 가디건과 맞춤 상품 둘러보기.",
    },
    {
      time: "17:20",
      timeEnd: "18:30",
      titleKo: "몽벨 (mont-bell) 도쿄 교바시점",
      titleEn: "MONT-BELL TOKYO KYOBASHI",
      subtitleKo: "아웃도어 쇼핑: 초경량 슈페리어 다운 파카",
      subtitleEn: "To Buy: Superior Down Parka",
      categoryKo: "아웃도어",
      categoryEn: "SHOPPING",
      descriptionKo: "오늘 쇼핑의 핵심! 깃털처럼 가볍고 따뜻한 몽벨의 명작 슈페리어 다운 파카 사이즈와 컬러를 가장 먼저 확보합니다.",
      links: [{ labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=mont-bell+Tokyo+Kyobashi" }],
    },
    {
      time: "",
      titleKo: "",
      titleEn: "",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "교바시역 → 신주쿠역 이동 (지하철)",
      transitLabelEn: "Kyobashi → Shinjuku",
    },
    {
      time: "19:15",
      timeEnd: "21:00",
      titleKo: "스시 도쿄 텐 신주쿠 (고급 오마카세)",
      titleEn: "SUSHI TOKYO TEN SHINJUKU",
      subtitleKo: "정성스레 쥐어주는 도쿄 제철 스시 오마카세",
      subtitleEn: "Omakase Dinner",
      categoryKo: "스시 만찬",
      categoryEn: "SUSHI",
      descriptionKo: "도쿄 여행 마지막 정식 만찬! 신선한 제철 해산물로 셰프가 바로 앞에서 쥐어주는 푸짐하고 깔끔한 정통 스시 코스 요리.",
      links: [
        { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Sushi+Tokyo+Ten+Shinjuku" },
        { labelKo: "예약 내역 확인", labelEn: "RESERVATION ↗", url: "https://www.tablecheck.com" },
      ],
    },
    {
      time: "",
      titleKo: "",
      titleEn: "",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "신주쿠역 → 고엔지역 복귀 (JR 츄오선 7분)",
      transitLabelEn: "Shinjuku → Koenji via JR",
    },
    {
      time: "21:40",
      titleKo: "고엔지 나카도리 밤거리 산책 & 이자카야",
      titleEn: "KOENJI NIGHT (IZAKAYA)",
      subtitleKo: "도쿄 현지인이 사랑하는 정겨운 동네 술집",
      subtitleEn: "Nakadori Street & Craft Beer",
      categoryKo: "야간 골목",
      categoryEn: "IZAKAYA",
      descriptionKo: "복잡한 관광지를 벗어나 우리 가족이 머무는 고엔지의 아늑한 나카도리 골목! 숯불 꼬치구이(야키토리)와 시원한 생맥주로 여행 마지막 밤의 건배.",
    },
  ],
  3: [
    {
      time: "09:00",
      titleKo: "여유로운 기상 및 짐 정리",
      titleEn: "SLOW MORNING",
      subtitleKo: "숙소 체크아웃 준비",
      subtitleEn: "Packing & Checkout",
      categoryKo: "아침 기상",
      categoryEn: "MORNING",
      descriptionKo: "알람 없이 푹 자고 일어나 쇼핑한 물건들과 캐리어를 깔끔하게 정리합니다.",
    },
    {
      time: "10:30",
      timeEnd: "11:15",
      titleKo: "토모친 라멘 고엔지 (인생 중화소바)",
      titleEn: "TOMOCHIN RAMEN KOENJI",
      subtitleKo: "도쿄 여행의 마지막을 장식할 깊고 진한 국물",
      subtitleEn: "Chuka Soba Ramen",
      categoryKo: "라멘 맛집",
      categoryEn: "RAMEN",
      descriptionKo: "현지 줄 서는 맛집 토모친 라멘! 맑고 깊은 감칠맛의 육수와 부드러운 차슈가 듬뿍 들어간 츄카소바(中華そば)로 든든한 점심 식사.",
      links: [{ labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Tomochin+Ramen+Koenji" }],
    },
    {
      time: "11:40",
      titleKo: "고엔지역 → 신주쿠역 이동",
      titleEn: "KOENJI → SHINJUKU",
      subtitleKo: "JR 전철로 공항 특급열차 환승역 이동",
      subtitleEn: "JR Chuo Line to Shinjuku",
      categoryKo: "교통 이동",
      categoryEn: "MOVE",
      isTransit: true,
      transitLabelKo: "고엔지역 → 신주쿠역 (JR 전철 7분)",
      transitLabelEn: "JR Line · 7 min",
    },
    {
      time: "13:08",
      titleKo: "나리타 익스프레스 (N'EX 29호 탑승)",
      titleEn: "NARITA EXPRESS 29",
      subtitleKo: "신주쿠역 출발 → 나리타 공항 직통",
      subtitleEn: "Shinjuku → Narita Airport",
      categoryKo: "특급열차",
      categoryEn: "EXPRESS TRAIN",
      descriptionKo: "신주쿠역에서 지정석 특급열차 N'EX에 편안하게 앉아 도쿄 풍경을 바라보며 공항으로 직행합니다.",
      noteKo: "지정석 티켓 사전 확인 필수 / 13:08 정시 출발",
    },
    {
      time: "14:27",
      titleKo: "나리타 공항 도착 및 출국 수속",
      titleEn: "NARITA AIRPORT T1",
      subtitleKo: "수하물 위탁 및 면세점 쇼핑",
      subtitleEn: "Check-in, Baggage & Duty Free",
      categoryKo: "공항 수속",
      categoryEn: "DEPARTURE",
      descriptionKo: "항공사 카운터에서 짐을 부치고 보안검색을 통과한 뒤, 도쿄 바나나·로이스 초콜릿 등 가족과 지인들을 위한 면세점 선물 쇼핑!",
    },
    {
      time: "17:30",
      titleKo: "도쿄 출발 → 서울 인천공항 귀국",
      titleEn: "TOKYO → SEOUL",
      subtitleKo: "즐거웠던 2박 3일 가족 여행 마무리",
      subtitleEn: "See you, Tokyo!",
      categoryKo: "귀국 비행",
      categoryEn: "FLIGHT",
      descriptionKo: "모두 안전하고 행복했던 정가네 가족 도쿄 여행, 따뜻한 추억을 가득 안고 서울로 돌아갑니다.",
    },
  ],
};

// ─── 추천 동선 데이터 (Routes) ─────────────────────────────────────────────

export const routeData: Record<number, { stopsKo: string[]; stopsEn: string[]; mapsUrl: string }> = {
  1: {
    stopsKo: ["나리타 공항", "고엔지 숙소", "신주쿠 와규", "롯폰기 야경", "고엔지 숙소"],
    stopsEn: ["Narita Airport", "Koenji", "Shinjuku", "Roppongi", "Koenji"],
    mapsUrl: "https://maps.google.com/maps/dir/Narita+Airport/Koenji+Tokyo/Shinjuku/Roppongi+Hills/Koenji+Tokyo",
  },
  2: {
    stopsKo: ["고엔지", "시부야 스카이", "시부야 파르코", "긴자·유라쿠초", "교바시 몽벨", "신주쿠 스시", "고엔지"],
    stopsEn: ["Koenji", "Shibuya Sky", "Shibuya PARCO", "Ginza / Yurakucho", "Kyobashi", "Shinjuku", "Koenji"],
    mapsUrl: "https://maps.google.com/maps/dir/Koenji/Shibuya+Sky/Shibuya+PARCO/Ginza+Tokyo/Kyobashi+Tokyo/Shinjuku/Koenji",
  },
  3: {
    stopsKo: ["고엔지 숙소", "토모친 라멘", "신주쿠역 (N'EX)", "나리타 공항"],
    stopsEn: ["Koenji", "Tomochin Ramen", "Shinjuku", "Narita Airport"],
    mapsUrl: "https://maps.google.com/maps/dir/Koenji/Shinjuku+Station/Narita+Airport",
  },
};

// ─── 방문 장소 안내 (Places) ──────────────────────────────────────────────

export const placesData: PlaceCard[] = [
  {
    nameKo: "시부야 스카이 전망대",
    nameEn: "SHIBUYA SKY",
    categoryKo: "탁 트인 360도 루프탑 전망대",
    categoryEn: "OBSERVATION DECK · SHIBUYA",
    descriptionKo: "도쿄 상공 229m 높이에서 시부야 스크램블 교차로와 도쿄 시내 전체를 360도로 조망할 수 있는 최고 인기 명소.",
    hours: "10:00 — 22:30 (입장 마감 21:20)",
    links: [
      { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Shibuya+Sky" },
      { labelKo: "공식 사이트 안내", labelEn: "OFFICIAL ↗", url: "https://shibuya-sky.jp" },
    ],
  },
  {
    nameKo: "시부야 파르코 백화점",
    nameEn: "SHIBUYA PARCO",
    categoryKo: "주술회전 5주년 팝업스토어",
    categoryEn: "SHOPPING & POP-UP · SHIBUYA",
    descriptionKo: "트렌디한 쇼핑몰 파르코에서 열리는 주술회전 5주년 공식 팝업스토어와 캐릭터 굿즈 매장.",
    hours: "11:00 — 21:00",
    links: [
      { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Shibuya+PARCO" },
      { labelKo: "행사 세부 정보", labelEn: "EVENT ↗", url: "https://www.shibuyaparco.jp" },
    ],
  },
  {
    nameKo: "도쿄 시티뷰 (롯폰기 힐즈)",
    nameEn: "TOKYO CITY VIEW",
    categoryKo: "도쿄타워 정면 야경 전망대",
    categoryEn: "NIGHT VIEW · ROPPONGI",
    descriptionKo: "도쿄타워를 가장 아름다운 각도에서 정면으로 마주할 수 있는 실내 파노라마 전망대. 날씨 영향 없이 편안하게 관람 가능합니다.",
    hours: "10:00 — 22:00 (입장 마감 21:30)",
    links: [
      { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Roppongi+Hills+Tokyo+City+View" },
      { labelKo: "공식 티켓 정보", labelEn: "OFFICIAL ↗", url: "https://tcv.roppongihills.com" },
    ],
  },
  {
    nameKo: "몽벨 도쿄 교바시점",
    nameEn: "MONT-BELL TOKYO KYOBASHI",
    categoryKo: "일본 대표 프리미엄 아웃도어",
    categoryEn: "OUTDOOR SHOPPING",
    descriptionKo: "경량 패딩의 명작 '슈페리어 다운 파카'를 비롯해 온 가족 아웃도어 및 방한 의류를 가장 풍부하게 갖춘 대형 매장.",
    hours: "10:00 — 20:00",
    links: [
      { labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=mont-bell+Tokyo+Kyobashi" },
      { labelKo: "매장 안내 보기", labelEn: "STORE ↗", url: "https://www.montbell.jp" },
    ],
  },
  {
    nameKo: "하루타 루미네 유라쿠초점",
    nameEn: "HARUTA LUMINE YURAKUCHO",
    categoryKo: "클래식 수제 가죽 로퍼",
    categoryEn: "LEATHER SHOES",
    descriptionKo: "오랜 역사의 일본 수제화 브랜드. 발이 편하면서도 멋스러운 클래식 가죽 로퍼 전문점.",
    hours: "11:00 — 21:00",
    links: [{ labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=Lumine+Yurakucho" }],
  },
  {
    nameKo: "유니클로 도쿄 플래그십 스토어",
    nameEn: "UNIQLO TOKYO GINZA",
    categoryKo: "긴자 글로벌 플래그십 매장",
    categoryEn: "GLOBAL FLAGSHIP STORE",
    descriptionKo: "압도적인 규모와 인테리어! 프리미엄 니트, 가디건, 일본 한정판 콜라보 아이템을 모두 만나볼 수 있는 긴자의 랜드마크 매장.",
    hours: "11:00 — 21:00",
    links: [{ labelKo: "구글 지도 길찾기", labelEn: "MAP ↗", url: "https://maps.google.com/?q=UNIQLO+TOKYO+Ginza" }],
  },
];

// ─── 도쿄 맛집 리스트 (Food) ───────────────────────────────────────────────

export const foodData: FoodItem[] = [
  {
    emoji: "🥩",
    categoryKo: "최고급 흑우 와규 구이",
    categoryEn: "WAGYU DINNER",
    restaurantKo: "우시고로 신주쿠점",
    restaurantEn: "USHIGORO SHINJUKU",
    day: 1,
    descriptionKo: "입안 가득 부드럽게 녹아내리는 극상의 일본 와규 코스 요리",
  },
  {
    emoji: "🍱",
    categoryKo: "정통 나고야식 장어덮밥",
    categoryEn: "HITSUMABUSHI",
    restaurantKo: "히츠마부시 빈쵸 긴자점",
    restaurantEn: "HITSUMABUSHI BINCHO",
    day: 2,
    descriptionKo: "숯불 향 그윽한 장어구이를 3가지 방식으로 맛보는 든든한 보양식",
  },
  {
    emoji: "🍣",
    categoryKo: "정통 제철 스시 오마카세",
    categoryEn: "SUSHI OMAKASE",
    restaurantKo: "스시 도쿄 텐 신주쿠",
    restaurantEn: "SUSHI TOKYO TEN",
    day: 2,
    descriptionKo: "당일 새벽 수산시장에서 공수한 신선한 생선으로 만드는 품격 있는 스시",
  },
  {
    emoji: "🍜",
    categoryKo: "깊은 감칠맛의 중화소바 라멘",
    categoryEn: "CHUKA SOBA RAMEN",
    restaurantKo: "토모친 라멘 고엔지",
    restaurantEn: "TOMOCHIN RAMEN",
    day: 3,
    descriptionKo: "고엔지 현지 주민들이 사랑하는 맑고 진한 고기 육수의 인생 라멘",
  },
];

// ─── 쇼핑 체크리스트 (Shopping Checklist) ──────────────────────────────────

export const shoppingData: ShoppingItem[] = [
  {
    brandKo: "몽벨",
    brandEn: "mont-bell",
    storeKo: "도쿄 교바시점",
    storeEn: "Tokyo Kyobashi",
    storeLocationKo: "교바시역 5분 거리",
    checkKey: "montbell",
    items: [
      { ko: "슈페리어 다운 파카 (초경량 보온 패딩)", en: "Superior Down Parka" },
    ],
  },
  {
    brandKo: "하루타",
    brandEn: "HARUTA",
    storeKo: "루미네 유라쿠초점",
    storeEn: "Lumine Yurakucho",
    storeLocationKo: "유라쿠초역 루미네 1층",
    checkKey: "haruta",
    items: [
      { ko: "클래식 가죽 로퍼 구두", en: "Classic Leather Loafers" },
    ],
  },
  {
    brandKo: "지유",
    brandEn: "GU",
    storeKo: "마로니에 게이트 긴자점",
    storeEn: "Marronnier Gate Ginza",
    storeLocationKo: "긴자 마로니에 게이트 5층",
    checkKey: "gu",
    items: [
      { ko: "코드레인 셋업 수트 (재킷 & 팬츠)", en: "Cordlane Setup" },
    ],
  },
  {
    brandKo: "유니클로",
    brandEn: "UNIQLO",
    storeKo: "유니클로 도쿄 긴자점",
    storeEn: "UNIQLO TOKYO (Ginza)",
    storeLocationKo: "긴자 3초메 플래그십",
    checkKey: "uniqlo",
    items: [
      { ko: "고급 파인 울 가디건", en: "Premium Wool Cardigan" },
      { ko: "일본 한정판 디자인 상품", en: "Japan Exclusive Items" },
    ],
  },
];

// ─── 예약 및 주요 일정 (Reservation) ───────────────────────────────────────

export const reservationData: ReservationItem[] = [
  {
    dayLabelKo: "1일차 (금)",
    dayLabelEn: "FRI",
    time: "18:30",
    nameKo: "우시고로 신주쿠점",
    nameEn: "USHIGORO SHINJUKU",
    subtitleKo: "와규 디너 코스 예약",
    subtitleEn: "Wagyu Dinner Course",
    status: "reserved",
    statusLabelKo: "예약 완료",
    statusLabelEn: "RESERVED",
  },
  {
    dayLabelKo: "1일차 (금)",
    dayLabelEn: "FRI",
    time: "20:40",
    nameKo: "도쿄 시티뷰 전망대",
    nameEn: "TOKYO CITY VIEW",
    subtitleKo: "롯폰기 힐즈 52층 야경 티켓",
    subtitleEn: "Night View Ticket",
    status: "check",
    statusLabelKo: "티켓 확인",
    statusLabelEn: "CHECK TICKET",
  },
  {
    dayLabelKo: "2일차 (토)",
    dayLabelEn: "SAT",
    time: "10:00",
    nameKo: "시부야 스카이 전망대",
    nameEn: "SHIBUYA SKY",
    subtitleKo: "오전 10시 입장 지정 티켓",
    subtitleEn: "10:00 AM Entry Ticket",
    status: "reserved",
    statusLabelKo: "예약 완료",
    statusLabelEn: "RESERVED",
  },
  {
    dayLabelKo: "2일차 (토)",
    dayLabelEn: "SAT",
    time: "13:40",
    nameKo: "히츠마부시 빈쵸 긴자점",
    nameEn: "HITSUMABUSHI BINCHO",
    subtitleKo: "장어덮밥 점심 식사",
    subtitleEn: "Unagi Lunch Reservation",
    status: "needed",
    statusLabelKo: "예약 확인 필요",
    statusLabelEn: "RESERVATION",
  },
  {
    dayLabelKo: "2일차 (토)",
    dayLabelEn: "SAT",
    time: "19:15",
    nameKo: "스시 도쿄 텐 신주쿠",
    nameEn: "SUSHI TOKYO TEN",
    subtitleKo: "저녁 스시 오마카세",
    subtitleEn: "Sushi Omakase Dinner",
    status: "needed",
    statusLabelKo: "예약 확인 필요",
    statusLabelEn: "RESERVATION",
  },
];

// ─── 여행 전 체크리스트 (Travel Checklist) ──────────────────────────────────

export const checklistData: ChecklistCategory[] = [
  {
    titleKo: "필수 준비물",
    titleEn: "ESSENTIALS",
    key: "essential",
    items: [
      { labelKo: "여권 (유효기간 6개월 이상)", labelEn: "Passport", key: "passport" },
      { labelKo: "전자 항공권 (E-티켓)", labelEn: "Flight E-Ticket", key: "flight" },
      { labelKo: "숙소 예약 바우처 및 주소", labelEn: "Hotel / Airbnb Info", key: "hotel" },
      { labelKo: "해외 여행자보험 가입 증서", labelEn: "Travel Insurance", key: "insurance" },
      { labelKo: "일본 eSIM 또는 데이터 로밍", labelEn: "Japan eSIM / Roaming", key: "esim" },
      { labelKo: "해외 결제 가능 카드 (트래블로그/신용카드)", labelEn: "Credit / Debit Cards", key: "card" },
      { labelKo: "일본 현금 (엔화 지폐 & 동전)", labelEn: "Japanese Yen (Cash)", key: "cash" },
      { labelKo: "교통카드 (스이카/파스모 아이폰 등록 또는 실물)", labelEn: "Suica / Pasmo IC Card", key: "suica" },
    ],
  },
  {
    titleKo: "예약 바우처 확인",
    titleEn: "RESERVATIONS",
    key: "booking",
    items: [
      { labelKo: "시부야 스카이 입장권 QR코드", labelEn: "SHIBUYA SKY QR Ticket", key: "bk-shibuya-sky" },
      { labelKo: "우시고로 신주쿠 와규 예약 확인", labelEn: "USHIGORO Reservation", key: "bk-ushigoro" },
      { labelKo: "도쿄 시티뷰 전망대 티켓", labelEn: "TOKYO CITY VIEW Ticket", key: "bk-tcv" },
      { labelKo: "히츠마부시 빈쵸 장어덮밥 예약 확인", labelEn: "HITSUMABUSHI Reservation", key: "bk-hitsumabushi" },
      { labelKo: "스시 도쿄 텐 오마카세 예약 확인", labelEn: "SUSHI TOKYO TEN Reservation", key: "bk-sushi" },
      { labelKo: "나리타 익스프레스 (N'EX) 열차 티켓", labelEn: "N'EX Train Ticket", key: "bk-nex" },
    ],
  },
  {
    titleKo: "쇼핑 준비",
    titleEn: "SHOPPING PREP",
    key: "shopping",
    items: [
      { labelKo: "쇼핑 물품 담을 접이식 보조 가방", labelEn: "Foldable Shopping Bag", key: "bag" },
      { labelKo: "면세(Tax-Free) 혜택용 실물 여권 소지", labelEn: "Passport for Tax-Free", key: "taxfree" },
    ],
  },
  {
    titleKo: "출발 전날 최종 확인",
    titleEn: "FINAL CHECK",
    key: "dayBefore",
    items: [
      { labelKo: "도쿄 현지 3일간 날씨 & 옷차림 확인", labelEn: "Tokyo Weather & Outfit", key: "weather" },
      { labelKo: "시부야 스카이 옥상 개방 여부 (우천시 체크)", labelEn: "SHIBUYA SKY Rooftop Status", key: "skycheck" },
      { labelKo: "주술회전 팝업스토어 입장 방식 (현장 대기/정리권)", labelEn: "Jujutsu Kaisen Pop-up Entry", key: "jjkcheck" },
      { labelKo: "공항 복귀용 N'EX 29호 열차 출발시간 재확인", labelEn: "N'EX 29 Departure Time", key: "nextime" },
    ],
  },
];
