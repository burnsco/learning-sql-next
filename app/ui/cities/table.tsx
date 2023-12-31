'use client';

import { TableBody } from '@/app/ui/cities/tbody';
import { TableFooter } from '@/app/ui/cities/tfoot';
import { TableHead } from '@/app/ui/cities/thead';
import TableSearch from '@/app/ui/cities/tsearch';

type CitiesDataType = {
  cities: {
    id: string;
    name: string;
    country: string;
    population: number;
    area: number;
    density: number;
  }[];
  populationTotal: number;
  areaTotal: number;
  densityTotal: number;
  captionTitle: string;
  citiesCount: string;
};

export const CitiesTable = (data: CitiesDataType) => {
  const {
    cities,
    citiesCount,
    populationTotal,
    areaTotal,
    densityTotal,
    captionTitle,
  } = data;

  return (
    <>
      <TableSearch placeholder="hey" />
      <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <caption className="p-2 text-2xl text-orange-500">
          {captionTitle}
        </caption>

        <TableHead />
        <TableBody tableData={cities} />
        <TableFooter
          populationTotal={populationTotal}
          areaTotal={areaTotal}
          densityTotal={densityTotal}
          citiesCount={citiesCount}
        />
      </table>
    </>
  );
};
