
import { useState,useEffect } from 'react';
import { DataDialog } from './components/DataDialog';
import { DataTable } from '@components/UI/DataTable';
import {Columns} from './components/Columns'
import { LyricSchema } from '@schemas/LyricSchema'; 
import { getData } from '@utils/data';

function LyricPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData('lyric').then( (albums)=>{
            setData(albums);
        })
        
    }, []);

    return ( 
        <>
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={Columns} tools={ <DataDialog name={'lyric'} schema={LyricSchema}/>} />
        </div>
        </>
     );
}

export default LyricPage;