'use client';

import { TaskItem } from './TaskItem';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { useTaskStore } from '@/lib/store/taskStore';
import type { TaskColumn } from '@/lib/types/task';

interface TaskListProps {
  column: TaskColumn;
  title: string;
}

export function TaskList({ column, title }: TaskListProps) {
  const tasks = useTaskStore((state) => 
    state.tasks.filter((task) => task.column === column && task.status === 'active')
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm font-normal text-muted-foreground">
            {tasks.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No tasks yet. Add one above!
          </p>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </CardContent>
    </Card>
  );
}