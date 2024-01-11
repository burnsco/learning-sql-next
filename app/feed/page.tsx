export default async function HomeFeedPage() {
  return (
    <section
      id="home-feed"
      className="mt-16 flex min-w-full flex-row border-2 border-red-500  bg-gray-50 p-2"
    >
      <article className="flex w-1/5 flex-col items-center border border-gray-300 bg-white p-2">
        <h1 className="text-slate-800">Feed Page (Left)</h1>
      </article>
      <aside className="flex w-4/5 flex-col items-center border border-gray-300 bg-white p-2">
        <h1 className="text-slate-800">Aside (Middle)</h1>
      </aside>
      <aside className="flex w-2/5 flex-col items-center border border-gray-300 bg-white p-2">
        <h1 className="text-slate-800">Right Way (Right)</h1>
      </aside>
    </section>
  );
}
