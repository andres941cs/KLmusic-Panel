"use client"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@components/UI/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/UI/DropdownMenu"

import { MouseEventHandler } from "react"

import { deleteData } from "@utils/data"
import { DataDialog } from "./DataDialog"
import { KaraokeSchema } from "@schemas/KaraokeSchema"


interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // EL TIPO DE DATO
  const karaoke = KaraokeSchema.parse(row.original)

  // FUNCIONES DE LAS ACCIONES
  const handleDelete: MouseEventHandler<HTMLDivElement> = async () => {
    // BORRAMOS USANDO EL API
    await deleteData('karaoke',karaoke.id)
  };

  // const [open, setOpen] = useState(false);

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
        {/* <DropdownMenuItem>
          Edit */}
        <DataDialog name={'karaoke'} data={karaoke} schema={KaraokeSchema.shape} />
        {/* </DropdownMenuItem> */}

        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
