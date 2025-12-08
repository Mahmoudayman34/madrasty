import { Download, CheckCircle, XCircle, Clock, LogOut } from 'lucide-react';
import type { Screen } from '../../App';
import TabHeader from '../TabHeader';

interface Props {
  student: any;
  onNavigate: (screen: Screen, data?: any) => void;
  onShowStudentSelector: () => void;
}

const monthDays = [
  { date: '2024-12-01', status: 'present', day: 'الأحد', dayNum: 1 },
  { date: '2024-12-02', status: 'present', day: 'الإثنين', dayNum: 2 },
  { date: '2024-12-03', status: 'late', day: 'الثلاثاء', dayNum: 3 },
  { date: '2024-12-04', status: 'present', day: 'الأربعاء', dayNum: 4 },
  { date: '2024-12-05', status: 'present', day: 'الخميس', dayNum: 5 },
  { date: '2024-12-08', status: 'present', day: 'الأحد', dayNum: 8 },
  { date: '2024-12-09', status: 'absent', day: 'الإثنين', dayNum: 9 },
  { date: '2024-12-10', status: 'present', day: 'الثلاثاء', dayNum: 10 },
  { date: '2024-12-11', status: 'early-leave', day: 'الأربعاء', dayNum: 11 },
  { date: '2024-12-12', status: 'present', day: 'الخميس', dayNum: 12 },
  { date: '2024-12-15', status: 'present', day: 'الأحد', dayNum: 15 },
  { date: '2024-12-16', status: 'present', day: 'الإثنين', dayNum: 16 },
  { date: '2024-12-17', status: 'late', day: 'الثلاثاء', dayNum: 17 },
  { date: '2024-12-18', status: 'present', day: 'الأربعاء', dayNum: 18 },
  { date: '2024-12-19', status: 'present', day: 'الخميس', dayNum: 19 },
  { date: '2024-12-22', status: 'present', day: 'الأحد', dayNum: 22 },
  { date: '2024-12-23', status: 'present', day: 'الإثنين', dayNum: 23 },
  { date: '2024-12-24', status: 'present', day: 'الثلاثاء', dayNum: 24 },
  { date: '2024-12-25', status: 'present', day: 'الأربعاء', dayNum: 25 },
  { date: '2024-12-26', status: 'present', day: 'الخميس', dayNum: 26 },
];

export default function AttendanceTab({ student, onNavigate, onShowStudentSelector }: Props) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-500';
      case 'absent': return 'bg-red-500';
      case 'late': return 'bg-orange-500';
      case 'early-leave': return 'bg-purple-500';
      default: return 'bg-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present': return 'حضور';
      case 'absent': return 'غياب';
      case 'late': return 'تأخير';
      case 'early-leave': return 'خروج مبكر';
      default: return '';
    }
  };

  const stats = {
    present: monthDays.filter(d => d.status === 'present').length,
    absent: monthDays.filter(d => d.status === 'absent').length,
    late: monthDays.filter(d => d.status === 'late').length,
    earlyLeave: monthDays.filter(d => d.status === 'early-leave').length,
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF]">
      {/* Header */}
      <TabHeader student={student} title="الحضور" onNavigate={onNavigate} onShowStudentSelector={onShowStudentSelector} />

      <div className="px-6 -mt-4">
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </div>
              <span className="text-gray-600 text-sm">حضور</span>
            </div>
            <p className="text-2xl text-gray-800">{stats.present}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <XCircle className="w-4 h-4 text-red-600" />
              </div>
              <span className="text-gray-600 text-sm">غياب</span>
            </div>
            <p className="text-2xl text-gray-800">{stats.absent}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-orange-600" />
              </div>
              <span className="text-gray-600 text-sm">تأخير</span>
            </div>
            <p className="text-2xl text-gray-800">{stats.late}</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <LogOut className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-gray-600 text-sm">خروج مبكر</span>
            </div>
            <p className="text-2xl text-gray-800">{stats.earlyLeave}</p>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-700">ديسمبر 2024</h3>
            <button className="flex items-center gap-2 text-[#1976D2] text-sm">
              <Download className="w-4 h-4" />
              تصدير PDF
            </button>
          </div>

          <div className="space-y-2">
            {monthDays.map((day) => (
              <button
                key={day.date}
                onClick={() => onNavigate('attendanceDetails', { date: day.date })}
                className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className={`w-3 h-3 rounded-full ${getStatusColor(day.status)}`}></div>
                <div className="flex-1 text-right">
                  <p className="text-gray-800 text-sm">{day.day}</p>
                </div>
                <p className="text-gray-500 text-sm">{day.dayNum}</p>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  day.status === 'present' ? 'bg-green-100 text-green-600' :
                  day.status === 'absent' ? 'bg-red-100 text-red-600' :
                  day.status === 'late' ? 'bg-orange-100 text-orange-600' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {getStatusText(day.status)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h4 className="text-gray-700 mb-3 text-sm">مؤشرات الحالة</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600 text-sm">حضور</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-gray-600 text-sm">غياب</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-gray-600 text-sm">تأخير</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-gray-600 text-sm">خروج مبكر</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
