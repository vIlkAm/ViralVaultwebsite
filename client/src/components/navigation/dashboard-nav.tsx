import { Video, Bell, Menu } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardNav() {
  const { user } = useAuth();

  const getDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return user?.email || 'User';
  };

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;
    }
    return user?.email?.charAt(0).toUpperCase() || 'U';
  };

  return (
    <nav className="dashboard-nav" data-testid="dashboard-nav">
      <div className="flex items-center justify-between px-6 h-16">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Video className="text-background font-bold" size={16} />
            </div>
            <span className="text-xl font-display font-bold gradient-text">Viral Vault</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative p-2 text-muted-foreground hover:text-foreground" data-testid="button-notifications">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"></span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-secondary/50 px-3 py-2 rounded-lg transition-colors" data-testid="user-menu-trigger">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  {user?.profileImageUrl ? (
                    <img
                      src={user.profileImageUrl}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold">{getInitials()}</span>
                  )}
                </div>
                <span className="text-sm font-medium hidden sm:block">{getDisplayName()}</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56" data-testid="user-menu-content">
              <DropdownMenuItem className="cursor-pointer" data-testid="menu-profile">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" data-testid="menu-preferences">
                Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" data-testid="menu-support">
                Support
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/api/logout" className="cursor-pointer w-full" data-testid="menu-logout">
                  Sign Out
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden p-2 text-muted-foreground hover:text-foreground" data-testid="button-mobile-toggle">
            <Menu size={18} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
