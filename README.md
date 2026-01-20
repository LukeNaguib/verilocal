# Verilocal

A full-stack application with Next.js frontend and Express.js backend.

## Project Structure

```
verilocal/
├── frontend/          # Next.js React application
│   ├── src/
│   │   ├── app/       # Next.js App Router pages
│   │   └── components/ # React components
│   └── public/        # Static assets
└── backend/           # Express.js API server
    ├── routes/        # API route handlers
    └── controllers/   # Business logic controllers
```

## Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, server defaults to port 3001):
```bash
PORT=3001
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

The backend API will be available at [http://localhost:3001](http://localhost:3001)

## Technologies

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting

### Backend
- **Express.js** - Web framework for Node.js
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with watch mode
