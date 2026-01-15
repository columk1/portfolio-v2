export const styles = `* { box-sizing: border-box; }

@keyframes progress {
  from { width: 0%; }
  to { width: 100%; }
}

body {
  margin: 0;
  padding: 20px;
  background-color: #18181b;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #e4e4e7;
}

.app-container {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h3 { margin: 0 0 16px 0; font-weight: 600; font-size: 18px; }

/* Card */
.card {
  width: 100%;
  padding: 20px;
  background: #27272a;
  border-radius: 16px;
  border: 1px solid #3f3f46;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.todo-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  background: #3f3f46;
  border-radius: 8px;
  transition: background 0.2s;
}

.todo-title { font-size: 14px; font-weight: 500; }

.toggle-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #52525b;
  background: #27272a;
  color: #71717a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  padding: 0;
}

.toggle-btn:hover { border-color: #71717a; color: #a1a1aa; }

.toggle-btn.completed {
  background: rgba(16, 185, 129, 0.2);
  border-color: #10b981;
  color: #10b981;
}

/* Network Panel */
.network-panel {
  background: #27272a;
  border-radius: 12px;
  border: 1px solid #3f3f46;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.control-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #a1a1aa;
}

.request-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.request-item { font-size: 12px; }

.req-info {
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
  font-family: monospace;
}

.method { color: #a1a1aa; }
.path { color: #e4e4e7; }

.progress-track {
  height: 4px;
  background: #3f3f46;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #10b981;
  width: 0%;
  animation-name: progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.network-panel.error .progress-bar {
  background: #ef4444;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

.like-button {
  margin: 0 auto;
  color: #3f3f46;
  transition: all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  &:active {
    transform: scale(0.95);
  }
  &.liked {
    color: color(display-p3 1 0.18 0.25 / 1);
  }
}
`;


export const NetworkPanel = `import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot, updateSettings } from './api';

export function NetworkPanel() {
  const state = useSyncExternalStore(subscribe, getSnapshot);
  const { requests, settings } = state;

  return (
    <div className={"network-panel" + (settings.error ? " error" : "")}>
      <div className="control-row">
        <label>
          Randomize latency
        </label>
          <input 
            type="checkbox" checked={settings.randomize} 
            onChange={e => updateSettings({ randomize: e.target.checked })} 
          />
      </div>
      <div className="control-row">
        <label>
          Always Error
        </label>
          <input 
            type="checkbox" checked={settings.error} 
            onChange={e => updateSettings({ error: e.target.checked })} 
          />
      </div>
      <div className="request-list">
        {requests.map(req => (
          <div key={req.id} className="request-item">
            <div className="req-info">
              <span className="method">POST</span>
              <span className="path">{req.path}</span>
            </div>
            <div className="progress-track">
              <div 
                className="progress-bar" 
                style={{ animationDuration: \`\${req.duration}ms\` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`

export const api = `
let listeners = [];
let state = {
  requests: [],
  settings: { delay: 750, randomize: false, error: false }
};

function notify() {
  listeners.forEach(l => l());
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
}

export function getSnapshot() {
  return state;
}

export function updateSettings(newSettings) {
  state = { ...state, settings: { ...state.settings, ...newSettings } };
  notify();
}

export async function updateTodo(id, newTodo) {
  const reqId = Math.random().toString(36).substr(2, 9);
  const duration = state.settings.randomize 
    ? state.settings.delay + (Math.random() * 2000) 
    : state.settings.delay;
  
  state = {
    ...state,
    requests: [...state.requests, { 
      id: reqId, 
      path: \`/todos/\${id}\`, 
      duration 
    }]
  };
  notify();

  await new Promise(resolve => setTimeout(resolve, duration));

  state = {
    ...state,
    requests: state.requests.filter(r => r.id !== reqId)
  };
  notify();

  if (state.settings.error) {
    throw new Error("Simulated API Error")
  }

  return newTodo;
}

export async function toggleLike(liked) {
  const reqId = Math.random().toString(36).substr(2, 9);
  const duration = state.settings.randomize 
    ? state.settings.delay + (Math.random() * 2000) 
    : state.settings.delay;
  
  state = {
    ...state,
    requests: [...state.requests, { 
      id: reqId, 
      path: '/likes', 
      duration 
    }]
  };
  notify();

  await new Promise(resolve => setTimeout(resolve, duration));

  state = {
    ...state,
    requests: state.requests.filter(r => r.id !== reqId)
  };
  notify();

  if (state.settings.error) {
    throw new Error("Simulated API Error")
  }

  return liked;
}`