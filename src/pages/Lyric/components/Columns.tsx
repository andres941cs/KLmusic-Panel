import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../../components/UI/Button"
import { Badge } from "../../../components/UI/Badge"
import { Checkbox } from "../../../components/UI/Checkbox"
 import { Lyric } from "../data/schema"
import { DataTableColumnHeader } from "../../Artist/components/DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import React from "react"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// INTERFACE

/* COLUMNDAS DE LA TABLA AJUSTAR*/
export const Columns: ColumnDef<Lyric>[] = [
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
    accessorKey: "lyric",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lyric" />
    ),
    cell: ({ row }) => {
      const lyric = row.getValue("lyric").toString();
      const showLyric =lyric.slice(0, 100);
      return (
        <div className="flex space-x-2">
          
          <span className="max-w-[500px] truncate font-medium">
            {showLyric}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "lyric_romaji",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lyric Romaji" />
    ),
    cell: ({ row }) => {
      const lyric_romaji = row.getValue("lyric_romaji").slice(0, 100);
    return (
        <div className="flex items-center">
          <span>{lyric_romaji}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "url",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Url" />
    ),
    cell: ({ row }) => {
    return (
        <div className="flex items-center">
          <span>{row.getValue('url')}</span>
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