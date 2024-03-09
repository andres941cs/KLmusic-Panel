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
import { Input } from "../../../components/UI/Input"
import { useForm } from "react-hook-form"
import React from "react"


export function DataDialog({name,schema,data}) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm()
  const campos = Object.keys(schema.shape);
  const filteredCampos = campos.filter((campo) => campo !== 'id');

  const onSubmit = (element) => {
    const URL = `http://127.0.0.1:8000/api/${name}${data ? `/${data.id}` : ''}`;
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
          
          {/*<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-foreground text-right">
              Duration
            </Label>
            <Input id="duration" {...register("duration")} placeholder="Duration" defaultValue={data?data.duration:''} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-foreground text-right">
              Genre
            </Label>
            <Input id="genre" {...register("genre")} placeholder="Genre" defaultValue={data && data.genre || ''} className="col-span-3" />
          </div> */}
        
        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
