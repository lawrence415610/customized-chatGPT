import Head from "next/head";

export default function ChatPage() {
  return (
    <div>
      <Head>
        <title>New Chat</title>
      </Head>
      <div className="grid h-screen grid-cols-[260px_1fr]">
        <div>sidebar</div>
        <div className="bg-gray-700 flex flex-col">
          <div className="flex-1">chat windwo</div>
          <footer className="bg-gray-800 p-10"></footer>
        </div>
      </div>
    </div>
  );
}
