import type { AgentStage, MetricCard, UseCase } from '../types';

export const agentStages: AgentStage[] = [
  {
    id: 'planner',
    name: 'Planner',
    role: '目标拆解与风险识别',
    status: 'ready',
    output: '生成任务路径、上下文清单和验收条件。',
  },
  {
    id: 'executor',
    name: 'Executor',
    role: '代码或文档执行',
    status: 'running',
    output: '根据计划产出可审查的代码、文档或结构化结果。',
  },
  {
    id: 'reviewer',
    name: 'Reviewer',
    role: '质量评估与修正建议',
    status: 'reviewing',
    output: '检查边界条件、测试缺口、规范一致性和上下文遗漏。',
  },
];

export const metricCards: MetricCard[] = [
  {
    label: 'Context Window',
    value: '1M',
    description: '面向 MiMo 长上下文任务设计',
  },
  {
    label: 'Agent Stages',
    value: '3',
    description: 'Planner / Executor / Reviewer',
  },
  {
    label: 'Core Scenarios',
    value: '4',
    description: '代码审查、需求拆解、文档生成、模型评估',
  },
  {
    label: 'Project Phase',
    value: 'Pilot',
    description: '当前为空壳原型和申请材料阶段',
  },
];

export const useCases: UseCase[] = [
  {
    title: '自动化代码审查',
    description: '读取 PR diff、相关源码、测试日志和团队规范，输出按风险排序的审查结论。',
    evidence: '可提交 GitHub 仓库、控制台截图和审查报告样例。',
  },
  {
    title: '需求到任务拆解',
    description: '把产品需求、模块边界和技术约束转成开发任务、依赖关系和验收条件。',
    evidence: '可提交任务拆解文档和 Planner 输出截图。',
  },
  {
    title: '文档同步生成',
    description: '根据代码变更自动生成 README、接口说明、迁移说明和变更日志草稿。',
    evidence: '可提交生成文档样例和人工修正记录。',
  },
  {
    title: '模型效果评估',
    description: '对比 MiMo、GPT、Claude、DeepSeek 等模型在同一任务上的成本与通过率。',
    evidence: '可提交评估指标表和 Token 消耗统计。',
  },
];
