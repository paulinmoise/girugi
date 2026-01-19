import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, ArrowRight, ChevronRight, Info, Building2, Landmark, ShoppingBag, TreePine, Mountain, Waves } from 'lucide-react';

// --- Types ---

type Language = 'EN' | 'KR';
interface City {
  id: string;
  nameEN: string;
  nameKR: string;
  icon: React.ReactNode;
  gradient: string;
  iconBg: string;
  iconColor: string;
  description: string;
}

// --- Mock Data ---

const CITIES: City[] = [{
  id: 'seoul',
  nameEN: 'Seoul',
  nameKR: '서울',
  icon: <Building2 size={28} />,
  gradient: 'from-blue-100 to-indigo-100',
  iconBg: 'bg-blue-50',
  iconColor: 'text-blue-600',
  description: 'Capital city with diverse districts'
}, {
  id: 'busan',
  nameEN: 'Busan',
  nameKR: '부산',
  icon: <Waves size={28} />,
  gradient: 'from-cyan-100 to-teal-100',
  iconBg: 'bg-cyan-50',
  iconColor: 'text-cyan-600',
  description: 'Coastal city with beaches'
}, {
  id: 'daegu',
  nameEN: 'Daegu',
  nameKR: '대구',
  icon: <Mountain size={28} />,
  gradient: 'from-orange-100 to-amber-100',
  iconBg: 'bg-orange-50',
  iconColor: 'text-orange-600',
  description: 'Historic city surrounded by mountains'
}, {
  id: 'incheon',
  nameEN: 'Incheon',
  nameKR: '인천',
  icon: <Landmark size={28} />,
  gradient: 'from-purple-100 to-pink-100',
  iconBg: 'bg-purple-50',
  iconColor: 'text-purple-600',
  description: 'Port city near Seoul'
}, {
  id: 'gwangju',
  nameEN: 'Gwangju',
  nameKR: '광주',
  icon: <TreePine size={28} />,
  gradient: 'from-green-100 to-emerald-100',
  iconBg: 'bg-green-50',
  iconColor: 'text-green-600',
  description: 'Cultural hub in the southwest'
}, {
  id: 'daejeon',
  nameEN: 'Daejeon',
  nameKR: '대전',
  icon: <ShoppingBag size={28} />,
  gradient: 'from-rose-100 to-pink-100',
  iconBg: 'bg-rose-50',
  iconColor: 'text-rose-600',
  description: 'Science and technology center'
}];

// --- Helper Components ---

const CityCard = ({
  city,
  isSelected,
  onClick,
  language
}: {
  city: City;
  isSelected: boolean;
  onClick: () => void;
  language: Language;
}) => {
  return <motion.button whileHover={{
    scale: 1.02,
    y: -4
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} className={`relative p-5 rounded-3xl bg-gradient-to-br ${city.gradient} border-2 transition-all shadow-sm hover:shadow-lg ${isSelected ? 'border-[var(--chart-1)] shadow-md' : 'border-white/60'}`}>
      {/* Selection Indicator */}
      <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[var(--chart-1)] text-white shadow-md scale-100' : 'bg-white/60 border-2 border-gray-300 scale-90'}`}>
        {isSelected && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>}
      </div>

      {/* City Icon */}
      <div className={`w-14 h-14 rounded-2xl ${city.iconBg} ${city.iconColor} flex items-center justify-center mb-4 shadow-sm`}>
        {city.icon}
      </div>

      {/* City Names */}
      <div className="text-left space-y-0.5 mb-2">
        <h3 className="text-xl font-bold text-gray-900">
          {language === 'EN' ? city.nameEN : city.nameKR}
        </h3>
        <p className="text-sm font-medium text-gray-600">
          {language === 'EN' ? city.nameKR : city.nameEN}
        </p>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-600 text-left leading-relaxed">
        {city.description}
      </p>
    </motion.button>;
};

// @component: GirugiCitySelection
export const GirugiCitySelection = ({
  onContinue,
  selectedLanguage = 'EN'
}: {
  onContinue?: (selectedCity: string | null) => void;
  selectedLanguage?: Language;
}) => {
  const [language, setLanguage] = useState<Language>(selectedLanguage);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCities = CITIES.filter(city => {
    const query = searchQuery.toLowerCase();
    return city.nameEN.toLowerCase().includes(query) || city.nameKR.includes(query);
  });
  const handleContinue = () => {
    onContinue?.(selectedCity);
  };
  const handleSkip = () => {
    onContinue?.(null);
  };
  const content = {
    EN: {
      step: 'Step 2 of 3',
      badge: 'Location',
      title: 'Where are you located?',
      subtitle: 'Help us show you relevant local events, guides, and community updates for your area.',
      searchPlaceholder: 'Search cities...',
      primaryButton: 'Continue',
      secondaryButton: 'Skip for now',
      privacyTitle: 'Your Privacy Matters',
      privacyText: 'We use this to show relevant local events and guides. You can change this anytime in settings.'
    },
    KR: {
      step: '3단계 중 2단계',
      badge: '위치',
      title: '어디에 계신가요?',
      subtitle: '지역별 이벤트, 가이드, 커뮤니티 업데이트를 제공하기 위해 필요합니다.',
      searchPlaceholder: '도시 검색...',
      primaryButton: '계속',
      secondaryButton: '나중에 하기',
      privacyTitle: '개인정보 보호',
      privacyText: '지역 이벤트와 가이드를 표시하는 데 사용됩니다. 설정에서 언제든지 변경할 수 있습니다.'
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
          <MapPin size={14} />
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
              <MapPin size={14} className="text-[var(--chart-1)]" />
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

        {/* Search Bar */}
        <section className="mb-6">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder={t.searchPlaceholder} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border-2 border-gray-200 focus:border-[var(--chart-1)] focus:outline-none transition-colors text-sm font-medium text-gray-900 placeholder-gray-400" />
          </motion.div>
        </section>

        {/* City Selection Grid */}
        <section className="mb-6">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="grid grid-cols-2 gap-4">
            {filteredCities.map((city, index) => <motion.div key={city.id} initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.7 + index * 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}>
                <CityCard city={city} isSelected={selectedCity === city.id} onClick={() => setSelectedCity(city.id)} language={language} />
              </motion.div>)}
          </motion.div>

          {filteredCities.length === 0 && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="text-center py-8">
              <p className="text-gray-500 text-sm">
                {language === 'EN' ? 'No cities found' : '도시를 찾을 수 없습니다'}
              </p>
            </motion.div>}
        </section>

        {/* Privacy Information */}
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
                  <h3 className="text-lg font-bold mb-1">{t.privacyTitle}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {t.privacyText}
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
        }} onClick={handleContinue} disabled={!selectedCity} className={`w-full py-4 rounded-2xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${selectedCity ? 'bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white hover:shadow-xl' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
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