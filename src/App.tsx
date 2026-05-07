import { Activity, Bot, CheckCircle2, GitPullRequest, Layers3, LineChart, Play } from 'lucide-react';
import { agentStages, metricCards, useCases } from './data/project';
import type { AgentStatus } from './types';

const statusLabel: Record<AgentStatus, string> = {
  ready: 'Ready',
  running: 'Running',
  reviewing: 'Reviewing',
  blocked: 'Blocked',
};

const statusClassName: Record<AgentStatus, string> = {
  ready: 'status status-ready',
  running: 'status status-running',
  reviewing: 'status status-reviewing',
  blocked: 'status status-blocked',
};

// 通过集中映射避免在组件里散落条件分支，后续接真实任务状态时更容易维护。
function getStatusLabel(status: AgentStatus) {
  return statusLabel[status];
}

export function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Xiaomi MiMo Agent / Coding Pilot</span>
          <h1>AI Flow Pilot</h1>
          <p>
            面向长上下文模型的多 Agent 工作流编排与评估控制台，用于验证 MiMo 在代码审查、需求拆解、文档生成和模型对比中的工程价值。
          </p>
          <div className="hero-actions">
            <button className="primary-action" type="button">
              <Play size={18} />
              创建评估任务
            </button>
            <button className="secondary-action" type="button">
              <GitPullRequest size={18} />
              导入 PR Diff
            </button>
          </div>
        </div>

        <div className="flow-panel" aria-label="Agent workflow preview">
          <div className="panel-heading">
            <div>
              <span>Current Workflow</span>
              <strong>Repository Review</strong>
            </div>
            <Activity size={20} />
          </div>

          <div className="agent-list">
            {agentStages.map((stage) => (
              <article className="agent-row" key={stage.id}>
                <div className="agent-icon">
                  <Bot size={18} />
                </div>
                <div>
                  <div className="agent-title">
                    <strong>{stage.name}</strong>
                    <span className={statusClassName[stage.status]}>{getStatusLabel(stage.status)}</span>
                  </div>
                  <p>{stage.role}</p>
                  <small>{stage.output}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Project metrics">
        {metricCards.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.description}</p>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading">
          <Layers3 size={22} />
          <div>
            <span>Use Cases</span>
            <h2>适合 MiMo 长上下文能力的核心场景</h2>
          </div>
        </div>

        <div className="use-case-grid">
          {useCases.map((useCase) => (
            <article className="use-case-card" key={useCase.title}>
              <CheckCircle2 size={20} />
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <small>{useCase.evidence}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section evaluation-section">
        <div className="section-heading">
          <LineChart size={22} />
          <div>
            <span>Evaluation</span>
            <h2>申请阶段评估指标</h2>
          </div>
        </div>

        <div className="table-shell">
          <table>
            <thead>
              <tr>
                <th>指标</th>
                <th>用途</th>
                <th>当前状态</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Task Success Rate</td>
                <td>衡量 Agent 任务一次通过率</td>
                <td>待接入</td>
              </tr>
              <tr>
                <td>Token Cost / Task</td>
                <td>评估不同模型的成本差异</td>
                <td>待接入</td>
              </tr>
              <tr>
                <td>Review Precision</td>
                <td>统计审查结论被人工采纳比例</td>
                <td>规划中</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
