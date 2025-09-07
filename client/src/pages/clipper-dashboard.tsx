import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import DashboardNav from "@/components/navigation/dashboard-nav";
import Sidebar from "@/components/navigation/sidebar";
import MetricsCard from "@/components/dashboard/metrics-card";
import Leaderboard from "@/components/dashboard/leaderboard";
import { User, CheckCircle, Eye, Star, Trophy, Upload, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function ClipperDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();

  const { data: clips } = useQuery({
    queryKey: ['/api/clips'],
    enabled: isAuthenticated && user?.role === 'clipper',
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'clipper')) {
      toast({
        title: "Unauthorized",
        description: "You are logged out. Logging in again...",
        variant: "destructive",
      });
      setTimeout(() => {
        window.location.href = "/api/login";
      }, 500);
      return;
    }
  }, [isAuthenticated, isLoading, user, toast]);

  if (isLoading || !isAuthenticated || user?.role !== 'clipper') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold gradient-text mb-4">Loading Dashboard...</h1>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { icon: User, label: 'My Profile', href: '/dashboard/clipper', active: true },
    { icon: Upload, label: 'Assignments', href: '#' },
    { icon: Eye, label: 'Performance', href: '#' },
    { icon: Trophy, label: 'Leaderboard', href: '#' },
    { icon: DollarSign, label: 'Earnings', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <Sidebar items={sidebarItems} />
      
      <main className="main-content">
        <div className="p-8 space-y-8">
          {/* Clipper Profile Header */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
                {user?.profileImageUrl ? (
                  <img
                    src={user.profileImageUrl}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold">
                    {user?.firstName?.charAt(0) || 'U'}{user?.lastName?.charAt(0) || ''}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold" data-testid="text-user-name">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-muted-foreground">Elite Clipper - Level 7</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <Trophy className="text-primary" size={16} />
                    <span className="text-sm">Top 10 This Month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="text-accent" size={16} />
                    <span className="text-sm">2.8M Total Views</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold gradient-text">$4,287</div>
                <div className="text-sm text-muted-foreground">This Month's Earnings</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid lg:grid-cols-4 gap-6">
            <MetricsCard
              title="Active Tasks"
              value="12"
              icon={Upload}
              color="primary"
              data-testid="metric-active-tasks"
            />
            <MetricsCard
              title="Completed This Week"
              value="28"
              icon={CheckCircle}
              color="chart-3"
              data-testid="metric-completed"
            />
            <MetricsCard
              title="Avg. Views Per Clip"
              value="47K"
              icon={Eye}
              color="accent"
              data-testid="metric-avg-views"
            />
            <MetricsCard
              title="Quality Score"
              value="9.2/10"
              icon={Star}
              color="chart-4"
              data-testid="metric-quality"
            />
          </div>

          {/* Current Assignments */}
          <div className="bg-card border border-border rounded-xl p-6" data-testid="section-assignments">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Current Assignments</h3>
              <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90" data-testid="button-submit-clip">
                Submit New Clip
              </Button>
            </div>

            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4" data-testid="assignment-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Gaming Highlights - StreamerKing Campaign</h4>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">High Priority</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Create 5 short clips from the latest gaming stream focusing on epic moments and reactions.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Due: Tomorrow, 6:00 PM</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-chart-3">3/5 clips completed</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" data-testid="button-continue-1">
                      Continue
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4" data-testid="assignment-2">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Reaction Compilation - ViralContent Co.</h4>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Medium Priority</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Compile funny reaction moments from recent streams into a cohesive highlight reel.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Due: Friday, 2:00 PM</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-muted-foreground">Not started</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" data-testid="button-start-2">
                      Start
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leaderboard and Progress */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Leaderboard />
            
            <div className="bg-card border border-border rounded-xl p-6" data-testid="section-achievements">
              <h3 className="text-lg font-semibold mb-6">Achievement Progress</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Million View Club</span>
                    <span className="text-sm text-muted-foreground">2.8M / 3M</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="w-[93%] h-full bg-primary rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Speed Demon</span>
                    <span className="text-sm text-muted-foreground">45 / 50 clips</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="w-[90%] h-full bg-accent rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Quality Master</span>
                    <span className="text-sm text-chart-3 font-medium">Completed!</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full">
                    <div className="w-full h-full bg-chart-3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
