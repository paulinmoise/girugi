import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, MapPin, ChevronRight, FileText, Home as HomeIcon, Scale, Coffee, Users, Calendar, Star, CheckCircle2, Globe, MessageCircle, ShieldCheck, Menu } from 'lucide-react';

// --- Types ---

type Language = 'EN' | 'KR';
type CategoryHub = {
  id: string;
  title: string;
  icon: React.ReactNode;
  colorClass: string;
  bgClass: string;
};
type ChecklistItem = {
  id: string;
  title: string;
  completed: boolean;
};
type CommunityPost = {
  id: string;
  user: string;
  avatar: string;
  title: string;
  location: string;
  likes: number;
  comments: number;
  time: string;
};

// --- Mock Data ---

const MOCK_CHECKLIST: ChecklistItem[] = [{
  id: '1',
  title: 'Submit ARC application form',
  completed: true
}, {
  id: '2',
  title: 'Visit Immigration Office',
  completed: false
}, {
  id: '3',
  title: 'Pay processing fees',
  completed: false
}];
const COMMUNITY_POSTS: CommunityPost[] = [{
  id: 'p1',
  user: 'Sarah K.',
  avatar: '👩🏼',
  title: 'Best cafes in Hongdae for working late?',
  location: 'Mapo-gu',
  likes: 24,
  comments: 8,
  time: '2h ago'
}, {
  id: 'p2',
  user: 'Mike Chen',
  avatar: '👨🏻',
  title: 'Anyone going to the Lantern Festival?',
  location: 'Jongno-gu',
  likes: 45,
  comments: 12,
  time: '5h ago'
}];

// --- Helper Components ---

const ProgressBar = ({
  progress
}: {
  progress: number;
}) => <div className="h-3 w-full rounded-full bg-white/30 overflow-hidden backdrop-blur-sm">
    <motion.div initial={{
    width: 0
  }} animate={{
    width: `${progress}%`
  }} transition={{
    duration: 1,
    ease: "easeOut"
  }} className="h-full bg-white rounded-full" />
  </div>;
const HubCard = ({
  title,
  icon,
  colorClass,
  bgClass,
  onClick
}: CategoryHub & {
  onClick: () => void;
}) => <motion.button whileHover={{
  scale: 1.02
}} whileTap={{
  scale: 0.95
}} onClick={onClick} className={`flex flex-col items-center justify-center gap-3 p-4 rounded-3xl ${bgClass} shadow-sm border border-transparent hover:shadow-md transition-all`}>
    <div className={`p-3 rounded-full bg-white/90 shadow-sm ${colorClass}`}>
      {icon}
    </div>
    <span className="font-semibold text-sm text-gray-800">{title}</span>
  </motion.button>;
const NavIcon = ({
  icon,
  label,
  isActive,
  onClick
}: {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}) => <button onClick={onClick} className={`flex flex-col items-center gap-1 w-16 transition-colors ${isActive ? 'text-[var(--primary)]' : 'text-gray-400'}`}>
    <div className={`p-1.5 rounded-2xl transition-all ${isActive ? 'bg-[var(--primary)]/10' : 'bg-transparent'}`}>
      {icon}
    </div>
    <span className="text-[10px] font-medium">{label}</span>
  </button>;

// @component: GirugiHomeDashboard
export const GirugiHomeDashboard = () => {
  const [language, setLanguage] = useState<Language>('EN');
  const [activeTab, setActiveTab] = useState('home');

  // Calculate progress
  const completedSteps = MOCK_CHECKLIST.filter(i => i.completed).length;
  const totalSteps = MOCK_CHECKLIST.length;
  const progressPercent = Math.round(completedSteps / totalSteps * 100);

  // @return
  return <div className="flex flex-col h-full w-full max-w-md mx-auto bg-[#F8F9FC] text-gray-900 overflow-hidden font-sans relative">
      
      {/* Header Section */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center bg-white sticky top-0 z-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[var(--chart-1)] to-[var(--chart-2)] flex items-center justify-center text-white font-bold text-lg shadow-inner border-2 border-white">
              S
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-medium text-gray-500">
              {language === 'EN' ? 'Good Morning,' : '좋은 아침입니다,'}
            </h1>
            <span className="text-lg font-bold text-gray-900">Sebastian</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => setLanguage(l => l === 'EN' ? 'KR' : 'EN')} className="px-3 py-1.5 rounded-full bg-gray-100 text-xs font-bold text-gray-600 flex items-center gap-1 hover:bg-gray-200 transition-colors">
            <Globe size={12} />
            {language}
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
        <div className="px-6 space-y-8 py-6">
          
          {/* Hero: Next Steps Plan */}
          <section>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                My Plan
                <span className="ml-2 text-sm font-normal text-gray-500">D-10 Visa</span>
              </h2>
              <button className="text-xs font-semibold text-[var(--primary)] flex items-center gap-1">
                Full Plan <ChevronRight size={12} />
              </button>
            </div>
            
            <motion.div initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} className="p-6 rounded-[2rem] bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-5)] text-white shadow-lg relative overflow-hidden">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-medium backdrop-blur-md border border-white/10 mb-2">
                      Stage 2: Documents
                    </span>
                    <h3 className="text-2xl font-bold">Registration</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/10">
                    <span className="font-bold">{progressPercent}%</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {MOCK_CHECKLIST.slice(0, 2).map(item => <div key={item.id} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${item.completed ? 'bg-white text-[var(--primary)] border-white' : 'border-white/50 text-transparent'}`}>
                        {item.completed && <CheckCircle2 size={12} strokeWidth={4} />}
                      </div>
                      <span className={`text-sm ${item.completed ? 'opacity-80 line-through' : 'opacity-100 font-medium'}`}>
                        {item.title}
                      </span>
                    </div>)}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs opacity-80 font-medium">
                    <span>Progress</span>
                    <span>{completedSteps}/{totalSteps} steps</span>
                  </div>
                  <ProgressBar progress={progressPercent} />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Content Hubs Grid */}
          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Explore Guides</h2>
            <div className="grid grid-cols-2 gap-4">
              <HubCard id="visa" title="Visa & Immigration" icon={<FileText size={24} />} colorClass="text-blue-600 bg-blue-50" bgClass="bg-blue-100/50" onClick={() => {}} />
              <HubCard id="housing" title="Housing & Rent" icon={<HomeIcon size={24} />} colorClass="text-orange-600 bg-orange-50" bgClass="bg-orange-100/50" onClick={() => {}} />
              <HubCard id="legal" title="Legal & Safety" icon={<Scale size={24} />} colorClass="text-purple-600 bg-purple-50" bgClass="bg-purple-100/50" onClick={() => {}} />
              <HubCard id="life" title="Daily Life" icon={<Coffee size={24} />} colorClass="text-green-600 bg-green-50" bgClass="bg-green-100/50" onClick={() => {}} />
            </div>
          </section>

          {/* Community Highlights */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Community Buzz</h2>
              <span className="text-xs font-medium text-gray-400">Seoul • Recent</span>
            </div>
            
            <div className="flex flex-col gap-3">
              {COMMUNITY_POSTS.map(post => <motion.div key={post.id} whileHover={{
              scale: 1.01
            }} className="p-4 rounded-3xl bg-white shadow-sm border border-gray-100 flex gap-4">
                  <div className="shrink-0 text-3xl">{post.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight mb-1">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span>{post.user}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-0.5"><MapPin size={10} /> {post.location}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-gray-500">
                        <MessageCircle size={12} className="text-gray-400" /> {post.comments}
                      </span>
                    </div>
                  </div>
                </motion.div>)}
            </div>
            <button className="w-full py-3 mt-4 text-sm font-semibold text-gray-500 bg-white rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors">
              View All Posts
            </button>
          </section>

          {/* Upcoming Events Horizontal Scroll */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Events</h2>
              <button className="text-xs font-semibold text-[var(--primary)]">See Calendar</button>
            </div>
            
            <div className="overflow-x-auto -mx-6 px-6 pb-4 flex gap-4 scrollbar-hide">
              {[1, 2, 3].map((_, i) => <div key={i} className="min-w-[200px] p-4 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col gap-2 relative group cursor-pointer hover:shadow-md transition-all">
                  <div className="h-24 w-full rounded-2xl bg-gray-100 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${i === 0 ? 'from-pink-200 to-purple-200' : i === 1 ? 'from-yellow-200 to-orange-200' : 'from-blue-200 to-cyan-200'}`} />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur rounded-lg text-[10px] font-bold shadow-sm">
                      MAY {12 + i}
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 truncate">
                    {i === 0 ? 'International Food Fair' : i === 1 ? 'Han River Night Market' : 'Startup Networking'}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin size={10} />
                    {i === 0 ? 'Itaewon' : i === 1 ? 'Yeouido' : 'Gangnam'}
                  </div>
                </div>)}
            </div>
          </section>

          {/* Expert Teaser */}
          <section className="mb-8">
            <div className="p-5 rounded-3xl bg-[var(--chart-4)]/10 border border-[var(--chart-4)]/20 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--chart-4)] text-white flex items-center justify-center shadow-md shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-sm">Need Professional Help?</h3>
                <p className="text-xs text-gray-600 leading-tight mt-1">
                  Connect with verified immigration lawyers and translators.
                </p>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </section>

        </div>
      </main>

      {/* Floating Bottom Navigation */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/90 backdrop-blur-lg rounded-[2rem] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex justify-between items-center px-4">
          <NavIcon icon={<HomeIcon size={20} />} label="Home" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavIcon icon={<Users size={20} />} label="Community" isActive={activeTab === 'community'} onClick={() => setActiveTab('community')} />
          <div className="relative -top-6">
            <button className="w-14 h-14 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-[#F8F9FC]">
              <Search size={24} />
            </button>
          </div>
          <NavIcon icon={<ShieldCheck size={20} />} label="Experts" isActive={activeTab === 'experts'} onClick={() => setActiveTab('experts')} />
          <NavIcon icon={<Menu size={20} />} label="Menu" isActive={activeTab === 'menu'} onClick={() => setActiveTab('menu')} />
        </div>
      </div>

    </div>;
};