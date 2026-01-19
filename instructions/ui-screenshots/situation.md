import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlaneLanding, Home, GraduationCap, Briefcase, ArrowRight, ChevronRight, Info, User } from 'lucide-react';

// --- Types ---

type Language = 'EN' | 'KR';
interface Situation {
  id: string;
  nameEN: string;
  nameKR: string;
  descEN: string;
  descKR: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
  iconColor: string;
}

// --- Mock Data ---

const SITUATIONS: Situation[] = [{
  id: 'just-arrived',
  nameEN: 'Just arrived',
  nameKR: '최근 입국',
  descEN: 'New to Korea',
  descKR: '한국에 처음',
  icon: <PlaneLanding size={28} />,
  gradient: 'from-blue-100 to-cyan-100',
  iconBg: 'bg-blue-50',
  iconColor: 'text-blue-600'
}, {
  id: 'settled-resident',
  nameEN: 'Settled resident',
  nameKR: '거주 중',
  descEN: 'Living here',
  descKR: '정착 생활',
  icon: <Home size={28} />,
  gradient: 'from-green-100 to-emerald-100',
  iconBg: 'bg-green-50',
  iconColor: 'text-green-600'
}, {
  id: 'student',
  nameEN: 'Student',
  nameKR: '학생',
  descEN: 'Studying in Korea',
  descKR: '한국에서 공부',
  icon: <GraduationCap size={28} />,
  gradient: 'from-purple-100 to-pink-100',
  iconBg: 'bg-purple-50',
  iconColor: 'text-purple-600'
}, {
  id: 'working-professional',
  nameEN: 'Working professional',
  nameKR: '직장인',
  descEN: 'Working in Korea',
  descKR: '한국에서 근무',
  icon: <Briefcase size={28} />,
  gradient: 'from-orange-100 to-amber-100',
  iconBg: 'bg-orange-50',
  iconColor: 'text-orange-600'
}];

// --- Helper Components ---

const SituationCard = ({
  situation,
  isSelected,
  onClick,
  language
}: {
  situation: Situation;
  isSelected: boolean;
  onClick: () => void;
  language: Language;
}) => {
  return <motion.button whileHover={{
    scale: 1.02,
    y: -4
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} className={`relative p-5 rounded-3xl bg-gradient-to-br ${situation.gradient} border-2 transition-all shadow-sm hover:shadow-lg ${isSelected ? 'border-[var(--chart-1)] shadow-md' : 'border-white/60'}`}>
      {/* Selection Indicator */}
      <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[var(--chart-1)] text-white shadow-md scale-100' : 'bg-white/60 border-2 border-gray-300 scale-90'}`}>
        {isSelected && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
      </div>

      {/* Situation Icon */}
      <div className={`w-14 h-14 rounded-2xl ${situation.iconBg} ${situation.iconColor} flex items-center justify-center mb-4 shadow-sm`}>
        {situation.icon}
      </div>

      {/* Situation Names */}
      <div className="text-left space-y-0.5 mb-1">
        <h3 className="text-lg font-bold text-gray-900 leading-tight">
          {language === 'EN' ? situation.nameEN : situation.nameKR}
        </h3>
        <p className="text-xs font-medium text-gray-600">
          {language === 'EN' ? situation.descEN : situation.descKR}
        </p>
      </div>
    </motion.button>;
};

// @component: GirugiSituationSelection
export const GirugiSituationSelection = ({
  onContinue,
  selectedLanguage = 'EN'
}: {
  onContinue?: (situation: string | null) => void;
  selectedLanguage?: Language;
}) => {
  const [language, setLanguage] = useState<Language>(selectedLanguage);
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null);
  const handleContinue = () => {
    onContinue?.(selectedSituation);
  };
  const handleSkip = () => {
    onContinue?.(null);
  };
  const content = {
    EN: {
      step: 'Step 3 of 3',
      badge: 'Profile',
      title: 'What brings you to Korea?',
      subtitle: 'Help us personalize your experience with guides and tips relevant to your situation.',
      primaryButton: 'Next',
      secondaryButton: 'Skip for now',
      infoTitle: 'Fully Customizable',
      infoText: 'Your selection can be changed anytime in settings and won\'t restrict access to any features.'
    },
    KR: {
      step: '3단계 중 3단계',
      badge: '프로필',
      title: '한국에 오신 이유는?',
      subtitle: '상황에 맞는 가이드와 팁으로 맞춤형 경험을 제공합니다.',
      primaryButton: '다음',
      secondaryButton: '나중에 하기',
      infoTitle: '완전히 사용자 정의 가능',
      infoText: '설정에서 언제든지 선택을 변경할 수 있으며 기능 액세스를 제한하지 않습니다.'
    }
  };
  const t = content[language];
  return <div className="flex flex-col h-full w-full max-w-md mx-auto bg-[#F8F9FC] text-gray-900 overflow-hidden font-sans">
      {/* Header */}
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
          <span className="text-2xl font-bold text-gray-900">Girugi</span>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6
      }} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-xs font-medium text-gray-500 shadow-sm">
          <User size={14} />
          <span>{t.step}</span>
        </motion.div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        {/* Hero Section */}
        <section className="mb-6 mt-4">
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm mb-4">
              <User size={14} className="text-[var(--chart-1)]" />
              <span className="text-xs font-semibold text-gray-700">{t.badge}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {t.title}
            </h1>

            <p className="text-base text-gray-600 leading-relaxed">
              {t.subtitle}
            </p>
          </motion.div>
        </section>

        {/* Situation Selection Grid */}
        <section className="mb-6">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid grid-cols-2 gap-4">
            {SITUATIONS.map((situation, index) => <motion.div key={situation.id} initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}>
                <SituationCard situation={situation} isSelected={selectedSituation === situation.id} onClick={() => setSelectedSituation(situation.id)} language={language} />
              </motion.div>)}
          </motion.div>
        </section>

        {/* Customization Information */}
        <section className="mb-6">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.9
        }} className="p-6 rounded-3xl bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)] text-white shadow-lg relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                  <Info size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{t.infoTitle}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {t.infoText}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Action Buttons */}
        <section className="space-y-3 pb-4">
          <motion.button initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 1.1
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleContinue} disabled={!selectedSituation} className={`w-full py-4 rounded-2xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${selectedSituation ? 'bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white hover:shadow-xl' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            {t.primaryButton}
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
          delay: 1.2
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleSkip} className="w-full py-4 rounded-2xl bg-white text-gray-700 font-semibold text-base border-2 border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
            {t.secondaryButton}
            <ChevronRight size={20} />
          </motion.button>
        </section>
      </main>
    </div>;
};