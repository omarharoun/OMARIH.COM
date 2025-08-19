"use client";
import { View, Text, Image } from 'ui';
import { Input, Button, Card } from 'ui';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a202c', textDecoration: 'none' }}>IHSAN</Link>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/fundamentals" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Learn</Link>
            <Link href="/templates" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Templates</Link>
            <Link href="/articles" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Articles</Link>
            <Link href="/about" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '600' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c', lineHeight: '1.2' }}>
            About IHSAN
          </h1>
          <p style={{ fontSize: '24px', color: '#4a5568', marginBottom: '32px', lineHeight: '1.5' }}>
            Creator, author, and productivity expert helping people build better systems.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '20px', color: '#4a5568', lineHeight: '1.7', marginBottom: '32px' }}>
                IHSAN is a creator, author, and entrepreneur who has been helping students and professionals be more productive since 2020.
              </p>
              
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                Our platform has garnered thousands of users covering topics in self-improvement – ranging from effective learning, 
                productivity systems, personal development, and organizational methods.
              </p>
              
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                We hold multiple certifications in productivity systems and are the creators of the web's most comprehensive 
                productivity resources and templates.
              </p>
              
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                IHSAN has been featured in various publications and gives talks on productivity and organization at events worldwide. 
                We help build a sustainable approach to productivity that works for busy professionals, students, and creators.
              </p>
              
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '32px' }}>
                In our free time, we enjoy reading, traveling, and continuously learning about new productivity methods and technologies.
              </p>

              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                We believe that everyone deserves to have systems that help them accomplish their goals without feeling overwhelmed. 
                Our mission is to make productivity accessible, sustainable, and actually enjoyable.
              </p>
              
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '32px' }}>
                Through our templates, courses, and content, we help people build systems that work with their natural habits and 
                preferences, rather than against them.
              </p>
            </div>
            
            <div>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/ihsan-about/400/500' }} 
                style={{ width: '100%', height: '400px', borderRadius: '12px', marginBottom: '24px' }} 
              />
              <p style={{ fontSize: '14px', color: '#4a5568', fontStyle: 'italic', textAlign: 'center' }}>
                Speaking at a productivity conference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Achievements & Recognition
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>50,000+</h3>
              <p style={{ color: '#4a5568' }}>Newsletter Subscribers</p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📚</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>100+</h3>
              <p style={{ color: '#4a5568' }}>Free Resources Created</p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎓</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>10,000+</h3>
              <p style={{ color: '#4a5568' }}>Students Taught</p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>⭐</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>4.9/5</h3>
              <p style={{ color: '#4a5568' }}>Average Rating</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Interviews */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px', color: '#1a202c' }}>
            Featured Interviews
          </h2>
          <p style={{ fontSize: '18px', color: '#4a5568', textAlign: 'center', marginBottom: '64px' }}>
            Sharing insights on productivity and organization
          </p>
          
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <Image 
              source={{ uri: 'https://picsum.photos/seed/interviews/800/300' }} 
              style={{ width: '100%', maxWidth: '800px', height: '300px', borderRadius: '12px', margin: '0 auto' }} 
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {INTERVIEWS.map((interview, index) => (
              <Card key={index} style={{ padding: '24px', backgroundColor: '#f7fafc', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>
                  {interview.show}
                </h3>
                <p style={{ color: '#4a5568', fontSize: '16px', marginBottom: '12px' }}>
                  {interview.host}
                </p>
                <p style={{ color: '#4a5568', fontSize: '14px', lineHeight: '1.6' }}>
                  {interview.topic}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px', color: '#1a202c' }}>
            Beyond Productivity
          </h2>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '48px' }}>
            When not creating productivity content, you can find me exploring new places, reading philosophy and science books, 
            experimenting with new technologies, and enjoying good coffee while planning the next big project.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📖</div>
              <p style={{ color: '#4a5568', fontWeight: '600' }}>Reading</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✈️</div>
              <p style={{ color: '#4a5568', fontWeight: '600' }}>Traveling</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💻</div>
              <p style={{ color: '#4a5568', fontWeight: '600' }}>Technology</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>☕</div>
              <p style={{ color: '#4a5568', fontWeight: '600' }}>Coffee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#3182ce', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>
            Ready to Transform Your Productivity?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '32px' }}>
            Join our community and start building better systems today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button title="Start Learning" onPress={() => {}} />
            <Button title="Get Templates" onPress={() => {}} />
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

const INTERVIEWS = [
  {
    show: "The Productivity Show",
    host: "with Sarah Johnson",
    topic: "Building sustainable productivity systems that actually work"
  },
  {
    show: "Creator Economy Podcast",
    host: "with Mike Chen",
    topic: "Scaling content creation with smart organizational systems"
  },
  {
    show: "The Learning Show",
    host: "with Dr. Emily Rodriguez",
    topic: "How to build a second brain for continuous learning"
  },
  {
    show: "Business Systems Today",
    host: "with David Park",
    topic: "Productivity systems for entrepreneurs and small business owners"
  }
];
