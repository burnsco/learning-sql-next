import { CitiesTable } from '@/app/ui/cities/table';
import {
  fetchAreaSum,
  fetchCities,
  fetchCitiesCount,
  fetchDensitySum,
  fetchPopulationSum
} from '@/lib/actions';

export default async function Home() {
  const cities: any = await fetchCities();
  const popsumdata: any = await fetchPopulationSum();
  const areasumdata: any = await fetchAreaSum();
  const densumdata: any = await fetchDensitySum();
  const popsum = popsumdata.map((a: any) => a.sum);
  const areasum = areasumdata.map((a: any) => a.sum);
  const denssum = densumdata.map((a: any) => a.sum);
  const { count }: any = await fetchCitiesCount();


  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <CitiesTable
          captionTitle="Largest Cities in the World"
          cities={cities}
          populationTotal={popsum}
          areaTotal={areasum}
          densityTotal={denssum}
          citiesCount={count}
        />
      </div>
    </main>
  );
}
