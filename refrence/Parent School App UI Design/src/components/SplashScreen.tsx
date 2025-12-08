import { GraduationCap } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-[#1976D2] flex flex-col items-center justify-center px-6">
      <div className="animate-pulse">
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
          <GraduationCap className="w-20 h-20 text-[#1976D2]" />
        </div>
      </div>
      
      <h1 className="text-white text-4xl mb-2">مدرستي</h1>
      <p className="text-[#BBDEFB] text-xl">تطبيق أولياء الأمور</p>
      
      <div className="mt-16">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
