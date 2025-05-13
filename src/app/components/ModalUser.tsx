import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import StatusCard from "./StatusCard";
import ModalInput from "./ModalInput";
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
            <ModalInput
              label="Nome Completo"
              id="name"
              type="text"
              placeholder="Digite o nome"
              checkbox={false}
            />
            <ModalInput
              label="E-mail"
              id="email"
              type="email"
              placeholder="Digite o e-mail"
              checkbox={false}
            />
            <ModalInput
              label="Telefone"
              id="phone"
              type="tel"
              placeholder="Informe o telefone"
              checkbox={true}
              checkboxId="whatsapp"
              checkboxText="Whatsapp"
            />

            <div className="flex flex-1 flex-nowrap gap-4 mb-5">
              <ModalInput
                inputHalf={true}
                label="CPF"
                id="cpf"
                type="text"
                placeholder="Informe o CPF"
                checkbox={false}
              />
              <ModalInput
                inputHalf={true}
                label="RG"
                id="rg"
                type="text"
                placeholder="Informe o RG"
                checkbox={false}
              />
            </div>
            <ModalInput
              label="E-mail"
              id="email"
              type="email"
              placeholder="Digite o e-mail"
              checkbox={false}
            />
          </div>
          <StatusCard />
        </div>
        <DialogFooter>
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
