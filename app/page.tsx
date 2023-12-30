import { scrape } from "@/app/lib/data";

export default async function Home() {
  const data = await scrape();

  // console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lets go</h1>
    </main>
  );
}
