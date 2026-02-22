# MedLink Hospital Website - User Guide

## Welcome to MedLink!

MedLink is a comprehensive healthcare platform that connects patients with trusted hospitals, experienced doctors, and quality medical services. This guide will help you navigate all available features.

## Getting Started

### Installation & Running the App

```bash
# 1. Install all dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser and navigate to http://localhost:3000
```

The application will automatically open, and you'll see the MedLink homepage.

## Main Features

### 1. Home Page (`/`)
**What you'll see:**
- Inspiring hero section with "Your Health, Our Priority"
- Trust indicators showing security, 24/7 availability, expert doctors
- Quick links to book appointments or find hospitals
- Statistics: 1520+ active users, 500+ doctors, 24/7 support
- Four main services cards
- Featured doctors showcase
- Patient testimonials with real reviews
- Emergency contact section
- Call-to-action sections

**Actions you can take:**
- Click "Book Appointment" to schedule a consultation
- Click "Find Hospital" to search for available beds
- Explore doctor profiles from the featured section
- Read patient testimonials
- Call emergency number: +91-9876-543-210

### 2. Book Appointment (`/appointments`)
**How to book:**
1. Click "Book Appointment" from any page
2. Fill in your details:
   - Full Name
   - Email Address
   - Phone Number
   - Preferred Date
   - Preferred Time
   - Additional medical information (optional)
3. Click "Book Appointment"
4. See confirmation message
5. Appointment details will be sent to your email

**Requirements:**
- Must be logged in to book an appointment
- If not logged in, you'll be redirected to the login page

### 3. Doctor Directory (`/doctors`)
**Features:**
- Browse all available doctors in our network
- View doctor information:
  - Name and specialty
  - Years of experience
  - Star ratings (1-5 stars)
  - Number of patient reviews
  - Location
  - Availability status
  - Consultation fee
  - Availability window

**How to find a doctor:**
1. Use the search box at the top to search by doctor name or specialty
2. Filter by specialty using the specialty buttons:
   - All specialties
   - Cardiologist
   - General Practitioner
   - Orthopedist
   - Pediatrician
   - Dermatologist
   - Gynecologist
3. View filtered results
4. Click "Book Appointment" on a doctor's card to schedule with them

**Example Doctors:**
- Dr. Rajesh Kumar (Cardiologist) - 15 years, 4.9★, Available Today
- Dr. Priya Sharma (GP) - 10 years, 4.8★, Available Tomorrow
- Dr. Amit Patel (Orthopedist) - 12 years, 4.9★, Available Today

### 4. Calendar Booking (`/calendar-booking`)
**Interactive appointment scheduling:**

1. **Select a Date:**
   - Navigate months using arrow buttons
   - Click on any available date (dates up to the 21st are available)
   - Grayed-out dates in the future are not available
   - Selected date appears in blue highlight

2. **Select a Time:**
   - Once you pick a date, time slots appear on the right
   - Available times: 9:00 AM to 4:00 PM in 30-minute intervals
   - Booked slots are grayed out and labeled "Booked"
   - Click an available time slot
   - Selected time appears in blue

3. **Confirm Appointment:**
   - Review your appointment details
   - Date and time shown in confirmation box
   - Click "Confirm Appointment" to finalize

**Example Availability:**
- Multiple time slots: 09:00 AM, 09:30 AM, 10:00 AM, etc.
- Some slots are booked: 09:00 AM, 02:30 PM, 04:00 PM

### 5. Find Hospital (`/hospital`)
**Search for hospital beds:**
- Enter location to search for nearby hospitals
- View real-time bed availability
- Check specific departments and facilities
- See hospital details and amenities
- Get directions and contact information

### 6. About Us (`/about`)
**Learn about MedLink:**
- Company mission and vision
- Core values (Trust, Accessibility, Excellence)
- Services provided
- Network statistics
- Team commitment to healthcare excellence

**What we provide:**
- Hospital network connection
- Expert doctor access
- Real-time availability tracking
- Patient care support
- Quality-assured services
- 24/7 availability

### 7. Contact Us (`/contact`)
**Get in touch:**
- Send feedback or questions
- Report issues
- Request support
- Share your experience

## Navigation

### Header Menu (Top of page)
- **Logo**: Click to return to home
- **Home**: Go to homepage
- **Find Hospital**: Search for hospital beds
- **Book Appointment**: Schedule appointment
- **About Us**: Learn about MedLink
- **Contact**: Get in touch with us
- **Login/Sign Up**: User authentication (if not logged in)
- **User Name + Sign Out**: Profile and logout (if logged in)

### Footer Menu (Bottom of page)
- **Social Media Links**: Connect with us on Facebook, Twitter, Instagram, LinkedIn
- **Quick Links**: Easy access to services
- **Support**: FAQs and feedback
- **Contact Info**: Phone, email, address

## User Authentication

### Login
1. Click "Login/Sign Up" in the header
2. Enter your email and password
3. Click login
4. You'll be redirected to your dashboard

### Sign Up
1. Click "Login/Sign Up" 
2. Select "Sign Up" option
3. Fill in registration details
4. Create your account
5. You're ready to book appointments!

### Logout
1. Click your username in the header (top right)
2. Click "Sign Out"
3. You'll be logged out and redirected to home

## Key Information

### Emergency Contact
- **24/7 Hotline**: +91-9876-543-210
- Available for immediate medical assistance
- Visible on homepage and appointment booking page

### Security & Privacy
- HIPAA compliant platform
- Secure and encrypted data transmission
- Your health records are protected
- All patient information is confidential

### System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- JavaScript enabled
- Recommended screen resolution: 1024x768 or higher

## Troubleshooting

### Can't book an appointment?
- Make sure you're logged in
- Check if all required fields are filled
- Try a different date/time
- Clear your browser cache

### Doctor not found?
- Use the search box with different keywords
- Check if you've selected the right specialty filter
- Try clearing filters with "All" button

### Appointment confirmation not received?
- Check your spam/junk folder
- Verify your email address is correct
- Contact support at support@medlink.com

### Experiencing slow page loads?
- Check your internet connection
- Clear browser cache and cookies
- Try a different browser
- Disable browser extensions

## Tips for Best Experience

1. **Keep Profile Updated**: Ensure your contact information is current for appointment reminders

2. **Book in Advance**: Schedule appointments during business hours for better availability

3. **Prepare Medical History**: Have your medical records ready when consulting with doctors

4. **Use Calendar Booking**: The interactive calendar makes it easier to see real-time availability

5. **Save Doctor Favorites**: Bookmark your preferred doctors for quick access

6. **Enable Notifications**: Allow notifications for appointment reminders (when available)

7. **Review Ratings**: Check doctor ratings and reviews to find the best fit for you

## Supported Browsers
- Google Chrome (Latest)
- Mozilla Firefox (Latest)
- Apple Safari (Latest)
- Microsoft Edge (Latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Support & Contact

**Need help?**
- Email: support@medlink.com
- Phone: +91-9876-543-210
- Available: 24/7
- Live chat: Available on website (when available)

**Feedback & Suggestions?**
- Use the Contact page to send feedback
- Help us improve by sharing your experience
- Rate your doctor after consultation

## Privacy & Terms

- **HIPAA Compliant**: Your health records are protected by law
- **Data Security**: End-to-end encryption for all communications
- **Privacy Policy**: Available in footer
- **Terms of Service**: Available in footer

---

**Thank you for choosing MedLink!**

Your health is our priority. We're committed to providing the best healthcare experience possible.

For more information, visit our website or contact us at support@medlink.com
