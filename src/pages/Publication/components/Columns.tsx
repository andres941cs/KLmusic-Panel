import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../../../components/UI/Button"
import { Badge } from "../../../components/UI/Badge"
import { Checkbox } from "../../../components/UI/Checkbox"
 import { Publication } from "../data/schema"
import { DataTableColumnHeader } from "../../Artist/components/DataTableColumnHeader"
import { DataTableRowActions } from "./DataTableRowActions"
import React from "react"
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
// INTERFACE

/* COLUMNDAS DE LA TABLA AJUSTAR*/
export const Columns: ColumnDef<Publication>[] = [
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
    accessorKey: "text",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Text" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2 truncate">
            {row.getValue("text").toString().slice(0, 20)}
        </div>
      )
    },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Is Published" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
            {row.getValue("isPublished")}
        </div>
      )
    },
  },
  {
    accessorKey: "publication_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Publication Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
            {row.getValue("publication_date")}
        </div>
      )
    },
  },
  // {
  //   accessorKey: "genre",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Genre" />
  //   ),
  //   cell: ({ row }) => {
  //   return (
  //       <div className="flex items-center">
  //         <span>{row.getValue('genre')}</span>
  //       </div>
  //     )
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id))
  //   },
  // },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },


  ]