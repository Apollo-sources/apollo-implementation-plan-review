export const navigation = [
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'FAQ', href: '#faq' },
]

export const services = [
  {
    number: '01',
    title: 'AI agents',
    description: 'Thoughtful automation for the moments that move your business forward.',
    bullets: ['Respond to every enquiry, around the clock', 'Qualify leads and book the next step', 'Fit into the tools your team already uses'],
  },
  {
    number: '02',
    title: 'AI websites',
    description: 'Distinctive digital experiences designed to turn attention into action.',
    bullets: ['A clear, confident brand experience', 'Helpful AI conversations built in', 'Fast, accessible and easy to grow'],
  },
]

export const faqs = [
  { id: 'project-cost', category: 'Cost', question: 'How much does a project cost?', answer: 'Every project is scoped around your goals. We will share a clear starting point and next steps during a strategy conversation.' },
  { id: 'agent-tone', category: 'Quality', question: 'Will an AI agent sound robotic?', answer: 'A well-designed agent reflects your voice and approved knowledge. Example conversations are shown in the demos on this page.' },
  { id: 'information-safety', category: 'Risk', question: 'How do you keep our information safe?', answer: 'Security and data handling depend on the systems selected for each project. We will discuss your requirements before recommending an approach.' },
  { id: 'team-time', category: 'Effort', question: 'How much time will this take from our team?', answer: 'We keep collaboration focused with a kickoff, a few reviews and a final handoff. The exact schedule depends on scope.' },
  { id: 'tool-integrations', category: 'Fit', question: 'Can you connect to our existing tools?', answer: 'Many common systems offer integrations or APIs. We confirm compatibility during discovery rather than promise an unverified connection.' },
]

export const testimonials = [
  { type: 'AI AGENT', title: 'A calmer way to handle new enquiries.', quote: 'The example workflow shows how a helpful first response can make a busy day feel more manageable.', name: 'Client example', role: 'Home services' },
  { type: 'AI WEBSITE', title: 'A clearer first impression.', quote: 'A considered website experience makes it easier for the right people to understand what happens next.', name: 'Client example', role: 'Professional services' },
  { type: 'AI AGENT', title: 'More time for the work that matters.', quote: 'Automation can help a team spend less time repeating the same steps and more time with customers.', name: 'Client example', role: 'Growing business' },
]

export const heroConversation = [
  { from: 'visitor', text: 'Hi, do you have availability for a renovation quote this week?' },
  { from: 'agent', text: 'Absolutely. Is this a full or partial renovation?' },
  { from: 'visitor', text: 'A full renovation, around 15 square metres.' },
  { from: 'agent', text: 'I can offer Thursday at 10:00 or Friday at 14:00. Which works best?' },
]
