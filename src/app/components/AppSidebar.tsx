"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  ChevronsUpDown,
  Activity,
  User,
  FileCheck,
  Settings,
  Headset,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

export function AppSidebar() {
  const menuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: Activity,
    },
    {
      id: 2,
      name: "Usuários",
      icon: User,
    },
    {
      id: 3,
      name: "Documentos",
      icon: FileCheck,
    },
  ];
  const [isSelected, setIsSelected] = useState<number | null>(null);
  const [selectSettings, setSelectSettings] = useState(false);
  const handleSelectSettings = () => {
    setSelectSettings((prev) => !prev);
    setIsSelected(null);
  };
  const handleSelectMenuItem = (id: number) => {
    setIsSelected(id);
    setSelectSettings(false);
  };
  return (
    <Sidebar>
      <SidebarHeader className="flex justify-center border-b-2 px-6">
        <Button className="w-24">Logo</Button>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu className="h-12">
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="h-12 text-sidebar-foreground font-bold">
                  <Label className="flex justify-center items-center rounded-lg font-medium bg-accent w-8 h-8">
                    <span className="bg-accent font-medium">FA</span>
                  </Label>
                  Filial A
                  <ChevronsUpDown className="ml-auto text-sidebar-foreground" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <Avatar>
                    <AvatarFallback>FA</AvatarFallback>
                  </Avatar>
                  <span>Filial A</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Filial B</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Filial C</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const confirmSelect = item.id === isSelected;
                return (
                  <SidebarMenuItem className="h-10 my-1" key={item.id}>
                    <SidebarMenuButton
                      onClick={() => handleSelectMenuItem(item.id)}
                      className={
                        confirmSelect
                          ? "h-full text-white bg-base-primary rounded-4xl hover:bg-base-primary hover:text-foreground"
                          : "h-full text-muted-foreground rounded-4xl"
                      }
                      asChild
                    >
                      <a href="#">
                        <item.icon />
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="h-10 my-1">
                <SidebarMenuButton
                  onClick={handleSelectSettings}
                  className={
                    selectSettings
                      ? "h-full text-white bg-base-primary rounded-4xl hover:bg-base-primary hover:text-foreground"
                      : "h-full text-muted-foreground rounded-4xl"
                  }
                  asChild
                >
                  <a href="#">
                    <Settings />
                    <span>Geral</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          variant="secondary"
          className="flex justify-between rounded-3xl bg-white text-sidebar-foreground cursor-pointer"
        >
          <span className="ml-2 font-normal">Precisa de ajuda?</span>
          <Headset className="text-sidebar-foreground mr-2" />
        </Button>
      </SidebarFooter>
    </Sidebar>

    // RESOLVER CORES
  );
}
