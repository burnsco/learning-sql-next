type TableDataType = {
  tableData: {
    country: string;
    population: number;
    area: number;
    density: number;
  }[];
};

export const TableBody = ({ tableData }: TableDataType) => {
  return (
    <tbody>
      {tableData.map((city: any) => (
        <tr
          key={city.name}
          className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            {city.name}
          </th>
          <td className="px-6 py-4">{city.country}</td>
          <td className="px-6 py-4">{city.population.toLocaleString()}</td>
          <td className="px-6 py-4">{city.area}</td>
          <td className="px-6 py-4">{city.density}</td>
        </tr>
      ))}
    </tbody>
  );
};
