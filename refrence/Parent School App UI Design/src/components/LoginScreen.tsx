import { useState } from 'react';
import { GraduationCap, Phone, Lock, Eye, EyeOff } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function LoginScreen({ onNavigate }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (phoneNumber.length >= 10 && password.length >= 6) {
      onNavigate('selectStudent');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1976D2] to-[#1565C0] flex flex-col">
      {/* Header */}
      <div className="flex flex-col items-center pt-16 pb-12">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
          <GraduationCap className="w-16 h-16 text-[#1976D2]" />
        </div>
        <h1 className="text-white text-3xl mb-1">مدرستي</h1>
        <p className="text-[#BBDEFB]">تطبيق أولياء الأمور</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 bg-[#F7FAFF] rounded-t-[32px] px-6 pt-10">
        <h2 className="text-2xl text-gray-800 mb-2">أهلاً بك</h2>
        <p className="text-gray-500 mb-8">قم بتسجيل الدخول لمتابعة أداء أبنائك الدراسي</p>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">رقم الجوال</label>
          <div className="relative">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="05xxxxxxxx"
              className="w-full px-4 py-4 pr-12 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#1976D2] transition-colors text-right"
              dir="ltr"
            />
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="mb-8">
          <label className="block text-gray-700 mb-2">كلمة المرور</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="أدخل كلمة المرور"
              className="w-full px-4 py-4 pr-12 pl-12 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#1976D2] transition-colors text-right"
            />
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button className="text-[#1976D2] text-sm hover:underline">
              نسيت كلمة المرور؟
            </button>
          </div>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#1976D2] text-white py-4 rounded-2xl hover:bg-[#1565C0] transition-colors shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={phoneNumber.length < 10 || password.length < 6}
        >
          تسجيل الدخول
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            للحصول على حساب جديد، تواصل مع إدارة المدرسة
          </p>
        </div>
      </div>
    </div>
  );
}