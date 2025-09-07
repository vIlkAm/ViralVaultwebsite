import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import DashboardNav from "@/components/navigation/dashboard-nav";
import Sidebar from "@/components/navigation/sidebar";
import MetricsCard from "@/components/dashboard/metrics-card";
import { Users, UserPlus, Clock, CheckCircle, TrendingUp, Settings, ClipboardCheck, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function ManagerDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();

  const { data: clips } = useQuery({
    queryKey: ['/api/clips'],
    enabled: isAuthenticated && user?.role === 'manager',
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'manager')) {
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

  if (isLoading || !isAuthenticated || user?.role !== 'manager') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold gradient-text mb-4">Loading Dashboard...</h1>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { icon: TrendingUp, label: 'Overview', href: '/dashboard/manager', active: true },
    { icon: Settings, label: 'Team Management', href: '#' },
    { icon: ClipboardCheck, label: 'Quality Control', href: '#' },
    { icon: UserCheck, label: 'Client Relations', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <Sidebar items={sidebarItems} />
      
      <main className="main-content">
        <div className="p-8 space-y-8">
          {/* Manager Overview */}
          <div className="grid lg:grid-cols-3 gap-6">
            <MetricsCard
              title="Active Teams"
              value="8"
              change="3 new this month"
              icon={Users}
              color="primary"
              data-testid="metric-active-teams"
            />
            <MetricsCard
              title="Total Clippers"
              value="47"
              change="12 promoted this quarter"
              icon={UserPlus}
              color="accent"
              data-testid="metric-total-clippers"
            />
            <MetricsCard
              title="Pending Reviews"
              value="23"
              change="6 urgent"
              icon={Clock}
              color="chart-4"
              variant="warning"
              data-testid="metric-pending-reviews"
            />
          </div>

          {/* Team Management */}
          <div className="bg-card border border-border rounded-xl p-6" data-testid="section-team-management">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Team Management</h3>
              <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90" data-testid="button-create-team">
                Create New Team
              </Button>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="border border-border rounded-lg p-4" data-testid="team-alpha">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">StreamerKing Team Alpha</h4>
                  <span className="text-xs bg-chart-3/20 text-chart-3 px-2 py-1 rounded-full">Active</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Clippers</span>
                    <span>6 active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">This Month</span>
                    <span>127 clips delivered</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="text-chart-3">Above target</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="ghost" size="sm" className="flex-1 text-primary hover:text-primary/80" data-testid="button-manage-alpha">
                      Manage
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground" data-testid="button-analytics-alpha">
                      Analytics
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4" data-testid="team-gameflow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">GameFlow Production Unit</h4>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">High Priority</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Clippers</span>
                    <span>4 active</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">This Month</span>
                    <span>89 clips delivered</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Performance</span>
                    <span className="text-primary">Exceeding target</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button variant="ghost" size="sm" className="flex-1 text-primary hover:text-primary/80" data-testid="button-manage-gameflow">
                      Manage
                    </Button>
                    <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground" data-testid="button-analytics-gameflow">
                      Analytics
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Control Queue */}
          <div className="bg-card border border-border rounded-xl p-6" data-testid="section-quality-control">
            <h3 className="text-lg font-semibold mb-6">Quality Control Queue</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-destructive/30 rounded-lg bg-destructive/5" data-testid="clip-review-urgent">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-muted rounded flex items-center justify-center">
                    <CheckCircle className="text-muted-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Epic Moment Compilation #47</h4>
                    <p className="text-sm text-muted-foreground">Submitted by ClipperPro • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded-full">Urgent Review</span>
                  <Button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm hover:bg-primary/90" data-testid="button-review-urgent">
                    Review
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="clip-review-standard-1">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-muted rounded flex items-center justify-center">
                    <CheckCircle className="text-muted-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Reaction Highlights - Stream 156</h4>
                    <p className="text-sm text-muted-foreground">Submitted by EliteClipper • 4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Standard Review</span>
                  <Button variant="outline" className="border border-border px-4 py-2 rounded-lg text-sm hover:bg-secondary" data-testid="button-review-standard-1">
                    Review
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border border-border rounded-lg" data-testid="clip-review-standard-2">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-12 bg-muted rounded flex items-center justify-center">
                    <CheckCircle className="text-muted-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">Best Plays of the Week</h4>
                    <p className="text-sm text-muted-foreground">Submitted by TopTierClips • 6 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Standard Review</span>
                  <Button variant="outline" className="border border-border px-4 py-2 rounded-lg text-sm hover:bg-secondary" data-testid="button-review-standard-2">
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
