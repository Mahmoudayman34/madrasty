import { 
  ArrowRight, 
  User, 
  Bell, 
  Lock, 
  Globe, 
  HelpCircle, 
  FileText, 
  LogOut,
  ChevronLeft,
  Users
} from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function SettingsScreen({ onNavigate }: Props) {
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
          <h1 className="text-white text-xl">الإعدادات</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-6 -mt-6 space-y-6">
        {/* Account Section */}
        <div>
          <h3 className="text-gray-700 mb-3 px-1">الحساب</h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => onNavigate('parentProfile')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-[#1976D2]" />
                </div>
                <span className="text-gray-800">ملف ولي الأمر</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>

            <button
              onClick={() => onNavigate('selectStudent')}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-800">تغيير الطالب</span>
              </div>
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4">الإشعارات</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-800">إشعارات الحضور</p>
                  <p className="text-gray-500 text-sm">تنبيهات عند تسجيل الحضور</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1976D2]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-800">إشعارات الرسائل</p>
                  <p className="text-gray-500 text-sm">تنبيهات الرسائل الجديدة</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1976D2]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-800">إشعارات الدرجات</p>
                  <p className="text-gray-500 text-sm">تنبيهات نتائج الاختبارات</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1976D2]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4">عام</h3>
          
          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
              <Globe className="w-5 h-5 text-teal-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-gray-800">اللغة</p>
              <p className="text-gray-500 text-sm">العربية</p>
            </div>
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Support Section */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4">الدعم والمساعدة</h3>
          
          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-yellow-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-gray-800">مركز المساعدة</p>
              <p className="text-gray-500 text-sm">الأسئلة الشائعة والدعم الفني</p>
            </div>
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>

          <div className="border-t border-gray-100 my-3"></div>

          <button className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 rounded-xl transition-colors">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-gray-800">الشروط والأحكام</p>
              <p className="text-gray-500 text-sm">سياسة الخصوصية وشروط الاستخدام</p>
            </div>
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* App Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-1">تطبيق مدرستي</p>
            <p className="text-gray-400 text-xs">الإصدار 1.0.0</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => onNavigate('login')}
          className="w-full bg-red-50 text-red-600 py-4 rounded-2xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2 border-2 border-red-200"
        >
          <LogOut className="w-5 h-5" />
          تسجيل الخروج
        </button>
      </div>
    </div>
  );
}