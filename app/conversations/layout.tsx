import React from "react";

import ConversationList from "./components/ConversationList";
import Sidebar from "../components/sidebar/Sidebar";

import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";

import { FullConversationType } from "../types";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
