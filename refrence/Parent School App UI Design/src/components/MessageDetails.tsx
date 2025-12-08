import { ArrowRight, Calendar, Mail } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  message: any;
  onNavigate: (screen: Screen) => void;
}

export default function MessageDetails({ message, onNavigate }: Props) {
  if (!message) {
    return (
      <div className="min-h-screen bg-[#F7FAFF] flex items-center justify-center">
        <p className="text-gray-500">لم يتم العثور على الرسالة</p>
      </div>
    );
  }

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
          <h1 className="text-white text-xl">تفاصيل الرسالة</h1>
          <div className="w-10"></div>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Sender Info */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-14 h-14 ${
              message.type === 'school' ? 'bg-blue-100' : 'bg-purple-100'
            } rounded-full flex items-center justify-center text-3xl`}>
              {message.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 mb-1">{message.from}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{message.date}</span>
              </div>
            </div>
          </div>

          <div className={`px-3 py-2 rounded-xl ${
            message.type === 'school' ? 'bg-blue-50' : 'bg-purple-50'
          } inline-flex items-center gap-2`}>
            <Mail className={`w-4 h-4 ${
              message.type === 'school' ? 'text-blue-600' : 'text-purple-600'
            }`} />
            <span className={`text-sm ${
              message.type === 'school' ? 'text-blue-600' : 'text-purple-600'
            }`}>
              {message.type === 'school' ? 'رسالة من المدرسة' : 'رسالة من المعلم'}
            </span>
          </div>
        </div>

        {/* Message Subject */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h2 className="text-gray-800 text-xl mb-4 leading-relaxed">
            {message.subject}
          </h2>
          
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 leading-loose whitespace-pre-wrap">
              {message.fullMessage}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex gap-3">
            <button className="flex-1 bg-[#1976D2] text-white py-3 rounded-xl hover:bg-[#1565C0] transition-colors">
              الرد على الرسالة
            </button>
            <button className="px-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
              حذف
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 bg-blue-50 rounded-2xl p-4 border-2 border-blue-100">
          <p className="text-blue-700 text-sm text-center">
            💡 يمكنك التواصل مع المعلمين والإدارة بشكل مباشر من خلال هذا القسم
          </p>
        </div>
      </div>
    </div>
  );
}