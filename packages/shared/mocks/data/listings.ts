/**
 * Mock Listings Data (Discover Directory)
 *
 * Provides realistic place listings for UI testing.
 * Includes variety: different categories, cities, dietary options.
 */

import { MockListing, MockReview, ListingCategory } from '../types';

// ============================================
// Base timestamp helpers
// ============================================

const now = Date.now();
const day = 24 * 60 * 60 * 1000;

// ============================================
// Mock Listings
// ============================================

export const mockListings: MockListing[] = [
  // Vegetarian Restaurant - Seoul
  {
    _id: 'listing_001',
    name: {
      en: 'Plant Seoul',
      ko: '플랜트 서울',
    },
    category: 'restaurant',
    city: 'seoul',
    area: 'Itaewon',
    address: {
      en: '45 Itaewon-ro, Yongsan-gu, Seoul',
      ko: '서울 용산구 이태원로 45',
    },
    dietaryTags: ['vegan', 'vegetarian', 'gluten_free'],
    description: {
      en: 'Fully vegan restaurant with creative Korean-fusion dishes. English menu available.',
      ko: '창의적인 한식 퓨전 요리를 제공하는 완전 비건 레스토랑. 영어 메뉴 제공.',
    },
    tips: {
      en: 'Try the mushroom bibimbap. Reservations recommended for dinner.',
      ko: '버섯 비빔밥을 추천합니다. 저녁은 예약 권장.',
    },
    phone: '02-1234-5678',
    website: 'https://plantseoul.com',
    hours: '11:00-21:00, Closed Mondays',
    priceRange: 2,
    averageRating: 4.5,
    reviewCount: 47,
    status: 'approved',
    createdAt: now - 60 * day,
    updatedAt: now - 10 * day,
  },

  // Halal Restaurant - Seoul
  {
    _id: 'listing_002',
    name: {
      en: 'Halal Kitchen Gangnam',
      ko: '할랄 키친 강남',
    },
    category: 'restaurant',
    city: 'seoul',
    area: 'Gangnam',
    address: {
      en: '123 Gangnam-daero, Gangnam-gu, Seoul',
      ko: '서울 강남구 강남대로 123',
    },
    dietaryTags: ['halal'],
    description: {
      en: 'Certified halal restaurant serving Korean BBQ and Middle Eastern dishes.',
      ko: '한국식 바베큐와 중동 요리를 제공하는 인증된 할랄 레스토랑.',
    },
    tips: {
      en: 'They have a separate halal BBQ grill. Great for groups.',
      ko: '별도의 할랄 바베큐 그릴이 있습니다. 단체 모임에 좋음.',
    },
    phone: '02-2345-6789',
    hours: '11:00-22:00',
    priceRange: 3,
    averageRating: 4.2,
    reviewCount: 83,
    status: 'approved',
    createdAt: now - 90 * day,
    updatedAt: now - 5 * day,
  },

  // Cafe - Seoul
  {
    _id: 'listing_003',
    name: {
      en: 'Coffee Hanyak',
      ko: '커피 한약',
    },
    category: 'cafe',
    city: 'seoul',
    area: 'Hongdae',
    address: {
      en: '78 Wausan-ro, Mapo-gu, Seoul',
      ko: '서울 마포구 와우산로 78',
    },
    dietaryTags: ['vegan', 'dairy_free'],
    description: {
      en: 'Cozy cafe with Korean traditional medicine-inspired drinks. Oat and soy milk available.',
      ko: '한방 음료가 특징인 아늑한 카페. 귀리, 두유 제공.',
    },
    tips: {
      en: 'The rooftop has great views. Try the omija latte.',
      ko: '옥상에서 전망이 좋습니다. 오미자 라떼 추천.',
    },
    website: 'https://coffeehanyak.kr',
    hours: '10:00-22:00',
    priceRange: 2,
    averageRating: 4.7,
    reviewCount: 156,
    status: 'approved',
    createdAt: now - 120 * day,
    updatedAt: now - 2 * day,
  },

  // Regular Restaurant - Seoul
  {
    _id: 'listing_004',
    name: {
      en: 'Myeongdong Gyoza',
      ko: '명동교자',
    },
    category: 'restaurant',
    city: 'seoul',
    area: 'Myeongdong',
    address: {
      en: '29 Myeongdong 10-gil, Jung-gu, Seoul',
      ko: '서울 중구 명동10길 29',
    },
    dietaryTags: [],
    description: {
      en: 'Famous for hand-made dumplings and kalguksu noodles. Long-standing Seoul institution.',
      ko: '수제 만두와 칼국수로 유명한 서울의 오래된 명소.',
    },
    tips: {
      en: 'Be prepared to wait in line. Cash only!',
      ko: '줄 설 준비를 하세요. 현금만 가능!',
    },
    hours: '10:30-21:30',
    priceRange: 1,
    averageRating: 4.3,
    reviewCount: 892,
    status: 'approved',
    createdAt: now - 200 * day,
    updatedAt: now - 15 * day,
  },

  // Grocery Store - Seoul
  {
    _id: 'listing_005',
    name: {
      en: 'Foreign Food Mart',
      ko: '외국 식품 마트',
    },
    category: 'grocery',
    city: 'seoul',
    area: 'Itaewon',
    address: {
      en: '15 Noksapyeong-daero, Yongsan-gu, Seoul',
      ko: '서울 용산구 녹사평대로 15',
    },
    dietaryTags: ['halal', 'vegetarian', 'vegan', 'gluten_free'],
    description: {
      en: 'International grocery store with wide selection of imported goods. Halal section available.',
      ko: '다양한 수입품을 갖춘 외국 식품점. 할랄 코너 있음.',
    },
    tips: {
      en: 'Great for finding ingredients from home. Prices are higher but worth it.',
      ko: '고향 식재료를 찾기에 좋습니다. 가격은 높지만 가치 있음.',
    },
    hours: '09:00-22:00',
    priceRange: 3,
    averageRating: 4.1,
    reviewCount: 234,
    status: 'approved',
    createdAt: now - 150 * day,
    updatedAt: now - 20 * day,
  },

  // Medical Service - Seoul
  {
    _id: 'listing_006',
    name: {
      en: 'Yonsei International Clinic',
      ko: '연세 국제 클리닉',
    },
    category: 'healthcare',
    city: 'seoul',
    area: 'Sinchon',
    address: {
      en: '50 Yonsei-ro, Seodaemun-gu, Seoul',
      ko: '서울 서대문구 연세로 50',
    },
    dietaryTags: [],
    description: {
      en: 'English-speaking doctors. General practice, vaccinations, health checkups.',
      ko: '영어 가능 의사진. 일반 진료, 예방 접종, 건강 검진.',
    },
    tips: {
      en: 'Book appointments online. Accepts most insurance.',
      ko: '온라인 예약 가능. 대부분의 보험 적용.',
    },
    phone: '02-3456-7890',
    website: 'https://yonsei-intl.com',
    hours: '09:00-18:00, Sat 09:00-13:00',
    priceRange: 3,
    averageRating: 4.6,
    reviewCount: 178,
    status: 'approved',
    createdAt: now - 180 * day,
    updatedAt: now - 30 * day,
  },

  // Restaurant - Busan
  {
    _id: 'listing_007',
    name: {
      en: 'Jagalchi Fresh Sashimi',
      ko: '자갈치 회센터',
    },
    category: 'restaurant',
    city: 'busan',
    area: 'Nampo-dong',
    address: {
      en: 'Jagalchi Market, Jung-gu, Busan',
      ko: '부산 중구 자갈치시장',
    },
    dietaryTags: ['pescatarian'],
    description: {
      en: 'Fresh sashimi directly from Jagalchi Market. Pick your fish and they prepare it.',
      ko: '자갈치시장에서 직접 공수한 신선한 회. 생선을 고르면 바로 준비해줍니다.',
    },
    tips: {
      en: 'Best visited in the morning for freshest fish. Bargaining expected.',
      ko: '가장 신선한 생선을 위해 아침에 방문 추천. 흥정 가능.',
    },
    hours: '05:00-22:00',
    priceRange: 2,
    averageRating: 4.4,
    reviewCount: 456,
    status: 'approved',
    createdAt: now - 100 * day,
    updatedAt: now - 8 * day,
  },

  // Cafe - Busan
  {
    _id: 'listing_008',
    name: {
      en: 'Haeundae Wave Coffee',
      ko: '해운대 웨이브 커피',
    },
    category: 'cafe',
    city: 'busan',
    area: 'Haeundae',
    address: {
      en: '264 Haeundae Beach-ro, Haeundae-gu, Busan',
      ko: '부산 해운대구 해운대해변로 264',
    },
    dietaryTags: ['dairy_free'],
    description: {
      en: 'Ocean-view cafe on Haeundae Beach. Great for working remotely.',
      ko: '해운대 해변이 보이는 카페. 원격 근무하기 좋음.',
    },
    tips: {
      en: 'Sunset views are incredible. WiFi is fast and stable.',
      ko: '일몰 뷰가 환상적. 와이파이 빠르고 안정적.',
    },
    hours: '08:00-23:00',
    priceRange: 2,
    averageRating: 4.5,
    reviewCount: 312,
    status: 'approved',
    createdAt: now - 80 * day,
    updatedAt: now - 12 * day,
  },

  // Pending listing (for admin testing)
  {
    _id: 'listing_009',
    name: {
      en: 'New Vegan Spot',
      ko: '새 비건 스팟',
    },
    category: 'restaurant',
    city: 'seoul',
    area: 'Seongsu',
    address: {
      en: '123 Seongsu-ro, Seongdong-gu, Seoul',
      ko: '서울 성동구 성수로 123',
    },
    dietaryTags: ['vegan', 'vegetarian'],
    description: {
      en: 'Just opened! Modern vegan Korean cuisine.',
      ko: '새로 오픈! 모던 비건 한식.',
    },
    priceRange: 3,
    averageRating: 0,
    reviewCount: 0,
    status: 'pending',
    suggestedBy: 'user_active_001',
    createdAt: now - 2 * day,
    updatedAt: now - 2 * day,
  },

  // Shopping - Seoul
  {
    _id: 'listing_010',
    name: {
      en: 'Daiso Myeongdong',
      ko: '다이소 명동',
    },
    category: 'shopping',
    city: 'seoul',
    area: 'Myeongdong',
    address: {
      en: 'Myeongdong Central, Seoul',
      ko: '서울 명동 중심가',
    },
    dietaryTags: [],
    description: {
      en: 'Multi-floor Daiso with everything you need for daily life. Great for setting up your apartment.',
      ko: '일상생활에 필요한 모든 것이 있는 대형 다이소. 자취 준비에 좋음.',
    },
    tips: {
      en: 'Upper floors have home goods. Basement has snacks.',
      ko: '윗층에 생활용품. 지하에 간식류.',
    },
    hours: '10:00-22:00',
    priceRange: 1,
    averageRating: 4.2,
    reviewCount: 567,
    status: 'approved',
    createdAt: now - 250 * day,
    updatedAt: now - 45 * day,
  },
];

// ============================================
// Mock Reviews
// ============================================

export const mockReviews: MockReview[] = [
  {
    _id: 'review_001',
    listingId: 'listing_001',
    userId: 'user_active_001',
    rating: 5,
    text: 'Amazing vegan food! The mushroom bibimbap is a must-try. Staff speaks English well.',
    tags: ['vegetarian-friendly', 'good-english'],
    status: 'visible',
    createdAt: now - 5 * day,
  },
  {
    _id: 'review_002',
    listingId: 'listing_001',
    userId: 'user_verified_001',
    rating: 4,
    text: 'Good food but a bit pricey. Nice atmosphere though.',
    tags: ['vegetarian-friendly'],
    status: 'visible',
    createdAt: now - 15 * day,
  },
  {
    _id: 'review_003',
    listingId: 'listing_002',
    userId: 'user_verified_001',
    rating: 5,
    text: 'Finally found certified halal Korean BBQ! The lamb is excellent.',
    tags: ['halal-certified'],
    status: 'visible',
    createdAt: now - 10 * day,
  },
  {
    _id: 'review_004',
    listingId: 'listing_003',
    userId: 'user_settled_001',
    rating: 5,
    text: 'Best rooftop view in Hongdae. The omija latte is unique and refreshing.',
    tags: ['good-wifi', 'quiet-workspace'],
    status: 'visible',
    createdAt: now - 3 * day,
  },
  {
    _id: 'review_005',
    listingId: 'listing_004',
    userId: 'user_active_001',
    rating: 4,
    text: 'Worth the wait! Cash only so come prepared.',
    tags: [],
    status: 'visible',
    createdAt: now - 20 * day,
  },
  {
    _id: 'review_006',
    listingId: 'listing_006',
    userId: 'user_new_001',
    rating: 5,
    text: 'Doctor spoke perfect English. Very professional. Easy appointment booking.',
    tags: ['good-english', 'takes-insurance'],
    status: 'visible',
    createdAt: now - 1 * day,
  },
  {
    _id: 'review_007',
    listingId: 'listing_007',
    userId: 'user_settled_001',
    rating: 4,
    text: 'Fresh fish but you need to negotiate. Go early morning for best selection.',
    tags: [],
    status: 'visible',
    createdAt: now - 30 * day,
  },
  // Flagged review (for admin testing)
  {
    _id: 'review_008',
    listingId: 'listing_005',
    userId: 'user_restricted_001',
    rating: 1,
    text: 'This is a test of a flagged review.',
    tags: [],
    status: 'flagged',
    createdAt: now - 7 * day,
  },
];

// ============================================
// Helper functions
// ============================================

/**
 * Get a mock listing by ID
 */
export function getMockListingById(id: string): MockListing | undefined {
  return mockListings.find((listing) => listing._id === id);
}

/**
 * Get mock listings by city
 */
export function getMockListingsByCity(city: string): MockListing[] {
  return mockListings.filter((listing) => listing.city === city && listing.status === 'approved');
}

/**
 * Get mock listings by category
 */
export function getMockListingsByCategory(category: ListingCategory): MockListing[] {
  return mockListings.filter((listing) => listing.category === category && listing.status === 'approved');
}

/**
 * Get mock listings filtered by dietary tags
 */
export function getMockListingsByDietary(tags: string[]): MockListing[] {
  if (tags.length === 0) return mockListings.filter((l) => l.status === 'approved');
  return mockListings.filter(
    (listing) =>
      listing.status === 'approved' &&
      tags.some((tag) => listing.dietaryTags.includes(tag))
  );
}

/**
 * Get mock reviews for a listing
 */
export function getMockReviewsForListing(listingId: string): MockReview[] {
  return mockReviews.filter((review) => review.listingId === listingId && review.status === 'visible');
}

/**
 * Get pending mock listings (for admin)
 */
export function getMockPendingListings(): MockListing[] {
  return mockListings.filter((listing) => listing.status === 'pending');
}

/**
 * Search mock listings
 */
export function searchMockListings(
  query: string,
  language: 'en' | 'ko' = 'en'
): MockListing[] {
  const lowerQuery = query.toLowerCase();
  return mockListings.filter((listing) => {
    if (listing.status !== 'approved') return false;
    const name = listing.name[language].toLowerCase();
    const description = listing.description?.[language]?.toLowerCase() || '';
    const area = listing.area.toLowerCase();
    return (
      name.includes(lowerQuery) ||
      description.includes(lowerQuery) ||
      area.includes(lowerQuery)
    );
  });
}
