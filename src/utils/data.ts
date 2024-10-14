const keys_jalisco = [
  "NAME",
  "DESCRIPTION",
];

function filterData(data: any) {
  const filtered_jal_data: any = {};

  Object.keys(data?.properties || {}).map((key: any) => {
    if (keys_jalisco.includes(key)) {
      filtered_jal_data[key] = data?.properties[key];
    }
  });

  return filtered_jal_data;
}

export { filterData };
