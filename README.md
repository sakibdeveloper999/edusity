# Edusity - University Website

A modern, responsive university website built with React and Vite. Edusity showcases educational programs, campus facilities, testimonials, and provides a contact system for prospective students.

## Features

- **Responsive Design** - Mobile-friendly interface for all devices
- **Hero Section** - Eye-catching landing section
- **Programs Showcase** - Display of available educational programs
- **Campus Gallery** - Visual tour of campus facilities
- **Student Testimonials** - Reviews and feedback from current/past students
- **About Section** - Detailed information about the institution
- **Contact Form** - Email contact system powered by Web3Forms
- **Video Player** - Embedded video content support
- **Navigation Bar** - Smooth navigation throughout the site
- **Footer** - Quick links and additional information

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS3
- **Form Submission**: Web3Forms API
- **Linting**: ESLint

## Project Structure

```
src/
├── components/
│   ├── About/
│   ├── Campus/
│   ├── Contact/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Programs/
│   ├── Testimonials/
│   ├── Title/
│   └── VideoPlayer/
├── assets/
├── App.jsx
├── index.css
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building

To create a production build:

```bash
npm run build
```

## Contact Form Setup

The contact form uses Web3Forms for email submission. The access key is already configured in the Contact component. Submissions are sent to `contact@sakibdeveloper.com`.

**Contact Information:**
- Email: contact@sakibdeveloper.com
- Phone: 01834322352
- Location: Dhaka, Tajgaon, Bangladesh

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Author

Developed by Md. Sakib Developer