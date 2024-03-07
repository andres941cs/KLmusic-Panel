"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "../../components/UI/Button"
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
} from "../../components/UI/DropdownMenu"


import React from "react"
import { UserSchema } from "./schema"
import { deleteUser } from "./data"
import { EditDialog } from "./EditDialog"
import { DialogItem } from "./DialogItem"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // EL TIPO DE DATO
  const user = UserSchema.parse(row.original)

  // FUNCIONES DE LAS ACCIONES
  const handleDelete: React.MouseEventHandler<HTMLDivElement> = async (event) => {
    // BORRAMOS EL USUARIO
    await deleteUser(user)
  };

  const [open, setOpen] = React.useState(false);
  const  handleEdit: React.MouseEventHandler<HTMLDivElement> = async (event) => {
    //event.preventDefault()
    // setOpen(true)
    console.log("hola")
  }
  console.log(row.original)
  console.log(user)
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
        <EditDialog user={user} />
        {/* </DropdownMenuItem> */}
        

        {/* <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task.label}>
              {labels.map((label) => (
                <DropdownMenuRadioItem key={label.value} value={label.value}>
                  {label.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator /> */}
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
