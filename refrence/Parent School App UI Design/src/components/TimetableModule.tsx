import { useState } from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  onNavigate: (screen: Screen) => void;
}

const weekDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

const timetable = {
  'الأحد': [
    { subject: 'القرآن الكريم', time: '7:30 - 8:15', teacher: 'أ. أحمد محمد', color: 'bg-emerald-500' },
    { subject: 'الرياضيات', time: '8:15 - 9:00', teacher: 'أ. خالد سالم', color: 'bg-blue-500' },
    { subject: 'اللغة العربية', time: '9:00 - 9:45', teacher: 'أ. فاطمة علي', color: 'bg-rose-500' },
    { subject: 'استراحة', time: '9:45 - 10:00', teacher: '', color: 'bg-gray-300' },
    { subject: 'العلوم', time: '10:00 - 10:45', teacher: 'أ. سارة أحمد', color: 'bg-teal-500' },
    { subject: 'التربية البدنية', time: '10:45 - 11:30', teacher: 'أ. عمر حسن', color: 'bg-orange-500' },
  ],
  'الإثنين': [
    { subject: 'اللغة الإنجليزية', time: '7:30 - 8:15', teacher: 'أ. نورا سعيد', color: 'bg-purple-500' },
    { subject: 'الرياضيات', time: '8:15 - 9:00', teacher: 'أ. خالد سالم', color: 'bg-blue-500' },
    { subject: 'العلوم', time: '9:00 - 9:45', teacher: 'أ. سارة أحمد', color: 'bg-teal-500' },
    { subject: 'استراحة', time: '9:45 - 10:00', teacher: '', color: 'bg-gray-300' },
    { subject: 'الاجتماعيات', time: '10:00 - 10:45', teacher: 'أ. محمود علي', color: 'bg-amber-500' },
    { subject: 'التربية الفنية', time: '10:45 - 11:30', teacher: 'أ. ليلى حسن', color: 'bg-pink-500' },
  ],
  'الثلاثاء': [
    { subject: 'القرآن الكريم', time: '7:30 - 8:15', teacher: 'أ. أحمد محمد', color: 'bg-emerald-500' },
    { subject: 'اللغة العربية', time: '8:15 - 9:00', teacher: 'أ. فاطمة علي', color: 'bg-rose-500' },
    { subject: 'الرياضيات', time: '9:00 - 9:45', teacher: 'أ. خالد سالم', color: 'bg-blue-500' },
    { subject: 'استراحة', time: '9:45 - 10:00', teacher: '', color: 'bg-gray-300' },
    { subject: 'اللغة الإنجليزية', time: '10:00 - 10:45', teacher: 'أ. نورا سعيد', color: 'bg-purple-500' },
    { subject: 'الحاسب الآلي', time: '10:45 - 11:30', teacher: 'أ. ياسر خالد', color: 'bg-indigo-500' },
  ],
  'الأربعاء': [
    { subject: 'اللغة العربية', time: '7:30 - 8:15', teacher: 'أ. فاطمة علي', color: 'bg-rose-500' },
    { subject: 'العلوم', time: '8:15 - 9:00', teacher: 'أ. سارة أحمد', color: 'bg-teal-500' },
    { subject: 'الرياضيات', time: '9:00 - 9:45', teacher: 'أ. خالد سالم', color: 'bg-blue-500' },
    { subject: 'استراحة', time: '9:45 - 10:00', teacher: '', color: 'bg-gray-300' },
    { subject: 'الاجتماعيات', time: '10:00 - 10:45', teacher: 'أ. محمود علي', color: 'bg-amber-500' },
    { subject: 'التربية الموسيقية', time: '10:45 - 11:30', teacher: 'أ. هدى محمد', color: 'bg-cyan-500' },
  ],
  'الخميس': [
    { subject: 'القرآن الكريم', time: '7:30 - 8:15', teacher: 'أ. أحمد محمد', color: 'bg-emerald-500' },
    { subject: 'اللغة الإنجليزية', time: '8:15 - 9:00', teacher: 'أ. نورا سعيد', color: 'bg-purple-500' },
    { subject: 'العلوم', time: '9:00 - 9:45', teacher: 'أ. سارة أحمد', color: 'bg-teal-500' },
    { subject: 'استراحة', time: '9:45 - 10:00', teacher: '', color: 'bg-gray-300' },
    { subject: 'الرياضيات', time: '10:00 - 10:45', teacher: 'أ. خالد سالم', color: 'bg-blue-500' },
    { subject: 'التربية البدنية', time: '10:45 - 11:30', teacher: 'أ. عمر حسن', color: 'bg-orange-500' },
  ],
};

export default function TimetableModule({ student, onNavigate }: Props) {
  const [selectedDay, setSelectedDay] = useState('الأربعاء');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  const getCurrentClass = () => {
    const todaySchedule = timetable[selectedDay];
    for (const classItem of todaySchedule) {
      if (classItem.subject === 'استراحة') continue;
      const [start] = classItem.time.split(' - ');
      const [startHour, startMinute] = start.split(':').map(num => parseInt(num.replace(/[^\d]/g, '')));
      const startTimeInMinutes = startHour * 60 + startMinute;
      
      if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < startTimeInMinutes + 45) {
        return classItem;
      }
    }
    return null;
  };

  const currentClass = getCurrentClass();

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl">الجدول الدراسي</h1>
          <div className="w-10"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3 border border-white/20">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
            {student?.avatar || '👦'}
          </div>
          <div>
            <p className="text-white text-sm">{student?.name || 'محمد أحمد العلي'}</p>
            <p className="text-white/70 text-xs">{student?.grade || 'الصف الخامس'}</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Current Class (if school hours) */}
        {currentClass && currentHour >= 7 && currentHour < 12 && (
          <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-5 mb-4 text-white shadow-lg">
            <div className="flex items-center gap-2 mb-3 opacity-90">
              <Clock className="w-4 h-4" />
              <span className="text-sm">الحصة الحالية</span>
            </div>
            <h3 className="text-xl mb-1">{currentClass.subject}</h3>
            <p className="text-white/80 text-sm mb-2">{currentClass.teacher}</p>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{currentClass.time}</span>
            </div>
          </div>
        )}

        {/* Day Selector */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {weekDays.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-5 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedDay === day
                  ? 'bg-[#1976D2] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Timetable */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#1976D2]" />
            جدول يوم {selectedDay}
          </h3>

          <div className="space-y-3">
            {timetable[selectedDay].map((classItem, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden ${
                  classItem.subject === 'استراحة'
                    ? 'bg-gray-50 border-2 border-dashed border-gray-300'
                    : 'bg-white border-2 border-gray-100 hover:border-[#BBDEFB] transition-colors'
                }`}
              >
                <div className="flex">
                  <div className={`w-1.5 ${classItem.color}`}></div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-gray-800 mb-1">{classItem.subject}</h4>
                        {classItem.teacher && (
                          <p className="text-gray-500 text-sm">{classItem.teacher}</p>
                        )}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs ${
                        classItem.subject === 'استراحة'
                          ? 'bg-gray-200 text-gray-600'
                          : 'bg-[#E3F2FD] text-[#1976D2]'
                      }`}>
                        {classItem.time}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mt-4">
          <h4 className="text-gray-700 mb-3">ملخص اليوم</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F7FAFF] rounded-xl p-3">
              <p className="text-gray-500 text-sm mb-1">عدد الحصص</p>
              <p className="text-gray-800 text-xl">
                {timetable[selectedDay].filter(c => c.subject !== 'استراحة').length}
              </p>
            </div>
            <div className="bg-[#F7FAFF] rounded-xl p-3">
              <p className="text-gray-500 text-sm mb-1">وقت البداية</p>
              <p className="text-gray-800 text-xl">7:30 ص</p>
            </div>
            <div className="bg-[#F7FAFF] rounded-xl p-3">
              <p className="text-gray-500 text-sm mb-1">وقت الانتهاء</p>
              <p className="text-gray-800 text-xl">11:30 ص</p>
            </div>
            <div className="bg-[#F7FAFF] rounded-xl p-3">
              <p className="text-gray-500 text-sm mb-1">مدة الاستراحة</p>
              <p className="text-gray-800 text-xl">15 د</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
