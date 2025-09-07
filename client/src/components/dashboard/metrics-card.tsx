import { LucideIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface MetricsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  color: "primary" | "accent" | "chart-3" | "chart-2" | "chart-4";
  loading?: boolean;
  variant?: "default" | "warning";
  'data-testid'?: string;
}

export default function MetricsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color, 
  loading, 
  variant = "default",
  'data-testid': testId
}: MetricsCardProps) {
  const getColorClasses = () => {
    switch (color) {
      case "primary":
        return "bg-primary/20 text-primary";
      case "accent":
        return "bg-accent/20 text-accent";
      case "chart-3":
        return "bg-chart-3/20 text-chart-3";
      case "chart-2":
        return "bg-chart-2/20 text-chart-2";
      case "chart-4":
        return "bg-chart-4/20 text-chart-4";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  const getChangeColor = () => {
    if (variant === "warning") {
      return "text-destructive";
    }
    return "text-chart-3";
  };

  if (loading) {
    return (
      <div className="metric-card" data-testid={`${testId}-loading`}>
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-8 w-16 mb-1" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="w-12 h-12 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="metric-card" data-testid={testId}>
      <div>
        <p className="text-muted-foreground text-sm">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <p className={`text-xs font-medium ${getChangeColor()}`}>{change}</p>
        )}
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses()}`}>
        <Icon size={24} />
      </div>
    </div>
  );
}
