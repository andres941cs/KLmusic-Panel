
import { useState,useEffect } from 'react';
import { DataDialog } from './components/DataDialog';
import { DataTable } from '../../components/UI/DataTable';
import {Columns} from './components/Columns'
import { AlbumSchema } from '../../schemas/AlbumSchema'; 
import { getData } from '../../utils/data';
function AlbumPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
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