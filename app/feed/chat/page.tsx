export default async function ChatPage() {
  return (
    <main className="flex h-screen flex-col bg-gray-50 p-2 pt-20">
      <div className="flex-column flex">
        <div className="relative mb-3 flex w-80 flex-col items-center border border-gray-300 bg-white p-10">
          <h1 className="text-slate-800">Users List</h1>
        </div>
      </div>
      <div className="flex-column flex">
        <div className="relative mb-3 flex w-80 flex-col items-center border border-gray-300 bg-white p-10">
          <h1 className="text-slate-800">Chat Display</h1>
        </div>
      </div>
      <div className="flex-column flex">
        <div className="relative mb-3 flex w-80 flex-col items-center border border-gray-300 bg-white p-10">
          <h1 className="text-slate-800">Rooms List</h1>
        </div>
      </div>
    </main>
  );
}
