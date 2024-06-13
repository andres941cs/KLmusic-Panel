import { Label } from "../../../components/UI/Label"
import { Button } from "../../../components/UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMenuItem,
  DialogTitle,
  DialogTrigger,
} from "../../../components/UI/Dialog"

import { useForm } from "react-hook-form"
import React from "react"
import { Input } from "@components/UI/Input"
import { API_URL } from "@utils/constants"
import { z } from "zod"
import { Lyric } from "@schemas/LyricSchema"

interface IDataDialog {
  name: string;
  schema: z.ZodRawShape;
  data: Lyric;
}
export function DataDialog({name,schema,data}:IDataDialog) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm()
  const campos = Object.keys(schema.shape);
  const filteredCampos = campos.filter((campo) => campo !== 'id');

  const onSubmit = (element) => {
    const URL = `${API_URL}${name}${data ? `/${data.id}` : ''}`;
    console.log(element)
      const PARAMS = {
        method: data ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(element)
      }
      fetch(URL,PARAMS)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(element => {
            console.log(element);
            setOpen(false);
        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
        });
  }
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {
          data?<DialogMenuItem>Edit</DialogMenuItem>:<Button className="capitalize" variant="outline">Insert {name}</Button>
        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground uppercase">{data?`EDIT ${name}`:`INSERT ${name}`}</DialogTitle>
          <DialogDescription>
            Fill this form to {data?'edit':'insert'} a {name}. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="text-foreground grid gap-4 py-4">
        {filteredCampos.map((item) => (
        <div  key={item} className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={item} className="text-foreground text-right capitalize">
            {item}
            </Label>
            <Input id={item} {...register(item)} placeholder={item} defaultValue={data?data[item]:''} className="col-span-3" />
        {errors.exampleRequired && <span>This field is required</span>}
        </div>
        ))}
          
        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
