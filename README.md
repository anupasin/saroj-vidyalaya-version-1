# Saroj Vidyalaya

A personal educational platform for school-aged children, created in memory of Saroj. This platform makes learning fun through interactive lessons, analogies, and engaging activities.

## About

Saroj Vidyalaya is a tribute to Saroj, a wonderful teacher and loving mother who believed that learning should be joyful, accessible, and filled with wonder. Like the lotus that was her namesake, she believed in rising above challenges and blooming beautifully. Every lesson here carries that spirit forward.

## Features

- **Interactive Lessons**: Engaging content with analogies and examples
- **Multiple Subjects**: Mathematics, English, Coding, Geography, General Knowledge, and Science
- **Progress Tracking**: Track your learning progress with localStorage
- **Interactive Quizzes**: Test your understanding with subject-specific quizzes
- **Responsive Design**: Works beautifully on all devices
- **Warm & Personal**: Designed with care and attention to make learning enjoyable

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI, Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saroj-vidyalaya-ver-1
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── courses/           # Course pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Shadcn UI components
│   └── ...               # Custom components
├── lib/                   # Utilities and data
│   ├── constants/        # Constants (subject icons, colors)
│   ├── data/             # Course data
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

© 2025 Saroj Vidyalaya. All rights reserved.

## Acknowledgments

Created with love in memory of Saroj, a wonderful teacher and loving mother.
# saroj-vidyalaya-version 1
