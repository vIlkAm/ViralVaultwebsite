import { TrendingUp } from "lucide-react";

export default function TeamPerformance() {
  const teamMembers = [
    {
      id: 1,
      name: "ClipperPro",
      role: "Senior Clipper",
      avatar: "CP",
      views: "847K",
      change: "+15% this week",
      changeType: "positive"
    },
    {
      id: 2,
      name: "EliteClipper",
      role: "Expert Clipper",
      avatar: "EC",
      views: "723K",
      change: "+12% this week",
      changeType: "positive"
    },
    {
      id: 3,
      name: "TopTierClips",
      role: "Lead Clipper",
      avatar: "TT",
      views: "1.2M",
      change: "+28% this week",
      changeType: "positive"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6" data-testid="section-team-performance">
      <h3 className="text-lg font-semibold mb-6">Team Performance</h3>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className={`flex items-center justify-between py-3 ${
              index < teamMembers.length - 1 ? 'border-b border-border' : ''
            }`}
            data-testid={`team-member-${member.id}`}
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="font-medium text-sm">{member.avatar}</span>
              </div>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-muted-foreground">{member.role}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{member.views} views</div>
              <div className={`text-sm ${
                member.changeType === 'positive' ? 'text-chart-3' : 'text-destructive'
              }`}>
                {member.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
