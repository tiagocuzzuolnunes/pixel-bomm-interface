"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Bell, BellRing } from "lucide-react";

export default function HelpButton() {
  const [notification, setNotification] = useState(false);

  const handleChange = () => setNotification((prev) => !prev);
  return (
    <Button
      variant="outline"
      size="icon"
      className="text-secondary-foreground rounded-full"
      onClick={handleChange}
    >
      {notification ? (
        <BellRing className="h-5 w-5 text-primary" />
      ) : (
        <Bell className="h-5 w-5 text-primary" />
      )}
    </Button>
  );
}
