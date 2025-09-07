import Navbar from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { Users, Target, TrendingUp, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6" data-testid="text-title">
              About <span className="gradient-text">Viral Vault</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're revolutionizing the content clipping industry by focusing on quality over quantity. 
              Our mission is to professionalize content creation and deliver guaranteed results for our clients.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6" data-testid="text-mission-title">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The content clipping industry is broken. Platforms like Whop flood creators with armies of 
                unvetted, low-quality clippers who deliver inconsistent results and waste valuable resources.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe there's a better way. Instead of quantity, we focus on quality. Instead of hoping 
                for results, we guarantee them with data-driven transparency.
              </p>
              <p className="text-lg text-muted-foreground">
                Our handpicked team of elite creators undergoes rigorous training and continuous performance 
                monitoring to ensure every client gets measurable, profitable results.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration and strategic planning"
                className="rounded-2xl shadow-2xl hover-lift"
                data-testid="img-mission"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12" data-testid="text-values-title">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center" data-testid="card-value-quality">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                <p className="text-muted-foreground">
                  Every creator is handpicked, trained, and continuously monitored to maintain the highest standards.
                </p>
              </div>

              <div className="text-center" data-testid="card-value-transparency">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Transparency</h3>
                <p className="text-muted-foreground">
                  Full visibility into performance metrics, ROI tracking, and detailed analytics for every campaign.
                </p>
              </div>

              <div className="text-center" data-testid="card-value-results">
                <div className="w-16 h-16 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-chart-3" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Guaranteed Results</h3>
                <p className="text-muted-foreground">
                  We don't just promise success—we guarantee measurable improvements in your content performance.
                </p>
              </div>

              <div className="text-center" data-testid="card-value-partnership">
                <div className="w-16 h-16 bg-chart-4/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-chart-4" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">True Partnership</h3>
                <p className="text-muted-foreground">
                  We're invested in your long-term success, not just short-term gains. Your growth is our growth.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-display font-bold text-center mb-12" data-testid="text-team-title">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="card-team-member-1">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary">AK</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Alex Kim</h3>
                <p className="text-accent font-medium mb-3">CEO & Founder</p>
                <p className="text-muted-foreground text-sm">
                  Former content creator with 10M+ followers. Built and scaled multiple viral content brands 
                  before founding Viral Vault to solve industry inefficiencies.
                </p>
              </div>

              <div className="text-center" data-testid="card-team-member-2">
                <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-accent">SJ</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-accent font-medium mb-3">Head of Operations</p>
                <p className="text-muted-foreground text-sm">
                  Ex-YouTube content strategist who managed campaigns generating over 1B views. 
                  Specializes in data-driven content optimization and team management.
                </p>
              </div>

              <div className="text-center" data-testid="card-team-member-3">
                <div className="w-32 h-32 bg-chart-3/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-chart-3">MC</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
                <p className="text-accent font-medium mb-3">Head of Technology</p>
                <p className="text-muted-foreground text-sm">
                  Former Google engineer with expertise in analytics platforms and machine learning. 
                  Built our proprietary performance tracking and optimization systems.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20 mb-20">
            <h2 className="text-3xl font-display font-bold text-center mb-8" data-testid="text-stats-title">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center" data-testid="stat-clients">
                <div className="text-4xl font-bold gradient-text mb-2">500+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="text-center" data-testid="stat-views">
                <div className="text-4xl font-bold gradient-text mb-2">5B+</div>
                <div className="text-muted-foreground">Total Views Generated</div>
              </div>
              <div className="text-center" data-testid="stat-creators">
                <div className="text-4xl font-bold gradient-text mb-2">250+</div>
                <div className="text-muted-foreground">Elite Creators</div>
              </div>
              <div className="text-center" data-testid="stat-roi">
                <div className="text-4xl font-bold gradient-text mb-2">15x</div>
                <div className="text-muted-foreground">Average ROI</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-4" data-testid="text-cta-title">Ready to Join the Elite?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a creator looking to join our network or a brand seeking guaranteed results, 
              we're here to elevate your content game.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 hover-lift"
                data-testid="button-apply-creator"
              >
                Apply as Creator
              </Button>
              <Button 
                variant="outline"
                className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary hover-lift"
                data-testid="button-hire-team"
              >
                Hire Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
