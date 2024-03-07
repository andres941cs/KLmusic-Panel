//import { Button } from "../../components/UI/Button";
import { ArtistDialog } from "./ArtistDialog";
import { columns } from "./Columns"
import { DataTable } from "./components/DataTable"
// import { Card } from "../../components/UI/Card"
// import { z } from "zod"
// import { ArtistSchema } from "./data/schema"
// import { PlusCircledIcon } from  "@radix-ui/react-icons"

// OBTENER TODOS LOS ARTSTAS DE LA BBDD
async function getArtist() {
    const URL = "http://127.0.0.1:8000/api/artist";
    try {
        const response = await fetch(URL);
    
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        //const usersData: Artist[] = data;
        //return usersData;
        return data;
        //return z.array(ArtistSchema).parse(data)
    } catch (error) {
        console.error("Error during fetch operation:", error);
        throw error; // Puedes manejar el error según tus necesidades
    }
 // return z.array(taskSchema).parse(tasks)
}
// async function getData():Promise<Artist[]> {
//     const URL ="http://127.0.0.1:8000/api/users";
//     //const response =  fetch(URL)
//     try {
//         const response = await fetch(URL);
    
//         if (!response.ok) {
//         throw new Error("Network response was not ok");
//         }
    
//         const data = await response.json();
//         const usersData: Artist[] = data;
    
//         return usersData;
//     } catch (error) {
//         console.error("Error during fetch operation:", error);
//         throw error; // Puedes manejar el error según tus necesidades
//     }
//     }
//const data = await getData()


//const addButton = <Button className="flex gap-2"><PlusCircledIcon/> Add Songs</Button>
const addButton = <ArtistDialog/>
const artists = await getArtist();
console.log(artists)
function ArtistPage() {
    return ( 
        <div className="hidden flex-col space-y-8 p-8 md:flex">
            <DataTable data={artists} columns={columns} tools={addButton}/>
        </div>
     );
}

export default ArtistPage;