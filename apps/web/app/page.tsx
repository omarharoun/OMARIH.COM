"use client";
import { View, Text, Image } from 'ui';
import { Input, Button, Card } from 'ui';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [email, setEmail] = useState('');

  return (
    <main>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a202c' }}>IHSAN</div>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/fundamentals" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Learn</Link>
            <Link href="/templates" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Templates</Link>
            <Link href="/articles" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Articles</Link>
            <Link href="https://store.omarih.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Store</Link>
            <Link href="/about" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c', lineHeight: '1.2' }}>
              Hello there<br />It's IHSAN!
            </h1>
            <p style={{ fontSize: '24px', color: '#4a5568', marginBottom: '32px', lineHeight: '1.5' }}>
              I'm an author, creator, and productivity expert.
            </p>
            <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '48px', lineHeight: '1.6' }}>
              I create in-depth tutorials and templates that help people be more productive and organized.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Button 
                title="Learn Fundamentals" 
                onPress={() => {}} 
              />
              <Button 
                title="View Templates" 
                onPress={() => {}} 
              />
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Image 
              source={{ uri: 'https://picsum.photos/seed/ihsan-profile/400/400' }} 
              style={{ width: '300px', height: '300px', borderRadius: '12px', marginBottom: '16px' }} 
            />
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section style={{ backgroundColor: '#f7fafc', padding: '48px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#4a5568', marginBottom: '24px' }}>Featured on:</p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', opacity: 0.6 }}>
            <div style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', borderRadius: '4px', fontSize: '14px', fontWeight: '600' }}>TechCrunch</div>
            <div style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', borderRadius: '4px', fontSize: '14px', fontWeight: '600' }}>Forbes</div>
            <div style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', borderRadius: '4px', fontSize: '14px', fontWeight: '600' }}>Harvard Business Review</div>
            <div style={{ padding: '8px 16px', backgroundColor: '#e2e8f0', borderRadius: '4px', fontSize: '14px', fontWeight: '600' }}>Wired</div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Want to Learn? Start Here.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px' }}>
            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/fundamentals/400/250' }} 
                style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: '24px' }} 
              />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Fundamentals: The Complete Beginner's Guide
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                New to productivity systems? This is the best place to start. Fundamentals is an in-depth and 100% free series of tutorials that will teach you all the basics.
              </p>
              <Button title="Start Learning" onPress={() => {}} />
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/advanced/400/250' }} 
                style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: '24px' }} 
              />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Advanced Systems: Complete Course
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                Advanced productivity systems can be confusing to newcomers. This free guide will teach you the ins and outs of complex workflows and automation.
              </p>
              <Button title="View Course" onPress={() => {}} />
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/reference/400/250' }} 
                style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: '24px' }} 
              />
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Ultimate Reference Guide
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                Similar to formulas in Excel, advanced systems are extremely powerful tools. This guide provides documentation and examples for every feature.
              </p>
              <Button title="View Reference" onPress={() => {}} />
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Templates: Level-Up Your Workspace
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Ultimate Brain – The All-in-1 Productivity System
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '16px' }}>
                Tasks, notes, projects, goal-tracking – Ultimate Brain turns your workspace into a true second brain.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                No more juggling multiple apps to run your life; Ultimate Brain brings everything into one place. You can also organize everything with PARA, GTD, and intelligent dashboards.
              </p>
              <Button title="Get Ultimate Brain" onPress={() => {}} />
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Creator's Companion – The Ultimate Planning System
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '16px' }}>
                I run my entire content creation business with this system. Creator's Companion is the exact system my team and I use.
              </p>
              <p style={{ color: '#4a5568', lineHeight: '1.6', marginBottom: '24px' }}>
                With it, you can easily capture ideas, collect research, write content drafts, create project plans, and track all your creative work.
              </p>
              <Button title="Get Creator's Companion" onPress={() => {}} />
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c' }}>
            Join My Tips Newsletter
          </h2>
          <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.6', marginBottom: '32px' }}>
            I release new tutorials, templates, and coverage for new features on a regular basis. To be the first to know when I publish something new, join the 50,000+ smart folks in my newsletter.
          </p>
          <p style={{ fontSize: '16px', color: '#4a5568', marginBottom: '32px' }}>
            As a bonus, I'll also send you all of my free templates (task manager, habit tracker, and more) along with all the resources from my courses.
          </p>
          <div style={{ display: 'flex', gap: '12px', maxWidth: '400px', margin: '0 auto' }}>
            <Input 
              placeholder="Enter your email address" 
              value={email} 
              onChangeText={setEmail}
              style={{ flex: 1 }}
            />
            <Button title="Subscribe" onPress={() => {}} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            About IHSAN
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '64px', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                IHSAN is a creator, author, and entrepreneur who has been helping students and professionals be more productive since 2020.
              </p>
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                Our main platform has garnered thousands of users covering topics in self-improvement – ranging from effective learning, productivity, personal development, and organization systems.
              </p>
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                We hold multiple certifications in productivity systems, and are the creators of comprehensive reference guides and tutorials.
              </p>
              <p style={{ fontSize: '18px', color: '#4a5568', lineHeight: '1.7', marginBottom: '24px' }}>
                We have been featured in various publications and give talks on productivity and organization at events worldwide.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image 
                source={{ uri: 'https://picsum.photos/seed/ihsan-speaking/400/300' }} 
                style={{ width: '100%', height: '300px', borderRadius: '12px', marginBottom: '24px' }} 
              />
              <p style={{ fontSize: '14px', color: '#4a5568', fontStyle: 'italic' }}>Speaking at productivity conference</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Connect with Me
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <Card style={{ padding: '24px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📺</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>YouTube</h3>
              <p style={{ color: '#4a5568', marginBottom: '8px' }}>Main Channel</p>
              <p style={{ color: '#4a5568', fontSize: '14px' }}>100K+ subscribers</p>
            </Card>

            <Card style={{ padding: '24px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐦</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>Twitter</h3>
              <p style={{ color: '#4a5568', marginBottom: '8px' }}>@ihsan</p>
              <p style={{ color: '#4a5568', fontSize: '14px' }}>50K+ followers</p>
            </Card>

            <Card style={{ padding: '24px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💼</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>LinkedIn</h3>
              <p style={{ color: '#4a5568', marginBottom: '8px' }}>Professional Network</p>
              <p style={{ color: '#4a5568', fontSize: '14px' }}>10K+ connections</p>
            </Card>

            <Card style={{ padding: '24px', textAlign: 'center', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📧</div>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px', color: '#1a202c' }}>Newsletter</h3>
              <p style={{ color: '#4a5568', marginBottom: '8px' }}>Weekly Tips</p>
              <p style={{ color: '#4a5568', fontSize: '14px' }}>Free resources</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a202c', color: '#fff', padding: '64px 0 32px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Learn</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/fundamentals" style={{ color: '#a0aec0', textDecoration: 'none' }}>Fundamentals</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/advanced" style={{ color: '#a0aec0', textDecoration: 'none' }}>Advanced Course</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/reference" style={{ color: '#a0aec0', textDecoration: 'none' }}>Reference Guide</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/automations" style={{ color: '#a0aec0', textDecoration: 'none' }}>Automations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Templates</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/brain" style={{ color: '#a0aec0', textDecoration: 'none' }}>Ultimate Brain</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/creators-companion" style={{ color: '#a0aec0', textDecoration: 'none' }}>Creator's Companion</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/task-manager" style={{ color: '#a0aec0', textDecoration: 'none' }}>Task Manager</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/habit-tracker" style={{ color: '#a0aec0', textDecoration: 'none' }}>Habit Tracker</Link></li>
              </ul>
            </div>
            

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Store</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="https://store.omarih.com" target="_blank" rel="noopener noreferrer" style={{ color: '#a0aec0', textDecoration: 'none' }}>Visit Store</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="https://store.omarih.com/products" target="_blank" rel="noopener noreferrer" style={{ color: '#a0aec0', textDecoration: 'none' }}>Products</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="https://store.omarih.com/collections" target="_blank" rel="noopener noreferrer" style={{ color: '#a0aec0', textDecoration: 'none' }}>Collections</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/articles" style={{ color: '#a0aec0', textDecoration: 'none' }}>Articles</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/notes" style={{ color: '#a0aec0', textDecoration: 'none' }}>Book Notes</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/courses" style={{ color: '#a0aec0', textDecoration: 'none' }}>Courses</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/community" style={{ color: '#a0aec0', textDecoration: 'none' }}>Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}><Link href="/about" style={{ color: '#a0aec0', textDecoration: 'none' }}>About</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/privacy" style={{ color: '#a0aec0', textDecoration: 'none' }}>Privacy Policy</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/terms" style={{ color: '#a0aec0', textDecoration: 'none' }}>Terms</Link></li>
                <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ color: '#a0aec0', textDecoration: 'none' }}>Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #4a5568', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <p style={{ color: '#a0aec0', margin: 0 }}>© IHSAN 2025 — Privacy Policy | Terms</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="https://youtube.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>📺</Link>
              <Link href="https://twitter.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>🐦</Link>
              <Link href="https://linkedin.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>💼</Link>
              <Link href="https://instagram.com" style={{ color: '#a0aec0', fontSize: '20px', textDecoration: 'none' }}>📷</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
