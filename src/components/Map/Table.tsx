import { Suspense } from "react";
import { filterData } from "../../utils/data";

const Table = ({ data }: { data: any }) => {
  const filtered_jal_data: any = filterData(data);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Key</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<div>Loading...</div>}>
              {Object.keys(filtered_jal_data).map((key: any) => (
                <tr key={key}>
                  <td className="border px-4 py-2">{key}</td>
                  <td className="border px-4 py-2">{data?.properties[key]}</td>
                </tr>
              ))}
            </Suspense>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
