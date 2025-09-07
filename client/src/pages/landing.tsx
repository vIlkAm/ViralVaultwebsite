import { useState } from "react";
import { Video, ShieldCheck, TrendingUp, Trophy, Eye, Heart, Users, Clock } from "lucide-react";
import Navbar from "@/components/navigation/navbar";
import JoinCommunityModal from "@/components/modals/join-community-modal";
import { Button } from "@/components/ui/button";

export default function Landing() {
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onJoinCommunity={() => setShowJoinModal(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight" data-testid="hero-title">
                  Quality over <span className="gradient-text">Quantity</span>.
                  <br />Elite Content. <span className="gradient-text">Proven Results</span>.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-description">
                  We handpick and train elite content creators to deliver guaranteed ROI. 
                  No more armies of low-quality clippers—just premium, data-driven results.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => setShowJoinModal(true)}
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 hover-lift"
                  data-testid="button-apply-now"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline"
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary hover-lift"
                  data-testid="button-book-consultation"
                >
                  Book Consultation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2" data-testid="trust-vetted">
                  <ShieldCheck className="text-accent" size={16} />
                  <span>Vetted Creators</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-transparency">
                  <TrendingUp className="text-accent" size={16} />
                  <span>Data Transparency</span>
                </div>
                <div className="flex items-center space-x-2" data-testid="trust-roi">
                  <Trophy className="text-accent" size={16} />
                  <span>Guaranteed ROI</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional team collaboration workspace"
                className="rounded-2xl shadow-2xl hover-lift"
                data-testid="img-hero"
              />
              
              {/* Floating metrics cards */}
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 hover-lift" data-testid="metric-views">
                <div className="text-2xl font-bold gradient-text">1B+</div>
                <div className="text-sm text-muted-foreground">Views Generated</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 hover-lift" data-testid="metric-growth">
                <div className="text-2xl font-bold gradient-text">300%</div>
                <div className="text-sm text-muted-foreground">Avg Growth Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4" data-testid="text-metrics-title">Metrics in Action</h2>
            <p className="text-xl text-muted-foreground">Our results speak for themselves</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 border border-border hover-lift text-center" data-testid="card-metric-views">
              <div className="text-3xl font-bold gradient-text mb-2 animate-counter">1.2B+</div>
              <div className="text-muted-foreground">Total Views Generated</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover-lift text-center" data-testid="card-metric-engagement">
              <div className="text-3xl font-bold gradient-text mb-2 animate-counter">47%</div>
              <div className="text-muted-foreground">Higher Engagement Rate</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover-lift text-center" data-testid="card-metric-creators">
              <div className="text-3xl font-bold gradient-text mb-2 animate-counter">250+</div>
              <div className="text-muted-foreground">Elite Creators</div>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border hover-lift text-center" data-testid="card-metric-satisfaction">
              <div className="text-3xl font-bold gradient-text mb-2 animate-counter">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Data analytics dashboard with performance metrics"
                className="rounded-2xl shadow-2xl hover-lift"
                data-testid="img-analytics"
              />
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold" data-testid="text-superior-title">Why We're Superior</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data-Driven Results</h3>
                    <p className="text-muted-foreground">Full transparency with real-time analytics and guaranteed ROI tracking. See exactly how your content performs.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Elite Creator Network</h3>
                    <p className="text-muted-foreground">Handpicked and trained professionals, not random creators. Quality over quantity, every single time.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-chart-3/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Trophy className="text-chart-3" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Operations</h3>
                    <p className="text-muted-foreground">Structured workflows, quality control, and dedicated account management. We treat your content like a business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">Trusted by Leading Content Creators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">StreamKing</div>
              <div className="text-2xl font-bold text-muted-foreground">GameFlow</div>
              <div className="text-2xl font-bold text-muted-foreground">ContentCorp</div>
              <div className="text-2xl font-bold text-muted-foreground">ViralNet</div>
              <div className="text-2xl font-bold text-muted-foreground">ClipMaster</div>
              <div className="text-2xl font-bold text-muted-foreground">ProStream</div>
            </div>
          </div>
        </div>
      </section>

      {/* Boot Camp Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 border border-primary/30">
            <h2 className="text-4xl font-display font-bold mb-6" data-testid="text-bootcamp-title">Join Our Elite Boot Camp</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Free training program to become a certified Viral Vault creator. 
              Learn professional clipping techniques and join our exclusive network.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Professional Training</h3>
                <p className="text-sm text-muted-foreground">Learn industry-standard techniques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-accent" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Quality Certification</h3>
                <p className="text-sm text-muted-foreground">Get certified to join our network</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-chart-3" size={32} />
                </div>
                <h3 className="font-semibold mb-2">Earn Premium Rates</h3>
                <p className="text-sm text-muted-foreground">Higher pay for elite creators</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowJoinModal(true)}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 hover-lift"
              data-testid="button-join-bootcamp"
            >
              Join the Boot Camp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Video className="text-background font-bold" size={16} />
                </div>
                <span className="text-xl font-display font-bold gradient-text">Viral Vault</span>
              </div>
              <p className="text-muted-foreground">Premium content clipping service for elite creators and brands.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Content Clipping</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Analytics Dashboard</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Team Management</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Boot Camp</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@viralvault.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Viral Vault. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <JoinCommunityModal 
        open={showJoinModal} 
        onOpenChange={setShowJoinModal} 
      />
    </div>
  );
}
