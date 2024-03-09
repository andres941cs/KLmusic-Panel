import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../../components/UI/Button"
import { Badge } from "../../../components/UI/Badge"
import { Checkbox } from "../../../components/UI/Checkbox"
 import { Karaoke } from "../data/schema"
import { DataTableColumnHeader } from "../../Artist/components/DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import React from "react"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// INTERFACE

/* COLUMNDAS DE LA TABLA AJUSTAR*/
export const Columns: ColumnDef<Karaoke>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" className="text-center w-[80px]"/>
    ),
    cell: ({ row }) => <div className="text-center w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "settings",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Settings" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('settings')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "id_lyric",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID Lyric" />
    ),
    cell: ({ row }) => {
    return (
        <div className="flex items-center">
          <span>{row.getValue('id_lyric')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },


  ]