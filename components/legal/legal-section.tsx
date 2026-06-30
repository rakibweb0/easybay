import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({
  title,
  children,
}: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <Separator />

      <div className="leading-8 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}