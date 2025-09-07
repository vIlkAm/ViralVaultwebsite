import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import DashboardNav from "@/components/navigation/dashboard-nav";
import Sidebar from "@/components/navigation/sidebar";
import MetricsCard from "@/components/dashboard/metrics-card";
import AnalyticsChart from "@/components/charts/analytics-chart";
import RecentClips from "@/components/dashboard/recent-clips";
import TeamPerformance from "@/components/dashboard/team-performance";
import { Eye, Heart, UserPlus, Video, TrendingUp } from "lucide-react";
import { isUnauthorizedError } from "@/lib/authUtils";

export default function ClientDashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { toast } = useToast();

  const { data: analytics, isLoading: analyticsLoading } = useQuery<{
    totalViews: number;
    engagementRate: number;
    newFollowers: number;
    activeClips: number;
    platformBreakdown: {
      [key: string]: {
        views: number;
        percentage: number;
      }
    }
  }>({
    queryKey: ['/api/analytics/client-dashboard'],
    enabled: isAuthenticated && user?.role === 'client',
    retry: false,
  });

  useEffect(() => {
    if (!isLoading && (!isAuthenticated || user?.role !== 'client')) {
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

  if (isLoading || !isAuthenticated || user?.role !== 'client') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold gradient-text mb-4">Loading Dashboard...</h1>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { icon: TrendingUp, label: 'Dashboard', href: '/dashboard/client', active: true },
    { icon: Eye, label: 'Teams & Campaigns', href: '#' },
    { icon: TrendingUp, label: 'Advanced Analytics', href: '#' },
    { icon: Heart, label: 'Communication', href: '#' },
    { icon: Video, label: 'Recent Clips', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />
      <Sidebar items={sidebarItems} />
      
      <main className="main-content">
        <div className="p-8 space-y-8">
          {/* Overview Stats */}
          <div className="grid lg:grid-cols-4 gap-6">
            <MetricsCard
              title="Total Views"
              value={analytics ? `${(analytics.totalViews / 1000000).toFixed(1)}M` : "0"}
              change="+12.5% from last month"
              icon={Eye}
              color="primary"
              loading={analyticsLoading}
              data-testid="metric-total-views"
            />
            <MetricsCard
              title="Engagement Rate"
              value={analytics ? `${analytics.engagementRate}%` : "0%"}
              change="+2.1% from last month"
              icon={Heart}
              color="accent"
              loading={analyticsLoading}
              data-testid="metric-engagement"
            />
            <MetricsCard
              title="New Followers"
              value={analytics ? analytics.newFollowers.toLocaleString() : "0"}
              change="+8.3% from last month"
              icon={UserPlus}
              color="chart-3"
              loading={analyticsLoading}
              data-testid="metric-followers"
            />
            <MetricsCard
              title="Active Clips"
              value={analytics ? analytics.activeClips.toString() : "0"}
              change="+24 this week"
              icon={Video}
              color="chart-2"
              loading={analyticsLoading}
              data-testid="metric-clips"
            />
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-6">
            <AnalyticsChart 
              title="Views Over Time"
              data={analytics}
              loading={analyticsLoading}
            />
            
            {/* Platform Distribution */}
            <div className="bg-card border border-border rounded-xl p-6" data-testid="chart-platform-distribution">
              <h3 className="text-lg font-semibold mb-6">Platform Performance</h3>
              {analytics?.platformBreakdown ? (
                <div className="space-y-4">
                  {Object.entries(analytics.platformBreakdown).map(([platform, data]: [string, any]) => (
                    <div key={platform}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 ${
                            platform === 'youtube' ? 'bg-primary' :
                            platform === 'tiktok' ? 'bg-accent' : 'bg-chart-3'
                          } rounded-full`}></div>
                          <span className="capitalize">{platform}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{(data.views / 1000000).toFixed(1)}M views</div>
                          <div className="text-xs text-muted-foreground">{data.percentage}%</div>
                        </div>
                      </div>
                      <div className="w-full bg-muted h-2 rounded-full mt-2">
                        <div 
                          className={`h-full ${
                            platform === 'youtube' ? 'bg-primary' :
                            platform === 'tiktok' ? 'bg-accent' : 'bg-chart-3'
                          } rounded-full`}
                          style={{ width: `${data.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <TrendingUp size={48} className="mx-auto mb-4" />
                    <p>Loading platform analytics...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <RecentClips />
          <TeamPerformance />
        </div>
      </main>
    </div>
  );
}
