import { useState } from 'react';
import { ArrowRight, Download, CheckCircle, XCircle, Clock, LogOut } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  onNavigate: (screen: Screen, data?: any) => void;
}

const monthDays = [
  { date: '2024-12-01', status: 'present', day: 'الأحد' },
  { date: '2024-12-02', status: 'present', day: 'الإثنين' },
  { date: '2024-12-03', status: 'late', day: 'الثلاثاء' },
  { date: '2024-12-04', status: 'present', day: 'الأربعاء' },
  { date: '2024-12-05', status: 'present', day: 'الخميس' },
  { date: '2024-12-08', status: 'present', day: 'الأحد' },
  { date: '2024-12-09', status: 'absent', day: 'الإثنين' },
  { date: '2024-12-10', status: 'present', day: 'الثلاثاء' },
  { date: '2024-12-11', status: 'early-leave', day: 'الأربعاء' },
  { date: '2024-12-12', status: 'present', day: 'الخميس' },
  { date: '2024-12-15', status: 'present', day: 'الأحد' },
  { date: '2024-12-16', status: 'present', day: 'الإثنين' },
  { date: '2024-12-17', status: 'late', day: 'الثلاثاء' },
  { date: '2024-12-18', status: 'present', day: 'الأربعاء' },
  { date: '2024-12-19', status: 'present', day: 'الخميس' },
  { date: '2024-12-22', status: 'present', day: 'الأحد' },
  { date: '2024-12-23', status: 'present', day: 'الإثنين' },
  { date: '2024-12-24', status: 'present', day: 'الثلاثاء' },
  { date: '2024-12-25', status: 'present', day: 'الأربعاء' },
  { date: '2024-12-26', status: 'present', day: 'الخميس' },
];

export default function AttendanceModule({ student, onNavigate }: Props) {
  const [selectedMonth] = useState('ديسمبر 2024');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-500';
      case 'absent':
        return 'bg-red-500';
      case 'late':
        return 'bg-orange-500';
      case 'early-leave':
        return 'bg-purple-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'present':
        return 'حضور';
      case 'absent':
        return 'غياب';
      case 'late':
        return 'تأخير';
      case 'early-leave':
        return 'خروج مبكر';
      default:
        return '';
    }
  };

  const stats = {
    present: monthDays.filter(d => d.status === 'present').length,
    absent: monthDays.filter(d => d.status === 'absent').length,
    late: monthDays.filter(d => d.status === 'late').length,
    earlyLeave: monthDays.filter(d => d.status === 'early-leave').length,
  };

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
          <h1 className="text-white text-xl">سجل الحضور</h1>
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
            <h3 className="text-gray-700">{selectedMonth}</h3>
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
                <p className="text-gray-500 text-sm">{new Date(day.date).getDate()}</p>
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
        <div className="bg-white rounded-2xl p-5 shadow-sm">
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
