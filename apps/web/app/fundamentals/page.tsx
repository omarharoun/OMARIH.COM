"use client";
import { View, Text, Image } from 'ui';
import { Input, Button, Card } from 'ui';
import Link from 'next/link';

export default function FundamentalsPage() {
  return (
    <main>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a202c', textDecoration: 'none' }}>IHSAN</Link>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/fundamentals" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '600' }}>Learn</Link>
            <Link href="/templates" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Templates</Link>
            <Link href="/articles" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Articles</Link>
            <Link href="/about" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>About</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px', color: '#1a202c', lineHeight: '1.2' }}>
            Fundamentals: The Complete Beginner's Guide
          </h1>
          <p style={{ fontSize: '24px', color: '#4a5568', marginBottom: '32px', lineHeight: '1.5' }}>
            New to productivity systems? This is the best place to start.
          </p>
          <p style={{ fontSize: '18px', color: '#4a5568', marginBottom: '48px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            Fundamentals is an in-depth and 100% free series of tutorials that will teach you all the basics of productivity systems – organization, workflows, templates, automation, and more.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Button 
              title="Start Learning Now" 
              onPress={() => {}} 
            />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            What You'll Learn
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>📚</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Basic Concepts
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Understanding the fundamentals of organization, note-taking, task management, and building productive workflows.
              </p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>🔗</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Connections & Links
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Learn how to create meaningful connections between your ideas, projects, and goals for better organization.
              </p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>⌨️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Keyboard Shortcuts
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Master the essential keyboard shortcuts and time-saving techniques to work faster and more efficiently.
              </p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>🏗️</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Building Blocks
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Understand the core building blocks of productivity systems and how to combine them effectively.
              </p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>📋</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Templates & Examples
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Get hands-on with real templates and examples you can use immediately in your own projects.
              </p>
            </Card>

            <Card style={{ padding: '32px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
              <div style={{ fontSize: '48px', marginBottom: '24px' }}>🚀</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#1a202c' }}>
                Advanced Features
              </h3>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
                Dive into advanced features like automation, integrations, and custom workflows to supercharge your productivity.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section style={{ backgroundColor: '#f7fafc', padding: '80px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center', marginBottom: '64px', color: '#1a202c' }}>
            Course Curriculum
          </h2>
          <div style={{ display: 'grid', gap: '24px' }}>
            {CURRICULUM.map((lesson, index) => (
              <Card key={index} style={{ padding: '24px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    backgroundColor: '#3182ce', 
                    color: 'white', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 'bold' 
                  }}>
                    {index + 1}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a202c' }}>{lesson.title}</h3>
                  <span style={{ marginLeft: 'auto', color: '#4a5568', fontSize: '14px' }}>{lesson.duration}</span>
                </div>
                <p style={{ color: '#4a5568', lineHeight: '1.6', marginLeft: '56px' }}>{lesson.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ backgroundColor: '#3182ce', padding: '80px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: 'white' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', marginBottom: '32px' }}>
            Join thousands of learners who have transformed their productivity with our comprehensive fundamentals course.
          </p>
          <div style={{ textAlign: 'center' }}>
            <Button 
              title="Start Learning for Free" 
              onPress={() => {}} 
            />
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

const CURRICULUM = [
  {
    title: "Getting Started with Productivity Systems",
    duration: "15 min",
    description: "Learn the basics of what productivity systems are and why they're essential for modern work and life."
  },
  {
    title: "Setting Up Your Workspace",
    duration: "20 min", 
    description: "Step-by-step guide to creating your first organized workspace with the right structure and foundations."
  },
  {
    title: "Understanding Pages and Hierarchy",
    duration: "25 min",
    description: "Master the concept of pages, how to organize them, and create logical hierarchies for your content."
  },
  {
    title: "Creating and Managing Tasks",
    duration: "30 min",
    description: "Learn how to create, organize, and track tasks effectively using proven task management principles."
  },
  {
    title: "Note-Taking and Knowledge Management",
    duration: "35 min",
    description: "Discover powerful note-taking techniques and how to build a personal knowledge management system."
  },
  {
    title: "Linking Ideas and Building Connections",
    duration: "25 min",
    description: "Understand how to create meaningful connections between your ideas, projects, and knowledge."
  },
  {
    title: "Templates and Reusable Structures",
    duration: "30 min",
    description: "Learn to create and use templates to speed up your work and maintain consistency."
  },
  {
    title: "Essential Keyboard Shortcuts",
    duration: "20 min",
    description: "Master the most important keyboard shortcuts to work faster and more efficiently."
  },
  {
    title: "Collaboration and Sharing",
    duration: "25 min",
    description: "Learn how to collaborate with others and share your work effectively."
  },
  {
    title: "Advanced Tips and Best Practices",
    duration: "40 min",
    description: "Discover advanced techniques and best practices to take your productivity to the next level."
  }
];
