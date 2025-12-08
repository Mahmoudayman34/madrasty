import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import type { Screen } from '../../App';
import TabHeader from '../TabHeader';

interface Props {
  onNavigate: (screen: Screen, data?: any) => void;
}

const messages = [
  {
    id: 1,
    from: 'إدارة المدرسة',
    subject: 'إعلان عن الاجتماع الشهري لأولياء الأمور',
    preview: 'ندعوكم لحضور الاجتماع الشهري يوم الأحد القادم الساعة 4 مساءً في قاعة المدرسة الرئيسية...',
    date: 'منذ ساعتين',
    icon: '🏫',
    type: 'school',
    unread: true,
    fullMessage: 'ندعوكم لحضور الاجتماع الشهري يوم الأحد القادم الساعة 4 مساءً في قاعة المدرسة الرئيسية. سيتم مناقشة خطة الفصل الدراسي الثاني والأنشطة المدرسية القادمة. نأمل حضوركم.',
  },
  {
    id: 2,
    from: 'أ. خالد سالم',
    subject: 'تحسن ملحوظ في مادة الرياضيات',
    preview: 'أود أن أشيد بالتحسن الملحوظ الذي أظهره الطالب في مادة الرياضيات خلال الأسبوعين الماضيين...',
    date: 'منذ 5 ساعات',
    icon: '👨‍🏫',
    type: 'teacher',
    unread: true,
    fullMessage: 'أود أن أشيد بالتحسن الملحوظ الذي أظهره الطالب محمد في مادة الرياضيات خلال الأسبوعين الماضيين. لقد كان حريصاً على أداء الواجبات والمشاركة الفعالة في الحصص. استمر في التشجيع والمتابعة.',
  },
  {
    id: 3,
    from: 'إدارة المدرسة',
    subject: 'جدول الاختبارات النهائية',
    preview: 'يسرنا إعلامكم بأن جدول الاختبارات النهائية للفصل الدراسي الأول أصبح متاحاً الآن...',
    date: 'أمس',
    icon: '🏫',
    type: 'school',
    unread: false,
    fullMessage: 'يسرنا إعلامكم بأن جدول الاختبارات النهائية للفصل الدراسي الأول أصبح متاحاً الآن. تبدأ الاختبارات يوم 25 ديسمبر وتستمر لمدة أسبوعين. يمكنكم الاطلاع على الجدول من خلال قسم الجدول الدراسي.',
  },
  {
    id: 4,
    from: 'أ. سارة أحمد',
    subject: 'مشروع العلوم القادم',
    preview: 'نرجو مساعدة الطالب في إعداد مشروع العلوم عن الطاقة المتجددة المقرر تسليمه يوم الخميس...',
    date: 'منذ يومين',
    icon: '👩‍🏫',
    type: 'teacher',
    unread: false,
    fullMessage: 'نرجو مساعدة الطالب في إعداد مشروع العلوم عن الطاقة المتجددة المقرر تسليمه يوم الخميس القادم. المشروع يتطلب بحث بسيط ونموذج توضيحي. يمكن استخدام مواد بسيطة من المنزل. شكراً لتعاونكم.',
  },
  {
    id: 5,
    from: 'أ. فاطمة علي',
    subject: 'تكريم الطلاب المتفوقين',
    preview: 'يسعدني إبلاغكم بأن ابنكم محمد من ضمن الطلاب المتفوقين هذا الشهر...',
    date: 'منذ 3 أيام',
    icon: '👩‍🏫',
    type: 'teacher',
    unread: false,
    fullMessage: 'يسعدني إبلاغكم بأن ابنكم محمد من ضمن الطلاب المتفوقين هذا الشهر في مادة اللغة العربية. سيتم تكريمه في طابور الصباح يوم الأحد القادم. نهنئكم ونتمنى له دوام التفوق والنجاح.',
  },
  {
    id: 6,
    from: 'إدارة المدرسة',
    subject: 'تحديث نظام الحضور والانصراف',
    preview: 'نود إعلامكم بتحديث نظام الحضور والانصراف الإلكتروني. الآن يمكنكم متابعة وقت دخول وخروج أبنائكم...',
    date: 'منذ أسبوع',
    icon: '🏫',
    type: 'school',
    unread: false,
    fullMessage: 'نود إعلامكم بتحديث نظام الحضور والانصراف الإلكتروني. الآن يمكنكم متابعة وقت دخول وخروج أبنائكم بشكل فوري عبر التطبيق. سيتم إرسال إشعار فوري عند تسجيل الحضور أو الانصراف.',
  },
];

export default function MessagesTab({ onNavigate }: Props) {
  const [filter, setFilter] = useState<'all' | 'school' | 'teacher'>('all');
  
  const unreadCount = messages.filter(m => m.unread).length;
  
  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(m => m.type === filter);

  return (
    <div className="min-h-screen bg-[#F7FAFF]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-6 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl">الرسائل</h2>
          {unreadCount > 0 && (
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <p className="text-white text-sm">{unreadCount} جديدة</p>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm shadow-md transition-all ${
              filter === 'all' 
                ? 'bg-[#1976D2] text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            الكل ({messages.length})
          </button>
          <button 
            onClick={() => setFilter('school')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'school' 
                ? 'bg-[#1976D2] text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            رسائل الإدارة ({messages.filter(m => m.type === 'school').length})
          </button>
          <button 
            onClick={() => setFilter('teacher')}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === 'teacher' 
                ? 'bg-[#1976D2] text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            رسائل المعلمين ({messages.filter(m => m.type === 'teacher').length})
          </button>
        </div>

        {/* Messages List */}
        <div className="space-y-3 pb-4">
          {filteredMessages.map((message) => (
            <button
              key={message.id}
              onClick={() => onNavigate('messageDetails', { message })}
              className={`w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all text-right ${
                message.unread ? 'border-2 border-[#1976D2]' : 'border-2 border-transparent'
              }`}
            >
              <div className="flex gap-3">
                <div className={`w-12 h-12 ${
                  message.type === 'school' ? 'bg-blue-100' : 'bg-purple-100'
                } rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                  {message.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <h3 className="text-gray-800 truncate">{message.from}</h3>
                      {message.unread && (
                        <span className="w-2 h-2 bg-[#1976D2] rounded-full flex-shrink-0"></span>
                      )}
                    </div>
                    <span className="text-gray-400 text-xs whitespace-nowrap mr-2">{message.date}</span>
                  </div>
                  
                  <h4 className="text-gray-700 text-sm mb-1 line-clamp-1">{message.subject}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2">{message.preview}</p>
                </div>

                <ChevronLeft className="w-5 h-5 text-gray-400 flex-shrink-0 self-center" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
