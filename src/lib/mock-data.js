export const API_BASE = "https://medlink-deploy.onrender.com";

export const doctors = [
  { id: 1, name: "Dr. Priya Sharma", specialty: "Cardiology", experience: 15, hospital: "AIIMS Delhi", rating: 4.9, patients: 2500 },
  { id: 2, name: "Dr. Rajesh Patel", specialty: "Neurology", experience: 20, hospital: "Apollo Hospital, Chennai", rating: 4.8, patients: 3200 },
  { id: 3, name: "Dr. Ananya Gupta", specialty: "Orthopedics", experience: 12, hospital: "Fortis Hospital, Noida", rating: 4.7, patients: 1800 },
  { id: 4, name: "Dr. Vikram Singh", specialty: "Oncology", experience: 18, hospital: "Medanta, Gurugram", rating: 4.9, patients: 2100 },
  { id: 5, name: "Dr. Meera Iyer", specialty: "Pediatrics", experience: 10, hospital: "Apollo Hospital, Hyderabad", rating: 4.6, patients: 4500 },
  { id: 6, name: "Dr. Arjun Reddy", specialty: "Dermatology", experience: 8, hospital: "Max Hospital, Saket", rating: 4.5, patients: 3800 },
  { id: 7, name: "Dr. Rekha Menon", specialty: "ENT", experience: 14, hospital: "Fortis Hospital, Bangalore", rating: 4.7, patients: 2200 },
  { id: 8, name: "Dr. Sunil Varma", specialty: "Gastroenterology", experience: 16, hospital: "AIIMS Delhi", rating: 4.8, patients: 2800 },
  { id: 9, name: "Dr. Kavitha Rao", specialty: "Urology", experience: 11, hospital: "Apollo Hospital, Chennai", rating: 4.6, patients: 1500 },
  { id: 10, name: "Dr. Manish Tiwari", specialty: "General Medicine", experience: 22, hospital: "SGPGI, Lucknow", rating: 4.9, patients: 5400 },
  { id: 11, name: "Dr. Deepa Nair", specialty: "Pulmonology", experience: 13, hospital: "Medanta, Gurugram", rating: 4.7, patients: 1900 },
  { id: 12, name: "Dr. Amit Saxena", specialty: "Endocrinology", experience: 17, hospital: "Max Hospital, Saket", rating: 4.8, patients: 2300 },
  { id: 13, name: "Dr. Shalini Kapoor", specialty: "Cardiology", experience: 19, hospital: "Fortis Escorts, Delhi", rating: 4.8, patients: 3100 },
  { id: 14, name: "Dr. Rohit Chandra", specialty: "Neurology", experience: 14, hospital: "NIMHANS, Bangalore", rating: 4.7, patients: 2600 },
  { id: 15, name: "Dr. Nandini Bose", specialty: "Pediatrics", experience: 9, hospital: "Rainbow Children's Hospital, Hyderabad", rating: 4.6, patients: 3900 },
  { id: 16, name: "Dr. Karthik Rajan", specialty: "Orthopedics", experience: 15, hospital: "Apollo Hospital, Chennai", rating: 4.8, patients: 2400 },
  { id: 17, name: "Dr. Pooja Malhotra", specialty: "General Medicine", experience: 10, hospital: "Safdarjung Hospital, Delhi", rating: 4.5, patients: 4200 },
  { id: 18, name: "Dr. Sunita Devi", specialty: "Oncology", experience: 21, hospital: "Tata Memorial Hospital, Mumbai", rating: 4.9, patients: 2700 },
];

export const hospitalFeatures = [
  { title: "24/7 Emergency Care", description: "Round-the-clock emergency departments with trauma units, ambulance dispatch, and critical care teams ready at all partner hospitals." },
  { title: "Multi-Specialty Network", description: "Access cardiology, neurology, orthopedics, oncology, pediatrics and 12+ departments across 500+ verified hospitals." },
  { title: "Live Bed Tracking", description: "Real-time updates on General, ICU, and Oxygen-supported beds so you never waste time calling hospitals during emergencies." },
  { title: "Verified Specialists", description: "Every doctor on Medlink is verified with credentials from NMC-recognized institutions. Book consultations with confidence." },
];

export const departments = [
  "Cardiology", "Neurology", "Orthopedics", "Oncology", "Pediatrics",
  "Dermatology", "ENT", "Gastroenterology", "Urology", "General Medicine",
  "Pulmonology", "Endocrinology",
];

export const healthMetrics = { heartRate: 72, bloodPressure: "120/80", weight: 68, height: 170 };

export const labReports = [
  { id: 1, name: "Complete Blood Count", date: "2026-02-05", status: "Ready" },
  { id: 2, name: "Lipid Profile", date: "2026-01-28", status: "Ready" },
  { id: 3, name: "Thyroid Panel", date: "2026-01-15", status: "Ready" },
];

export const faqs = [
  { question: "How do I book an appointment?", answer: "You can book an appointment through the 'Book Appointment' page. Select your preferred doctor, department, date, and time, then confirm your booking." },
  { question: "Is my medical data secure?", answer: "Yes, we use enterprise-grade encryption and follow strict privacy protocols to ensure your medical data is completely secure." },
  { question: "Can I cancel or reschedule my appointment?", answer: "Yes, you can cancel or reschedule your appointment up to 4 hours before the scheduled time through your Patient Dashboard." },
  { question: "How do I check bed availability?", answer: "Visit the 'Find Beds' page to see real-time bed availability across all partner hospitals. You can filter by city, hospital type, and bed type." },
  { question: "Are online consultations available?", answer: "Yes, many of our doctors offer online consultations. Look for the 'Video Consultation' option when booking an appointment." },
];

export const teamMembers = [
  { name: "Piyush Kumar", role: "Full-Stack Lead" },
  { name: "Sairam Sharan", role: "Full-Stack Lead" },
  { name: "Anadi Mehta", role: "Backend Developer" },
  { name: "Satyam Gupta", role: "Backend Developer" },
  { name: "Sweta Kumari", role: "UI/UX & Frontend" },
];

export const cities = ["All Cities", "Mumbai", "Delhi", "Bangalore", "Gurugram", "Chennai", "Hyderabad", "Lucknow", "Kolkata", "Pune"];
