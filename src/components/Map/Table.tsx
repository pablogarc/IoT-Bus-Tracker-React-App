import { Suspense } from "react";
import { filterData } from "../../utils/data";

const Table = ({ data }: { data: any }) => {
  const filteredData: any = filterData(data);

  return (
    <div className="p-4">
      <table className="w-full text-center border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Propiedad</th>
            <th className="px-4 py-2">Detalle</th>
          </tr>
        </thead>
        <tbody>
          <Suspense fallback={<tr><td>Loading...</td></tr>}>
            {Object.keys(filteredData).map((key: any) => (
              <tr key={key} className="border-b">
                <td className="border px-4 py-2 font-semibold">{key}</td>
                <td className="border px-4 py-2">{filteredData[key]}</td>
              </tr>
            ))}
          </Suspense>
        </tbody>
      </table>
    </div>
  );
};

export default Table;