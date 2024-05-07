
// import { DataTable } from "../Artist/components/DataTable";
import { DataTable } from "@components/UI/DataTable";
import { columns } from "./Columns";
import { UserDialog } from "./UserDialog";
import { getUsers } from "./data";
import { useEffect, useState } from "react";


function UserPage() {
    const [data, setData] = useState([]);
    //const refreshData = async () => setData(await getUsers());
    useEffect(() => {
        const fetchData = async () => {
        const users = await getUsers();
        setData(users)
        }
        fetchData()
    }, []);

    return (    
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={columns} tools={<UserDialog/>} />
        </div>
     );
}

export default UserPage;