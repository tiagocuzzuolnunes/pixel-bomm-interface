"use client";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { User } from "lucide-react";
import { Clock3 } from "lucide-react";
import { Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";
import EllipsisButton from "./EllipsisButton";

export default function UserCardSection() {
  const users = [
    {
      id: 1,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
    {
      id: 2,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
    {
      id: 3,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
    {
      id: 4,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
    {
      id: 5,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
    {
      id: 6,
      name: "José Ricardo Gomes",
      code: "JG",
      age: 51,
      gender: "Homem",
      date: "22/03/2025",
      hour: "10:21am",
      time: "38m22s",
      userType: "padrão",
    },
  ];
  const [userActive, setUserActive] = useState(false);
  return (
    <div>
      {users.map((user, index) => (
        <Card
          key={index}
          className="flex flex-row justify-start gap-3 p-3 mb-2"
        >
          <Avatar className="size-14">
            <AvatarFallback>{user.code}</AvatarFallback>
          </Avatar>
          <CardContent className="flex flex-1 flex-row justify-between p-0">
            <div className="flex flex-col">
              <CardHeader className="p-0">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-sm">{user.name}</span>{" "}
                  <span className="flex items-center text-muted-foreground text-xs">
                    <User className="size-3 stroke-[2.5]" /> {user.age} anos,{" "}
                    {user.gender}
                  </span>
                </div>
              </CardHeader>
              <CardDescription className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Calendar className="size-3 stroke-[2.5]" /> {user.date} -{" "}
                  {user.hour}{" "}
                </span>
                <span className="flex items-center gap-1">
                  <Clock3 className="size-3 stroke-[2.5]" /> {user.time}{" "}
                </span>
                <span className="flex items-center gap-1">
                  <Tag className="size-3 stroke-[2.5]" /> Usuário{" "}
                  {user.userType}
                </span>
              </CardDescription>
            </div>
            <div className="flex items-center">
              {userActive ? (
                <Badge variant="secondary" className="text-primary rounded-4xl">
                  Ativo
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="text-muted-foreground rounded-4xl font-medium"
                >
                  Inativo
                </Badge>
              )}
              <EllipsisButton />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
