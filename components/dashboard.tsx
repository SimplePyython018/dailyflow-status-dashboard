"use client";

import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Coffee,
  Cpu,
  HeartHandshake,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { metrics, recommendations, timeline } from "@/lib/mock-data";

export function Dashboard() {
  const [scanCount, setScanCount] = useState(0);
  const [deployed, setDeployed] = useState(false);

  const statusText = useMemo(
    () =>
      deployed
        ? "Coffee protocol deployed successfully. Side effects: improved banter."
        : "System nominal. No personal data required.",
    [deployed],
  );

  return (
    <main className="shell">
      <section className="hero card glow">
        <div className="hero-copy">
          <div className="eyebrow"><Radar size={14} /> LOVE-LIFE OPS // DEMO MODE</div>
          <h1>Sir Owen&apos;s <span>Human Balance</span> Control Center</h1>
          <p>
            An enterprise-grade dashboard for a very non-enterprise problem:
            <strong> Work.exe may be consuming the entire CPU.</strong>
          </p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => setScanCount((n) => n + 1)}>
              <Activity size={16} /> Run harmless diagnostic
            </button>
            <button className="btn ghost" onClick={() => setDeployed(true)}>
              <Rocket size={16} /> Deploy coffee break
            </button>
          </div>
          <div className="status-line"><ShieldCheck size={15} /> {statusText}</div>
        </div>

        <div className="orbital-card">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbital-center">
            <HeartHandshake size={34} />
            <span>LOVE LIFE</span>
            <strong>STANDBY</strong>
          </div>
        </div>
      </section>

      <section className="metric-grid">
        {metrics.map((metric) => (
          <article className="card metric" key={metric.label}>
            <div className="metric-top">
              <span>{metric.label}</span>
              <ArrowUpRight size={16} />
            </div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-helper">{metric.helper}</div>
            <div className="metric-trend">{metric.trend}</div>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="card terminal-card">
          <div className="card-heading">
            <div><span className="mini-label">SYSTEM LOG</span><h2>Work-Life Runtime</h2></div>
            <Terminal size={18} />
          </div>
          <div className="terminal">
            <div className="terminal-line"><span>$</span> boot lovelife-monitor --demo</div>
            <div className="terminal-line success">✓ safe mode enabled</div>
            <div className="terminal-line"><span>$</span> inspect --scope &quot;work-life-balance&quot;</div>
            <div className="terminal-line warn">! Work.exe appears unusually motivated</div>
            <div className="terminal-line"><span>$</span> echo scan_count={scanCount}</div>
            <div className="terminal-line success">✓ no private data collected</div>
            <div className="terminal-line muted"># conclusion: schedule human interaction before Q4</div>
          </div>
        </article>

        <article className="card recommendation-card">
          <div className="card-heading">
            <div><span className="mini-label">RELEASE NOTES</span><h2>Suggested patches</h2></div>
            <Sparkles size={18} />
          </div>
          <div className="recommendations">
            {recommendations.map((item, index) => (
              <div className="recommendation" key={item}>
                <span className="index">0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="joke-banner"><Coffee size={17} /> Patch status: <strong>coffee.exe recommended</strong></div>
        </article>
      </section>

      <section className="card timeline-card">
        <div className="card-heading">
          <div><span className="mini-label">EVENT STREAM</span><h2>Today&apos;s fictional telemetry</h2></div>
          <Cpu size={18} />
        </div>
        <div className="timeline">
          {timeline.map((entry) => (
            <div className="timeline-row" key={`${entry.time}-${entry.event}`}>
              <span className="timeline-time">{entry.time}</span>
              <span className="dot" />
              <span className="timeline-event">{entry.event}</span>
              <span className="tag">{entry.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>LOVE-LIFE OPS v1.0</span>
        <span>Demo only · no surveillance · no relationship inference</span>
      </footer>
    </main>
  );
}
