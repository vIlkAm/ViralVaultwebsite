import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface JoinCommunityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function JoinCommunityModal({ open, onOpenChange }: JoinCommunityModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    experience: "",
    socialLinks: "",
    whyChooseYou: "",
    agreeToTerms: false,
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const applicationMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/applications", data);
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying. We'll review your application and get back to you soon.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      resetForm();
      onOpenChange(false);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      platform: "",
      experience: "",
      socialLinks: "",
      whyChooseYou: "",
      agreeToTerms: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.whyChooseYou) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the Terms of Service and Privacy Policy.",
        variant: "destructive",
      });
      return;
    }

    applicationMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="join-community-modal">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-display font-bold">Join Our Elite Community</DialogTitle>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onOpenChange(false)}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-modal"
            >
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            Apply to join our exclusive network of elite content creators. 
            Complete the form below to start your journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-join-community">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  className="w-full"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Primary Platform
                </Label>
                <Select onValueChange={(value) => handleInputChange("platform", value)}>
                  <SelectTrigger data-testid="select-platform">
                    <SelectValue placeholder="Select platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="youtube">YouTube</SelectItem>
                    <SelectItem value="twitch">Twitch</SelectItem>
                    <SelectItem value="tiktok">TikTok</SelectItem>
                    <SelectItem value="instagram">Instagram</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium mb-2 block">
                  Experience Level
                </Label>
                <Select onValueChange={(value) => handleInputChange("experience", value)}>
                  <SelectTrigger data-testid="select-experience">
                    <SelectValue placeholder="Select experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                    <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="socialLinks" className="text-sm font-medium mb-2 block">
                Social Media Links
              </Label>
              <Textarea
                id="socialLinks"
                value={formData.socialLinks}
                onChange={(e) => handleInputChange("socialLinks", e.target.value)}
                placeholder="Share your social media profiles (YouTube, Twitch, TikTok, etc.)"
                className="w-full h-20 resize-none"
                data-testid="textarea-social-links"
              />
            </div>

            <div>
              <Label htmlFor="whyChooseYou" className="text-sm font-medium mb-2 block">
                Why should we choose you? *
              </Label>
              <Textarea
                id="whyChooseYou"
                value={formData.whyChooseYou}
                onChange={(e) => handleInputChange("whyChooseYou", e.target.value)}
                placeholder="Tell us about your experience, skills, and what makes you unique..."
                className="w-full h-32 resize-none"
                data-testid="textarea-why-choose-you"
              />
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", !!checked)}
                data-testid="checkbox-terms"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                disabled={applicationMutation.isPending}
                data-testid="button-submit-application"
              >
                {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
              </Button>
              <Button 
                type="button" 
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
