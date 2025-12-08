import { ArrowRight, User, School, Hash, Calendar, Phone, Mail, MapPin, QrCode, Settings } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  student: any;
  onNavigate: (screen: Screen) => void;
}

export default function StudentProfile({ student, onNavigate }: Props) {
  const studentInfo = {
    name: student?.name || 'محمد أحمد العلي',
    avatar: student?.avatar || '👦',
    grade: student?.grade || 'الصف الخامس',
    class: student?.class || 'الفصل 5-أ',
    studentId: '2024050145',
    dateOfBirth: '15 مارس 2014',
    parentPhone: '+966 50 123 4567',
    parentEmail: 'parent@example.com',
    address: 'الرياض، حي النرجس، شارع الأمير محمد بن عبدالعزيز',
    enrollmentDate: '1 سبتمبر 2020',
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-16 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('main')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl">الملف الشخصي</h1>
          <button
            onClick={() => onNavigate('settings')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 -mt-12">
        {/* Student Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-full flex items-center justify-center text-5xl mb-3 shadow-lg">
              {studentInfo.avatar}
            </div>
            <h2 className="text-gray-800 text-2xl mb-1">{studentInfo.name}</h2>
            <p className="text-gray-500">{studentInfo.grade} - {studentInfo.class}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onNavigate('selectStudent')}
              className="flex-1 bg-[#1976D2] text-white py-3 rounded-xl hover:bg-[#1565C0] transition-colors"
            >
              تبديل الطالب
            </button>
            <button className="flex-1 bg-[#E3F2FD] text-[#1976D2] py-3 rounded-xl hover:bg-[#BBDEFB] transition-colors">
              تحرير الملف
            </button>
          </div>
        </div>

        {/* QR Code */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#1976D2]" />
            بطاقة الطالب الرقمية
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-gray-100 rounded-2xl flex items-center justify-center mb-3">
              <div className="grid grid-cols-8 gap-1">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 ${
                      Math.random() > 0.5 ? 'bg-gray-800' : 'bg-white'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <p className="text-gray-500 text-sm text-center">
              يمكن استخدام هذا الرمز للدخول إلى المدرسة والمكتبة
            </p>
          </div>
        </div>

        {/* Student Information */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#1976D2]" />
            معلومات الطالب
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Hash className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">الرقم الطلابي</p>
                <p className="text-gray-800">{studentInfo.studentId}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">تاريخ الميلاد</p>
                <p className="text-gray-800">{studentInfo.dateOfBirth}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <School className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">تاريخ الالتحاق</p>
                <p className="text-gray-800">{studentInfo.enrollmentDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parent Information */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#1976D2]" />
            معلومات ولي الأمر
          </h3>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">رقم الجوال</p>
                <p className="text-gray-800" dir="ltr">{studentInfo.parentPhone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">البريد الإلكتروني</p>
                <p className="text-gray-800" dir="ltr">{studentInfo.parentEmail}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-teal-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-sm">العنوان</p>
                <p className="text-gray-800">{studentInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Summary */}
        <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] rounded-2xl p-5 shadow-sm border-2 border-[#1976D2]">
          <h3 className="text-gray-800 mb-4">الملخص الأكاديمي</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-xl p-3 text-center">
              <p className="text-2xl text-[#1976D2] mb-1">90%</p>
              <p className="text-gray-600 text-sm">المعدل</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center">
              <p className="text-2xl text-green-600 mb-1">95%</p>
              <p className="text-gray-600 text-sm">الحضور</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center">
              <p className="text-2xl text-purple-600 mb-1">8</p>
              <p className="text-gray-600 text-sm">المواد</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}