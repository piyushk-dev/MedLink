import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa6';

const CalendarBooking = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 1)); // February 2024
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
  ];

  const bookedSlots = ['09:00 AM', '02:30 PM', '04:00 PM'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-slate-600">Select your preferred date and time slot</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">{monthName}</h2>

            {/* Calendar Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <FaChevronLeft className="text-slate-600" />
              </button>
              <div className="flex-1 text-center font-semibold text-slate-700">
                {monthName}
              </div>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <FaChevronRight className="text-slate-600" />
              </button>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-semibold text-slate-600 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  disabled={!day}
                  className={`aspect-square rounded-lg font-semibold transition-all duration-300 text-sm ${
                    !day
                      ? 'cursor-default'
                      : selectedDate === day
                      ? 'bg-blue-600 text-white shadow-lg'
                      : day < 22
                      ? 'bg-slate-50 text-slate-900 hover:bg-blue-100 hover:text-blue-600 border border-slate-200'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Selected Date Info */}
            {selectedDate && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                <p className="text-sm text-slate-600">Selected Date:</p>
                <p className="text-lg font-bold text-blue-600">
                  {selectedDate} {monthName.split(' ')[0]} {currentMonth.getFullYear()}
                </p>
              </div>
            )}
          </div>

          {/* Time Slots Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <FaClock className="mr-3 text-blue-600" />
              Time Slots
            </h2>

            {selectedDate ? (
              <div>
                <p className="text-slate-600 mb-6 text-sm">
                  Available time slots for {selectedDate} {monthName.split(' ')[0]}
                </p>

                <div className="space-y-3">
                  {timeSlots.map((time, index) => {
                    const isBooked = bookedSlots.includes(time);
                    const isSelected = selectedTime === time;

                    return (
                      <button
                        key={index}
                        onClick={() => !isBooked && setSelectedTime(time)}
                        disabled={isBooked}
                        className={`w-full p-4 rounded-lg font-semibold transition-all duration-300 text-left flex items-center justify-between ${
                          isBooked
                            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                            : isSelected
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-slate-50 text-slate-900 hover:bg-blue-100 border border-slate-200'
                        }`}
                      >
                        <span>{time}</span>
                        {isBooked && <span className="text-xs">Booked</span>}
                      </button>
                    );
                  })}
                </div>

                {selectedTime && (
                  <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-slate-600">Appointment Details:</p>
                    <div className="mt-3 space-y-2">
                      <p className="text-slate-900 font-semibold">
                        📅 {selectedDate} {monthName.split(' ')[0]} {currentMonth.getFullYear()}
                      </p>
                      <p className="text-slate-900 font-semibold">
                        🕐 {selectedTime}
                      </p>
                    </div>
                    <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors duration-300">
                      Confirm Appointment
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600">Please select a date to view available time slots</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
