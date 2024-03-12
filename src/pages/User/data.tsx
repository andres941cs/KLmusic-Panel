import { API_URL } from "../../utils/constantes";


export async function getUsers() {
    const URL = `${API_URL}users`;
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
        //throw error; // Puedes manejar el error según tus necesidades
    }
}

export async function editUser(user) {
    const URL = `${API_URL}/user/${user.id}`;
    const PARAMS = {
        method: user ? 'PUT' : 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        //body: JSON.stringify(data),
    };
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
        //throw error; // Puedes manejar el error según tus necesidades
    }
}

export async function deleteUser(user) {
    const URL = `${API_URL}user/${user.id}`;
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
        //const data = await response.json();
        console.log(response.status)
        return response;
        //return z.array(ArtistSchema).parse(data)
    } catch (error) {
        console.error("Error during fetch operation:", error);
        //throw error; // Puedes manejar el error según tus necesidades
    }
}
