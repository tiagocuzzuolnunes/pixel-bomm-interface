import PageContentCard from "./PageContentCard";
import SearchInput from "./SearchInput";
import ModalUser from "./ModalUser";
import UserCardSection from "./UserCardSection";
export default function PageContent() {
  return (
    <section className="flex flex-col flex-1 p-10">
      <div className="flex flex-1 pb-5 justify-between">
        <h1 className="font-serif text-4xl">Usuários</h1>
        {/* <DialogTrigger>
          <Button className="bg-base-primary h-10 rounded-4xl">
            <Plus />
            Adicionar
          </Button>
        </DialogTrigger> */}
        <ModalUser />
      </div>
      <div className="flex flex-1 justify-between gap-5 py-5">
        <PageContentCard header="Usuários" content="294" />
        <PageContentCard header="Tempo de Sessão" content="31m20s" />
        <PageContentCard header="Ativos" content="203" />
        <PageContentCard header="Inativos" content="127" />
      </div>
      <div className="mb-5">
        <SearchInput />
      </div>
      <div>
        <UserCardSection />
      </div>
    </section>
  );
}
