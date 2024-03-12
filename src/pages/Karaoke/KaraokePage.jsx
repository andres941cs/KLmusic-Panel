
import { useState,useEffect } from 'react';
import { DataDialog } from './components/DataDialog';
import { DataTable } from '../../components/UI/DataTable';
import {Columns} from './components/Columns'
import { KaraokeSchema } from '../../schemas/KaraokeSchema'
import { getData } from '../../utils/data';
function KaraokePage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData('karaoke').then( (karaoke)=>{
            setData(karaoke);
        })
    }, []);

    return ( 
        <>
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={Columns} tools={ <DataDialog name={'karaoke'} schema={KaraokeSchema}/>} />
        </div>
        </>
     );
}

export default KaraokePage;