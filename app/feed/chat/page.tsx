export default async function ChatPage() {
  return (
    <section id="chat-page">
      <article className="flex-column flex justify-evenly">
        <div className="relative flex  flex-col items-center border border-gray-300 bg-white">
          <h1 className="text-slate-800">Users List</h1>
        </div>
      </article>
      {/* CHAT DISPLAY */}
      <article className="flex-column flex">
        <div className="relative  flex w-4/6 flex-col items-center border border-gray-300 bg-white">
          <h1 className="text-slate-800">Chat Display</h1>
        </div>
      </article>
      {/* ROOMS LIST */}
      <article className="flex-column flex">
        <div className="relative  flex w-80 flex-col items-center border border-gray-300 bg-white ">
          <h1 className="text-slate-800">Rooms List</h1>
        </div>
      </article>
    </section>
  );
}
