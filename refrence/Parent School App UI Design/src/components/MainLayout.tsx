import { useState } from 'react';
import { Home, CalendarCheck, Calendar, Award, MessageSquare } from 'lucide-react';
import type { Screen } from '../App';
import HomeTab from './tabs/HomeTab';
import AttendanceTab from './tabs/AttendanceTab';
import TimetableTab from './tabs/TimetableTab';
import GradesTab from './tabs/GradesTab';
import MessagesTab from './tabs/MessagesTab';
import StudentSelectorWidget from './StudentSelectorWidget';

interface Props {
  student: any;
  onNavigate: (screen: Screen, data?: any) => void;
  onSelectStudent: (student: any) => void;
}

type Tab = 'home' | 'attendance' | 'timetable' | 'grades' | 'messages';

export default function MainLayout({ student, onNavigate, onSelectStudent }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [showStudentSelector, setShowStudentSelector] = useState(false);

  const tabs = [
    { id: 'home' as Tab, label: 'الرئيسية', icon: Home },
    { id: 'attendance' as Tab, label: 'الحضور', icon: CalendarCheck },
    { id: 'timetable' as Tab, label: 'الجدول', icon: Calendar },
    { id: 'grades' as Tab, label: 'الشهادات', icon: Award },
    { id: 'messages' as Tab, label: 'الرسائل', icon: MessageSquare },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab student={student} onNavigate={onNavigate} onShowStudentSelector={() => setShowStudentSelector(true)} />;
      case 'attendance':
        return <AttendanceTab student={student} onNavigate={onNavigate} onShowStudentSelector={() => setShowStudentSelector(true)} />;
      case 'timetable':
        return <TimetableTab student={student} onNavigate={onNavigate} onShowStudentSelector={() => setShowStudentSelector(true)} />;
      case 'grades':
        return <GradesTab student={student} onNavigate={onNavigate} onShowStudentSelector={() => setShowStudentSelector(true)} />;
      case 'messages':
        return <MessagesTab onNavigate={onNavigate} />;
      default:
        return <HomeTab student={student} onNavigate={onNavigate} onShowStudentSelector={() => setShowStudentSelector(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {renderTabContent()}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg" style={{ direction: 'rtl' }}>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-around px-2 py-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    isActive ? 'text-[#1976D2]' : 'text-[#9E9E9E]'
                  }`}
                >
                  <div className={`p-2 rounded-full transition-all ${
                    isActive ? 'bg-[#E3F2FD]' : ''
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                  </div>
                  <span className="text-xs">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Student Selector Widget */}
      {showStudentSelector && (
        <StudentSelectorWidget
          currentStudent={student}
          onSelectStudent={onSelectStudent}
          onClose={() => setShowStudentSelector(false)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}
