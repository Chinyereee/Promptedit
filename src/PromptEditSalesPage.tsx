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
        'Cancel anytime (no penalty)'
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
        '10% off any additional credits',
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
      quote: 'My videos wouldn\'t look half as good as they do if it wasn\'t for the Content Creator Templates Library. I lean into them heavily for every edit I do.',
      author: 'Matt Lilley',
      role: 'ContentCreator.com Student'
    },
    {
      id: '2',
      quote: 'Thank you so much for the Content Creator Templates Library! My daughter and I got more editing work done today in 3 hours than we normally do in 3 days!',
      author: 'Hilda Schlueter',
      role: 'Online Course Creator'
    },
    {
      id: '3',
      quote: 'The Content Creator Templates Library is a fantastic resource! I don\'t need any other digital asset subscriptions.',
      author: 'Brady Hales',
      role: 'ContentCreator.com Student'
    }
  ];

  const tools: Tool[] = [
    {
      id: '1',
      icon: '🎨',
      name: 'AI Image Creation',
      description: 'Generate stunning images with Ideogram, DALL-E, and more. No waiting for monthly resets. Just create.'
    },
    {
      id: '2',
      icon: '🎬',
      name: 'AI Video',
      description: 'Create videos, clones, and effects with HeyGen, Kling, and Veo. Professional quality. One login.'
    },
    {
      id: '3',
      icon: '🎙️',
      name: 'AI Audio',
      description: 'Voice cloning, AI voiceovers, music generation, sound effects. Everything a creator needs for audio.'
    },
    {
      id: '4',
      icon: '✨',
      name: 'AI Editing Plugins',
      description: 'Access AI tools inside your favorite editing software. No switching between apps. Just drag, drop, create.'
    }
  ];

  const steps: Step[] = [
    { id: '1', number: 1, title: 'Buy Credits', description: 'Purchase on your own schedule. No monthly bills, no auto-renewals.' },
    { id: '2', number: 2, title: 'Use Any Tool', description: 'Access 30+ industry-leading AI tools in one login.' },
    { id: '3', number: 3, title: 'Pay Only for What You Use', description: 'Your credits work across any tool. No waste, no expiration.' }
  ];

  const stats: Stat[] = [
    { id: '1', number: '30+', label: 'AI Tools Available' },
    { id: '2', number: '100K+', label: 'Templates Included' },
    { id: '3', number: '99%', label: 'Satisfaction Guarantee' }
  ];

  const handleCtaClick = (ctaName: string, plan?: string) => {
    console.log(`CTA clicked: ${ctaName}`, plan);
    window.location.href = 'https://promptedit.com';
  };

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, .sales-page {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
      line-height: 1.6;
      color: #ffffff;
      background: #000000;
    }

    .sales-page {
      min-height: 100vh;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
    }

    header {
      padding: 20px 0;
      border-bottom: 1px solid #6b9b9e;
      margin-bottom: 40px;
    }

    .logo {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
    }

    .hero {
      text-align: center;
      padding: 40px 0;
      margin-bottom: 60px;
    }

    .hero h1 {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .hero .subheading {
      font-size: 18px;
      color: #d0d0d0;
      margin-bottom: 32px;
      line-height: 1.5;
    }

    .cta-button {
      display: inline-block;
      background: transparent;
      color: #6b9b9e;
      padding: 14px 32px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      border: 1px solid #6b9b9e;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .cta-button:hover {
      background: #6b9b9e;
      color: #000000;
    }

    .cta-button.primary {
      background: #6b9b9e;
      color: #000000;
    }

    .section {
      margin-bottom: 60px;
    }

    .section h2 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #ffffff;
    }

    .section p {
      font-size: 16px;
      color: #d0d0d0;
      margin-bottom: 16px;
      line-height: 1.7;
    }

    .section ul {
      list-style: none;
      margin-bottom: 24px;
    }

    .section ul li {
      font-size: 16px;
      color: #d0d0d0;
      padding: 8px 0;
      line-height: 1.6;
    }

    .section ul li:before {
      content: "✓ ";
      color: #6b9b9e;
      font-weight: 600;
      margin-right: 8px;
    }

    .testimonial-box {
      background: transparent;
      padding: 24px;
      border-radius: 8px;
      border-left: 4px solid #6b9b9e;
      margin: 24px 0;
    }

    .testimonial-box p {
      font-style: italic;
      margin-bottom: 12px;
      font-size: 15px;
      color: #d0d0d0;
    }

    .testimonial-author {
      font-weight: 600;
      font-size: 14px;
      color: #b0b0b0;
      font-style: normal;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin: 32px 0;
    }

    .step {
      background: transparent;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid #6b9b9e;
      transition: all 0.3s ease;
    }

    .step:hover {
      border-color: #ffffff;
      transform: translateY(-3px);
    }

    .step-number {
      font-size: 28px;
      font-weight: 600;
      color: #6b9b9e;
      margin-bottom: 8px;
    }

    .step-title {
      font-weight: 600;
      margin-bottom: 8px;
      font-size: 15px;
      color: #ffffff;
    }

    .step-description {
      font-size: 14px;
      color: #c0c0c0;
      line-height: 1.5;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin: 32px 0;
    }

    .pricing-card {
      border: 1px solid #6b9b9e;
      border-radius: 8px;
      padding: 32px 24px;
      position: relative;
      background: transparent;
      transition: all 0.3s ease;
    }

    .pricing-card:hover {
      border-color: #6b9b9e;
      transform: translateY(-5px);
    }

    .pricing-card.featured {
      border: 2px solid #6b9b9e;
    }

    .pricing-card.featured::before {
      content: "Most popular";
      position: absolute;
      top: -12px;
      left: 20px;
      background: #6b9b9e;
      color: #000000;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 600;
    }

    .pricing-card h3 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      margin-top: 8px;
      color: #ffffff;
    }

    .price {
      font-size: 24px;
      font-weight: 700;
      color: #6b9b9e;
      margin: 16px 0;
    }

    .price-period {
      font-size: 14px;
      color: #a0a0a0;
    }

    .pricing-card p {
      font-size: 14px;
      color: #c0c0c0;
      margin-bottom: 16px;
      line-height: 1.5;
    }

    .pricing-card ul {
      list-style: none;
      margin: 20px 0;
    }

    .pricing-card ul li {
      font-size: 14px;
      padding: 8px 0;
      color: #d0d0d0;
    }

    .pricing-card ul li:before {
      content: "✓ ";
      color: #6b9b9e;
      font-weight: 600;
      margin-right: 8px;
    }

    .pricing-note {
      font-size: 13px;
      color: #a0a0a0;
      margin-top: 12px;
      font-weight: 500;
    }

    .guarantee {
      background: transparent;
      border: 1px solid #6b9b9e;
      border-radius: 8px;
      padding: 24px;
      margin: 32px 0;
      text-align: center;
    }

    .guarantee h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #ffffff;
    }

    .guarantee p {
      font-size: 14px;
      color: #d0d0d0;
      line-height: 1.6;
      margin: 0;
    }

    .tools-list {
      display: grid;
      gap: 20px;
      margin: 32px 0;
    }

    .tool-item {
      padding: 20px 0;
      border-bottom: 1px solid rgba(107, 155, 158, 0.2);
    }

    .tool-item:last-child {
      border-bottom: none;
    }

    .tool-item h3 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }

    .tool-icon {
      margin-right: 12px;
      font-size: 20px;
    }

    .tool-item p {
      font-size: 15px;
      color: #c0c0c0;
      margin: 0;
      line-height: 1.5;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin: 32px 0;
    }

    .testimonial {
      background: transparent;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #6b9b9e;
      transition: all 0.3s ease;
    }

    .testimonial:hover {
      transform: translateY(-3px);
      border-color: #ffffff;
    }

    .testimonial p {
      font-size: 14px;
      font-style: italic;
      color: #d0d0d0;
      margin-bottom: 12px;
      line-height: 1.6;
    }

    .stats {
      background: transparent;
      border: 1px solid #6b9b9e;
      border-radius: 8px;
      padding: 24px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 16px;
      text-align: center;
      margin: 24px 0;
    }

    .stat {
      padding: 12px;
    }

    .stat-number {
      font-size: 24px;
      font-weight: 700;
      color: #6b9b9e;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 13px;
      color: #a0a0a0;
      font-weight: 500;
    }

    .final-cta {
      text-align: center;
      padding: 40px 0;
      margin: 60px 0 40px;
      border-top: 1px solid #6b9b9e;
      border-bottom: 1px solid #6b9b9e;
    }

    .final-cta h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 16px;
      color: #ffffff;
    }

    .final-cta p {
      font-size: 16px;
      color: #d0d0d0;
      margin-bottom: 24px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .button-group {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .support-text {
      font-size: 14px;
      color: #a0a0a0;
      margin-top: 20px;
    }

    footer {
      text-align: center;
      padding: 40px 0;
      border-top: 1px solid #6b9b9e;
      color: #808080;
      font-size: 13px;
    }

    footer a {
      color: #6b9b9e;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    footer a:hover {
      color: #ffffff;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 24px;
      }

      .hero .subheading {
        font-size: 16px;
      }

      .section h2 {
        font-size: 20px;
      }

      .cta-button {
        display: block;
        width: 100%;
        margin-bottom: 12px;
      }

      .button-group {
        flex-direction: column;
      }

      .button-group button {
        width: 100%;
      }

      .pricing-grid,
      .steps,
      .testimonials-grid {
        grid-template-columns: 1fr;
      }

      .stats {
        grid-template-columns: repeat(2, 1fr);
      }

      .final-cta h2 {
        font-size: 22px;
      }

      .container {
        padding: 0 16px;
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
        <section className="hero">
          <h1>Stop Paying $500/month for AI Tools You Barely Use</h1>
          <p className="subheading">Create stunning AI content with every tool you need in one place, one login, one affordable price.</p>
          <button className="cta-button" onClick={() => handleCtaClick('hero')}>
            Start Creating Today
          </button>
        </section>

        <section className="section">
          <h2>The cost of creating in 2026</h2>
          <p>You don't need ten subscriptions. You need access to great AI tools that work when you need them. But that's not how the AI industry has built itself.</p>
          
          <p><strong>The result?</strong></p>
          <ul>
            <li>$500+ monthly bills from tools collecting dust</li>
            <li>10+ separate logins and interfaces to learn</li>
            <li>Credits that expire or disappear when you cancel</li>
            <li>Wasted money on features you'll never use</li>
          </ul>

          <div className="testimonial-box">
            <p>I had 7 AI subscriptions active. I was probably using 3 of them regularly. I didn't even know the other 4 were charging me until my credit card statement showed up.</p>
            <div className="testimonial-author">Most creators, probably</div>
          </div>
        </section>

        <section className="section">
          <h2>Meet PromptEdit: The AI Marketplace Built for Creators</h2>
          <p>PromptEdit isn't another subscription trap. Think of it like a grocery store for AI. You don't pay yearly membership to shop at your grocery store. You buy what you need and pay for it. That's PromptEdit.</p>

          <h2 style={{fontSize: '18px', fontWeight: '600', margin: '32px 0 16px'}}>Here's how it works:</h2>
          
          <div className="steps">
            {steps.map((step) => (
              <div key={step.id} className="step">
                <div className="step-number">{step.number}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            ))}
          </div>

          <p><strong>Why it saves money:</strong> A creator using AI tools 2-3 times a week typically pays $300-500 across different subscriptions. With PromptEdit, that same creator spends $80-150 monthly with way more flexibility.</p>
        </section>

        <section className="section">
          <h2>Simple pricing. Your choice.</h2>
          
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
                
                <div className="pricing-note">
                  {plan.id === 'payAsYouGo' ? '$15-50 per project' : '$200+ vs individual subscriptions'}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="guarantee">
          <h3>Bonus: 100,000+ Professional Editing Templates (Monthly Plan Only)</h3>
          <p style={{ marginBottom: '16px' }}>Included with your monthly subscription:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '12px', fontSize: '13px', color: '#d0d0d0' }}>
            <div>✓ 4,000+ LUTs</div>
            <div>✓ 60,000+ sound effects</div>
            <div>✓ 3,000+ text animations</div>
            <div>✓ 2,000+ overlays</div>
            <div>✓ 5,000+ backgrounds</div>
          </div>
          <p style={{ marginTop: '16px' }}>These are professional-grade templates. Now in your pocket.</p>
        </div>

        <section className="section">
          <h2>All the tools you need. None of the subscriptions.</h2>
          
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
          <h2>Trusted by thousands of creators</h2>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p>{testimonial.quote}</p>
                <div className="testimonial-author">
                  {testimonial.author}<br />
                  {testimonial.role}
                </div>
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
          <h3>100% Money Back Satisfaction Guarantee</h3>
          <p>Cancel anytime. 30-day refund if within first month. No questions asked.</p>
        </div>

        <section className="final-cta">
          <h2>Ready to stop the subscription bleed?</h2>
          <p>Join thousands of creators who've already made the switch.</p>
          
          <div className="button-group">
            <button className="cta-button primary" onClick={() => handleCtaClick('final-primary', 'monthly')}>
              Start Creating Today
            </button>
            <button className="cta-button" onClick={() => handleCtaClick('final-secondary', 'payAsYouGo')}>
              No Credit Card Required
            </button>
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
