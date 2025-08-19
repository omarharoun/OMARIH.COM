"use client";
import { View, Text, Image } from 'ui';
import { Input, Button, Card } from 'ui';
import Link from 'next/link';

export default function TemplatesPage() {
  return (
    <main>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a202c', textDecoration: 'none' }}>IHSAN</Link>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/fundamentals" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Learn</Link>
            <Link href="/templates" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '600' }}>Templates</Link>
            <Link href="/articles" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Articles</Link>
            <Link href="/about" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c', lineHeight: '1.2' }}>
            Productivity Templates
          </h1>
          <p style={{ fontSize: '24px', color: '#4a5568', marginBottom: '32px', lineHeight: '1.5' }}>
            Level-up your workspace with proven templates
          </p>
          <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            Get instant access to the exact templates I use to run my business and manage my life. These templates will save you dozens of hours and give you a professional foundation to build upon.
          </p>
        </div>
      </section>

      {/* Premium Templates */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Premium Templates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '48px' }}>
            <Card style={{ padding: '40px', backgroundColor: '#fff', border: '2px solid #3182ce', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '32px' }}>🧠</div>
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a202c', marginBottom: '4px' }}>
                    Ultimate Brain
                  </h3>
                  <p style={{ color: '#3182ce', fontWeight: '600' }}>The All-in-1 Productivity System</p>
                </div>
              </div>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px', fontSize: '16px' }}>
                Transform your workspace into a true second brain. This comprehensive system includes task management, note-taking, project tracking, goal setting, and habit building - all integrated seamlessly.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>What's included:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Complete task management system</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Note-taking and knowledge base</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Project and goal tracking</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Habit tracker and routine builder</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>PARA method organization</span>
                  </li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a202c' }}>$47</span>
                <span style={{ color: '#4a5568', textDecoration: 'line-through' }}>$97</span>
              </div>
              <Button title="Get Ultimate Brain" onPress={() => {}} />
            </Card>

            <Card style={{ padding: '40px', backgroundColor: '#fff', border: '2px solid #38a169', borderRadius: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ fontSize: '32px' }}>🎬</div>
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1a202c', marginBottom: '4px' }}>
                    Creator's Companion
                  </h3>
                  <p style={{ color: '#38a169', fontWeight: '600' }}>The Ultimate Content Creation System</p>
                </div>
              </div>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px', fontSize: '16px' }}>
                The exact system I use to run my content creation business. From idea capture to final publication, this template handles every aspect of the creative process.
              </p>
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '12px', color: '#1a202c' }}>What's included:</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Idea capture and organization</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Content planning calendar</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Script and article templates</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Research and source management</span>
                  </li>
                  <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#38a169' }}>✓</span>
                    <span style={{ color: '#4a5568' }}>Publishing workflow</span>
                  </li>
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a202c' }}>$37</span>
                <span style={{ color: '#4a5568', textDecoration: 'line-through' }}>$67</span>
              </div>
              <Button title="Get Creator's Companion" onPress={() => {}} />
            </Card>
          </div>
        </div>
      </section>

      {/* Free Templates */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Free Templates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
            {FREE_TEMPLATES.map((template, index) => (
              <Card key={index} style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px', textAlign: 'center' }}>{template.icon}</div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c', textAlign: 'center' }}>
                  {template.title}
                </h3>
                <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px', textAlign: 'center' }}>
                  {template.description}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <Button title="Download Free" onPress={() => {}} />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            What People Are Saying
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} style={{ padding: '32px', backgroundColor: '#f7fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <Text style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.6', fontStyle: 'italic' }}>
                    "{testimonial.quote}"
                  </Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#3182ce',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#1a202c' }}>{testimonial.name}</div>
                    <div style={{ color: '#4a5568', fontSize: '14px' }}>{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a202c', color: '#fff', padding: '64px 0 32px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ borderTop: '1px solid #4a5568', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ color: '#a0aec0', margin: 0 }}>© IHSAN 2025 — <Link href="/" style={{ color: '#a0aec0' }}>Back to Home</Link></p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="https://youtube.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>📺</Link>
              <Link href="https://twitter.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>🐦</Link>
              <Link href="https://linkedin.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>💼</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

const FREE_TEMPLATES = [
  {
    title: "Task Manager",
    icon: "✅",
    description: "A simple but powerful task management system with priorities, due dates, and project organization."
  },
  {
    title: "Habit Tracker",
    icon: "🔄",
    description: "Track your daily habits and build consistency with this easy-to-use habit tracking template."
  },
  {
    title: "Meeting Notes",
    icon: "📝",
    description: "Professional meeting notes template with action items, attendees, and follow-up tracking."
  },
  {
    title: "Reading List",
    icon: "📚",
    description: "Organize your reading list with ratings, notes, and progress tracking for better learning."
  },
  {
    title: "Goal Tracker",
    icon: "🎯",
    description: "Set and track your goals with this comprehensive goal tracking and progress monitoring system."
  },
  {
    title: "Weekly Planner",
    icon: "📅",
    description: "Plan your weeks effectively with this structured weekly planning template and reflection system."
  }
];

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    quote: "The Ultimate Brain template completely transformed how I organize my work and personal life. I'm 10x more productive!"
  },
  {
    name: "Mike Chen",
    role: "Content Creator",
    quote: "Creator's Companion is exactly what I needed to streamline my content workflow. It's like having a personal assistant."
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    quote: "These templates saved me weeks of setup time. The attention to detail and thoughtful organization is incredible."
  }
];
