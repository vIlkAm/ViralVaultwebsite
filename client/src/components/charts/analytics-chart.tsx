import { TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

interface AnalyticsChartProps {
  title: string;
  data?: any;
  loading?: boolean;
}

export default function AnalyticsChart({ title, data, loading }: AnalyticsChartProps) {
  if (loading) {
    return (
      <div className="bg-card border border-border rounded-xl p-6" data-testid="chart-loading">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-8 w-24" />
        </div>
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6" data-testid="analytics-chart">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Select defaultValue="30days">
          <SelectTrigger className="w-32" data-testid="select-time-range">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="1year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center" data-testid="chart-placeholder">
        <div className="text-center text-muted-foreground">
          <TrendingUp size={48} className="mx-auto mb-4" />
          <p>Interactive Chart Visualization</p>
          <p className="text-sm">Real-time views analytics</p>
          {data && (
            <div className="mt-4 text-sm">
              <p>Total Views: {(data.totalViews / 1000000).toFixed(1)}M</p>
              <p>Engagement: {data.engagementRate}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
