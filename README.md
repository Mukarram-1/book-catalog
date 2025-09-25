# Book Catalog App

A full-stack book catalog application built with Next.js, TypeScript, PostgreSQL, Prisma ORM, and NextAuth.js for user authentication. Users can view, add, and delete books from their personal collection.

## 🚀 Live Demo

[Add your deployed Vercel URL here]

## ✨ Features

- **User Authentication**: Email/password and Google OAuth sign-in using NextAuth.js
- **Book Management**: Add, view, and delete books from your personal collection
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Modern UI**: Beautiful interface built with shadcn/ui components
- **Form Validation**: Client-side validation using React Hook Form and Zod
- **Database Integration**: PostgreSQL with Prisma ORM for data management
- **Secure API Routes**: Protected API endpoints with session-based authentication

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Backend**: Next.js API Routes
- **Authentication**: NextAuth.js (Email/Password, Google OAuth)
- **Database**: PostgreSQL (Neon/Supabase/ElephantSQL)
- **ORM**: Prisma
- **UI Components**: shadcn/ui + Tailwind CSS
- **Form Handling**: React Hook Form + Zod validation
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or hosted)
- Google OAuth credentials (optional, for Google sign-in)

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone [your-repo-url]
cd catalog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/catalog_db"

# NextAuth.js
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 4. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# (Optional) Seed the database
npx prisma db seed
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Schema

The application uses the following database models:

- **User**: Stores user information and authentication data
- **Account**: NextAuth.js account linking for OAuth providers
- **Session**: User session management
- **Book**: User's book collection with title, author, and genre
- **VerificationToken**: Email verification tokens

## 🔐 Authentication Flow

1. **Sign Up**: Users can create an account with email/password
2. **Sign In**: Authentication via email/password or Google OAuth
3. **Session Management**: Secure JWT-based sessions with NextAuth.js
4. **Protected Routes**: API routes and pages protected by authentication middleware

## 📱 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/books` | Fetch all books for authenticated user |
| POST | `/api/books` | Add a new book to user's collection |
| DELETE | `/api/books/[id]` | Delete a specific book |
| POST | `/api/auth/signup` | Create new user account |
| GET/POST | `/api/auth/[...nextauth]` | NextAuth.js authentication endpoints |

## 🎨 Pages

- **Home (`/`)**: Display user's book collection with delete functionality
- **Add Book (`/add`)**: Form to add new books with validation
- **Sign In (`/auth/signin`)**: Authentication page with email/password and Google options

## 🚀 Deployment on Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (your deployed URL)
   - `GOOGLE_CLIENT_ID` (optional)
   - `GOOGLE_CLIENT_SECRET` (optional)

### 3. Database Migration

After deployment, run migrations:

```bash
npx prisma migrate deploy
```

## 🔧 Environment Variables Guide

### Required Variables

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Random string for JWT encryption
- `NEXTAUTH_URL`: Your application URL (http://localhost:3000 for local, your Vercel URL for production)

### Optional Variables (for Google OAuth)

- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

### Setting up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (local)
   - `https://your-app.vercel.app/api/auth/callback/google` (production)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [NextAuth.js](https://next-auth.js.org/) for authentication
- [Prisma](https://www.prisma.io/) for database management
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for styling
