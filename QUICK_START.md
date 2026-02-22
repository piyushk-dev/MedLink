# 🚀 MedLink - Quick Start Guide

## Get Running in 30 Seconds!

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# 1. Install all dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open your browser to http://localhost:3000
```

That's it! 🎉 The app will automatically open in your default browser.

## What You'll See

### Homepage Features
- ✨ Modern hero section with call-to-action
- 🏥 Hospital services overview
- 👨‍⚕️ Featured doctors showcase
- ⭐ Patient testimonials
- 📞 24/7 emergency contact
- 🔒 Security & trust indicators

### Key Features
| Feature | Location | Purpose |
|---------|----------|---------|
| Book Appointment | `/appointments` | Schedule medical consultation |
| Doctor Directory | `/doctors` | Search and filter doctors |
| Calendar Booking | `/calendar-booking` | Interactive date/time selection |
| Find Hospital | `/hospital` | Search hospital beds |
| About Us | `/about` | Learn about MedLink |
| Contact | `/contact` | Get in touch |

## Navigation Menu

**Top Menu Items:**
- Home
- Find Hospital
- Book Appointment
- About Us
- Contact
- Login / Sign Up

## Quick Actions

### 🩺 Book an Appointment
1. Click "Book Appointment" in header
2. Login if needed (redirects automatically)
3. Fill in your details
4. Select date and time
5. Click "Book Appointment"
6. See confirmation message

### 🔍 Find a Doctor
1. Click "Book Appointment" or go to `/doctors`
2. Browse featured doctors on homepage
3. Or visit Doctor Directory at `/doctors`
4. Search by name or filter by specialty
5. Click "Book Appointment" on doctor's card

### 📅 Use Calendar Booking
1. Visit `/calendar-booking`
2. Click on a date in the calendar
3. Select an available time slot
4. Review appointment details
5. Click "Confirm Appointment"

## Sample Data

### Featured Doctors
- **Dr. Rajesh Kumar** - Cardiologist (4.9★, Available Today)
- **Dr. Priya Sharma** - General Practitioner (4.8★, Available Tomorrow)
- **Dr. Amit Patel** - Orthopedist (4.9★, Available Today)

### Sample Calendar
- Month: February 2024
- Available dates: 1-21
- Time slots: 9:00 AM - 4:00 PM

### Sample Testimonials
- Patient reviews with 4-5 star ratings
- Real feedback from satisfied patients

## Emergency Contact
📞 **24/7 Hotline**: +91-9876-543-210

## Features at a Glance

✅ **Modern Design** - Professional, clean interface
✅ **Responsive** - Works on mobile, tablet, desktop
✅ **Fast** - Quick loading with lazy loading
✅ **Secure** - HIPAA compliant
✅ **User-Friendly** - Intuitive navigation
✅ **Interactive** - Calendar, search, filters
✅ **Accessible** - Keyboard navigation support

## Troubleshooting

### Port Already in Use?
```bash
# Try a different port
PORT=3001 npm run dev
```

### Dependency Issues?
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Browser Cache Issues?
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Or clear browser cache in settings

## For Developers

### Project Structure
```
src/
├── components/       # React components
├── index.js         # App routing & entry point
├── index.css        # Global styles
└── utils/           # Utilities & images
```

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run test     # Run tests
npm run eject    # Eject from create-react-app (one-way!)
```

### Technologies Used
- React 18
- React Router 6
- Tailwind CSS
- React Icons
- React Hot Toast
- React Bootstrap

## Key Routes

| URL | Component | Description |
|-----|-----------|-------------|
| `/` | Home | Main landing page |
| `/appointments` | Appointments | Book appointment form |
| `/doctors` | DoctorDirectory | Browse & filter doctors |
| `/calendar-booking` | CalendarBooking | Interactive calendar |
| `/hospital` | BedsAvailability | Find hospital beds |
| `/about` | AboutUs | Company info |
| `/contact` | Contact | Contact form |
| `/login` | Login | User login |
| `/signup` | Signup | User registration |

## Customization

### Change Theme Colors
Edit `src/index.css` and update the color values:
```css
:root {
  --primary: #2563eb;     /* Blue */
  --secondary: #64748b;   /* Slate */
  --accent: #ef4444;      /* Red */
}
```

### Update Hospital Name
Search for "MedLink" in components and replace with your hospital name:
```bash
grep -r "MedLink" src/
```

### Modify Featured Doctors
Edit doctor data in:
- `src/components/Home.js` (doctors array)
- `src/components/DoctorDirectory.js` (doctors array)

## Next Steps

1. ✅ **Run the app** - `npm run dev`
2. 🎨 **Customize** - Update colors, hospital name, content
3. 🔌 **Connect Backend** - Update API endpoints
4. 📱 **Test on Mobile** - Check responsive design
5. 🚀 **Deploy** - Push to production

## Support

📧 **Email**: support@medlink.com
📞 **Phone**: +91-9876-543-210
🕐 **Available**: 24/7

## Additional Resources

- [Documentation](./REDESIGN_FEATURES.md)
- [User Guide](./USER_GUIDE.md)
- [Deployment Guide](./DEPLOYMENT_SUMMARY.md)

---

**Happy coding! 🎉**

Got questions? Check the [USER_GUIDE.md](./USER_GUIDE.md) for more details.
