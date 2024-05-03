import { useState,useEffect } from 'react';
import { SongDialog } from './components/SongDialog';
import { DataTable } from '../../components/UI/DataTable';
import {Columns} from './components/Columns'
import { API_URL } from '@utils/constants';
function SongPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
         async function getData() {

            const URL = `${API_URL}songs`;
            try {
                const response = await fetch(URL);
            
                if (!response.ok) {
                throw new Error("Network response was not ok");
                }
            
                const data = await response.json();
                setData(data);
                //return z.array(ArtistSchema).parse(data)
            } catch (error) {
                console.error("Error during fetch operation:", error);
                //throw error; // Puedes manejar el error según tus necesidades
            }
        }
        getData()
    }, []);
    return ( 
        <>
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={Columns} tools={ <SongDialog/>}   />
        </div>
        </>
     );
}

export default SongPage;