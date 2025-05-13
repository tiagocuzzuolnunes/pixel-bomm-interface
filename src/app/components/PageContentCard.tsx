import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PageContentCardProps {
  header: string;
  content: string;
}
export default function PageContentCard({
  header,
  content,
}: PageContentCardProps) {
  return (
    <Card className="flex justify-center bg-primary-foreground w-56 h-25 gap-1 py-3 border-0">
      <CardHeader className="flex flex-col justify-end">
        <CardTitle className="text-xs text-muted-foreground font-light">
          {header}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-4xl font-serif font-normal">
        {content}
      </CardContent>
    </Card>
  );
}
