import { useState } from 'react';
import { Clock, BookOpen } from 'lucide-react';
import type { Screen } from '../../App';
import TabHeader from '../TabHeader';

interface Props {
  student: any;
  onNavigate: (screen: Screen) => void;
  onShowStudentSelector: () => void;
}

const weekDays = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'];

const timetable: Record<string, Array<{subject: string; time: string; teacher: string; color: string}>> = {
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

export default function TimetableTab({ student, onNavigate, onShowStudentSelector }: Props) {
  const [selectedDay, setSelectedDay] = useState('الأربعاء');

  return (
    <div className="min-h-screen bg-[#F7FAFF]">
      {/* Header */}
      <TabHeader student={student} title="الجدول الدراسي" onNavigate={onNavigate} onShowStudentSelector={onShowStudentSelector} />

      <div className="px-6 -mt-4">
        {/* Current Class */}
        <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-5 mb-4 text-white shadow-lg">
          <div className="flex items-center gap-2 mb-3 opacity-90">
            <Clock className="w-4 h-4" />
            <span className="text-sm">الحصة الحالية</span>
          </div>
          <h3 className="text-xl mb-1">الرياضيات</h3>
          <p className="text-white/80 text-sm mb-2">أ. خالد سالم</p>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">8:00 - 8:45</span>
          </div>
        </div>

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
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
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
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
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
