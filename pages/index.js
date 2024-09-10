import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import SkillTest from '../components/SkillTest';
import SyllabusWiseAnalysis from '../components/SyllabusWiseAnalysis';
import ComparisonGraph from '../components/ComparisonGraph';
import PieChart from '../components/PieChart';
import Navbar from "../components/Navbar"
import { useState } from 'react';

export default function Home() {
  const skillTestData = {
    percentiles: [0, 25, 30, 50, 75, 90, 100],
    studentCounts: [2, 5, 4, 10, 8, 4, 2],
    currentPercentile: 30,
    averagePercentile: 72,
    currentStudentCount: 4,
  };

  const [marks, setMarks] = useState(10);

  const handleMarksChange = (newMarks) => {
    setMarks(newMarks);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent>
          <div className="order-1 md:order-1">
            <SkillTest onMarksChange={handleMarksChange} />
            <ComparisonGraph data={skillTestData} />
          </div>
          <div className="order-2 md:order-2">
            <SyllabusWiseAnalysis />
            <PieChart marks={marks} />
          </div>
        </MainContent>
      </div>
    </div>
  );
}
