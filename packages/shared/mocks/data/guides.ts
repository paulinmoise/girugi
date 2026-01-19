/**
 * Mock Guides Data
 *
 * Provides realistic guide content for UI testing.
 * Includes variety: different categories, bilingual content, various lengths.
 */

import { MockGuide, GuideCategory } from '../types';

// ============================================
// Base timestamp helpers
// ============================================

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

// ============================================
// Mock Guides
// ============================================

export const mockGuides: MockGuide[] = [
  // Getting Started: Get a Phone Number (First 7 Task related)
  {
    _id: 'guide_001',
    slug: 'get-korean-phone-number',
    category: 'getting_started',
    title: {
      en: 'Get a Korean Phone Number',
      ko: '한국 전화번호 만들기',
    },
    description: {
      en: 'How to get a Korean SIM card or eSIM as a foreigner - prepaid and postpaid options.',
      ko: '외국인으로서 한국 SIM 카드 또는 eSIM을 받는 방법 - 선불 및 후불 옵션.',
    },
    overview: {
      en: 'A Korean phone number is essential for daily life - from signing up for services to receiving verification codes. As a foreigner, you have several options depending on your visa status and how long you plan to stay.',
      ko: '한국 전화번호는 서비스 가입부터 인증 코드 수신까지 일상생활에 필수입니다. 외국인으로서 비자 상태와 체류 기간에 따라 여러 옵션이 있습니다.',
    },
    whatYouNeed: {
      en: ['Passport', 'ARC (for postpaid plans)', 'Credit/debit card', 'Address in Korea (for postpaid)'],
      ko: ['여권', '외국인등록증 (후불 요금제용)', '신용/체크카드', '한국 내 주소 (후불용)'],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Choose your option',
          ko: '옵션 선택하기',
        },
        content: {
          en: 'Prepaid SIM: Available at airports and convenience stores. No ARC needed but limited features.\n\nPostpaid plan: Requires ARC. Better rates and full features including international calls.',
          ko: '선불 SIM: 공항과 편의점에서 구매 가능. 외국인등록증 불필요하지만 기능 제한.\n\n후불 요금제: 외국인등록증 필요. 더 나은 요금과 국제전화 포함 전체 기능.',
        },
        tip: {
          en: 'If you just arrived, get a prepaid SIM at the airport to have connectivity immediately.',
          ko: '방금 도착했다면 공항에서 선불 SIM을 구매해 바로 연결하세요.',
        },
      },
      {
        order: 2,
        title: {
          en: 'Popular carriers',
          ko: '주요 통신사',
        },
        content: {
          en: 'The three major carriers are:\n\n• KT (olleh) - Best coverage nationwide\n• SKT (SK Telecom) - Largest subscriber base\n• LG U+ - Competitive prices\n\nAll offer foreigner-friendly services and English support.',
          ko: '3대 통신사:\n\n• KT (올레) - 전국 최고 커버리지\n• SKT (SK텔레콤) - 최대 가입자 수\n• LG U+ - 경쟁력 있는 가격\n\n모두 외국인 친화적 서비스와 영어 지원 제공.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Visit the store or order online',
          ko: '매장 방문 또는 온라인 주문',
        },
        content: {
          en: 'For postpaid plans, visit a carrier store with your passport and ARC. Many stores in foreigner-heavy areas (Itaewon, Hongdae) have English-speaking staff.\n\nOnline options like "Chingu Mobile" offer plans specifically for foreigners.',
          ko: '후불 요금제는 여권과 외국인등록증을 가지고 통신사 매장 방문. 외국인이 많은 지역(이태원, 홍대) 매장에는 영어 가능 직원이 있습니다.\n\n"친구모바일" 같은 온라인 옵션은 외국인 전용 요금제를 제공합니다.',
        },
      },
      {
        order: 4,
        title: {
          en: 'Activate your SIM',
          ko: 'SIM 활성화하기',
        },
        content: {
          en: 'Insert the SIM card and follow the activation instructions. Most prepaid SIMs work immediately. Postpaid plans may take 1-2 hours to fully activate.',
          ko: 'SIM 카드를 삽입하고 활성화 지침을 따르세요. 대부분의 선불 SIM은 즉시 작동합니다. 후불 요금제는 완전 활성화까지 1-2시간이 걸릴 수 있습니다.',
        },
        tip: {
          en: 'Save your carrier\'s customer service number - it\'s useful if you have issues.',
          ko: '통신사 고객센터 번호를 저장해두세요 - 문제가 생기면 유용합니다.',
        },
      },
    ],
    commonMistakes: {
      en: [
        'Trying to get a postpaid plan without an ARC',
        'Not bringing your passport to the store',
        'Forgetting to check if your phone is unlocked',
        'Not asking about foreigner-specific plans',
      ],
      ko: [
        '외국인등록증 없이 후불 요금제 가입 시도',
        '매장에 여권 미지참',
        '휴대폰 잠금 해제 여부 미확인',
        '외국인 전용 요금제에 대해 문의하지 않음',
      ],
    },
    externalLinks: [
      { label: 'KT Olleh International', url: 'https://roaming.kt.com/rental/eng/main.asp' },
      { label: 'SK Telecom Foreigners', url: 'https://www.sktelecom.com/index_en.html' },
    ],
    relatedGuideIds: ['guide_002', 'guide_003'],
    lastReviewedAt: now - 15 * day,
    publishedAt: now - 60 * day,
    updatedAt: now - 15 * day,
  },

  // Immigration: Register ARC (First 7 Task related)
  {
    _id: 'guide_002',
    slug: 'register-arc-alien-registration',
    category: 'immigration',
    title: {
      en: 'Register for Your ARC (Alien Registration Card)',
      ko: '외국인등록증(ARC) 신청하기',
    },
    description: {
      en: 'Step-by-step guide to applying for and receiving your Alien Registration Card in Korea.',
      ko: '한국에서 외국인등록증 신청 및 수령을 위한 단계별 가이드.',
    },
    overview: {
      en: 'The Alien Registration Card (ARC) is your official ID in Korea. It\'s required for opening bank accounts, signing phone contracts, and many other daily activities. You must apply within 90 days of arrival if staying longer than 90 days.',
      ko: '외국인등록증(ARC)은 한국에서의 공식 신분증입니다. 은행 계좌 개설, 휴대폰 계약 등 많은 일상 활동에 필요합니다. 90일 이상 체류시 입국 후 90일 이내에 신청해야 합니다.',
    },
    whatYouNeed: {
      en: [
        'Passport',
        'Visa (in passport)',
        'Application form (available at immigration office)',
        'Passport-sized photo (3.5cm x 4.5cm)',
        'Fee: 30,000 KRW',
        'Proof of address (utility bill, lease contract)',
      ],
      ko: [
        '여권',
        '비자 (여권 내)',
        '신청서 (출입국관리사무소에서 제공)',
        '여권 사진 (3.5cm x 4.5cm)',
        '수수료: 30,000원',
        '주소 증명 (공과금 청구서, 임대 계약서)',
      ],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Book an appointment',
          ko: '예약하기',
        },
        content: {
          en: 'Visit the Hi Korea website (hikorea.go.kr) to book an appointment at your local immigration office. Walk-ins are possible but expect long waits.',
          ko: 'Hi Korea 웹사이트(hikorea.go.kr)에서 관할 출입국관리사무소 방문 예약을 하세요. 예약 없이 방문도 가능하지만 대기 시간이 깁니다.',
        },
        tip: {
          en: 'Book at least 1-2 weeks in advance - appointments fill up quickly!',
          ko: '최소 1-2주 전에 예약하세요 - 예약이 빨리 찹니다!',
        },
      },
      {
        order: 2,
        title: {
          en: 'Prepare your documents',
          ko: '서류 준비하기',
        },
        content: {
          en: 'Gather all required documents. Make copies of everything. The application form can be filled out at the office or downloaded from Hi Korea.',
          ko: '필요한 모든 서류를 준비하세요. 모든 것의 사본을 만드세요. 신청서는 사무소에서 작성하거나 Hi Korea에서 다운로드할 수 있습니다.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Visit immigration office',
          ko: '출입국관리사무소 방문',
        },
        content: {
          en: 'Arrive 15 minutes early. Take a number and wait to be called. The officer will review your documents and take your fingerprints.',
          ko: '15분 일찍 도착하세요. 번호표를 뽑고 호출을 기다리세요. 담당자가 서류를 검토하고 지문을 채취합니다.',
        },
        tip: {
          en: 'Bring a book or your phone charged - waits can be long even with appointments.',
          ko: '책이나 충전된 휴대폰을 가져오세요 - 예약이 있어도 대기 시간이 길 수 있습니다.',
        },
      },
      {
        order: 4,
        title: {
          en: 'Receive your ARC',
          ko: 'ARC 수령하기',
        },
        content: {
          en: 'You\'ll receive a receipt with a pickup date (usually 2-3 weeks). Return to collect your ARC, or choose mail delivery for an extra fee.',
          ko: '수령 날짜가 적힌 영수증을 받습니다 (보통 2-3주). ARC를 받으러 다시 방문하거나, 추가 비용을 내고 우편 배송을 선택할 수 있습니다.',
        },
      },
    ],
    commonMistakes: {
      en: [
        'Waiting until the last minute to apply (90-day deadline)',
        'Forgetting the exact photo size requirements',
        'Not bringing proof of address',
        'Arriving late for your appointment',
      ],
      ko: [
        '마감일(90일)까지 신청을 미루는 것',
        '정확한 사진 크기 요구사항을 잊는 것',
        '주소 증명을 가져오지 않는 것',
        '예약 시간에 늦는 것',
      ],
    },
    externalLinks: [
      { label: 'Hi Korea (Official)', url: 'https://www.hikorea.go.kr' },
      { label: 'Immigration Contact Center 1345', url: 'https://www.immigration.go.kr' },
    ],
    relatedGuideIds: ['guide_003', 'guide_005'],
    lastReviewedAt: now - 10 * day,
    publishedAt: now - 90 * day,
    updatedAt: now - 10 * day,
  },

  // Banking: Open Bank Account (First 7 Task related)
  {
    _id: 'guide_003',
    slug: 'open-korean-bank-account',
    category: 'banking_finance',
    title: {
      en: 'Open a Korean Bank Account',
      ko: '한국 은행 계좌 개설하기',
    },
    description: {
      en: 'Guide to opening a bank account in Korea as a foreigner - requirements and best banks.',
      ko: '외국인으로서 한국에서 은행 계좌를 개설하는 가이드 - 요구사항 및 추천 은행.',
    },
    overview: {
      en: 'A Korean bank account is essential for receiving salary, paying bills, and using local payment apps like KakaoPay. Most banks offer foreigner-friendly services, though requirements vary.',
      ko: '한국 은행 계좌는 급여 수령, 공과금 납부, 카카오페이 같은 결제 앱 사용에 필수입니다. 대부분의 은행이 외국인 친화적 서비스를 제공하지만 요구사항은 다양합니다.',
    },
    whatYouNeed: {
      en: [
        'Passport',
        'ARC (Alien Registration Card)',
        'Proof of address',
        'Phone number (Korean)',
        'Initial deposit (varies by bank)',
      ],
      ko: [
        '여권',
        '외국인등록증',
        '주소 증명',
        '전화번호 (한국)',
        '초기 입금액 (은행마다 다름)',
      ],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Choose a bank',
          ko: '은행 선택하기',
        },
        content: {
          en: 'Popular banks for foreigners:\n\n• Shinhan Bank - Best English support\n• Woori Bank - Foreigner-friendly\n• KEB Hana Bank - Good for remittances\n• Kakao Bank - App-only, convenient but needs Korean phone',
          ko: '외국인에게 인기 있는 은행:\n\n• 신한은행 - 최고의 영어 지원\n• 우리은행 - 외국인 친화적\n• KEB 하나은행 - 해외 송금에 좋음\n• 카카오뱅크 - 앱 전용, 편리하지만 한국 전화번호 필요',
        },
      },
      {
        order: 2,
        title: {
          en: 'Visit a branch',
          ko: '지점 방문하기',
        },
        content: {
          en: 'Visit a branch in a foreigner-heavy area for better English support. Take a number and wait for a banker. Some banks require appointments.',
          ko: '더 나은 영어 지원을 위해 외국인이 많은 지역의 지점을 방문하세요. 번호표를 뽑고 상담원을 기다리세요. 일부 은행은 예약이 필요합니다.',
        },
        tip: {
          en: 'Visit branches near Itaewon, Hongdae, or Gangnam for staff who speak English.',
          ko: '영어 가능 직원이 있는 이태원, 홍대, 강남 근처 지점을 방문하세요.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Complete application',
          ko: '신청서 작성하기',
        },
        content: {
          en: 'Fill out the application form (staff will help). You\'ll need to choose account type and set up security features like OTP.',
          ko: '신청서를 작성합니다 (직원이 도와줍니다). 계좌 유형을 선택하고 OTP 같은 보안 기능을 설정해야 합니다.',
        },
      },
      {
        order: 4,
        title: {
          en: 'Get your card and app',
          ko: '카드와 앱 받기',
        },
        content: {
          en: 'You\'ll receive a debit card (immediately or mailed). Download the bank\'s mobile app and register. You\'ll need your Korean phone number for verification.',
          ko: '체크카드를 받습니다 (즉시 또는 우편). 은행 모바일 앱을 다운로드하고 등록하세요. 인증을 위해 한국 전화번호가 필요합니다.',
        },
      },
    ],
    commonMistakes: {
      en: [
        'Trying to open an account without an ARC',
        'Not having a Korean phone number first',
        'Choosing a branch without English support',
        'Not setting up mobile banking immediately',
      ],
      ko: [
        '외국인등록증 없이 계좌 개설 시도',
        '한국 전화번호 없이 시도',
        '영어 지원 없는 지점 선택',
        '모바일 뱅킹 즉시 설정 안 함',
      ],
    },
    externalLinks: [
      { label: 'Shinhan Global', url: 'https://www.shinhan.com/en/index.jsp' },
      { label: 'Woori Bank English', url: 'https://spot.wooribank.com/pot/Dream?withyou=en' },
    ],
    relatedGuideIds: ['guide_002'],
    lastReviewedAt: now - 5 * day,
    publishedAt: now - 45 * day,
    updatedAt: now - 5 * day,
  },

  // Healthcare guide
  {
    _id: 'guide_004',
    slug: 'visiting-korean-hospital',
    category: 'healthcare',
    title: {
      en: 'Visiting a Hospital in Korea',
      ko: '한국 병원 방문하기',
    },
    description: {
      en: 'What to expect when visiting a Korean hospital or clinic, and how to communicate effectively.',
      ko: '한국 병원이나 클리닉 방문 시 알아야 할 것과 효과적인 의사소통 방법.',
    },
    overview: {
      en: 'Korean healthcare is efficient and affordable, especially with NHIS (National Health Insurance). Understanding the system will help you get care quickly.',
      ko: '한국 의료 시스템은 특히 국민건강보험이 있으면 효율적이고 저렴합니다. 시스템을 이해하면 빠르게 진료받을 수 있습니다.',
    },
    whatYouNeed: {
      en: ['ARC or passport', 'NHIS card (if enrolled)', 'Cash or card for payment', 'List of symptoms (written down helps)'],
      ko: ['외국인등록증 또는 여권', '건강보험증 (가입된 경우)', '결제용 현금 또는 카드', '증상 목록 (적어가면 도움됨)'],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Choose the right facility',
          ko: '적절한 시설 선택하기',
        },
        content: {
          en: 'Clinic (의원): For minor issues, faster service\nHospital (병원): For more serious conditions\nUniversity Hospital (대학병원): For specialists and complex cases',
          ko: '의원: 경미한 문제, 빠른 서비스\n병원: 더 심각한 상태\n대학병원: 전문의 및 복잡한 케이스',
        },
      },
      {
        order: 2,
        title: {
          en: 'Register at reception',
          ko: '접수하기',
        },
        content: {
          en: 'Go to the reception desk (접수) and provide your ID and insurance card. You may need to fill out a brief form about your symptoms.',
          ko: '접수 데스크에서 신분증과 보험증을 제시하세요. 증상에 대한 간단한 양식을 작성해야 할 수 있습니다.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Wait and see the doctor',
          ko: '대기 후 진료',
        },
        content: {
          en: 'Wait in the waiting area until your name/number is called. Consultations are typically brief (5-10 minutes). Speak slowly and use simple words.',
          ko: '대기실에서 이름/번호가 호출될 때까지 기다리세요. 진료는 보통 짧습니다 (5-10분). 천천히 말하고 간단한 단어를 사용하세요.',
        },
        tip: {
          en: 'Use a translation app or bring a Korean-speaking friend if your Korean is limited.',
          ko: '한국어가 서툴면 번역 앱을 사용하거나 한국어 가능한 친구와 함께 가세요.',
        },
      },
      {
        order: 4,
        title: {
          en: 'Pay and get prescriptions',
          ko: '수납 및 처방전 받기',
        },
        content: {
          en: 'Pay at the cashier (수납). Take your prescription to a pharmacy (약국) nearby - they\'re usually right outside hospitals.',
          ko: '수납 창구에서 결제하세요. 처방전을 근처 약국에 가져가세요 - 보통 병원 바로 밖에 있습니다.',
        },
      },
    ],
    commonMistakes: {
      en: [
        'Going directly to a large hospital for minor issues',
        'Not enrolling in NHIS and paying full price',
        'Forgetting to bring ID',
      ],
      ko: [
        '경미한 문제로 바로 대형 병원 방문',
        '건강보험 미가입으로 전액 부담',
        '신분증 미지참',
      ],
    },
    externalLinks: [
      { label: 'NHIS English', url: 'https://www.nhis.or.kr/english/' },
    ],
    relatedGuideIds: ['guide_005'],
    lastReviewedAt: now - 30 * day,
    publishedAt: now - 120 * day,
    updatedAt: now - 30 * day,
  },

  // Emergency guide
  {
    _id: 'guide_005',
    slug: 'emergency-numbers-korea',
    category: 'emergency',
    title: {
      en: 'Emergency Numbers in Korea',
      ko: '한국 긴급 전화번호',
    },
    description: {
      en: 'Important emergency numbers every foreigner in Korea should know.',
      ko: '한국에 있는 모든 외국인이 알아야 할 중요한 긴급 전화번호.',
    },
    overview: {
      en: 'Keep these numbers saved in your phone. Most services have English support or can connect you to an interpreter.',
      ko: '이 번호들을 휴대폰에 저장해 두세요. 대부분의 서비스는 영어 지원이 있거나 통역사에 연결해 줄 수 있습니다.',
    },
    whatYouNeed: {
      en: ['Phone with Korean SIM'],
      ko: ['한국 SIM이 있는 휴대폰'],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Police: 112',
          ko: '경찰: 112',
        },
        content: {
          en: 'Call 112 for police emergencies. English interpretation available. For non-emergencies, visit your local police station.',
          ko: '경찰 긴급 상황시 112로 전화하세요. 영어 통역 가능. 비긴급 상황은 관할 경찰서 방문.',
        },
      },
      {
        order: 2,
        title: {
          en: 'Fire/Ambulance: 119',
          ko: '소방/응급: 119',
        },
        content: {
          en: 'Call 119 for fire emergencies or ambulance. English support available. Stay calm and provide your location.',
          ko: '화재나 응급 상황시 119로 전화하세요. 영어 지원 가능. 침착하게 위치를 알려주세요.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Immigration: 1345',
          ko: '출입국: 1345',
        },
        content: {
          en: 'Immigration helpline for visa questions, ARC issues, and foreigner support. English, Chinese, Vietnamese support.',
          ko: '비자 질문, 외국인등록증 문제, 외국인 지원을 위한 출입국 상담 전화. 영어, 중국어, 베트남어 지원.',
        },
      },
      {
        order: 4,
        title: {
          en: 'Medical Emergencies: 1339',
          ko: '응급 의료: 1339',
        },
        content: {
          en: 'Health-related questions and guidance to nearest hospital. Available 24/7 with English support.',
          ko: '건강 관련 질문과 가장 가까운 병원 안내. 24시간 영어 지원 가능.',
        },
      },
      {
        order: 5,
        title: {
          en: 'Tourist Helpline: 1330',
          ko: '관광 안내: 1330',
        },
        content: {
          en: 'Korea Tourism helpline - translation help, tourist complaints, general information. Multilingual support.',
          ko: '한국 관광 안내 전화 - 통역 도움, 관광 불편 신고, 일반 정보. 다국어 지원.',
        },
      },
    ],
    externalLinks: [
      { label: 'Korea 112 App', url: 'https://www.police.go.kr' },
    ],
    relatedGuideIds: ['guide_004'],
    lastReviewedAt: now - 7 * day,
    publishedAt: now - 180 * day,
    updatedAt: now - 7 * day,
  },

  // Transportation guide
  {
    _id: 'guide_006',
    slug: 'korean-transit-card',
    category: 'transportation',
    title: {
      en: 'Get a Korean Transit Card (T-money)',
      ko: '한국 교통카드(티머니) 만들기',
    },
    description: {
      en: 'How to get and use T-money, Cashbee, and other transit cards for public transportation.',
      ko: '대중교통을 위한 티머니, 캐시비 등 교통카드 구매 및 사용 방법.',
    },
    overview: {
      en: 'Transit cards make using public transportation convenient and give you discounts. You can use them on buses, subways, and even taxis and convenience stores.',
      ko: '교통카드는 대중교통 이용을 편리하게 하고 할인을 받을 수 있습니다. 버스, 지하철, 심지어 택시와 편의점에서도 사용 가능합니다.',
    },
    whatYouNeed: {
      en: ['Cash (10,000-20,000 KRW for card + initial charge)'],
      ko: ['현금 (카드 + 초기 충전용 10,000-20,000원)'],
    },
    steps: [
      {
        order: 1,
        title: {
          en: 'Buy a card',
          ko: '카드 구매하기',
        },
        content: {
          en: 'Buy at convenience stores (GS25, CU, 7-Eleven), subway stations, or airports. Cards cost 2,500-5,000 KRW.',
          ko: '편의점(GS25, CU, 세븐일레븐), 지하철역, 공항에서 구매하세요. 카드 가격은 2,500-5,000원입니다.',
        },
      },
      {
        order: 2,
        title: {
          en: 'Charge your card',
          ko: '카드 충전하기',
        },
        content: {
          en: 'Add money at convenience stores, subway station machines, or T-money kiosks. Most machines have English options.',
          ko: '편의점, 지하철역 기계, 티머니 키오스크에서 충전하세요. 대부분의 기계에 영어 옵션이 있습니다.',
        },
        tip: {
          en: 'Keep at least 5,000 KRW on your card to avoid getting stuck at gates.',
          ko: '게이트에서 막히지 않도록 최소 5,000원은 유지하세요.',
        },
      },
      {
        order: 3,
        title: {
          en: 'Tap when entering and exiting',
          ko: '탑승/하차 시 태그하기',
        },
        content: {
          en: 'Tap your card on the reader when boarding AND alighting (both buses and subways). Forgetting to tap out results in maximum fare.',
          ko: '탑승할 때와 내릴 때 모두 리더기에 카드를 태그하세요. 하차 태그를 잊으면 최대 요금이 부과됩니다.',
        },
      },
    ],
    commonMistakes: {
      en: [
        'Forgetting to tap out when exiting',
        'Letting balance run too low',
        'Not knowing you can use it at convenience stores',
      ],
      ko: [
        '하차 시 태그 잊음',
        '잔액이 너무 낮아지게 둠',
        '편의점에서도 사용 가능한 것을 모름',
      ],
    },
    externalLinks: [
      { label: 'T-money Official', url: 'https://www.t-money.co.kr/eng' },
    ],
    relatedGuideIds: [],
    lastReviewedAt: now - 20 * day,
    publishedAt: now - 150 * day,
    updatedAt: now - 20 * day,
  },
];

// ============================================
// Helper functions
// ============================================

/**
 * Get a mock guide by ID
 */
export function getMockGuideById(id: string): MockGuide | undefined {
  return mockGuides.find((guide) => guide._id === id);
}

/**
 * Get a mock guide by slug
 */
export function getMockGuideBySlug(slug: string): MockGuide | undefined {
  return mockGuides.find((guide) => guide.slug === slug);
}

/**
 * Get mock guides by category
 */
export function getMockGuidesByCategory(category: GuideCategory): MockGuide[] {
  return mockGuides.filter((guide) => guide.category === category);
}

/**
 * Search mock guides by keyword
 */
export function searchMockGuides(query: string, language: 'en' | 'ko' = 'en'): MockGuide[] {
  const lowerQuery = query.toLowerCase();
  return mockGuides.filter((guide) => {
    const title = guide.title[language].toLowerCase();
    const description = guide.description[language].toLowerCase();
    return title.includes(lowerQuery) || description.includes(lowerQuery);
  });
}
