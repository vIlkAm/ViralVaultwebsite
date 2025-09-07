import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarProps {
  items: SidebarItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className="sidebar" data-testid="sidebar">
      <div className="p-6 space-y-8">
        <div className="space-y-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.href}>
                <a 
                  className={
                    item.active 
                      ? "nav-item-active" 
                      : "nav-item"
                  }
                  data-testid={`sidebar-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
