
import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./DataTable"
import { Button } from "../../components/UI/Button"
import { CaretSortIcon,ChevronDownIcon,DotsHorizontalIcon, } from "@radix-ui/react-icons"

/* INTERFACE */
export type User = {
    id: string
    username: string
    email: string
    role: string
    }
/* DATA */
async function getData():Promise<User[]> {
    const URL ="http://127.0.0.1:8000/api/users";
    //const response =  fetch(URL)
    try {
        const response = await fetch(URL);
    
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
    
        const data = await response.json();
        const usersData: User[] = data;
    
        return usersData;
    } catch (error) {
        console.error("Error during fetch operation:", error);
        throw error; // Puedes manejar el error según tus necesidades
    }
    }
const data = await getData()
/* COLUMNAS */
export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "username",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                Username
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    // PARA PERSONALIZAR EL HEADER Y LA DELDA
    // header: () => <div className="text-right">accessorKey</div>,
    // cell: ({ row }) => {return <div>row.getValue("accessorKey")</div>}
      ]
/* COMPONENTE */
export default  function UserTable() {
    
console.log(data)
    return (
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    )
  }