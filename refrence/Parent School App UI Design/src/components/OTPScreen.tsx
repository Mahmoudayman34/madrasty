import { useState, useRef, useEffect } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function OTPScreen({ onNavigate }: Props) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto-verify when all filled
      if (newOtp.every((digit) => digit !== '') && index === 3) {
        setTimeout(() => onNavigate('selectStudent'), 500);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] px-6 py-8">
      {/* Header */}
      <button
        onClick={() => onNavigate('login')}
        className="flex items-center gap-2 text-gray-600 mb-8"
      >
        <ArrowRight className="w-5 h-5" />
      </button>

      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-gray-800 mb-3">التحقق من الرمز</h1>
        <p className="text-gray-500 mb-8">
          تم إرسال رمز التحقق إلى رقم الجوال
          <br />
          <span className="text-[#1976D2]">+966 5xxxxxxxx</span>
        </p>

        {/* OTP Input */}
        <div className="flex justify-center gap-4 mb-8" dir="ltr">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center text-2xl bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#1976D2] transition-colors"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <div className="text-center mb-8">
          {timer > 0 ? (
            <p className="text-gray-500">
              إعادة إرسال الرمز بعد{' '}
              <span className="text-[#1976D2]">{timer}</span> ثانية
            </p>
          ) : (
            <button
              onClick={() => setTimer(60)}
              className="flex items-center gap-2 text-[#1976D2] mx-auto"
            >
              <RefreshCw className="w-4 h-4" />
              إعادة إرسال الرمز
            </button>
          )}
        </div>

        <button
          onClick={() => onNavigate('selectStudent')}
          className="w-full bg-[#1976D2] text-white py-4 rounded-2xl hover:bg-[#1565C0] transition-colors shadow-lg"
        >
          تحقق
        </button>
      </div>
    </div>
  );
}
