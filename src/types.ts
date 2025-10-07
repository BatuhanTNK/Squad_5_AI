export interface Persona {
  id: number;
  name: string;
  style: string;
  tone: string;
  systemMessage: string;
  emoji: string;
}

export interface Routine {
  id: number;
  name: string;
  icon: string;
  description: string;
  acceptanceCriteria: {
    responseTime: number;
    accuracy: number;
    consistency: boolean;
    formatValid: boolean;
  };
  estimatedTime: string;
  outputFormat: string;
}

export interface Message {
  id: number;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  personaId?: number;
}

export interface Metrics {
  responseTime: number;
  accuracy: number;
  consistency: boolean;
  formatValid: boolean;
}

export interface UserPreferences {
  fontSize: number;
  contrastMode: boolean;
  dyslexiaFont: boolean;
}
