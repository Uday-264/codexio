"use server";

import { getSession } from "@/lib/auth";
import { StreamChat } from "stream-chat";

export async function generateTokenAction() {
  const session = await getSession();

  if (!session) {
    throw new Error("No session found");
  }

  const api_key = process.env.STREAMS_API_KEY!;
  const api_secret = process.env.STREAMS_API_SECRET!;
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(session.user.id);
  console.log("token from video actions", token);
  return token;
}