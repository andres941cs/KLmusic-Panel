import { API_URL } from "./constants";

/* PETICIONES AL API */
export async function getData(table) {
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

export async function addData(table,data) {
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

export async function editData(table,data) {
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

export async function deleteData(table,data) {
    const URL = `${API_URL}${table}/${data.id}`;
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
