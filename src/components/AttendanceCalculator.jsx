import React, { useState } from 'react';
import '../AttendanceCalculator.css'; // Ensure this path is correct and points to your CSS file

function AttendanceCalculator() {
  const [totalDays, setTotalDays] = useState('');
  const [daysHostedByCollege, setDaysHostedByCollege] = useState('');
  const [daysAttended, setDaysAttended] = useState('');

  const [currentAttendance, setCurrentAttendance] = useState('');
  const [additionalDaysNeeded, setAdditionalDaysNeeded] = useState('');
  const [remainingLeaves, setRemainingLeaves] = useState('');
  const [attendanceProjection, setAttendanceProjection] = useState('');
  const [impactOfAdditionalDays, setImpactOfAdditionalDays] = useState('');
  const [attendanceAdvice, setAttendanceAdvice] = useState('');
  const [isAchievable, setIsAchievable] = useState('');

  const [attendanceCalculated, setAttendanceCalculated] = useState(false); // Track if attendance has been calculated

  const calculateAttendance = () => {
    const hostedDays = parseFloat(daysHostedByCollege);
    const attendedDays = parseFloat(daysAttended);
    const total = parseFloat(totalDays);

    if (isNaN(hostedDays) || isNaN(attendedDays) || isNaN(total)) {
      resetResults();
      return;
    }

    // Calculate current attendance percentage
    const current = (attendedDays / hostedDays) * 100;
    setCurrentAttendance(current.toFixed(2));

    // Calculate the number of additional days needed to reach 75% attendance
    let additional = 0;
    while ((attendedDays + additional) / (hostedDays + additional) * 100 < 75) {
      additional++;
    }
    setAdditionalDaysNeeded(additional);

    // Calculate the projected attendance if attending all remaining days
    const remainingDays = total - hostedDays;
    const projectedAttendance = ((attendedDays + remainingDays) / total) * 100;
    setAttendanceProjection(projectedAttendance.toFixed(2));

    // Check if 75% is achievable with remaining days
    const maxAttendance = (attendedDays + remainingDays) / total * 100;
    setIsAchievable(maxAttendance >= 75);

    // Calculate the impact of attending one additional day
    const impactAttendance = ((attendedDays + 1) / (hostedDays + 1)) * 100;
    setImpactOfAdditionalDays(impactAttendance.toFixed(2));

    // Calculate remaining leaves allowable while maintaining above 75% attendance
    let leaves = 0;
    let currentAttendanceCheck = current;
    while (currentAttendanceCheck >= 75 && hostedDays + leaves < total) {
      leaves++;
      currentAttendanceCheck = (attendedDays / (hostedDays + leaves)) * 100;
    }
    setRemainingLeaves(leaves - 1); // Subtract one to get the correct number of leaves

    // Advice based on current attendance
    if (current < 75) {
      setAttendanceAdvice(`You need to attend at least ${additional} more days to achieve over 75% attendance.`);
    } else if (current > 76.1) {
      setAttendanceAdvice(`You can take up to ${remainingLeaves} leaves and still maintain over 75% attendance.`);
    } else if (current < 74.9) {
      setAttendanceAdvice(`Is it possible to achieve >75% attendance? : ${isAchievable ? 'Yes' : 'No'}`);
    } else {
      setAttendanceAdvice(`Maintain this attendance and aim to be around 80% to account for unexpected leaves.`);
    }

    // Set attendanceCalculated to true
    setAttendanceCalculated(true);
  };

  const resetResults = () => {
    setCurrentAttendance('');
    setAdditionalDaysNeeded('');
    setRemainingLeaves('');
    setAttendanceProjection('');
    setImpactOfAdditionalDays('');
    setAttendanceAdvice('');
    setIsAchievable('');
    setAttendanceCalculated(false); // Reset attendanceCalculated state
  };

  const handleSubmit = () => {
    // Check if attendance has been calculated
    if (!attendanceCalculated) {
      return null; // Return null to prevent rendering anything until attendance is calculated
    }

    // Render based on current attendance percentage
    if (currentAttendance > 76.1) {
      return (
        <div>
          <p>Current Attendance Percentage: {currentAttendance}%</p>
          <p>You can take up to {remainingLeaves} leaves and still maintain over 75% attendance.</p>
          <p>Projected Attendance if attending all remaining days: {attendanceProjection}%</p>
          <p>Impact of Attending One Additional Day: {impactOfAdditionalDays}%</p>
        </div>
      );
    } else if (currentAttendance < 74.9) {
      return (
        <div>
          <p>Current Attendance Percentage: {currentAttendance}%</p>
          <p>Is it possible to achieve &gt;75% attendance? : {isAchievable ? 'Yes' : 'No'}</p>
          <p>Additional Days Needed for &gt;75% Attendance: {additionalDaysNeeded} days</p>
          <p>Projected Attendance if attending all remaining days: {attendanceProjection}%</p>
          <p>Impact of Attending One Additional Day: {impactOfAdditionalDays}%</p>
          <p>Attendance Advice: {attendanceAdvice}</p>
        </div>
      );
    } else { // currentAttendance is between 75 and 76.1 (inclusive)
      return (
        <div>
          <p>Current Attendance Percentage: {currentAttendance}%</p>
          <p>Projected Attendance if attending all remaining days: {attendanceProjection}%</p>
          <p>Impact of Attending One Additional Day: {impactOfAdditionalDays}%</p>
          <p>Advice: Maintain this attendance and aim to be around 80% to account for unexpected leaves.</p>
        </div>
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 attendance-calculator-body">
      <h2 className="text-3xl font-bold mb-4 attendance-calculator-title">Attendance Calculator</h2>
      <div className="bg-e8e8e2 rounded-lg shadow-lg p-8">
       <div id='note'>
       <h1>Note : There's generally total 90-100 days in a semester or check in Academic calender </h1>
       </div>
        <div className="mb-4">
          <label htmlFor="totalDays" className="block text-lg font-bold mb-2">Total Number of Days in Semester:</label>
          <input
            type="number"
            id="totalDays"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter total number of days in semester"
            value={totalDays}
            onChange={(e) => setTotalDays(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="daysHostedByCollege" className="block text-lg font-bold mb-2">Number of Days Hosted by College as of Today:</label>
          <input
            type="number"
            id="daysHostedByCollege"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter number of days hosted by college"
            value={daysHostedByCollege}
            onChange={(e) => setDaysHostedByCollege(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="daysAttended" className="block text-lg font-bold mb-2">Number of Days you Attended as of Today :</label>
          <input
            type="number"
            id="daysAttended"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            placeholder="Enter number of days attended"
            value={daysAttended}
            onChange={(e) => setDaysAttended(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="bg-[#2d2932] text-white font-bold py-2 px-4 rounded hover:bg-[#2d4048]"
          onClick={calculateAttendance}
        >
          Calculate
        </button>
        
        <div className="mt-6">
          {handleSubmit()}
        </div>
      </div>
      
    </div>
  );
}

export default AttendanceCalculator;
