import Navbar from "@/components/navigation/navbar";
import { Button } from "@/components/ui/button";
import { TrendingUp, Eye, Users, Calendar } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6" data-testid="text-title">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real clients. See how our elite content creators have transformed businesses 
              and driven unprecedented growth across platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift" data-testid="card-case-study-1">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">StreamerKing Gaming</h3>
                  <span className="text-sm bg-chart-3/20 text-chart-3 px-3 py-1 rounded-full">Gaming</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Mid-tier gaming streamer struggling with low engagement from their existing clipping army of 50+ creators.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">The Problem</h4>
                  <p className="text-muted-foreground text-sm">
                    Despite having 50+ clippers, only 12% of clips gained traction. Quality was inconsistent, 
                    timing was poor, and there was no strategic approach to content creation.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Replaced the entire clipping army with 5 vetted, trained elite creators. Implemented 
                    strategic content planning and real-time performance optimization.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-chart-3 mb-4">The Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">3x</div>
                      <div className="text-xs text-muted-foreground">Views Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">200%</div>
                      <div className="text-xs text-muted-foreground">Follower Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">85%</div>
                      <div className="text-xs text-muted-foreground">Cost Reduction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift" data-testid="card-case-study-2">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">ContentCorp Media</h3>
                  <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">Entertainment</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Large media company wanting to break into short-form content but lacking the expertise and infrastructure.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">The Problem</h4>
                  <p className="text-muted-foreground text-sm">
                    Traditional media company with great long-form content but zero short-form strategy. 
                    Previous attempts at viral content failed completely.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Built a dedicated team of 8 elite clippers specializing in different content types. 
                    Developed a multi-platform strategy with data-driven optimization.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-chart-3 mb-4">The Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">15M</div>
                      <div className="text-xs text-muted-foreground">Monthly Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">500K</div>
                      <div className="text-xs text-muted-foreground">New Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">12x</div>
                      <div className="text-xs text-muted-foreground">ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift" data-testid="card-case-study-3">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">ViralNet Influencer</h3>
                  <span className="text-sm bg-chart-4/20 text-chart-4 px-3 py-1 rounded-full">Lifestyle</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Rising lifestyle influencer needing consistent, high-quality content to maintain growth momentum.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">The Problem</h4>
                  <p className="text-muted-foreground text-sm">
                    Inconsistent posting schedule, burnout from managing content creation, and declining 
                    engagement rates despite growing follower count.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Assigned 3 specialized clippers for different content types (daily life, travel, fashion). 
                    Implemented content calendar and A/B testing for optimal posting.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-chart-3 mb-4">The Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">400%</div>
                      <div className="text-xs text-muted-foreground">Engagement Up</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">2M</div>
                      <div className="text-xs text-muted-foreground">New Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">90%</div>
                      <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-card border border-border rounded-2xl p-8 hover-lift" data-testid="card-case-study-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">GameFlow Esports</h3>
                  <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">Esports</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional esports organization looking to maximize their tournament highlights and player content.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-destructive mb-2">The Problem</h4>
                  <p className="text-muted-foreground text-sm">
                    Amazing tournament moments going unnoticed. Internal team too busy with competitions 
                    to focus on content creation and social media presence.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">Our Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    Created a rapid-response clipping team that works during live tournaments. 
                    Real-time highlight creation and multi-platform distribution within minutes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-chart-3 mb-4">The Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">8M</div>
                      <div className="text-xs text-muted-foreground">Tournament Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">150%</div>
                      <div className="text-xs text-muted-foreground">Sponsor Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-chart-3">300K</div>
                      <div className="text-xs text-muted-foreground">New Fans</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 border border-primary/30">
              <h2 className="text-3xl font-display font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their content strategy with our elite creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 hover-lift"
                  data-testid="button-get-started"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline"
                  className="border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary hover-lift"
                  data-testid="button-view-pricing"
                >
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
