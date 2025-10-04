export type TaskStatus = 'active' | 'completed' | 'archived';
export type TaskColumn = 'today' | 'upcoming' | 'someday';
export type TaskPriority = 1 | 2 | 3 | 4; // 1=urgent, 2=high, 3=normal, 4=low

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority?: TaskPriority;
  aiPriorityScore?: number;
  dueDate?: string;
  completedAt?: string;
  estimatedDuration?: number; // minutes
  contextTags?: string[];
  column: TaskColumn;
  createdAt: string;
  updatedAt: string;
}

export interface AIInsight {
  type: 'subtasks' | 'time_estimate' | 'related_tasks' | 'priority';
  data: any;
  generatedAt: string;
}