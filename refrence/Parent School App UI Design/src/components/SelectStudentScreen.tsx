import { UserCircle, ChevronLeft } from 'lucide-react';
import type { Screen } from '../App';

interface Props {
  onNavigate: (screen: Screen, data?: any) => void;
}

const students = [
  {
    id: 1,
    name: 'محمد أحمد العلي',
    grade: 'الصف الخامس',
    class: 'الفصل 5-أ',
    avatar: '👦',
  },
  {
    id: 2,
    name: 'سارة أحمد العلي',
    grade: 'الصف الثالث',
    class: 'الفصل 3-ب',
    avatar: '👧',
  },
];

export default function SelectStudentScreen({ onNavigate }: Props) {
  const handleSelectStudent = (student: any) => {
    onNavigate('main', { student });
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF] px-6 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl text-gray-800 mb-2">اختر الطالب</h1>
        <p className="text-gray-500 mb-8">اختر من قائمة أبنائك لمتابعة أدائهم الدراسي</p>

        <div className="space-y-4">
          {students.map((student) => (
            <button
              key={student.id}
              onClick={() => handleSelectStudent(student)}
              className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4 border-2 border-transparent hover:border-[#1976D2]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                {student.avatar}
              </div>
              
              <div className="flex-1 text-right">
                <h3 className="text-gray-800 mb-1">{student.name}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-500">{student.grade}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500">{student.class}</span>
                </div>
              </div>

              <ChevronLeft className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            يمكنك التبديل بين الطلاب في أي وقت من الملف الشخصي
          </p>
        </div>
      </div>
    </div>
  );
}