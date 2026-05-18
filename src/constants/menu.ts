export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  detail: string;
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  // 코스 요리
  {
    id: 1,
    name: '런치 코스 (난)',
    category: '코스 요리',
    price: '45,000',
    description: '가볍게 즐길 수 있는 난향만의 점심 특선 코스',
    detail: '삼선 냉채, 게살 샥스핀 스프, 팔보채, 중새우 요리, 탕수육, 식사, 디저트로 구성된 합리적인 가격의 런치 코스입니다.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    name: '디너 코스 (향)',
    category: '코스 요리',
    price: '85,000',
    description: '품격 있는 저녁 모임을 위한 정통 중식 코스',
    detail: '오품 냉채, 발재 전복 샥스핀 스프, 전가복, 간소 중새우, 소고기 안심 볶음, 식사, 디저트로 이어지는 난향의 베스트 셀러 코스입니다.',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=1200'
  },
  // 시그니처 (요리)
  {
    id: 3,
    name: '전복 해삼 관자 볶음 (전가복)',
    category: '요리류',
    price: '120,000',
    description: '바다의 보물을 가득 담은 난향의 대표 보양식',
    detail: '온 가족이 복을 누린다는 의미를 지닌 전가복입니다. 최고급 전복, 해삼, 관자, 새우와 자연산 송이를 함께 볶아내어 깊은 풍미를 자랑합니다.',
    image: '/assets/images/jeongabok.png'
  },
  {
    id: 4,
    name: '북경 오리 (베이징덕)',
    category: '요리류',
    price: '150,000',
    description: '정통 방식으로 구워낸 바삭한 껍질의 북경 오리',
    detail: '특제 소스를 발라 저온 숙성시킨 후 화덕에서 정성껏 구웠습니다. 바삭한 껍질과 촉촉한 속살을 밀전병에 싸서 드시면 일품입니다.',
    image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 5,
    name: '어향 동고',
    category: '요리류',
    price: '65,000',
    description: '표고버섯 속에 다진 새우를 채워 어향 소스로 맛을 낸 요리',
    detail: '신선한 표고버섯의 향과 탱글탱글한 새우의 식감이 매콤달콤한 어향 소스와 어우러져 깊은 맛을 냅니다.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200'
  },
  // 식사류
  {
    id: 6,
    name: '삼선 자장면',
    category: '식사류',
    price: '12,000',
    description: '각종 해산물과 볶은 춘장의 고소한 조화',
    detail: '매일 아침 직접 볶는 춘장과 신선한 오징어, 새우가 듬뿍 들어간 정통 자장면입니다.',
    image: '/assets/images/jajangmyeon.png'
  },
  {
    id: 7,
    name: '특선 짬뽕',
    category: '식사류',
    price: '15,000',
    description: '불맛 가득한 진한 국물과 신선한 해산물',
    detail: '강한 화력으로 야채를 볶아 불맛을 살리고, 장시간 우려낸 전용 육수로 깊은 맛을 낸 명품 짬뽕입니다.',
    image: '/assets/images/jjamppong.png'
  },
  {
    id: 8,
    name: '게살 볶음밥',
    category: '식사류',
    price: '14,000',
    description: '생게살을 넣어 고소하게 볶아낸 식사 요리',
    detail: '인위적인 맛을 배제하고 생게살 본연의 단맛과 계란의 고소함이 잘 어우러진 볶음밥입니다.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be285e7?auto=format&fit=crop&q=80&w=1200'
  }
];
