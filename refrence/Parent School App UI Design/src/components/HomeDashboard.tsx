import { 
  Bell, 
  CalendarCheck, 
  Calendar, 
  Award, 
  MessageSquare, 
  User,
  Clock,
  CheckCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  onNavigate: (screen: Screen) => void;
}

export default function HomeDashboard({ student, onNavigate }: Props) {
  const currentTime = new Date().toLocaleTimeString('ar-SA', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
              {student?.avatar || '👦'}
            </div>
            <div>
              <p className="text-white/80 text-sm">مرحباً،</p>
              <h2 className="text-white">ولي أمر {student?.name?.split(' ')[0] || 'محمد'}</h2>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Student Selector */}
        <button 
          onClick={() => onNavigate('selectStudent')}
          className="w-full bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center justify-between border border-white/20"
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

      <div className="px-6 -mt-6">
        {/* Today's Attendance Status */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-[#1976D2]" />
            حالة الحضور اليوم
          </h3>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-green-600 mb-1">حاضر</p>
              <p className="text-gray-400 text-sm">وقت الدخول: 7:15 صباحاً</p>
            </div>
          </div>
        </div>

        {/* Current & Next Class */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-4 text-white shadow-sm">
            <div className="flex items-center gap-2 mb-3 opacity-90">
              <Clock className="w-4 h-4" />
              <span className="text-sm">الحصة الحالية</span>
            </div>
            <h4 className="mb-1">الرياضيات</h4>
            <p className="text-white/70 text-sm">8:00 - 8:45</p>
          </div>

          <div className="bg-white border-2 border-[#BBDEFB] rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">الحصة التالية</span>
            </div>
            <h4 className="text-gray-800 mb-1">العلوم</h4>
            <p className="text-gray-500 text-sm">8:50 - 9:35</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4">الإجراءات السريعة</h3>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => onNavigate('attendance')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <CalendarCheck className="w-6 h-6 text-[#1976D2]" />
              </div>
              <span className="text-gray-700 text-sm text-center">الحضور</span>
            </button>

            <button
              onClick={() => onNavigate('timetable')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#1976D2]" />
              </div>
              <span className="text-gray-700 text-sm text-center">الجدول</span>
            </button>

            <button
              onClick={() => onNavigate('grades')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-[#1976D2]" />
              </div>
              <span className="text-gray-700 text-sm text-center">الشهادات</span>
            </button>

            <button
              onClick={() => onNavigate('messages')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-[#1976D2]" />
              </div>
              <span className="text-gray-700 text-sm text-center">الرسائل</span>
            </button>

            <button
              onClick={() => onNavigate('profile')}
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-[#1976D2]" />
              </div>
              <span className="text-gray-700 text-sm text-center">الملف الشخصي</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-700">الإشعارات الأخيرة</h3>
            <button className="text-[#1976D2] text-sm">عرض الكل</button>
          </div>
          
          <div className="space-y-3">
            <div className="flex gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm mb-1">تم تسجيل حضور الطالب</p>
                <p className="text-gray-400 text-xs">منذ ساعة واحدة</p>
              </div>
            </div>

            <div className="flex gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm mb-1">رسالة جديدة من معلم الرياضيات</p>
                <p className="text-gray-400 text-xs">منذ ساعتين</p>
              </div>
            </div>

            <div className="flex gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 text-sm mb-1">نتائج اختبار العلوم متاحة الآن</p>
                <p className="text-gray-400 text-xs">منذ 3 ساعات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
