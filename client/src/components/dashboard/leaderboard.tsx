import { Trophy, Medal, Crown } from "lucide-react";

export default function Leaderboard() {
  const leaderboardData = [
    {
      rank: 1,
      name: "EliteClipMaster",
      views: "3.2M",
      icon: Crown,
      color: "text-primary",
      bgColor: "bg-primary/10 border-primary/20",
      isCurrentUser: false
    },
    {
      rank: 2,
      name: "ProClipWizard",
      views: "2.9M",
      icon: Medal,
      color: "text-accent",
      bgColor: "bg-accent/10",
      isCurrentUser: false
    },
    {
      rank: 3,
      name: "John Doe (You)",
      views: "2.8M",
      icon: Medal,
      color: "text-chart-3",
      bgColor: "bg-chart-3/10 border-2 border-chart-3/30",
      isCurrentUser: true
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6" data-testid="section-leaderboard">
      <h3 className="text-lg font-semibold mb-6">Monthly Leaderboard</h3>
      <div className="space-y-4">
        {leaderboardData.map((entry) => {
          const Icon = entry.icon;
          return (
            <div 
              key={entry.rank} 
              className={`flex items-center justify-between p-3 rounded-lg ${entry.bgColor}`}
              data-testid={`leaderboard-position-${entry.rank}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-6 h-6 ${entry.color} rounded-full flex items-center justify-center text-xs font-bold ${
                  entry.rank <= 2 ? 'bg-background' : 'bg-current text-background'
                }`}>
                  {entry.rank}
                </div>
                <div>
                  <div className="font-medium">{entry.name}</div>
                  <div className="text-xs text-muted-foreground">{entry.views} views</div>
                </div>
              </div>
              <Icon className={entry.color} size={20} />
            </div>
          );
        })}
        
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            You're just <span className="text-accent font-medium">100K views</span> away from 2nd place!
          </p>
        </div>
      </div>
    </div>
  );
}
