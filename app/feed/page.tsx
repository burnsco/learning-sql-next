import { ScrollArea } from '@/components/ui/scroll-area';

export default async function HomeFeedPage() {
  return (
    <section
      id="home-feed"
      className="mt-16 flex min-w-full flex-row border-2 border-red-500  bg-gray-50 p-2"
    >
      <article className="flex w-1/5 flex-col items-center border border-gray-300 bg-white p-2">
        <h1 className="text-slate-800">1</h1>
      </article>

      <aside className="flex w-4/5 flex-col items-center border border-gray-300 bg-white p-2">
        <h1 className="text-slate-800"> 2</h1>
      </aside>

      <aside className="h-full w-2/5  border border-gray-300 bg-white p-2">
        <ScrollArea className="h-[80vh] w-full rounded-md border p-4">
          <h1>tasdfdsf</h1>
          <h1>tasdfdsf</h1>
          <h1>tasdfdsf</h1>
        </ScrollArea>
      </aside>
    </section>
  );
}
