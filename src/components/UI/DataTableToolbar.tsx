"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Button } from "./Button"
import { Input } from "./Input"
import { DataTableViewOptions } from "./DataTableViewOptions"
import { ReactNode } from "react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>,
  children?: ReactNode
}

export function DataTableToolbar<TData>({
  table,children
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().globalFilter.length > 0
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* FILTROS */}
        <Input
          value={table.getState().globalFilter ?? ''}
          // className="max-w-sm"
          className="h-8 w-[150px] lg:w-[250px]"
          placeholder="Search all columns..."
          onChange={event => table.setGlobalFilter(event.target.value)}
        />
        {children}
        {/* Reset Filters */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => {
              table.resetColumnFilters()
              table.setGlobalFilter('')
            }}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
