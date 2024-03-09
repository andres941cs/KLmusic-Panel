
import { useState,useEffect } from 'react';
import { DataDialog } from './components/DataDialog';
import { DataTable } from '../../components/UI/DataTable';
import {Columns} from './components/Columns'
import { AlbumSchema } from './data/schema'; 
import { getData } from './data/data';
function AlbumPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        //  async function getData() {
        //     const URL = "http://127.0.0.1:8000/api/songs";
        //     try {
        //         const response = await fetch(URL);
            
        //         if (!response.ok) {
        //         throw new Error("Network response was not ok");
        //         }
            
        //         const data = await response.json();
        //         console.log(data)
        //         setData(data);
        //         //return z.array(ArtistSchema).parse(data)
        //     } catch (error) {
        //         // Puedes manejar el error según tus necesidades
        //         console.error("Error during fetch operation:", error);
        //         //TOAST
        //     }
        // }
        getData('album').then( (albums)=>{
            setData(albums);
        })
        
    }, []);

    return ( 
        <>
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={Columns} tools={ <DataDialog name={'album'} schema={AlbumSchema}/>} />
        </div>
        </>
     );
}

export default AlbumPage;