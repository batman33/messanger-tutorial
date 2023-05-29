import { getServerSession, Session } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function getSession(): Promise<Session | null> {
  return await getServerSession(authOptions);
}
