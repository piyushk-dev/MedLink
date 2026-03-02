# MedLink
MedLink is a hospital appointment and bed booking web platform that allows users to search for nearby hospitals, check bed availability, and book appointments with doctors. It is built using React (frontend), Spring Boot (backend), and MySQL, developed by **Piyush Kumar, Sairam Sharan, Anadi Mehta, Satyam Gupta, Sweta Kumari, Vivek Tripathi, Sanchita, and Mayank**, students at **IIIT Lucknow**.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`


| Route | Page | Component | Auth Required | Description |
|-------|------|-----------|---------------|-------------|
| `/` | Home | `HomePage` | No | Landing page with emergency hotline, hero, stats, departments grid, doctor cards, trust features, and how-it-works |
| `/hospital` | Find Beds | `HospitalPage` | No | Hospital search with filters and live bed availability ticker |
| `/appointments` | Book Appointment | `AppointmentsPage` | Yes  | Appointment booking form with department, doctor, date, and time selection |
| `/patient` | My Records | `PatientPage` | Yes | Patient dashboard with upcoming/past appointments, health metrics, and lab reports |
| `/about` | About | `AboutPage` | No | About MedLink: mission, vision, team (IIIT Lucknow), and values |
| `/contact` | Contact | `ContactPage` | No | Contact form, FAQ, and emergency numbers |
| `/login` | Sign In | `LoginPage` | No | Email/password login form |
| `/signup` | Sign Up | `SignupPage` | No | Two-step signup: register then OTP verification |
| `/privacy` | Privacy Policy | `PrivacyPage` | No | Privacy policy with data handling, storage, and rights info |
| `/terms` | Terms of Service | `TermsPage` | No | Terms of service, acceptable use, and medical disclaimer |

