//import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { ArtistDialog } from "./ArtistDialog";
import { columns } from "./Columns"
import { DataTable } from "./components/DataTable"
import { getData } from "./data/data";

function ArtistPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData('artist').then( (data)=>{
            setData(data);
        })
        
    }, []);

    return ( 
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={columns} tools={<ArtistDialog/>}/>
        </div>
     );
}

export default ArtistPage;