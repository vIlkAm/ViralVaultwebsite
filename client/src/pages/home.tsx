import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";

export default function Home() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect based on user role
    if (user?.role === 'client') {
      setLocation('/dashboard/client');
    } else if (user?.role === 'clipper') {
      setLocation('/dashboard/clipper');
    } else if (user?.role === 'manager') {
      setLocation('/dashboard/manager');
    }
  }, [user, setLocation]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold gradient-text mb-4">Welcome to Viral Vault</h1>
        <p className="text-muted-foreground">Redirecting to your dashboard...</p>
      </div>
    </div>
  );
}
