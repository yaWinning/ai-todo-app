'use client';

import { useState, useEffect } from 'react';
import { TaskInput } from './TaskInput';
import { TaskList } from './TaskList';
import { AIInsightsPanel } from './AIInsightsPanel';
import { Button } from './ui/button';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useTaskStore } from '@/lib/store/taskStore';

export function Dashboard() {
  const { theme, setTheme } = useTheme();
  const [showInsights, setShowInsights] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'n' && !e.metaKey && !e.ctrlKey) {
        const input = document.querySelector('input[name="task"]') as HTMLInputElement;
        if (input && document.activeElement !== input) {
          e.preventDefault();
          input.focus();
        }
      }
      if (e.key === '?' && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        alert('Keyboard Shortcuts:\n\nn - New task\n/ - Search\n? - Show shortcuts\nEsc - Close dialogs');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <h1 className="text-2xl font-bold">AI Todo</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInsights(!showInsights)}
            >
              <Sparkles className="h-4 w-4 mr-2" />
              AI Insights
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <TaskInput />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TaskList column="today" title="Today" />
          <TaskList column="upcoming" title="Upcoming" />
          <TaskList column="someday" title="Someday" />
        </div>

        {showInsights && (
          <div className="fixed bottom-4 right-4 w-96">
            <AIInsightsPanel onClose={() => setShowInsights(false)} />
          </div>
        )}
      </main>
    </div>
  );
}