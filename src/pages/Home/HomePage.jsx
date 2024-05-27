import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/UI/Table'
import { deleteData, editData, getData } from "../../utils/data";
import { Accordion } from '@components/UI/Accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";

function HomePage() {
    const [artists, setArtists] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    
    useEffect(()=>{
        getData('unverified/artists').then((artists)=>setArtists(artists));
        getData('unverified/albums').then((albums)=>setAlbums(albums));
        getData('unverified/songs').then( (songs)=>setSongs(songs));
    },[])
    
    const handleApprove = (table, data) => {
        data.verified = 1;
        console.log(data)
        editData(table,data).then((res)=>{
            console.log(res)
            if(table === 'artist'){
                setArtists(artists.filter((artist)=>artist.id !== data.id))
            }else if(table === 'album'){
                setAlbums(albums.filter((album)=>album.id !== data.id))
            }else if(table === 'song'){
                setSongs(songs.filter((song)=>song.id !== data.id))
            }
        })
    }

    const handleReject = (table, id) => {
        deleteData(table,id).then((res)=>{
            if(table === 'artist'){
                setArtists(artists.filter((artist)=>artist.id !== id))
            }else if(table === 'album'){
                setAlbums(albums.filter((album)=>album.id !== id))
            }else if(table === 'song'){
                setSongs(songs.filter((song)=>song.id !== id))
            }
        })
    }

    return ( 
        <div className="h-full w-full flex bg-muted p-12 overflow-auto">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full dark:bg-[#595959] bg-[#dddddd] py-2 border-b">MANAGE ARTISTS</AccordionTrigger>
                    <AccordionContent>
                        <Table>
                            <TableCaption>LIST ARTIST</TableCaption>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[100px]">IMAGE</TableHead>
                                <TableHead>NAME</TableHead>
                                <TableHead>COUNTRY</TableHead>
                                <TableHead className="text-right">ACTIONS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {artists.map((artist) => (
                                <TableRow key={artist.id}>
                                    <TableCell className="font-medium"><img className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full" src={artist.image} alt={artist.name}/></TableCell>
                                    <TableCell className="font-medium">{artist.name}</TableCell>
                                    <TableCell>{artist.country}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>handleApprove('artist', artist)} className="p-1 border border-green-600 text-green-600 bg-green-400 rounded-sm">Aprrove</button>
                                            <button onClick={()=>handleReject('artist', artist.id)} className="p-1 text-primary border border-primary bg-red-400 rounded-sm">Reject</button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
        </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="w-full dark:bg-[#595959] bg-[#dddddd] py-2 border-b">MANAGE ALBUMS</AccordionTrigger>
                    <AccordionContent>
                        <Table>
                            <TableCaption>LIST ALBUMS</TableCaption>
                            <TableHeader>
                                <TableRow>
                                <TableHead className="w-[100px]">IMAGE</TableHead>
                                <TableHead>NAME</TableHead>
                                <TableHead>NAME ARTIST</TableHead>
                                <TableHead>RELEASE DATE</TableHead>
                                <TableHead className="text-right">ACTIONS</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {albums.map((album) => (
                                <TableRow key={album.id}>
                                    <TableCell className="font-medium"><img className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full" src={album.image} alt={album.name}/></TableCell>
                                    <TableCell className="font-medium">{album.name}</TableCell>
                                    <TableCell>{album.artist.name}</TableCell>
                                    <TableCell>{album.release_date}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-3">
                                            <button onClick={()=>handleApprove('album', album)} className="p-1 border border-green-600 text-green-600 bg-green-400 rounded-sm">Aprrove</button>
                                            <button onClick={()=>handleReject('album', album.id)} className="p-1 text-primary border border-primary bg-red-400 rounded-sm">Reject</button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </AccordionContent>
                </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="w-full dark:bg-[#595959] bg-[#dddddd] py-2 border-b">MANAGE SONGS</AccordionTrigger>
                <AccordionContent>
                    <Table>
                        <TableCaption>LIST SONGS</TableCaption>
                        <TableHeader>
                            <TableRow>
                            <TableHead className="w-[100px]">IMAGE</TableHead>
                            <TableHead>NAME SONG</TableHead>
                            <TableHead>NAME ARTIST</TableHead>
                            <TableHead>NAME ALBUM</TableHead>
                            <TableHead className="text-right">ACTIONS</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {songs.map((song) => (
                            <TableRow key={song.id}>
                                <TableCell className="font-medium"><img className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full" src={song.image} alt={song.name}/></TableCell>
                                <TableCell className="font-medium">{song.name}</TableCell>
                                <TableCell>{song.artist.name}</TableCell>
                                <TableCell>{song.album.name}</TableCell>
                                <TableCell>
                                    <div className="flex gap-3">
                                        <button onClick={()=>handleApprove('song', song)} className="p-1 border border-green-600 text-green-600 bg-green-400 rounded-sm">Aprrove</button>
                                        <button onClick={()=>handleReject('song', song.id)} className="p-1 text-primary border border-primary bg-red-400 rounded-sm">Reject</button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>
            </Accordion>
        </div>
     );
}

export default HomePage;