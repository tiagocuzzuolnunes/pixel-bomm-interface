import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";
export default function ModalUser() {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center px-4 gap-3 text-white bg-base-primary h-10 rounded-4xl cursor-pointer">
        <Plus />
        Adicionar
      </DialogTrigger>
      <DialogContent className="h-full">
        <DialogHeader>
          <DialogTitle className="font-serif font-normal text-2xl">
            Adicionar usuário
          </DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="name" className="text-right">
            Nome Completo
          </Label>
          <Input
            id="name"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            className="col-span-3"
            placeholder="Digite o nome"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-right">
            E-mail
          </Label>
          <Input
            id="email"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            className="col-span-3"
            placeholder="Digite o e-mail"
            type="email"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-right">
            Telefone
          </Label>
          <Input
            id="phone"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            className="col-span-3"
            placeholder="Digite o telefone"
            type="tel"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
