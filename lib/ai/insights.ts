import type { Task } from '../types/task';

export interface TaskInsights {
  focusRecommendations: string[];
  bottlenecks: string[];
  timeInsight: string;
}

/**
 * Generate AI insights from task list
 * This is a placeholder implementation - will be replaced with real AI
 */
export function generateInsights(tasks: Task[]): TaskInsights {
  const activeTasks = tasks.filter((t) => t.status === 'active');
  const urgentTasks = activeTasks.filter((t) => t.priority === 1);
  const todayTasks = activeTasks.filter((t) => t.column === 'today');
  const overdueTasks = activeTasks.filter(
    (t) => t.dueDate && new Date(t.dueDate) < new Date()
  );

  const focusRecommendations: string[] = [];
  
  if (urgentTasks.length > 0) {
    focusRecommendations.push(
      `Start with "${urgentTasks[0].title}" - marked as urgent`
    );
  }
  
  if (overdueTasks.length > 0) {
    focusRecommendations.push(
      `Address overdue task: "${overdueTasks[0].title}"`
    );
  }
  
  if (todayTasks.length > 0 && focusRecommendations.length < 2) {
    focusRecommendations.push(
      `Complete "${todayTasks[0].title}" from your Today list`
    );
  }

  if (focusRecommendations.length === 0) {
    focusRecommendations.push(
      'Great job! No urgent tasks. Consider planning ahead.',
      'Review your Upcoming tasks and prioritize',
      'Take time to break down complex tasks'
    );
  }

  const bottlenecks: string[] = [];
  if (urgentTasks.length > 3) {
    bottlenecks.push('Multiple urgent tasks may indicate over-commitment');
  }
  if (todayTasks.length > 10) {
    bottlenecks.push('Today column is overloaded - consider moving some tasks');
  }

  const totalEstimatedTime = activeTasks
    .filter((t) => t.estimatedDuration)
    .reduce((sum, t) => sum + (t.estimatedDuration || 0), 0);

  const timeInsight =
    totalEstimatedTime > 0
      ? `Estimated ${Math.round(totalEstimatedTime / 60)} hours of work across ${activeTasks.length} active tasks`
      : `${activeTasks.length} active tasks - add time estimates for better planning`;

  return {
    focusRecommendations,
    bottlenecks,
    timeInsight,
  };
}