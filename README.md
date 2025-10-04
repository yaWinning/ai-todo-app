# AI Todo App

A modern, AI-powered todo application built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✅ **Smart Task Management**: Create, edit, delete, and complete tasks
- 🎯 **Three-Column Layout**: Organize tasks into Today, Upcoming, and Someday
- 🎨 **Beautiful UI**: Clean, minimal design with dark mode support
- ⌨️ **Keyboard Shortcuts**: Power user features for efficiency
- 🤖 **AI-Ready Architecture**: Placeholder AI features with clear extension points
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- ♿ **Accessible**: Built with accessibility in mind

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yaWinning/ai-todo-app.git
cd ai-todo-app

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Keyboard Shortcuts

- `n` - Create new task
- `/` - Focus search
- `?` - Show keyboard shortcuts
- `Esc` - Close modals/dialogs

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **State Management**: Zustand
- **Drag & Drop**: dnd-kit
- **Icons**: Lucide React

## Project Structure

```
ai-todo-app/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Main todo interface
│   ├── api/               # API routes (AI placeholders)
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── TaskInput.tsx     # Task creation component
│   ├── TaskList.tsx      # Task list display
│   └── AIInsightsPanel.tsx # AI features (placeholder)
├── lib/                   # Utilities and services
│   ├── ai/               # AI service layer (ready for integration)
│   ├── store/            # Zustand state management
│   └── types/            # TypeScript type definitions
└── public/               # Static assets
```

## AI Integration (Coming Soon)

The app is architected to easily integrate real AI features:

- **Task Analysis**: Natural language processing for task extraction
- **Smart Prioritization**: AI-powered priority scoring
- **Intelligent Insights**: Contextual recommendations and suggestions
- **Time Estimation**: AI-suggested task durations

All AI features are currently mocked with placeholder data, but the service layer is ready for OpenAI/Anthropic integration.

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yaWinning/ai-todo-app)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

### Environment Variables (for future AI integration)

```env
OPENAI_API_KEY=your_api_key_here
NEXT_PUBLIC_APP_URL=your_deployment_url
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for learning or production.

## Roadmap

- [ ] Real AI integration (OpenAI/Anthropic)
- [ ] Supabase backend for persistence
- [ ] User authentication
- [ ] Real-time sync across devices
- [ ] Subtask support
- [ ] Task categories and tags
- [ ] Calendar integration
- [ ] Team collaboration features

---

Built with ❤️ by [Shalin Amin](https://github.com/yaWinning)