import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function RecentClips() {
  const recentClips = [
    {
      id: 1,
      title: "Epic Gaming Moment #47",
      creator: "ClipperPro",
      views: "2.1M",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 2,
      title: "Viral Reaction Clip",
      creator: "EliteClipper",
      views: "1.8M",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 3,
      title: "Best Plays Compilation",
      creator: "TopTierClips",
      views: "3.4M",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6" data-testid="section-recent-clips">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent Clips</h3>
        <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium" data-testid="button-view-all-clips">
          View All
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentClips.map((clip) => (
          <div key={clip.id} className="group cursor-pointer" data-testid={`clip-${clip.id}`}>
            <div className="relative">
              <img
                src={clip.thumbnail}
                alt={clip.title}
                className="w-full h-32 object-cover rounded-lg group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center">
                  <Play className="text-primary-foreground ml-1" size={20} />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h4 className="font-medium group-hover:text-primary transition-colors">{clip.title}</h4>
              <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                <span>by {clip.creator}</span>
                <span>{clip.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
