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
import { PublicationSchema } from "../../../schemas/PublicationSchema"
import { deleteData } from "../../../utils/data"
import { DataDialog } from "./DataDialog"


interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // EL TIPO DE DATO
  const publication = PublicationSchema.parse(row.original)

  // FUNCIONES DE LAS ACCIONES
  const handleDelete: React.MouseEventHandler<HTMLDivElement> = async (event) => {
    // BORRAMOS USANDO EL API
    await deleteData('publication',publication)
  };

  const [open, setOpen] = React.useState(false);

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
        <DataDialog name={'publication'} data={publication} schema={PublicationSchema} />
        {/* </DropdownMenuItem> */}

        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
