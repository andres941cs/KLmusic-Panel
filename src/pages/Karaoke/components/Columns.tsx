import { ColumnDef } from "@tanstack/react-table"
import { DataTableRowActions } from "./DataTableRowActions"
import { Karaoke } from "@schemas/KaraokeSchema"
import { DataTableColumnHeader } from "@pages/Artist/components/DataTableColumnHeader"
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
    accessorKey: "publication_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Publication Date" />
    ),
    cell: ({ row }) => {
    return (
        <div className="flex items-center">
          <span>{row.getValue('publication_date')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Published" />
    ),
    cell: ({ row }) => {
    return (
        <div className="flex items-center">
          <span>{row.getValue('isPublished')}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
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