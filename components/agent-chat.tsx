'use client'

import { useState } from 'react'
import { Check, Circle, Sparkles } from 'lucide-react'
import { heroConversation } from '@/lib/content'

const scenarios = {
  Sales: [
    ['visitor', 'We are looking for help with a new website.'],
    ['agent', 'Happy to help. What would you most like the new site to improve?'],
    ['visitor', 'More qualified enquiries from our service pages.'],
    ['agent', 'That sounds like a good fit for a strategy call. Want to explore a few ideas?'],
  ],
  Support: [
    ['visitor', 'Could you help me check an order update?'],
    ['agent', 'I can guide you through that. In a real setup, I would securely check your order system.'],
    ['visitor', 'When should I expect an update?'],
    ['agent', 'This is a scripted demo. A live agent would share the verified status or connect you with the team.'],
  ],
  Booking: heroConversation.map((message) => [message.from, message.text]),
}

export function AgentChat() {
  const [scenario, setScenario] = useState<keyof typeof scenarios>('Sales')
  const script = scenarios[scenario]
  return (
    <div className="demo-layout">
      <div className="chat-card glass-card">
        <div className="chat-top"><span className="status-dot" /><span>Apollo assistant</span><span className="demo-label">SIMULATED DEMO</span></div>
        <div className="chat-messages" aria-live="polite">
          {script.map(([from, text], index) => <div key={`${scenario}-${index}`} className={`message ${from === 'agent' ? 'message-agent' : 'message-visitor'}`}><span>{text}</span></div>)}
        </div>
        <div className="chat-foot"><Sparkles aria-hidden="true" /> Example conversation · No live system connected</div>
      </div>
      <div className="activity-card glass-card">
        <span className="eyebrow">A HELPFUL HANDOFF</span>
        <h3>More signal, less busywork.</h3>
        <p className="muted">A real agent can guide the conversation and help your team understand what matters next.</p>
        <ul className="activity-list"><li><Check /> Intent understood</li><li><Check /> Context gathered</li><li><Circle /> Team ready to follow up</li></ul>
      </div>
      <div className="scenario-tabs" role="group" aria-label="Choose a demo scenario">
        {(Object.keys(scenarios) as Array<keyof typeof scenarios>).map((item) => <button key={item} aria-pressed={scenario === item} className={scenario === item ? 'scenario-active' : ''} onClick={() => setScenario(item)}>{item}</button>)}
      </div>
    </div>
  )
}
