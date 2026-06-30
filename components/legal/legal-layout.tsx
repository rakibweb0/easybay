import { Card } from "@/components/ui/card";
import LegalHeader from "./legal-header";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="max-w-4xl mx-auto py-16">
      <Card className="rounded-2xl p-8 md:p-12">
        <LegalHeader
          title={title}
          description={description}
        />

        <div className="mt-12 space-y-10">
          {children}
        </div>
      </Card>
    </div>
  );
}