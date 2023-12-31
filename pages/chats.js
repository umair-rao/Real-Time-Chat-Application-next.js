import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div />;

  return (
    <div className="background">
      <div className="logout-btn-div">
        <Link href='/'><button className="logout-btn">Logout</button></Link>
      </div>
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="04186725-5175-4398-83bd-2b1e55d428ed"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>

    </div>
  );
}