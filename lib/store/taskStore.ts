import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Task, TaskColumn } from '../types/task';

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  moveTask: (id: string, column: TaskColumn) => void;
}

export const useTaskStore = create<TaskStore>()(  persist(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
          ],
        })),
      updateTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, ...updates, updatedAt: new Date().toISOString() }
              : task
          ),
        })),
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  status: task.status === 'completed' ? 'active' : 'completed',
                  completedAt:
                    task.status === 'active' ? new Date().toISOString() : undefined,
                  updatedAt: new Date().toISOString(),
                }
              : task
          ),
        })),
      moveTask: (id, column) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? { ...task, column, updatedAt: new Date().toISOString() }
              : task
          ),
        })),
    }),
    {
      name: 'ai-todo-storage',
    }
  )
);