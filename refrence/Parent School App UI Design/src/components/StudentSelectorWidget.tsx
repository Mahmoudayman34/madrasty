import { X, ChevronLeft, Plus } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  currentStudent: any;
  onSelectStudent: (student: any) => void;
  onClose: () => void;
  onNavigate: (screen: Screen) => void;
}

const students = [
  { 
    id: 1, 
    name: 'محمد أحمد العلي', 
    grade: 'الصف الخامس', 
    class: '5-أ', 
    avatar: '👦',
    studentId: 'STD-2024-1234'
  },
  { 
    id: 2, 
    name: 'فاطمة أحمد العلي', 
    grade: 'الصف الثاني', 
    class: '2-ب', 
    avatar: '👧',
    studentId: 'STD-2024-5678'
  },
];

export default function StudentSelectorWidget({ currentStudent, onSelectStudent, onClose, onNavigate }: Props) {
  const handleSelectStudent = (student: any) => {
    onSelectStudent(student);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Widget */}
      <div className="fixed inset-x-0 bottom-0 z-50 animate-slideUp">
        <div className="bg-white rounded-t-[32px] shadow-2xl max-w-md mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-gray-800 text-lg">اختر الطالب</h2>
            <div className="w-10"></div>
          </div>

          {/* Students List */}
          <div className="p-6 pb-8 max-h-[70vh] overflow-y-auto">
            <div className="space-y-3 mb-4">
              {students.map((student) => {
                const isSelected = currentStudent?.id === student.id;
                return (
                  <button
                    key={student.id}
                    onClick={() => handleSelectStudent(student)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                      isSelected 
                        ? 'bg-gradient-to-r from-[#1976D2] to-[#1565C0] text-white shadow-lg scale-105' 
                        : 'bg-[#F7FAFF] hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-3xl flex-shrink-0 ${
                      isSelected ? 'bg-white/20' : 'bg-white'
                    }`}>
                      {student.avatar}
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className={`mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                        {student.name}
                      </h3>
                      <p className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
                        {student.grade} - {student.class}
                      </p>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#1976D2] rounded-full"></div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Add Student Button */}
            <button 
              onClick={() => {
                onClose();
                onNavigate('manageChildren');
              }}
              className="w-full bg-white border-2 border-dashed border-[#1976D2] rounded-2xl p-4 hover:bg-[#F7FAFF] transition-colors"
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-[#E3F2FD] rounded-full flex items-center justify-center">
                  <Plus className="w-5 h-5 text-[#1976D2]" />
                </div>
                <span className="text-[#1976D2]">إضافة طالب آخر</span>
              </div>
            </button>

            {/* Manage All Button */}
            <button 
              onClick={() => {
                onClose();
                onNavigate('manageChildren');
              }}
              className="w-full mt-3 flex items-center justify-center gap-2 py-3 text-gray-600 hover:text-[#1976D2] transition-colors"
            >
              <span className="text-sm">إدارة جميع الأبناء</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
