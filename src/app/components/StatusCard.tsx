import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function StatusCard() {
  return (
    <Card className="p-4 flex flex-1 justify-center bg-primary-foreground">
      <CardContent className="flex flex-1 p-0">
        <CardHeader className="w-4/5 p-0">
          <CardTitle>Status</CardTitle>
          <CardDescription>
            Defina se o usuário estará ativo ao ser adicionado.
          </CardDescription>
        </CardHeader>
        <div className="flex items-center w-20 text-sm gap-2 font-medium">
          <Switch />
          Ativo
        </div>
      </CardContent>
    </Card>
  );
}
