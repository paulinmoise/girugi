import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Check, Languages, ArrowRight, ChevronRight, Info } from 'lucide-react';

// --- Types ---

type LanguageOption = 'EN' | 'KR';
interface LanguageCard {
  code: LanguageOption;
  name: string;
  nativeName: string;
  icon: string;
  gradient: string;
  description: string;
}

// --- Mock Data ---

const LANGUAGE_OPTIONS: LanguageCard[] = [{
  code: 'EN',
  name: 'English',
  nativeName: 'English',
  icon: '🇬🇧',
  gradient: 'from-blue-100 to-indigo-100',
  description: 'Navigate in English with Korean context'
}, {
  code: 'KR',
  name: 'Korean',
  nativeName: '한국어',
  icon: '🇰🇷',
  gradient: 'from-rose-100 to-pink-100',
  description: '한국어로 영어 컨텍스트 제공'
}];

// --- Helper Components ---

const LanguageCardComponent = ({
  language,
  isSelected,
  onClick
}: {
  language: LanguageCard;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return <motion.button whileHover={{
    scale: 1.02,
    y: -4
  }} whileTap={{
    scale: 0.98
  }} onClick={onClick} className={`relative p-6 rounded-3xl bg-gradient-to-br ${language.gradient} border-2 transition-all shadow-sm hover:shadow-lg ${isSelected ? 'border-[var(--chart-1)] shadow-md' : 'border-white/60'}`}>
      {/* Selection Indicator */}
      <div className={`absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[var(--chart-1)] text-white shadow-md scale-100' : 'bg-white/60 text-transparent scale-90'}`}>
        <Check size={16} strokeWidth={3} />
      </div>

      {/* Language Icon */}
      <div className="text-5xl mb-4">{language.icon}</div>

      {/* Language Names */}
      <div className="text-left space-y-1 mb-3">
        <h3 className="text-2xl font-bold text-gray-900">{language.name}</h3>
        <p className="text-lg font-medium text-gray-700">{language.nativeName}</p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 text-left leading-relaxed">
        {language.description}
      </p>
    </motion.button>;
};

// @component: GirugiLanguageSelection
export const GirugiLanguageSelection = ({
  onContinue
}: {
  onContinue?: (selectedLanguage: LanguageOption) => void;
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption | null>(null);
  const handleContinue = () => {
    if (selectedLanguage) {
      onContinue?.(selectedLanguage);
    }
  };
  const handleSkip = () => {
    onContinue?.('EN'); // Default to English if skipped
  };
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
          <Languages size={14} />
          <span>Step 1 of 3</span>
        </motion.div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto px-6 pb-8 scrollbar-hide">
        {/* Hero Section */}
        <section className="mb-8 mt-4">
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
              <Globe size={14} className="text-[var(--chart-1)]" />
              <span className="text-xs font-semibold text-gray-700">Language Preferences</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Choose your language
            </h1>
            
            <p className="text-base text-gray-600 leading-relaxed">
              Girugi provides a dual-language experience. Select your primary language to get started.
            </p>
          </motion.div>
        </section>

        {/* Language Selection Cards */}
        <section className="mb-8">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid grid-cols-1 gap-4">
            {LANGUAGE_OPTIONS.map((language, index) => <motion.div key={language.code} initial={{
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
                <LanguageCardComponent language={language} isSelected={selectedLanguage === language.code} onClick={() => setSelectedLanguage(language.code)} />
              </motion.div>)}
          </motion.div>
        </section>

        {/* Translation Fallback Explanation */}
        <section className="mb-8">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="p-6 rounded-3xl bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)] text-white shadow-lg relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

            <div className="relative z-10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                  <Info size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Translation Fallback</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    Some content may display in the alternate language with a translation indicator.
                  </p>
                </div>
              </div>

              {/* Visual Badge Example */}
              <div className="mt-5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Example Content</span>
                  <div className="px-2 py-0.5 rounded-full bg-white/25 backdrop-blur-sm border border-white/30 text-[10px] font-bold flex items-center gap-1">
                    <Languages size={10} />
                    {selectedLanguage === 'EN' ? 'KR' : 'EN'}
                  </div>
                </div>
                <p className="text-sm text-white/80 leading-relaxed">
                  {selectedLanguage === 'EN' ? '이 내용은 한국어로만 제공됩니다' : 'This content is only available in English'}
                </p>
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
          delay: 1.0
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleContinue} disabled={!selectedLanguage} className={`w-full py-4 rounded-2xl font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${selectedLanguage ? 'bg-gradient-to-r from-[var(--chart-1)] to-[var(--chart-2)] text-white hover:shadow-xl' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>
            Continue
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
          delay: 1.1
        }} whileHover={{
          scale: 1.02
        }} whileTap={{
          scale: 0.98
        }} onClick={handleSkip} className="w-full py-4 rounded-2xl bg-white text-gray-700 font-semibold text-base border-2 border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
            Skip for now
            <ChevronRight size={20} />
          </motion.button>
        </section>
      </main>
    </div>;
};