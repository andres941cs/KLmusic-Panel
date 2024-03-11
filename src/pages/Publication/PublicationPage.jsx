
import { useState,useEffect } from 'react';
import { DataDialog } from './components/DataDialog';
import { DataTable } from '../../components/UI/DataTable';
import {Columns} from './components/Columns'
import { PublicationSchema } from '../../schemas/PublicationSchema';
import { getData } from '../../utils/data'
function PublicationPage() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData('publication').then( (publication)=>{
            setData(publication);
        })
        
    }, []);

    return ( 
        <>
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={data} columns={Columns} tools={ <DataDialog name={'publication'} schema={PublicationSchema}/>} />
        </div>
        </>
     );
}

export default PublicationPage;