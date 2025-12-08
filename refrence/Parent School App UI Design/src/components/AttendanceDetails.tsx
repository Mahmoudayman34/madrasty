import { ArrowRight, Clock, LogIn, LogOut, FileText, Download } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  date: string;
  onNavigate: (screen: Screen) => void;
}

export default function AttendanceDetails({ student, date, onNavigate }: Props) {
  // Mock data for the selected date
  const attendanceData = {
    status: 'حضور',
    statusColor: 'green',
    date: 'الأربعاء، 18 ديسمبر 2024',
    entryTime: '7:15 صباحاً',
    exitTime: '1:45 مساءً',
    notes: 'حضر الطالب في الموعد المحدد وغادر في نهاية اليوم الدراسي',
    totalHours: '6 ساعات و 30 دقيقة',
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('main')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl">تفاصيل الحضور</h1>
          <div className="w-10"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20">
          <p className="text-white text-center">{attendanceData.date}</p>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Status Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-20 h-20 bg-${attendanceData.statusColor}-100 rounded-full flex items-center justify-center`}>
              <LogIn className={`w-10 h-10 text-${attendanceData.statusColor}-600`} />
            </div>
          </div>
          <h2 className={`text-center text-2xl text-${attendanceData.statusColor}-600 mb-2`}>
            {attendanceData.status}
          </h2>
          <p className="text-center text-gray-500">
            {student?.name || 'محمد أحمد العلي'}
          </p>
        </div>

        {/* Time Details */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#1976D2]" />
            تفاصيل الوقت
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <LogIn className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800">وقت الدخول</p>
                  <p className="text-gray-500 text-sm">دخول إلى المدرسة</p>
                </div>
              </div>
              <p className="text-gray-800">{attendanceData.entryTime}</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <LogOut className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-800">وقت الخروج</p>
                  <p className="text-gray-500 text-sm">خروج من المدرسة</p>
                </div>
              </div>
              <p className="text-gray-800">{attendanceData.exitTime}</p>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#E3F2FD] rounded-xl border-2 border-[#1976D2]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1976D2] rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-800">إجمالي الساعات</p>
                  <p className="text-gray-500 text-sm">مدة البقاء في المدرسة</p>
                </div>
              </div>
              <p className="text-[#1976D2]">{attendanceData.totalHours}</p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1976D2]" />
            ملاحظات
          </h3>
          <div className="p-4 bg-[#F7FAFF] rounded-xl">
            <p className="text-gray-600 leading-relaxed">{attendanceData.notes}</p>
          </div>
        </div>

        {/* Export Button */}
        <button className="w-full bg-[#1976D2] text-white py-4 rounded-2xl hover:bg-[#1565C0] transition-colors shadow-lg flex items-center justify-center gap-2">
          <Download className="w-5 h-5" />
          تصدير تقرير PDF
        </button>
      </div>
    </div>
  );
}