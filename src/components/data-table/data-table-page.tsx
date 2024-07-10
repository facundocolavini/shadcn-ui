import { payments, type Payment } from "@/data/payments.data";
import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const DataTablePage = () => {
  
  const [data, setData] = useState<Payment[]>([]);
  const fetchData = async () => {
    // Simulate fetching data
    setData(payments);
  };
  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default DataTablePage