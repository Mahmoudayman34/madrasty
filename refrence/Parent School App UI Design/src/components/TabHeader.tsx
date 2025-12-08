import { Bell, ChevronDown, User } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  title: string;
  onNavigate: (screen: Screen) => void;
  onShowStudentSelector: () => void;
}

export default function TabHeader({ student, title, onNavigate, onShowStudentSelector }: Props) {
  return (
    <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-6 rounded-b-[32px] shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
            {student?.avatar || '👦'}
          </div>
          <div>
            <h2 className="text-white">{title}</h2>
            <p className="text-white/70 text-sm">{student?.name || 'محمد أحمد العلي'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onNavigate('parentProfile')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <User className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center relative hover:bg-white/30 transition-colors">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>

      {/* Student Selector */}
      <button 
        onClick={onShowStudentSelector}
        className="w-full bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/20 hover:bg-white/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
            {student?.avatar || '👦'}
          </div>
          <div className="text-right">
            <p className="text-white text-sm">{student?.name || 'محمد أحمد العلي'}</p>
            <p className="text-white/70 text-xs">{student?.grade || 'الصف الخامس'} - {student?.class || '5-أ'}</p>
          </div>
        </div>
        <ChevronDown className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}