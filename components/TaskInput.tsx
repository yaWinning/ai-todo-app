'use client';

import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Plus } from 'lucide-react';
import { useTaskStore } from '@/lib/store/taskStore';
import { parseTaskInput } from '@/lib/ai/taskParser';

export function TaskInput() {
  const [input, setInput] = useState('');
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const parsed = parseTaskInput(input);
    addTask(parsed);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        name="task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task... (try: 'Call Sarah about Q4 budget by Friday')"
        className="flex-1"
      />
      <Button type="submit" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </form>
  );
}