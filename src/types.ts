export type AgentStatus = 'ready' | 'running' | 'reviewing' | 'blocked';

export interface AgentStage {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  output: string;
}

export interface MetricCard {
  label: string;
  value: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  evidence: string;
}
