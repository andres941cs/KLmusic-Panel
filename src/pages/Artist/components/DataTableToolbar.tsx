"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "../../../components/UI/Button"
import { Input } from "../../../components/UI/Input"
import { DataTableViewOptions } from "./DataTableViewOptions"

import { priorities, statuses } from "../data/data"
import { DataTableFacetedFilter } from "./DataTableFacetedFilter"
import React from "react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>,
  children?
}

export function DataTableToolbar<TData>({
  table,children
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().globalFilter.length > 0
  // const [globalFilter, setGlobalFilter] = React.useState('')
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* <Input
          placeholder="Filter By Name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        /> */}
        <Input
          value={table.getState().globalFilter ?? ''}
          // className="max-w-sm"
          className="h-8 w-[150px] lg:w-[250px]"
          placeholder="Search all columns..."
          onChange={event => table.setGlobalFilter(event.target.value)}
          // onChange={event => setGlobalFilter(event.target.value)}
        />
        {children}
        {/* FILTROS */}
        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
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
