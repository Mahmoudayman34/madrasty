import { ArrowRight, Plus, Trash2, Edit3, ChevronLeft } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen) => void;
}

export default function ManageChildren({ onNavigate }: Props) {
  const children = [
    { 
      id: 1, 
      name: 'محمد أحمد العلي', 
      grade: 'الصف الخامس', 
      class: '5-أ', 
      avatar: '👦',
      studentId: 'STD-2024-1234',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'فاطمة أحمد العلي', 
      grade: 'الصف الثاني', 
      class: '2-ب', 
      avatar: '👧',
      studentId: 'STD-2024-5678',
      status: 'active'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7FAFF] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#1976D2] to-[#1565C0] px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => onNavigate('parentProfile')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-white text-xl">إدارة الأبناء</h1>
          <div className="w-10"></div>
        </div>

        <p className="text-white/90 text-sm text-center">
          يمكنك إضافة أو إزالة أبنائك من الحساب
        </p>
      </div>

      <div className="px-6 -mt-4">
        {/* Add Child Button */}
        <button className="w-full bg-white rounded-2xl p-5 shadow-md mb-4 hover:shadow-lg transition-all border-2 border-dashed border-[#1976D2]">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-[#E3F2FD] rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6 text-[#1976D2]" />
            </div>
            <div className="text-right">
              <h3 className="text-gray-800 mb-1">إضافة طالب جديد</h3>
              <p className="text-gray-500 text-sm">أضف ابنك إلى حسابك</p>
            </div>
          </div>
        </button>

        {/* Children List */}
        <div className="space-y-3">
          <h3 className="text-gray-700 mb-3 px-1">الأبناء المسجلين ({children.length})</h3>
          
          {children.map((child) => (
            <div key={child.id} className="bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-full flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                  {child.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 mb-1">{child.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{child.grade} - {child.class}</p>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                      نشط
                    </span>
                    <span className="text-gray-400 text-xs">{child.studentId}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => onNavigate('profile')}
                  className="flex-1 bg-[#E3F2FD] text-[#1976D2] py-3 rounded-xl hover:bg-[#BBDEFB] transition-colors flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  عرض الملف
                </button>
                <button className="px-4 bg-blue-100 text-[#1976D2] rounded-xl hover:bg-blue-200 transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="px-4 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 rounded-2xl p-4 border-2 border-blue-100">
          <div className="flex gap-3">
            <div className="text-2xl">ℹ️</div>
            <div className="flex-1">
              <h4 className="text-blue-800 mb-1">معلومة مهمة</h4>
              <p className="text-blue-600 text-sm leading-relaxed">
                لإضافة طالب جديد، ستحتاج إلى رمز الطالب الذي يمكنك الحصول عليه من إدارة المدرسة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
