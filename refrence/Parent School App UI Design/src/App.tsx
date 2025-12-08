import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import OTPScreen from './components/OTPScreen';
import SelectStudentScreen from './components/SelectStudentScreen';
import MainLayout from './components/MainLayout';
import AttendanceDetails from './components/AttendanceDetails';
import MessageDetails from './components/MessageDetails';
import StudentProfile from './components/StudentProfile';
import ParentProfile from './components/ParentProfile';
import ManageChildren from './components/ManageChildren';
import SettingsScreen from './components/SettingsScreen';

export type Screen = 
  | 'splash'
  | 'login'
  | 'otp'
  | 'selectStudent'
  | 'main'
  | 'attendance'
  | 'attendanceDetails'
  | 'timetable'
  | 'grades'
  | 'messages'
  | 'messageDetails'
  | 'profile'
  | 'parentProfile'
  | 'manageChildren'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [selectedMessage, setSelectedMessage] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');

  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('login');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const navigate = (screen: Screen, data?: any) => {
    if (data?.student) {
      setSelectedStudent(data.student);
    }
    if (data?.message) {
      setSelectedMessage(data.message);
    }
    if (data?.date) {
      setSelectedDate(data.date);
    }
    setCurrentScreen(screen);
  };

  const handleSelectStudent = (student: any) => {
    setSelectedStudent(student);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'login':
        return <LoginScreen onNavigate={navigate} />;
      case 'otp':
        return <OTPScreen onNavigate={navigate} />;
      case 'selectStudent':
        return <SelectStudentScreen onNavigate={navigate} />;
      case 'main':
        return <MainLayout student={selectedStudent} onNavigate={navigate} onSelectStudent={handleSelectStudent} />;
      case 'attendanceDetails':
        return <AttendanceDetails student={selectedStudent} date={selectedDate} onNavigate={navigate} />;
      case 'messageDetails':
        return <MessageDetails message={selectedMessage} onNavigate={navigate} />;
      case 'profile':
        return <StudentProfile student={selectedStudent} onNavigate={navigate} />;
      case 'parentProfile':
        return <ParentProfile onNavigate={navigate} />;
      case 'manageChildren':
        return <ManageChildren onNavigate={navigate} />;
      case 'settings':
        return <SettingsScreen onNavigate={navigate} />;
      default:
        return <MainLayout student={selectedStudent} onNavigate={navigate} onSelectStudent={handleSelectStudent} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAFF]" dir="rtl">
      {renderScreen()}
    </div>
  );
}