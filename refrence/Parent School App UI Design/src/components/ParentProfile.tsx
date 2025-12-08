import { useState } from 'react';
import { 
  ArrowRight,
  Edit3,
  Phone,
  Mail,
  IdCard,
  ChevronLeft,
  Users,
  Lock,
  Bell,
  Globe,
  Info,
  MessageCircle,
  HelpCircle,
  AlertCircle,
  LogOut
} from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function ParentProfile({ onNavigate }: Props) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const parentData = {
    name: 'أحمد محمد العلي',
    avatar: '👨‍💼',
    phone: '+966 50 123 4567',
    email: 'ahmed.ali@email.com',
    parentCode: 'P-2024-1573',
  };

  const children = [
    { id: 1, name: 'محمد أحمد العلي', grade: 'الصف الخامس', class: '5-أ', avatar: '👦' },
    { id: 2, name: 'فاطمة أحمد العلي', grade: 'الصف الثاني', class: '2-ب', avatar: '👧' },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2]/10 to-transparent px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('main')}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-gray-800 text-xl">ملفي</h1>
          <div className="w-10"></div>
        </div>

        {/* Parent Info Card */}
        <div className="bg-white rounded-2xl p-5 shadow-md relative">
          <button className="absolute top-4 left-4 w-8 h-8 bg-[#E3F2FD] rounded-full flex items-center justify-center">
            <Edit3 className="w-4 h-4 text-[#1976D2]" />
          </button>

          <div className="flex flex-col items-center mb-5">
            <div className="w-24 h-24 bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-full flex items-center justify-center text-5xl mb-3 shadow-lg">
              {parentData.avatar}
            </div>
            <h2 className="text-gray-800 text-xl mb-1">{parentData.name}</h2>
            <p className="text-gray-500 text-sm">ولي أمر</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#1976D2]" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs mb-1">رقم الهاتف</p>
                <p className="text-gray-800 text-sm">{parentData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs mb-1">البريد الإلكتروني</p>
                <p className="text-gray-800 text-sm">{parentData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-[#F7FAFF] rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <IdCard className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-gray-500 text-xs mb-1">رمز ولي الأمر</p>
                <p className="text-gray-800 text-sm">{parentData.parentCode}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Account Settings Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">إعدادات الحساب</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#1976D2]" />
                </div>
                <span className="text-gray-800">تغيير رقم الهاتف</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-800">تغيير البريد الإلكتروني</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-gray-800">تغيير كلمة المرور</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button 
              onClick={() => onNavigate('manageChildren')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-800">إدارة الأبناء</p>
                  <p className="text-gray-500 text-xs">{children.length} طالب</p>
                </div>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* App Settings Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">إعدادات التطبيق</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-yellow-600" />
                </div>
                <span className="text-gray-800">الإشعارات</span>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-[#1976D2]' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    notificationsEnabled ? 'left-0.5' : 'right-0.5'
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border-b border-gray-100 opacity-60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-right">
                  <p className="text-gray-800">اللغة</p>
                  <p className="text-gray-500 text-xs">العربية فقط</p>
                </div>
              </div>
              <Lock className="w-4 h-4 text-gray-400" />
            </div>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-cyan-600" />
                </div>
                <span className="text-gray-800">حول التطبيق</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">الدعم</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#1976D2]" />
                </div>
                <span className="text-gray-800">تواصل مع المدرسة</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-gray-800">الأسئلة الشائعة</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <span className="text-gray-800">الإبلاغ عن مشكلة</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button 
          onClick={() => onNavigate('login')}
          className="w-full bg-[#E53935] text-white py-4 rounded-2xl hover:bg-[#C62828] transition-colors shadow-md flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          تسجيل الخروج
        </button>

        {/* App Version */}
        <div className="text-center py-4">
          <p className="text-gray-400 text-sm">الإصدار 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
