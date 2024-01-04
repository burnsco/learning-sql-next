import {
  deleteCity,
  fetchAreaSum,
  fetchCities,
  fetchCities2,
  fetchDensitySum,
  fetchFilteredCities,
  fetchPopulationSum,
} from '@/app/lib/fetch-cities';
import { CitiesTable } from '@/app/ui/cities/table';

export default async function Home() {
  const cities: any = await fetchCities();
  // either useState or some pathparams for searching
  const filtered: any = await fetchFilteredCities('t');

  const popsumdata: any = await fetchPopulationSum();
  const areasumdata: any = await fetchAreaSum();
  const densumdata: any = await fetchDensitySum();
  const popsum = popsumdata.map((a: any) => a.sum);
  const areasum = areasumdata.map((a: any) => a.sum);
  const denssum = densumdata.map((a: any) => a.sum);
  const asdf = await deleteCity('Tokyo');

  const test: any = await fetchCities2();
  console.log(test);

  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <CitiesTable
          captionTitle="Largest Cities in the World"
          cities={test}
          populationTotal={popsum}
          areaTotal={areasum}
          densityTotal={denssum}
        />
      </div>
    </main>
  );
}
