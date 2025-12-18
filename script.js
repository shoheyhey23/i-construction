:root {
  --bg: #0c1118;
  --panel: rgba(255, 255, 255, 0.04);
  --panel-strong: rgba(255, 255, 255, 0.08);
  --text: #e8edf5;
  --muted: #a9b6c8;
  --accent: #4fc3f7;
  --line: rgba(255, 255, 255, 0.12);
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  --max-width: 1100px;
  font-size: 16px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: "Inter", "Noto Sans JP", system-ui, -apple-system, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  overflow-x: hidden;
}

main, header, footer, section { position: relative; }

.bg-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(transparent 23px, rgba(255, 255, 255, 0.03) 24px),
    linear-gradient(90deg, transparent 23px, rgba(255, 255, 255, 0.03) 24px);
  background-size: 24px 24px, 24px 24px;
  mask-image:
    radial-gradient(circle at 50% 20%, rgba(0, 0, 0, 0.9), transparent 70%),
    radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.8), transparent 70%),
    radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.9), transparent 70%);
  animation: grid-move 40s linear infinite;
  opacity: 0.6;
  z-index: 0;
}

.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 120px 20px 80px;
}

.hero__content {
  width: min(var(--max-width), 100%);
  margin: 0 auto;
  position: relative;
  padding: 32px;
  background: linear-gradient(135deg, rgba(79, 195, 247, 0.12), rgba(255, 255, 255, 0.02));
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.hero__content::after {
  content: "";
  position: absolute;
  top: -60px;
  right: -80px;
  width: 240px;
  height: 240px;
  background: radial-gradient(circle, rgba(79, 195, 247, 0.35), transparent 60%);
  filter: blur(40px);
  opacity: 0.5;
}

.hero__content::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.06), transparent 40%);
  opacity: 0;
  transform: translateX(-40%);
  animation: shimmer 10s ease-in-out infinite;
}

h1 {
  font-size: clamp(28px, 4vw, 44px);
  margin: 8px 0 16px;
  letter-spacing: 0.02em;
}

h2 {
  font-size: clamp(22px, 3vw, 30px);
  margin: 0;
  letter-spacing: 0.01em;
}

h3 { margin: 12px 0 8px; font-size: 20px; }
h4 { margin: 10px 0 6px; font-size: 18px; }

p { margin: 0 0 16px; color: var(--muted); }

.lead {
  font-size: 18px;
  max-width: 780px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 12px;
  color: var(--accent);
  margin: 0 0 6px;
}

.section {
  padding: 64px 20px;
  position: relative;
}

.section__inner {
  width: min(var(--max-width), 100%);
  margin: 0 auto;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 32px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(4px);
}

.section__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.accent-line {
  display: inline-block;
  width: 48px;
  height: 3px;
  background: var(--accent);
  border-radius: 999px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 0.6s ease;
}

.section.in-view .accent-line { transform: scaleX(1); }

.pill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-top: 16px;
}

.pill {
  padding: 12px 16px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  text-align: center;
}

.pill--focus {
  border-color: var(--accent);
  background: rgba(79, 195, 247, 0.1);
}

.flow {
  position: relative;
  padding-left: 12px;
}

.flow__line {
  position: absolute;
  left: 12px;
  top: 14px;
  width: 4px;
  height: calc(100% - 28px);
  background: linear-gradient(var(--accent), transparent);
  border-radius: 999px;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 1s ease;
  will-change: transform;
}

.section.in-view .flow__line { transform: scaleY(1); }

.flow__step {
  position: relative;
  margin-left: 32px;
  margin-bottom: 28px;
  padding: 24px;
  border-radius: 12px;
  background: var(--panel-strong);
  border: 1px solid var(--line);
  transform: translateY(20px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
  will-change: transform, opacity;
}

.section.in-view .flow__step {
  transform: translateY(0);
  opacity: 1;
}

.badge {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(79, 195, 247, 0.16);
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 12px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.card {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: var(--shadow);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
}

.link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
}

.compare {
  margin-top: 20px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.compare__header {
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text);
}

.compare__table { display: grid; gap: 10px; }

.compare__row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.compare__row:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.22);
}

.compare__note {
  margin-top: 10px;
  font-size: 14px;
  color: var(--muted);
}

.scene-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.scene {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--panel-strong);
  transform: translateY(12px);
  opacity: 0;
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.section.in-view .scene {
  transform: translateY(0);
  opacity: 1;
}

.option-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.option {
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px dashed var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.note {
  margin-top: 12px;
  font-size: 14px;
  color: var(--muted);
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 18px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.btn.primary {
  background: var(--accent);
  color: #031420;
  border: 1px solid transparent;
}

.btn.primary:hover { background: #76d5ff; }

.btn.ghost {
  border: 1px solid var(--accent);
  color: var(--accent);
  background: transparent;
}

.btn.ghost:hover { background: rgba(79, 195, 247, 0.12); }

.footer {
  padding: 32px 20px;
  text-align: center;
  color: var(--muted);
  font-size: 14px;
}

@keyframes grid-move {
  from { transform: translateY(0); }
  to { transform: translateY(24px); }
}

@keyframes shimmer {
  0% { opacity: 0; transform: translateX(-40%); }
  50% { opacity: 0.5; transform: translateX(20%); }
  100% { opacity: 0; transform: translateX(60%); }
}

@media (max-width: 768px) {
  .section__inner, .hero__content { padding: 24px; }
  .flow__line { left: 6px; }
  .flow__step { margin-left: 24px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
  .flow__line { transform: scaleY(1) !important; }
  .flow__step, .scene { opacity: 1 !important; transform: none !important; }
}
