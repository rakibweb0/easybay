import { Badge } from "@/components/ui/badge";

interface LegalHeaderProps {
  title: string;
  description: string;
}

export default function LegalHeader({
  title,
  description,
}: LegalHeaderProps) {
  
  return (
    <div>
      <div className="space-y-4 text-center">
        <Badge className="px-4 py-1 text-sm">
          Easy Bay
        </Badge>
      
        <h1 className="text-4xl font-bold tracking-tight">
          {title}
        </h1>
      
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {description}
        </p>
      
        <p className="text-sm text-muted-foreground">
          Last Updated: June 28, 2026
        </p>
      </div>
    </div>
  );
}