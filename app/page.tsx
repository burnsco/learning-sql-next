import {
  fetchAreaSum,
  fetchCities,
  fetchDensitySum,
  fetchPopulationSum,
} from '@/app/lib/fetch-cities';
import { CitiesTable } from '@/app/ui/cities/table';

type CityType = {
  id: string;
  name: string;
  population: number;
  area: number;
}[];

export default async function Home() {
  const cities: any = await fetchCities();

  const popsumdata: any = await fetchPopulationSum();
  const areasumdata: any = await fetchAreaSum();
  const densumdata: any = await fetchDensitySum();
  const popsum = popsumdata.map((a: any) => a.sum);
  const areasum = areasumdata.map((a: any) => a.sum);
  const denssum = densumdata.map((a: any) => a.sum);

  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <CitiesTable
          captionTitle="Largest Cities in the World"
          cities={cities}
          populationTotal={popsum}
          areaTotal={areasum}
          densityTotal={denssum}
        />
      </div>
    </main>
  );
}
