# CRMApp

A responsive, user-friendly frontend for a CRM (Customer Relationship Management) platform. Built with React, Tailwind CSS, and integrated with dynamic campaign management and backend built with Express and MongoDB, supports customer data management, order processing, segmentation, campaign messaging, and Google OAuth login.

## 🚀 Features

### User Authentication
- Google OAuth login
- Session management and secure storage
- Protected routes based on user authentication

### Dashboard
- Summary cards for Customers, Orders, Campaigns
- Clean, responsive UI
- Quick navigation links

### Customer Module
- Add new customers
- View customer list
- Real-time UI update after insertion

### Order Module
- Add orders for customers
- View order history

### Segment Builder
- Dynamic rule builder (field, operator, value)
- Multiple condition support with AND/OR logic
- Audience preview functionality (real-time MongoDB query)
- Save custom segments

### Campaigns
- Create campaign linked to a segment
- AI-assisted message generation
- Send email via nodemailer
- View delivery stats (sent, failed, total)


## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- React Router DOM
- Axios
- Google OAuth
- Toast Notifications (react-hot-toast)
- Charting with Recharts
- Lucide-react + shadcn/ui for UI components

### Backend
- Node.js with Express
- MongoDB & Mongoose
- Nodemailer for email delivery
- Google OAuth2 verification
- dotenv for environment variables

## Screenshots


# Main Page

![Landing Page](https://i.ibb.co/5WpGwWLD/sc1.png)

# Login Form

![Login](https://i.ibb.co/9m2trShM/sc2.png)

# Dashboard Page

![Dashboard](https://i.ibb.co/KpJtW04t/sc3.png)

# Website Snapshots

![Customers & Orders page](https://i.ibb.co/Ndnfmz6R/sc4.png)
![Segments page](https://i.ibb.co/gbFB1vQP/sc5.jpg)
![Campaigns page](https://i.ibb.co/PdnpvfK/sc6.png)


## 💾 Environment Variables

### Frontend
```env
VITE_BACKEND_URL=https://crmapp-backend.onrender.com
```

### Backend
```env
DATABASE_URL="your url"
JWT_SECRET="your-secret-key"
PORT=5000
GOOGLE_CLIENT_ID=your-client-id
EMAIL_USER=your@email.com
EMAIL_PASS=your-email-password
```


## 📦 Installation

### Clone the Repository



### Frontend Setup

```bash
# Clone the Repository
git clone <repository-url>

# Navigate to frontend directory
cd CRMApp/frontend

# Install dependencies
npm install

# Start the development server
npm run dev

```

### Backend Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to backend directory
cd CRMApp/backend

# Install dependencies
npm install

# Start the server
node server.js
```

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/google` → Authenticate with Google token

### Customers
- `POST /api/customers` → Add customer
- `GET /api/customers` → Get all customers for user

### Orders
- `POST /api/orders` → Add order
- `GET /api/orders` → Get all orders for user

### Segments
- `POST /api/segments` → Create segment with conditions
- `GET /api/segments` → Get segments for user
- `POST /api/segments/preview` → Preview audience size

### Campaigns
- `POST /api/campaigns` → Create and send campaign
- `GET /api/campaigns` → Get all campaigns with stats


## Authentication
- Sign in using Google OAuth on the Landing page
- Google login stores userId, name, and picture in localStorage
- Logout from sidebar clears session and redirects to SignIn


### Campaigns and Segments
- Audience segments support flexible condition building (e.g., totalSpend > 10000 AND visits < 3)
- Preview Audience button queries backend and displays number of matched users
- Campaigns can be created from these segments and sent using nodemailer


### UX Bonus
- Drag-and-drop-like UX for rules
- Responsive design on all screen sizes
- Sidebar and Topbar layout with clear navigation
- Toasts for notifications

### Security
- Auth middleware validation on all protected APIs
- Google OAuth verification token stored securely
- AuthContext used to manage state globally

## 👏 Acknowledgments
- Tailwind CSS
- React

## Hosted Website Link
- CRMApp - [Link](https://crm-frontend-one-gamma.vercel.app/)

## 📞 Contact
Your Name - haiderzaidi45h@gmail.com

Project Link - [GitHub Repository](https://github.com/haider-zaidi/CRM-frontend)

