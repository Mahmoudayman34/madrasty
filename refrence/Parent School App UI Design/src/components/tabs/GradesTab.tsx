import { Award, Download, TrendingUp, BookOpen } from 'lucide-react';
import type { Screen } from '../../App';
import TabHeader from '../TabHeader';

interface Props {
  student: any;
  onNavigate: (screen: Screen) => void;
  onShowStudentSelector: () => void;
}

const subjects = [
  { name: 'القرآن الكريم', grade: 95, percentage: 95, color: 'bg-emerald-500', status: 'ممتاز' },
  { name: 'الرياضيات', grade: 88, percentage: 88, color: 'bg-blue-500', status: 'جيد جداً' },
  { name: 'اللغة العربية', grade: 92, percentage: 92, color: 'bg-rose-500', status: 'ممتاز' },
  { name: 'العلوم', grade: 85, percentage: 85, color: 'bg-teal-500', status: 'جيد جداً' },
  { name: 'اللغة الإنجليزية', grade: 90, percentage: 90, color: 'bg-purple-500', status: 'ممتاز' },
  { name: 'الاجتماعيات', grade: 87, percentage: 87, color: 'bg-amber-500', status: 'جيد جداً' },
  { name: 'التربية الفنية', grade: 94, percentage: 94, color: 'bg-pink-500', status: 'ممتاز' },
  { name: 'التربية البدنية', grade: 91, percentage: 91, color: 'bg-orange-500', status: 'ممتاز' },
];

const getGradeStatus = (grade: number) => {
  if (grade >= 90) return { text: 'ممتاز', color: 'text-green-600', bg: 'bg-green-100' };
  if (grade >= 80) return { text: 'جيد جداً', color: 'text-blue-600', bg: 'bg-blue-100' };
  if (grade >= 70) return { text: 'جيد', color: 'text-yellow-600', bg: 'bg-yellow-100' };
  if (grade >= 60) return { text: 'مقبول', color: 'text-orange-600', bg: 'bg-orange-100' };
  return { text: 'ضعيف', color: 'text-red-600', bg: 'bg-red-100' };
};

export default function GradesTab({ student, onNavigate, onShowStudentSelector }: Props) {
  const totalAverage = Math.round(subjects.reduce((sum, subject) => sum + subject.grade, 0) / subjects.length);
  const overallStatus = getGradeStatus(totalAverage);

  return (
    <div className="min-h-screen bg-[#F7FAFF]">
      {/* Header */}
      <TabHeader student={student} title="الدرجات والشهادات" onNavigate={onNavigate} onShowStudentSelector={onShowStudentSelector} />

      <div className="px-6 -mt-4">
        {/* Overall Performance */}
        <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] rounded-2xl p-6 mb-4 text-white shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/80 mb-1">المعدل العام</p>
              <h2 className="text-4xl">{totalAverage}%</h2>
            </div>
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm text-white/90">أداء {overallStatus.text}</span>
          </div>
        </div>

        {/* Performance Graph */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <h3 className="text-gray-700 mb-4">الأداء الدراسي</h3>
          <div className="space-y-3">
            {subjects.slice(0, 5).map((subject, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 text-sm">{subject.name}</span>
                  <span className="text-gray-800">{subject.grade}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${subject.color} transition-all duration-500`}
                    style={{ width: `${subject.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects List */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-700 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#1976D2]" />
              جميع المواد
            </h3>
          </div>

          <div className="space-y-3">
            {subjects.map((subject, index) => {
              const status = getGradeStatus(subject.grade);
              return (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-[#F7FAFF] rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-10 h-10 ${subject.color} rounded-full flex items-center justify-center`}>
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-800">{subject.name}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${status.bg} ${status.color}`}>
                        {status.text}
                      </span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-2xl text-gray-800">{subject.grade}</p>
                    <p className="text-gray-400 text-sm">من 100</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certificate Download */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 shadow-sm border-2 border-amber-200 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 mb-1">الشهادة الفصلية</h3>
              <p className="text-gray-600 text-sm">الفصل الدراسي الأول 2024</p>
            </div>
          </div>
          <button className="w-full bg-amber-500 text-white py-3 rounded-xl hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            تحميل الشهادة
          </button>
        </div>
      </div>
    </div>
  );
}
