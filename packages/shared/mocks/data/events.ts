/**
 * Mock Events Data
 *
 * Provides realistic event data for UI testing.
 * Includes variety: different categories, cities, dates.
 */

import { MockEvent, MockRSVP, EventCategory } from '../types';

// ============================================
// Base timestamp helpers
// ============================================

const now = Date.now();
const day = 24 * 60 * 60 * 1000;
const hour = 60 * 60 * 1000;

// Helper to create a date at a specific time
function createEventDate(daysFromNow: number, hour: number = 14): number {
  const date = new Date();
  date.setDate(date.getDate() + daysFromNow);
  date.setHours(hour, 0, 0, 0);
  return date.getTime();
}

// ============================================
// Mock Events
// ============================================

export const mockEvents: MockEvent[] = [
  // Upcoming: Language Exchange - Seoul (2 days from now)
  {
    _id: 'event_001',
    title: {
      en: 'Seoul Language Exchange Meetup',
      ko: '서울 언어교환 모임',
    },
    description: {
      en: 'Practice Korean with native speakers and help others practice English! Casual atmosphere, all levels welcome. We usually split into small groups based on language goals.',
      ko: '원어민과 한국어를 연습하고 다른 사람들의 영어 연습을 도와주세요! 편안한 분위기, 모든 레벨 환영. 보통 언어 목표에 따라 소그룹으로 나눕니다.',
    },
    category: 'language_exchange',
    city: 'seoul',
    area: 'Hongdae',
    venue: {
      en: 'Café Beans, 2F',
      ko: '카페 빈즈, 2층',
    },
    date: createEventDate(2, 19), // 2 days from now, 7 PM
    endDate: createEventDate(2, 21), // ends at 9 PM
    maxAttendees: 30,
    currentRsvpCount: 18,
    imageUrl: 'https://example.com/events/language-exchange.jpg',
    createdBy: 'user_admin_001',
    createdAt: now - 14 * day,
    updatedAt: now - 2 * day,
    isCanceled: false,
  },

  // Upcoming: Food/Social - Seoul (3 days from now)
  {
    _id: 'event_002',
    title: {
      en: 'Korean BBQ Night for Foreigners',
      ko: '외국인을 위한 삼겹살 파티',
    },
    description: {
      en: 'Join us for an authentic Korean BBQ experience! We\'ll teach you the proper way to grill and enjoy samgyeopsal. Includes 2 hours unlimited meat and sides.',
      ko: '정통 한국식 바베큐를 경험해보세요! 삼겹살 굽는 법을 알려드립니다. 2시간 고기, 반찬 무한리필 포함.',
    },
    category: 'food',
    city: 'seoul',
    area: 'Gangnam',
    venue: {
      en: 'Gogigui House, Main Hall',
      ko: '고기굴 하우스, 메인홀',
    },
    date: createEventDate(3, 18), // 3 days from now, 6 PM
    endDate: createEventDate(3, 21),
    maxAttendees: 20,
    currentRsvpCount: 16,
    createdBy: 'user_admin_001',
    createdAt: now - 7 * day,
    updatedAt: now - 1 * day,
    isCanceled: false,
  },

  // Upcoming: Tech - Seoul (5 days from now)
  {
    _id: 'event_003',
    title: {
      en: 'Seoul Tech Meetup: AI & Startups',
      ko: '서울 테크 밋업: AI와 스타트업',
    },
    description: {
      en: 'Monthly gathering of tech enthusiasts in Seoul. This month\'s topic: AI applications in Korean startups. Networking and pizza included!',
      ko: '서울 테크 애호가들의 월간 모임. 이번 달 주제: 한국 스타트업의 AI 활용. 네트워킹과 피자 포함!',
    },
    category: 'tech',
    city: 'seoul',
    area: 'Gangnam',
    venue: {
      en: 'WeWork Gangnam Station, Event Space',
      ko: '위워크 강남역, 이벤트 공간',
    },
    date: createEventDate(5, 19),
    endDate: createEventDate(5, 21),
    maxAttendees: 50,
    currentRsvpCount: 34,
    externalUrl: 'https://meetup.com/seoul-tech',
    createdBy: 'user_admin_001',
    createdAt: now - 10 * day,
    updatedAt: now - 3 * day,
    isCanceled: false,
  },

  // Upcoming: Outdoors - Seoul (6 days from now, weekend)
  {
    _id: 'event_004',
    title: {
      en: 'Bukhansan Hiking Trip',
      ko: '북한산 등산 모임',
    },
    description: {
      en: 'Beginner-friendly hike to Bukhansan National Park. We\'ll take the Baegundae peak trail (moderate difficulty). Bring water and snacks!',
      ko: '초보자 친화적인 북한산 국립공원 등산. 백운대 코스(중급 난이도)로 갑니다. 물과 간식 지참!',
    },
    category: 'outdoors',
    city: 'seoul',
    area: 'Eunpyeong',
    venue: {
      en: 'Bukhansan Ui Station, Exit 1',
      ko: '북한산우이역 1번 출구',
    },
    date: createEventDate(6, 9), // Saturday morning
    endDate: createEventDate(6, 15),
    maxAttendees: 15,
    currentRsvpCount: 11,
    createdBy: 'user_settled_001',
    createdAt: now - 5 * day,
    updatedAt: now - 1 * day,
    isCanceled: false,
  },

  // Upcoming: Social - Busan (4 days from now)
  {
    _id: 'event_005',
    title: {
      en: 'Busan Beach Sunset Social',
      ko: '부산 해변 선셋 소셜',
    },
    description: {
      en: 'Watch the sunset at Haeundae Beach and meet fellow foreigners living in Busan. We\'ll grab drinks afterward at a nearby bar.',
      ko: '해운대 해변에서 일몰을 보며 부산에 사는 외국인들을 만나보세요. 이후 근처 바에서 한잔해요.',
    },
    category: 'social',
    city: 'busan',
    area: 'Haeundae',
    venue: {
      en: 'Haeundae Beach, near lifeguard tower 5',
      ko: '해운대 해변, 5번 인명구조대 근처',
    },
    date: createEventDate(4, 17),
    endDate: createEventDate(4, 21),
    currentRsvpCount: 23,
    createdBy: 'user_volunteer_001',
    createdAt: now - 8 * day,
    updatedAt: now - 2 * day,
    isCanceled: false,
  },

  // This Week: Culture - Seoul (1 day from now)
  {
    _id: 'event_006',
    title: {
      en: 'Traditional Korean Calligraphy Workshop',
      ko: '전통 한국 서예 워크샵',
    },
    description: {
      en: 'Learn the basics of Korean calligraphy (붓글씨) from a master. All materials provided. No experience necessary!',
      ko: '서예 달인에게 붓글씨 기초를 배워보세요. 모든 재료 제공. 경험 없어도 됩니다!',
    },
    category: 'culture',
    city: 'seoul',
    area: 'Insadong',
    venue: {
      en: 'Insadong Cultural Center, Room 3',
      ko: '인사동 문화센터, 3번 강의실',
    },
    date: createEventDate(1, 14),
    endDate: createEventDate(1, 16),
    maxAttendees: 12,
    currentRsvpCount: 10,
    createdBy: 'user_admin_001',
    createdAt: now - 20 * day,
    updatedAt: now - 5 * day,
    isCanceled: false,
  },

  // Past Event (for history/completed states)
  {
    _id: 'event_007',
    title: {
      en: 'New Year\'s Countdown Party',
      ko: '새해 카운트다운 파티',
    },
    description: {
      en: 'Ring in the new year with fellow foreigners! Live music, countdown, and champagne toast.',
      ko: '외국인 친구들과 새해를 맞이하세요! 라이브 음악, 카운트다운, 샴페인 건배.',
    },
    category: 'social',
    city: 'seoul',
    area: 'Itaewon',
    venue: {
      en: 'The Venue Itaewon',
      ko: '더베뉴 이태원',
    },
    date: now - 20 * day, // Past event
    endDate: now - 20 * day + 5 * hour,
    maxAttendees: 100,
    currentRsvpCount: 87,
    createdBy: 'user_admin_001',
    createdAt: now - 45 * day,
    updatedAt: now - 20 * day,
    isCanceled: false,
  },

  // Canceled Event (for testing canceled state)
  {
    _id: 'event_008',
    title: {
      en: 'Canceled: Outdoor Yoga Session',
      ko: '취소됨: 야외 요가 세션',
    },
    description: {
      en: 'This event has been canceled due to weather.',
      ko: '날씨로 인해 이 이벤트가 취소되었습니다.',
    },
    category: 'sports',
    city: 'seoul',
    area: 'Yeouido',
    venue: {
      en: 'Yeouido Park',
      ko: '여의도 공원',
    },
    date: createEventDate(7, 10),
    currentRsvpCount: 8,
    createdBy: 'user_admin_001',
    createdAt: now - 15 * day,
    updatedAt: now - 1 * day,
    isCanceled: true,
  },

  // Volunteer Event
  {
    _id: 'event_009',
    title: {
      en: 'Beach Cleanup Volunteer Day',
      ko: '해변 청소 봉사활동의 날',
    },
    description: {
      en: 'Help keep Korea\'s beaches clean! Join us for a morning beach cleanup. Gloves and bags provided. Great way to give back!',
      ko: '한국의 해변을 깨끗하게 유지하는데 도움을 주세요! 아침 해변 청소에 참여하세요. 장갑과 봉투 제공.',
    },
    category: 'volunteer',
    city: 'busan',
    area: 'Gwangalli',
    venue: {
      en: 'Gwangalli Beach, East End',
      ko: '광안리 해변, 동쪽 끝',
    },
    date: createEventDate(8, 9),
    endDate: createEventDate(8, 12),
    maxAttendees: 25,
    currentRsvpCount: 14,
    createdBy: 'user_volunteer_001',
    createdAt: now - 12 * day,
    updatedAt: now - 4 * day,
    isCanceled: false,
  },

  // Music Event
  {
    _id: 'event_010',
    title: {
      en: 'Indie Music Night at Rolling Hall',
      ko: '롤링홀 인디 음악의 밤',
    },
    description: {
      en: 'Discover Korea\'s indie music scene! Three local bands performing. Standing only. Drinks available for purchase.',
      ko: '한국의 인디 음악 씬을 발견하세요! 세 로컬 밴드 공연. 스탠딩 전용. 음료 구매 가능.',
    },
    category: 'music',
    city: 'seoul',
    area: 'Hongdae',
    venue: {
      en: 'Rolling Hall',
      ko: '롤링홀',
    },
    date: createEventDate(10, 20),
    endDate: createEventDate(10, 23),
    maxAttendees: 80,
    currentRsvpCount: 45,
    externalUrl: 'https://rollinghall.com/events',
    createdBy: 'user_admin_001',
    createdAt: now - 18 * day,
    updatedAt: now - 6 * day,
    isCanceled: false,
  },
];

// ============================================
// Mock RSVPs
// ============================================

export const mockRSVPs: MockRSVP[] = [
  // User active's RSVPs
  {
    _id: 'rsvp_001',
    eventId: 'event_001',
    userId: 'user_active_001',
    status: 'yes',
    reminderSet: true,
    reminderTime: createEventDate(2, 17), // 2 hours before
    createdAt: now - 5 * day,
    updatedAt: now - 5 * day,
  },
  {
    _id: 'rsvp_002',
    eventId: 'event_002',
    userId: 'user_active_001',
    status: 'maybe',
    reminderSet: false,
    createdAt: now - 3 * day,
    updatedAt: now - 3 * day,
  },
  {
    _id: 'rsvp_003',
    eventId: 'event_004',
    userId: 'user_active_001',
    status: 'yes',
    reminderSet: true,
    reminderTime: createEventDate(5, 8), // 1 hour before
    createdAt: now - 2 * day,
    updatedAt: now - 2 * day,
  },

  // User verified's RSVPs
  {
    _id: 'rsvp_004',
    eventId: 'event_001',
    userId: 'user_verified_001',
    status: 'yes',
    reminderSet: false,
    createdAt: now - 7 * day,
    updatedAt: now - 7 * day,
  },
  {
    _id: 'rsvp_005',
    eventId: 'event_003',
    userId: 'user_verified_001',
    status: 'yes',
    reminderSet: true,
    reminderTime: createEventDate(5, 18),
    createdAt: now - 4 * day,
    updatedAt: now - 4 * day,
  },

  // Settled resident's RSVPs
  {
    _id: 'rsvp_006',
    eventId: 'event_004',
    userId: 'user_settled_001',
    status: 'yes',
    reminderSet: true,
    reminderTime: createEventDate(5, 8),
    createdAt: now - 4 * day,
    updatedAt: now - 4 * day,
  },
  {
    _id: 'rsvp_007',
    eventId: 'event_002',
    userId: 'user_settled_001',
    status: 'no',
    reminderSet: false,
    createdAt: now - 2 * day,
    updatedAt: now - 2 * day,
  },
];

// ============================================
// Helper functions
// ============================================

/**
 * Get a mock event by ID
 */
export function getMockEventById(id: string): MockEvent | undefined {
  return mockEvents.find((event) => event._id === id);
}

/**
 * Get mock events by city
 */
export function getMockEventsByCity(city: string): MockEvent[] {
  return mockEvents.filter(
    (event) => event.city === city && !event.isCanceled && event.date > now
  );
}

/**
 * Get mock events by category
 */
export function getMockEventsByCategory(category: EventCategory): MockEvent[] {
  return mockEvents.filter(
    (event) => event.category === category && !event.isCanceled && event.date > now
  );
}

/**
 * Get upcoming mock events (within the next N days)
 */
export function getMockUpcomingEvents(daysAhead: number = 14): MockEvent[] {
  const cutoff = now + daysAhead * day;
  return mockEvents
    .filter((event) => !event.isCanceled && event.date > now && event.date < cutoff)
    .sort((a, b) => a.date - b.date);
}

/**
 * Get this week's mock events
 */
export function getMockThisWeekEvents(): MockEvent[] {
  return getMockUpcomingEvents(7);
}

/**
 * Get mock RSVPs for a user
 */
export function getMockRSVPsForUser(userId: string): MockRSVP[] {
  return mockRSVPs.filter((rsvp) => rsvp.userId === userId);
}

/**
 * Get mock RSVP for a user and event
 */
export function getMockRSVP(userId: string, eventId: string): MockRSVP | undefined {
  return mockRSVPs.find((rsvp) => rsvp.userId === userId && rsvp.eventId === eventId);
}

/**
 * Get events user has RSVP'd "yes" to
 */
export function getMockUserYesEvents(userId: string): MockEvent[] {
  const yesRsvps = mockRSVPs.filter((rsvp) => rsvp.userId === userId && rsvp.status === 'yes');
  return yesRsvps
    .map((rsvp) => getMockEventById(rsvp.eventId))
    .filter((event): event is MockEvent => event !== undefined);
}
