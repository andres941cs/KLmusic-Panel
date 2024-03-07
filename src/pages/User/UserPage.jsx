
import { DataTable } from "../Artist/components/DataTable";
import { columns } from "./Columns";
import { UserDialog } from "./UserDialog";
import { getUsers } from "./data";
import { useEffect, useState } from "react";
const dialogButton = <UserDialog/>


function UserPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const users = await getUsers();
        setData(users)
        }
        fetchData()
    }, []);
    console.log(data)
    return (    
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={columns} tools={dialogButton} />
        </div>
     );
}

export default UserPage;