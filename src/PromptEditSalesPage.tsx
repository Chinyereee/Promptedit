import React from 'react';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  isFeatured: boolean;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

interface Tool {
  id: string;
  icon: string;
  name: string;
  description: string;
}

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

interface Stat {
  id: string;
  number: string;
  label: string;
}

const PromptEditSalesPage: React.FC = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'payAsYouGo',
      name: 'Pay As You Go',
      price: 0,
      period: 'variable',
      description: 'Perfect if you use AI tools occasionally or want complete flexibility.',
      features: [
        'Buy credits whenever you\'re ready',
        'Credits never expire',
        'Use on any tool anytime',
        'Cancel anytime'
      ],
      isFeatured: false
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: 39,
      period: '/month',
      description: 'Perfect if you create regularly and want the best value.',
      features: [
        '$49 worth of credits monthly',
        '10% off additional credits',
        'Lifetime 20% credit boost',
        'Unlimited templates library',
        'Priority generation speeds'
      ],
      isFeatured: true
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      quote: 'My videos wouldn\'t look half as good without the Content Creator Templates Library.',
      author: 'Matt Lilley',
      role: 'Creator & Student'
    },
    {
      id: '2',
      quote: 'My daughter and I got more editing work done in 3 hours than we normally do in 3 days!',
      author: 'Hilda Schlueter',
      role: 'Course Creator'
    },
    {
      id: '3',
      quote: 'I don\'t need any other digital asset subscriptions. This has everything!',
      author: 'Brady Hales',
      role: 'Professional Editor'
    }
  ];

  const tools: Tool[] = [
    {
      id: '1',
      icon: '🎨',
      name: 'AI Image Creation',
      description: 'Generate stunning images with Ideogram, DALL-E, and more.'
    },
    {
      id: '2',
      icon: '🎬',
      name: 'AI Video',
      description: 'Create videos, clones, and effects with HeyGen, Kling, and Veo.'
    },
    {
      id: '3',
      icon: '🎙️',
      name: 'AI Audio',
      description: 'Voice cloning, AI voiceovers, music generation, sound effects.'
    },
    {
      id: '4',
      icon: '✨',
      name: 'AI Editing Plugins',
      description: 'Access AI tools inside your favorite editing software.'
    }
  ];

  const steps: Step[] = [
    { id: '1', number: 1, title: 'Buy Credits', description: 'Purchase on your schedule. No monthly bills.' },
    { id: '2', number: 2, title: 'Use Any Tool', description: 'Access 30+ AI tools in one login.' },
    { id: '3', number: 3, title: 'Pay Only for Use', description: 'Your credits work across any tool.' }
  ];

  const stats: Stat[] = [
    { id: '1', number: '30+', label: 'AI Tools' },
    { id: '2', number: '100K+', label: 'Templates' },
    { id: '3', number: '99%', label: 'Happy Users' }
  ];

  const handleCtaClick = () => {
    window.location.href = 'https://promptedit.com';
  };

  const styles = `
    :root {
      /* ==========================================================================
         1. COLOR PRIMITIVES (The Minimalist Canvas)
         ========================================================================== */
      --color-pure-white: #ffffff;
      --color-off-white: #f8f9fa;
      --color-platinum: #f1f3f5;
      --color-slate-200: #e9ecef;
      --color-slate-800: #1a1d20;
      --color-ink-black: #0f1113;
      
      /* Amber/Sand Accent (Judiciously used for highlights/micro-actions) */
      --color-amber-gold: #f4a460;
      --color-amber-hover: #e0924f;
      
      /* ==========================================================================
         2. SEMANTIC TOKENS (Light Mode Default)
         ========================================================================== */
      --bg-main: var(--color-off-white);
      --bg-card: var(--color-pure-white);
      --bg-card-hover: var(--color-platinum);
      
      /* Typography */
      --text-primary: var(--color-ink-black);
      --text-secondary: #5c6370;
      --text-accent: var(--color-ink-black);
      
      /* Interactive Elements */
      --action-bg: var(--color-ink-black);
      --action-bg-hover: var(--color-slate-800);
      --action-text: var(--color-pure-white);
      
      /* Borders & Dividers */
      --border-subtle: var(--color-slate-200);
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --bg-main: var(--color-ink-black);
        --bg-card: #16181b;
        --bg-card-hover: #1e2126;
        
        --text-primary: var(--color-off-white);
        --text-secondary: #9aa2b1;
        --text-accent: var(--color-pure-white);
        
        --action-bg: var(--color-pure-white);
        --action-bg-hover: var(--color-off-white);
        --action-text: var(--color-ink-black);
        
        --border-subtle: rgba(255, 255, 255, 0.06);
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, .sales-page {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: var(--text-primary);
      background: var(--bg-main);
      min-height: 100vh;
    }

    .container {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* ==========================================================================
       HEADER
       ========================================================================== */
    header {
      padding: 24px 0;
      border-bottom: 1px solid var(--border-subtle);
      margin-bottom: 40px;
    }

    .logo {
      font-size: 20px;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-accent);
    }

    /* ==========================================================================
       HERO SECTION
       ========================================================================== */
    .hero-card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 60px 40px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      margin-bottom: 60px;
      text-align: center;
    }

    .hero-card h1 {
      color: var(--text-accent);
      font-size: 2.5rem;
      letter-spacing: -0.03em;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 16px;
    }

    .hero-card .subheading {
      color: var(--text-secondary);
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 32px;
    }

    /* ==========================================================================
       BUTTONS
       ========================================================================== */
    .btn-primary {
      background-color: var(--action-bg);
      color: var(--action-text);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 14px 32px;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-block;
      text-decoration: none;
    }

    .btn-primary:hover {
      background-color: var(--action-bg-hover);
      transform: translateY(-1px);
    }

    .btn-secondary {
      background-color: transparent;
      color: var(--text-primary);
      border: 1px solid var(--action-bg);
      border-radius: 8px;
      padding: 14px 32px;
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: -0.01em;
      cursor: pointer;
      transition: all 0.15s ease;
      display: inline-block;
      text-decoration: none;
    }

    .btn-secondary:hover {
      background-color: var(--bg-card-hover);
    }

    /* ==========================================================================
       SECTION
       ========================================================================== */
    .section {
      margin-bottom: 60px;
    }

    .section h2 {
      font-size: 1.875rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      color: var(--text-accent);
      margin-bottom: 24px;
    }

    .section p {
      color: var(--text-secondary);
      margin-bottom: 16px;
      line-height: 1.8;
    }

    .section ul {
      list-style: none;
      margin-bottom: 24px;
    }

    .section ul li {
      color: var(--text-secondary);
      padding: 8px 0;
      line-height: 1.6;
    }

    .section ul li:before {
      content: "✓ ";
      color: var(--color-amber-gold);
      font-weight: 700;
      margin-right: 8px;
    }

    /* ==========================================================================
       TESTIMONIAL BOX
       ========================================================================== */
    .testimonial-box {
      background: var(--bg-card);
      padding: 24px;
      border-radius: 12px;
      border-left: 4px solid var(--color-amber-gold);
      margin: 24px 0;
      border: 1px solid var(--border-subtle);
    }

    .testimonial-box p {
      font-style: italic;
      margin-bottom: 12px;
      font-size: 0.95rem;
      color: var(--text-secondary);
    }

    .testimonial-author {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--text-primary);
      font-style: normal;
    }

    /* ==========================================================================
       STEPS / HOW IT WORKS
       ========================================================================== */
    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      margin: 40px 0;
    }

    .step {
      background: var(--bg-card);
      padding: 32px 24px;
      border-radius: 12px;
      text-align: center;
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
    }

    .step:hover {
      border-color: var(--color-amber-gold);
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
    }

    .step-number {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-amber-gold);
      margin-bottom: 8px;
    }

    .step-title {
      font-weight: 700;
      margin-bottom: 8px;
      font-size: 0.95rem;
      color: var(--text-accent);
    }

    .step-description {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    /* ==========================================================================
       PRICING CARDS
       ========================================================================== */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin: 40px 0;
    }

    .pricing-card {
      background: var(--bg-card);
      border-radius: 12px;
      padding: 32px 24px;
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
      position: relative;
    }

    .pricing-card:hover {
      border-color: var(--color-amber-gold);
      transform: translateY(-4px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
    }

    .pricing-card.featured {
      border: 2px solid var(--color-amber-gold);
      transform: scale(1.02);
    }

    .pricing-card.featured::before {
      content: "MOST POPULAR";
      position: absolute;
      top: -12px;
      left: 24px;
      background: var(--action-bg);
      color: var(--action-text);
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.05em;
    }

    .pricing-card h3 {
      font-size: 1.125rem;
      font-weight: 800;
      margin-bottom: 8px;
      margin-top: 8px;
      color: var(--text-accent);
      letter-spacing: -0.02em;
    }

    .price {
      font-size: 2rem;
      font-weight: 800;
      color: var(--color-amber-gold);
      margin: 16px 0;
      letter-spacing: -0.02em;
    }

    .price-period {
      font-size: 0.875rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    .pricing-card p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-bottom: 16px;
      line-height: 1.6;
    }

    .pricing-card ul {
      list-style: none;
      margin: 20px 0;
    }

    .pricing-card ul li {
      font-size: 0.875rem;
      padding: 8px 0;
      color: var(--text-secondary);
    }

    .pricing-card ul li:before {
      content: "✓ ";
      color: var(--color-amber-gold);
      font-weight: 700;
      margin-right: 6px;
    }

    /* ==========================================================================
       GUARANTEE BOX
       ========================================================================== */
    .guarantee {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 32px;
      margin: 40px 0;
      text-align: center;
    }

    .guarantee h3 {
      font-size: 1.125rem;
      font-weight: 800;
      margin-bottom: 12px;
      color: var(--text-accent);
      letter-spacing: -0.02em;
    }

    .guarantee p {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    /* ==========================================================================
       TOOLS LIST
       ========================================================================== */
    .tools-list {
      display: grid;
      gap: 16px;
      margin: 40px 0;
    }

    .tool-item {
      padding: 20px;
      border-radius: 12px;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
    }

    .tool-item:hover {
      border-color: var(--color-amber-gold);
      transform: translateX(4px);
    }

    .tool-item h3 {
      font-size: 0.95rem;
      font-weight: 800;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      color: var(--text-accent);
      letter-spacing: -0.02em;
    }

    .tool-icon {
      margin-right: 8px;
      font-size: 1.25rem;
    }

    .tool-item p {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin: 0;
      line-height: 1.5;
    }

    /* ==========================================================================
       TESTIMONIALS GRID
       ========================================================================== */
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 40px 0;
    }

    .testimonial {
      background: var(--bg-card);
      padding: 24px;
      border-radius: 12px;
      border: 1px solid var(--border-subtle);
      transition: all 0.2s ease;
    }

    .testimonial:hover {
      border-color: var(--color-amber-gold);
      transform: translateY(-2px);
    }

    .testimonial p {
      font-size: 0.875rem;
      font-style: italic;
      color: var(--text-secondary);
      margin-bottom: 12px;
      line-height: 1.6;
    }

    .testimonial-author {
      font-weight: 700;
      font-size: 0.875rem;
      color: var(--text-accent);
      font-style: normal;
      margin-bottom: 2px;
      letter-spacing: -0.01em;
    }

    .testimonial-role {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-weight: 500;
    }

    /* ==========================================================================
       STATS
       ========================================================================== */
    .stats {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      padding: 32px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 24px;
      text-align: center;
      margin: 24px 0;
    }

    .stat {
      padding: 12px;
    }

    .stat-number {
      font-size: 1.875rem;
      font-weight: 800;
      color: var(--color-amber-gold);
      margin-bottom: 6px;
      letter-spacing: -0.02em;
    }

    .stat-label {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* ==========================================================================
       FINAL CTA
       ========================================================================== */
    .final-cta {
      text-align: center;
      padding: 48px 0;
      margin: 60px 0;
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
    }

    .final-cta h2 {
      font-size: 1.875rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 16px;
      color: var(--text-accent);
    }

    .final-cta p {
      font-size: 0.95rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
    }

    .button-group {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .support-text {
      font-size: 0.875rem;
      color: var(--text-secondary);
      margin-top: 20px;
    }

    /* ==========================================================================
       FOOTER
       ========================================================================== */
    footer {
      text-align: center;
      padding: 32px 0;
      border-top: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      font-size: 0.75rem;
    }

    footer a {
      color: var(--color-amber-gold);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    footer a:hover {
      color: var(--color-amber-hover);
    }

    /* ==========================================================================
       RESPONSIVE
       ========================================================================== */
    @media (max-width: 768px) {
      .hero-card h1 {
        font-size: 1.875rem;
      }

      .hero-card .subheading {
        font-size: 1rem;
      }

      .section h2 {
        font-size: 1.5rem;
      }

      .btn-primary, .btn-secondary {
        display: block;
        width: 100%;
        margin-bottom: 8px;
      }

      .button-group {
        flex-direction: column;
      }

      .button-group button,
      .button-group a {
        width: 100%;
      }

      .pricing-grid,
      .steps,
      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .pricing-card.featured {
        transform: scale(1);
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .final-cta h2 {
        font-size: 1.5rem;
      }

      .hero-card {
        padding: 40px 24px;
      }
    }
  `;

  return (
    <div className="sales-page">
      <style>{styles}</style>

      <header>
        <div className="container">
          <div className="logo">PromptEdit</div>
        </div>
      </header>

      <main className="container">
        <section className="hero-card">
          <h1>Stop Paying $500/month for AI Tools You Barely Use</h1>
          <p className="subheading">Access all the AI tools you need in one place. One login. One affordable price.</p>
          <button className="btn-primary" onClick={handleCtaClick}>Start Creating Today</button>
        </section>

        <section className="section">
          <h2>The Real Problem</h2>
          <p>You don't need 10 subscriptions. You need access to great AI tools that work when you need them.</p>
          
          <p><strong>But here's what most creators deal with:</strong></p>
          <ul>
            <li>$500+ monthly bills from tools collecting dust</li>
            <li>10+ separate logins and interfaces to learn</li>
            <li>Credits that expire or disappear when you cancel</li>
            <li>Wasted money on features you'll never use</li>
          </ul>

          <div className="testimonial-box">
            <p>"I had 7 AI subscriptions active. I was probably using 3 of them regularly. I didn't even know the other 4 were charging me until my credit card statement showed up."</p>
            <div className="testimonial-author">— Most creators, probably</div>
          </div>
        </section>

        <section className="section">
          <h2>Meet PromptEdit</h2>
          <p>Think of it like a grocery store for AI. You don't pay yearly membership to shop. You buy what you need and pay for it.</p>

          <h3 style={{fontSize: '1.125rem', fontWeight: '800', margin: '32px 0 24px', color: 'var(--text-accent)', textAlign: 'center', letterSpacing: '-0.02em'}}>How It Works:</h3>
          
          <div className="steps">
            {steps.map((step) => (
              <div key={step.id} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            ))}
          </div>

          <p style={{textAlign: 'center', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-secondary)', marginTop: '24px', lineHeight: '1.6'}}>
            A creator using AI 2-3x/week pays $300-500 across subscriptions. With PromptEdit? $80-150/month.
          </p>
        </section>

        <section className="section">
          <h2>Pricing That Makes Sense</h2>
          
          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className={`pricing-card ${plan.isFeatured ? 'featured' : ''}`}>
                <h3>{plan.name}</h3>
                {plan.price > 0 && (
                  <div className="price">
                    ${plan.price}
                    <span className="price-period">{plan.period}</span>
                  </div>
                )}
                <p>{plan.description}</p>
                
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="guarantee">
          <h3>100,000+ Professional Templates Included</h3>
          <p style={{marginBottom: '16px'}}>With Monthly Plan: 4,000+ LUTs • 60,000+ sound effects • 3,000+ text animations • 2,000+ overlays • 5,000+ backgrounds</p>
        </div>

        <section className="section">
          <h2>All the Tools You Need</h2>
          <p style={{textAlign: 'center', marginBottom: '32px'}}>30+ industry-leading AI tools. One platform. One login.</p>
          
          <div className="tools-list">
            {tools.map((tool) => (
              <div key={tool.id} className="tool-item">
                <h3>
                  <span className="tool-icon">{tool.icon}</span>
                  {tool.name}
                </h3>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Trusted by Creators Everywhere</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p>"{testimonial.quote}"</p>
                <div className="testimonial-author">{testimonial.author}</div>
                <div className="testimonial-role">{testimonial.role}</div>
              </div>
            ))}
          </div>

          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.id} className="stat">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="guarantee">
          <h3>100% Money Back Guarantee</h3>
          <p>Cancel anytime. 30-day refund if you're not satisfied. No questions asked.</p>
        </div>

        <section className="final-cta">
          <h2>Ready to Stop Paying for Tools You Don't Use?</h2>
          <p>Join creators who've already switched. Save money. Create better. Stress less.</p>
          
          <div className="button-group">
            <button className="btn-primary" onClick={handleCtaClick}>Get Started Now</button>
            <button className="btn-secondary" onClick={handleCtaClick}>Learn More</button>
          </div>
          
          <div className="support-text">
            Questions? Email <strong>support@contentcreator.com</strong>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2026 PromptEdit. All rights reserved.<br />
          <a href="https://promptedit.com">Visit PromptEdit.com</a></p>
        </div>
      </footer>
    </div>
  );
};

export default PromptEditSalesPage;
