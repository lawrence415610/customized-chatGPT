import { ChatSidebar } from "components/ChatSidebar";
import Head from "next/head";
import { useState } from "react";

export default function ChatPage() {
  const [messageText, setMessageText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
  };
  
  return (
    <div>
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <ChatSidebar />
        <div className="flex flex-col bg-gray-700">
          <div className="flex-1">chat windwo</div>
          <footer className="bg-gray-800 p-10">
            <form onSubmit={handleSubmit}>
              <fieldset className="flex gap-2">
                <textarea
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="send a message..."
                  className="w-full resize-none rounded-md bg-gray-700 p-2 text-white focus:border-emerald-500 focus:bg-gray-600 focus:outline focus:outline-emerald-500"
                />
                <button className="btn" type="submit">
                  Send
                </button>
              </fieldset>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}
