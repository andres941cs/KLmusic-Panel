import { Song } from "@schemas/SongSchema";
import { API_URL } from "./constants";
import { Album } from "@schemas/AlbumSchema";
import { Artist } from "@schemas/ArtistSchema";
import { Karaoke } from "@schemas/KaraokeSchema";
import { Lyric } from "@schemas/LyricSchema";
import { User } from "@schemas/UserSchema";

/* PETICIONES AL API */
export async function getData(table:string) {
    const URL = `${API_URL}${table}`;
    try {
        const response = await fetch(URL);
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        // Puedes manejar el error según tus necesidades
        console.error("Error during fetch operation:", error);
    }
}
// interface Data {id: string;}
// addData<T extends Data>
export async function addData(table:string, data: Song | Album | Artist| Karaoke | Lyric | User) {
    const URL = `${API_URL}${table}/${data.id}`;
    const PARAMS = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    try {
        const response = await fetch(URL,PARAMS);
    
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error during fetch operation:", error);
    }
}

export async function editData(table:string,data: Song | Album | Artist| Karaoke | Lyric | User) {
    const URL = `${API_URL}${table}/${data.id}`;
    const PARAMS = {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };
    try {
        const response = await fetch(URL,PARAMS);
    
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error during fetch operation:", error);
    }
}

export async function deleteData(table:string,id:number) {
    const URL = `${API_URL}${table}/${id}`;
    const PARAMS = {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    };
    try {
        const response = await fetch(URL,PARAMS);
    
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        // MESSAGE TOAST
        console.log(response.status)
        return response;
    } catch (error) {
        // TOAST
        console.error("Error during fetch operation:", error);
    }
}
