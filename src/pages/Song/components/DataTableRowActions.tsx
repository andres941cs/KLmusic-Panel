"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { Button } from "../../../components/UI/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../../components/UI/DropdownMenu"
import React from "react"
import { SongSchema } from "../../../schemas/SongSchema"
import { SongDialog } from "./SongDialog"
import { API_URL } from "@utils/constants"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // EL TIPO DE DATO
  const song = SongSchema.parse(row.original)

  // FUNCIONES DE LAS ACCIONES
  const handleDelete: React.MouseEventHandler<HTMLDivElement> = async (event) => {
    // BORRAMOS LA CANCION
    // await deleteSong(song)
     async function deleteSong(song) {
      const URL = `${API_URL}song/${song.id}`;
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
  deleteSong(song)
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* <DropdownMenuItem asChild></DropdownMenuItem> */}
        <SongDialog data={song} />
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
