type TableFooterTotals = {
  populationTotal: number;
  areaTotal: number;
  densityTotal: number;
  citiesCount: string;
};

export const TableFooter = ({
  populationTotal,
  areaTotal,
  densityTotal,
  citiesCount,
}: TableFooterTotals) => {
  return (
    <tfoot>
      <tr className="font-semibold text-gray-900 dark:text-white">
        <th scope="row" className="px-6 py-3 text-base">
          Totals - (${citiesCount})
        </th>
        <td className="px-6 py-3"></td>
        <td className="px-6 py-3">{populationTotal}</td>
        <td className="px-6 py-3">{areaTotal}</td>
        <td className="px-6 py-3">{densityTotal}</td>
      </tr>
    </tfoot>
  );
};
