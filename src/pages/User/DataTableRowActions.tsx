import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "../../components/UI/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../components/UI/DropdownMenu"

import { UserSchema } from "../../schemas/UserSchema"
import { deleteUser } from "./data"
import { EditDialog } from "./EditDialog"
import { MouseEventHandler } from "react"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // EL TIPO DE DATO
  const user = UserSchema.parse(row.original)

  // FUNCIONES DE LAS ACCIONES
  const handleDelete: MouseEventHandler<HTMLDivElement> = async () => {
    // BORRAMOS EL USUARIO
    await deleteUser(user)
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
        <EditDialog user={user} />
        
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
