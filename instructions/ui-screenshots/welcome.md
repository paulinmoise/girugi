import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, CheckSquare, Compass, Calendar, HelpCircle, ArrowRight, Eye } from 'lucide-react';

// --- Types ---

type Language = 'EN' | 'KR';
interface FeatureCard {
  id: string;
  icon: React.ReactNode;
  titleEN: string;
  titleKR: string;
  descEN: string;
  descKR: string;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

// --- Mock Data ---

const FEATURES: FeatureCard[] = [{
  id: 'guide',
  icon: <BookOpen size={28} />,
  titleEN: 'Guide',
  titleKR: '가이드',
  descEN: 'Step-by-step guides for visa, housing, and life in Korea',
  descKR: '비자, 주거, 한국 생활에 대한 단계별 가이드',
  gradient: 'from-blue-100 to-cyan-100',
  iconBg: 'bg-blue-50',
  iconColor: 'text-blue-600'
}, {
  id: 'checklist',
  icon: <CheckSquare size={28} />,
  titleEN: 'Checklist',
  titleKR: '체크리스트',
  descEN: 'Track your progress with personalized action plans',
  descKR: '맞춤형 실행 계획으로 진행 상황 추적',
  gradient: 'from-purple-100 to-pink-100',
  iconBg: 'bg-purple-50',
  iconColor: 'text-purple-600'
}, {
  id: 'discover',
  icon: <Compass size={28} />,
  titleEN: 'Discover',
  titleKR: '발견',
  descEN: 'Explore neighborhoods, cafes, and hidden gems',
  descKR: '동네, 카페, 숨겨진 보석 같은 장소 탐색',
  gradient: 'from-orange-100 to-amber-100',
  iconBg: 'bg-orange-50',
  iconColor: 'text-orange-600'
}, {
  id: 'events',
  icon: <Calendar size={28} />,
  titleEN: 'Events',
  titleKR: '이벤트',
  descEN: 'Join meetups, festivals, and community activities',
  descKR: '모임, 축제, 커뮤니티 활동 참여',
  gradient: 'from-green-100 to-emerald-100',
  iconBg: 'bg-green-50',
  iconColor: 'text-green-600'
}, {
  id: 'help',
  icon: <HelpCircle size={28} />,
  titleEN: 'Help',
  titleKR: '도움',
  descEN: 'Connect with experts and get professional support',
  descKR: '전문가와 연결하고 전문적인 지원 받기',
  gradient: 'from-rose-100 to-pink-100',
  iconBg: 'bg-rose-50',
  iconColor: 'text-rose-600'
}];

// --- Helper Components ---

const FeatureCardComponent = ({
  feature,
  index,
  language
}: {
  feature: FeatureCard;
  index: number;
  language: Language;
}) => {
  return <motion.div initial={{
    y: 30,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: index * 0.1,
    ease: [0.22, 1, 0.36, 1]
  }} whileHover={{
    scale: 1.02,
    y: -4
  }} className={`p-6 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-white/60 shadow-sm hover:shadow-md transition-all cursor-pointer`}>
      <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} flex items-center justify-center mb-4 shadow-sm`}>
        {feature.icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {language === 'EN' ? feature.titleEN : feature.titleKR}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {language === 'EN' ? feature.descEN : feature.descKR}
      </p>
    </motion.div>;
};

// @component: GirugiWelcomeScreen
export const GirugiWelcomeScreen = ({
  onGetStarted
}: {
  onGetStarted?: () => void;
}) => {
  const [language, setLanguage] = useState<Language>('EN');
  const content = {
    EN: {
      welcome: 'Welcome to',
      appName: 'Girugi',
      subtitle: 'Your complete guide to living in Korea',
      tagline: 'Navigate visa processes, discover neighborhoods, connect with the community',
      primary: 'Get started',
      secondary: "I'm just browsing",
      features: 'What we offer'
    },
    KR: {
      welcome: '환영합니다',
      appName: 'Girugi',
      subtitle: '한국 생활 완벽 가이드',
      tagline: '비자 절차 안내, 동네 탐색, 커뮤니티 연결',
      primary: '시작하기',
      secondary: '둘러보기',
      features: '제공 서비스'
    }
  };
  const t = content[language];
  return <div className="flex flex-col h-full w-full max-w-md mx-auto bg-[#F8F9FC] text-gray-900 overflow-hidden font-sans">
      {/* Header with Language Toggle */}
      <header className="px-6 pt-12 pb-6 flex justify-between items-center">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6
      }} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[var(--chart-1)] to-[var(--chart-2)] flex items-center justify-center text-white font-bold text-lg shadow-md">
            G
          </div>
          <span className="text-2xl font-bold text-gray-900">{t.appName}</span>
        </motion.div>

        <motion.button initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6
      }} onClick={() => setLanguage(l => l === 'EN' ? 'KR' : 'EN')} className="px-3 py-1.5 rounded-full bg-white text-xs font-bold text-gray-600 flex items-center gap-1 hover:bg-gray-100 transition-colors shadow-sm">
          <Globe size={12} />
          {language}
        </motion.button>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        {/* Hero Section */}
        <section className="mb-12 mt-4">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            <p className="text-sm font-medium text-gray-500 mb-2">{t.welcome}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t.subtitle}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              {t.tagline}
            </p>
          </motion.div>

          {/* Decorative Gradient Card */}
          <motion.div initial={{
          scale: 0.95,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="mt-8 p-6 rounded-[2rem] bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)] relative overflow-hidden shadow-lg">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div>
                <div className="text-white/80 text-xs font-medium mb-1">
                  {language === 'EN' ? 'Join 50,000+ expats' : '50,000명 이상의 외국인과 함께'}
                </div>
                <div className="text-white text-2xl font-bold">
                  {language === 'EN' ? 'Start your journey' : '여정을 시작하세요'}
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <Compass className="text-white" size={32} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="mb-8">
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="text-xl font-bold text-gray-900 mb-6">
            {t.features}
          </motion.h2>

          <div className="grid grid-cols-1 gap-4">
            {FEATURES.map((feature, index) => <FeatureCardComponent key={feature.id} feature={feature} index={index} language={language} />)}
          </div>
        </section>

        {/* Call-to-Action Buttons */}
        <section className="space-y-3 pb-4">
          <motion.button initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={onGetStarted} className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
            {t.primary}
            <ArrowRight size={20} />
          </motion.button>

          <motion.button initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.9
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={onGetStarted} className="w-full py-4 rounded-2xl bg-white text-gray-700 font-semibold text-base border-2 border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
            {t.secondary}
            <Eye size={20} />
          </motion.button>
        </section>
      </main>
    </div>;
};