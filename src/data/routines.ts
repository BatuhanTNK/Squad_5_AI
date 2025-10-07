import { Routine } from '../types';

export const routines: Routine[] = [
  {
    id: 1,
    name: 'Daily',
    icon: '📅',
    description: 'Günlük görevler ve check-in\'ler',
    acceptanceCriteria: {
      responseTime: 2,
      accuracy: 95,
      consistency: true,
      formatValid: true
    },
    estimatedTime: '15-30 dakika',
    outputFormat: 'Task list, mood check, daily summary'
  },
  {
    id: 2,
    name: 'Planning',
    icon: '📋',
    description: 'Haftalık/Aylık planlama',
    acceptanceCriteria: {
      responseTime: 2,
      accuracy: 95,
      consistency: true,
      formatValid: true
    },
    estimatedTime: '30-45 dakika',
    outputFormat: 'Timeline, goals, milestones'
  },
  {
    id: 3,
    name: 'Grooming',
    icon: '✨',
    description: 'Task refinement ve hazırlık',
    acceptanceCriteria: {
      responseTime: 2,
      accuracy: 95,
      consistency: true,
      formatValid: true
    },
    estimatedTime: '20-40 dakika',
    outputFormat: 'Priority setting, detail addition, estimation'
  },
  {
    id: 4,
    name: 'Review',
    icon: '🔍',
    description: 'Performans ve ilerleme incelemesi',
    acceptanceCriteria: {
      responseTime: 2,
      accuracy: 95,
      consistency: true,
      formatValid: true
    },
    estimatedTime: '25-35 dakika',
    outputFormat: 'Metrics, feedback, improvements'
  },
  {
    id: 5,
    name: 'Retro',
    icon: '📊',
    description: 'Retrospektif ve öğrenimler',
    acceptanceCriteria: {
      responseTime: 2,
      accuracy: 95,
      consistency: true,
      formatValid: true
    },
    estimatedTime: '30-45 dakika',
    outputFormat: 'What went well, improvements, actions'
  }
];
