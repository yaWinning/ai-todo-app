import type { Task, TaskColumn, TaskPriority } from '../types/task';

/**
 * Parse natural language task input and extract metadata
 * This is a placeholder implementation - will be replaced with real AI
 */
export function parseTaskInput(input: string): Omit<Task, 'id' | 'createdAt' | 'updatedAt'> {
  const lowerInput = input.toLowerCase();
  
  // Extract priority from keywords
  let priority: TaskPriority | undefined;
  if (lowerInput.includes('urgent') || lowerInput.includes('asap') || lowerInput.includes('critical')) {
    priority = 1;
  } else if (lowerInput.includes('important') || lowerInput.includes('high priority')) {
    priority = 2;
  } else if (lowerInput.includes('low priority') || lowerInput.includes('someday')) {
    priority = 4;
  } else {
    priority = 3;
  }

  // Extract due date from keywords
  let dueDate: string | undefined;
  let column: TaskColumn = 'today';
  
  if (lowerInput.includes('today')) {
    dueDate = new Date().toISOString();
    column = 'today';
  } else if (lowerInput.includes('tomorrow')) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dueDate = tomorrow.toISOString();
    column = 'upcoming';
  } else if (lowerInput.includes('next week')) {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    dueDate = nextWeek.toISOString();
    column = 'upcoming';
  } else if (lowerInput.includes('someday') || lowerInput.includes('later')) {
    column = 'someday';
  } else if (lowerInput.match(/\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/)) {
    column = 'upcoming';
  }

  // Extract context tags
  const contextTags: string[] = [];
  if (lowerInput.includes('meeting') || lowerInput.includes('call')) {
    contextTags.push('meeting');
  }
  if (lowerInput.includes('email') || lowerInput.includes('message')) {
    contextTags.push('communication');
  }
  if (lowerInput.includes('review') || lowerInput.includes('check')) {
    contextTags.push('review');
  }
  if (lowerInput.includes('write') || lowerInput.includes('draft')) {
    contextTags.push('writing');
  }

  // Estimate duration based on keywords
  let estimatedDuration: number | undefined;
  if (lowerInput.includes('quick') || lowerInput.includes('5 min')) {
    estimatedDuration = 5;
  } else if (lowerInput.includes('30 min') || lowerInput.includes('half hour')) {
    estimatedDuration = 30;
  } else if (lowerInput.includes('1 hour') || lowerInput.includes('hour')) {
    estimatedDuration = 60;
  }

  return {
    title: input,
    status: 'active',
    priority,
    dueDate,
    column,
    contextTags: contextTags.length > 0 ? contextTags : undefined,
    estimatedDuration,
  };
}