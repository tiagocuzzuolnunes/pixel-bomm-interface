"use client";
import { useEffect, useState } from "react";
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
import { api } from "../../lib/axios";

interface User {
  id: number;
  name: string;
  code: string;
  age: number;
  gender: string;
  date: string;
  hour: string;
  time: string;
  userType: string;
  userActive: boolean;
}

export default function UserCardSection() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("Algo deu errado", err);
      });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <Card
          key={user.id}
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
              {user.userActive ? (
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
