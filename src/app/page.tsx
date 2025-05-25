import { resources } from "@/__mocks__/data";
import { columns, ResourceRow } from "./columns";
import { DataTable } from "./data-table";
import _ from "lodash";

/**
 * Fetch data from database and format it for DataTable
 * @returns Formatted data for DataTable
 */
async function getData(): Promise<ResourceRow[]> {
  // fetch data
  const data = resources;
  // transform data
  let formattedData: ResourceRow[] = [];
  for (const rowData of data) {
    const resource = rowData.resource;
    const row: ResourceRow = {
      content: resource.humanReadableStr,
      aiSummary: resource.aiSummary,
      patientId: resource.metadata.identifier.patientId,
      type: resource.metadata.resourceType,
      createdTime: new Date(resource.metadata.createdTime),
      fetchTime: new Date(resource.metadata.fetchTime),
      state: resource.metadata.state,
      processedTime: resource.metadata.processedTime ? new Date(resource.metadata.processedTime) : undefined,
      version: resource.metadata.version,
    }
    formattedData.push(row);
  }
  // clone data 2^4 times
  for (let i = 0; i < 4; i++) {
    formattedData = formattedData.concat(_.cloneDeep(formattedData));
  }
  return formattedData;
}

export default async function Home() {
  const tableColumns = columns;
  // const tableColumns = useMemo(() => columns, []);

  const data = await getData();
  // const [data, setData] = useState<ResourceRow[]>([]);
  // useEffect(() => {
  //   getData().then((resources) => {
  //     setData(resources);
  //   })
  // })
  
  return (
    <div className="min-h-screen p-2 font-[family-name:var(--font-geist-sans)]">
      <main>
        <DataTable columns={tableColumns} data={data} />
      </main>
    </div>
  );
}
