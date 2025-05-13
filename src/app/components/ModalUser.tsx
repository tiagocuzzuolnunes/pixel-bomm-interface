import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
export default function ModalUser() {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-center items-center px-4 gap-3 text-white bg-base-primary h-10 rounded-4xl cursor-pointer">
        <Plus />
        Adicionar
      </DialogTrigger>
      <DialogContent className="flex justify-between h-full">
        <div>
          <DialogHeader>
            <DialogTitle className="font-serif font-normal text-2xl">
              Adicionar usuário
            </DialogTitle>
          </DialogHeader>
          <div>
            <div>
              <Label htmlFor="name" className="text-right mb-2">
                Nome Completo
              </Label>
              <Input
                id="name"
                className="mb-5"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}

                placeholder="Digite o nome"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-right mb-2">
                E-mail
              </Label>
              <Input
                id="email"
                className="mb-5"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}

                placeholder="Digite o e-mail"
                type="email"
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="phone" className="text-right mb-2">
                Telefone
              </Label>
              <Input
                id="phone"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
                className="mb-2"
                placeholder="Informe o telefone"
                type="tel"
              />
              <Checkbox id="whatsapp" />
              <label
                htmlFor="whatsapp"
                className="text-sm ml-2 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Whatsapp
              </label>
            </div>
            <div className="flex flex-1 flex-nowrap gap-4 mb-5">
              <div className="w-[calc(150%-2rem)]">
                <Label htmlFor="cpf" className="text-right mb-2">
                  CPF
                </Label>
                <Input
                  id="cpf"
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                  className="mb-2 "
                  placeholder="Informe o CPF"
                  type="tel"
                />
              </div>
              <div className="w-[calc(150%-2rem)]">
                <Label htmlFor="rg" className="text-right mb-2">
                  RG
                </Label>
                <Input
                  id="rg"
                  //   value={name}
                  //   onChange={(e) => setName(e.target.value)}
                  className="mb-2 "
                  placeholder="Informe o RG"
                  type="tel"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-right mb-2">
                E-mail
              </Label>
              <Input
                id="email"
                className="mb-5"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}

                placeholder="Digite o e-mail"
                type="email"
              />
            </div>
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
          </div>
        </div>

        <DialogFooter className="">
          <DialogClose>
            <Button
              variant="outline"
              className="cursor-pointer h-10 w-22 text-sm rounded-4xl"
            >
              Cancelar
            </Button>
          </DialogClose>
          <Button
            className="bg-base-primary cursor-pointer h-10 w-24 text-sm rounded-4xl"
            type="submit"
          >
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
