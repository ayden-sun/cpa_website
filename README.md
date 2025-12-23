# CPA Webinar Platform

A modern web application for Certified Public Accountants (CPAs) to access professional development webinars and obtain certificates for license renewal.

## 🎯 Purpose

CPAs are required to complete continuing professional education (CPE) courses annually to renew their licenses. This platform provides convenient access to webinar-based content where users can:

- Register for webinars
- Pay for certificate completion
- Access downloadable certificates
- Track their professional development

**Important Note**: The webinars on this platform are designed to provide certificate completion for license renewal purposes. They are not full academic courses but focused certificate programs that meet CPE requirements.

## ✨ Features

### For Users
- **User Registration & Authentication**: Secure signup and login system
- **Webinar Browsing**: View available webinar schedules and details
- **Payment Processing**: Integrated payment system (frontend only - payment logic to be implemented)
- **Certificate Access**: Download completion certificates
- **Dashboard**: Track registrations and progress
- **Responsive Design**: Works on all devices

### For Administrators
- **Admin Dashboard**: Manage users, webinars, and payments
- **User Management**: View and manage user accounts
- **Webinar Management**: Create and edit webinar offerings
- **Analytics**: Monitor platform usage and revenue

### Platform Features
- **Modern UI**: Professional design with Tailwind CSS
- **Role-based Access**: Different dashboards for users and admins
- **Database Integration**: PostgreSQL with Neon hosting
- **Deployment Ready**: Configured for Netlify deployment

## 🛠 Tech Stack

- **Frontend**: React 18, React Router, Tailwind CSS
- **Backend**: Node.js (API routes to be implemented)
- **Database**: PostgreSQL (Neon)
- **Deployment**: Netlify
- **Authentication**: JWT (to be implemented)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (Neon recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayden-sun/cpa_website.git
   cd cpa_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.local` and configure your database:
   ```bash
   cp .env.local .env.local.example
   # Edit .env.local with your database credentials
   ```

4. **Set up the database**

   Run the database setup scripts:
   ```bash
   psql 'your-database-url' -f schema.sql
   psql 'your-database-url' -f demo_data.sql
   psql 'your-database-url' -f alter_schema.sql
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

### Database Schema

The application uses the following main tables:
- `users`: User accounts with role-based access
- `webinars`: Available webinar offerings
- `payments`: Payment transactions
- `registrations`: User-webinar relationships

## 📁 Project Structure

```
cpa_website/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Home.js        # Landing page
│   │   ├── About.js       # About page
│   │   ├── Contact.js     # Contact page
│   │   ├── Login.js       # Authentication
│   │   ├── Signup.js      # Registration
│   │   ├── Dashboard.js   # User dashboard
│   │   └── AdminDashboard.js # Admin dashboard
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── schema.sql             # Database schema
├── demo_data.sql          # Sample data
└── README.md
```

## 🔧 Configuration

### Environment Variables
- `REACT_APP_DATABASE_URL`: PostgreSQL connection string
- `REACT_APP_API_BASE_URL`: Backend API URL (for future implementation)

### Netlify Deployment
The project is configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `build`
- Environment variables set in Netlify dashboard

## 📝 Development Notes

### Current Implementation Status
- ✅ Frontend UI with React and Tailwind CSS
- ✅ Routing and navigation
- ✅ Authentication UI (localStorage-based)
- ✅ Database schema and demo data
- ✅ Netlify deployment configuration
- 🚧 Backend API integration
- 🚧 Payment processing
- 🚧 Certificate generation

### Certificate vs Course Distinction

This platform provides **certificates of completion** for CPE requirements, not full educational courses. The webinars are designed to:
- Meet minimum CPE hour requirements
- Provide documentation for license renewal
- Offer focused, practical content
- Include assessment components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For support or questions about the platform, please use the contact form on the website or reach out to the development team.
