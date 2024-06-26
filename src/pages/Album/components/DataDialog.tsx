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
import { useToast } from "../../../components/UI/UseToast"
import { API_URL } from "@utils/constants"


export function DataDialog({name,schema,data}) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm()
  const campos = Object.keys(schema.shape);
  const filteredCampos = campos.filter((campo) => campo !== 'id');
  const { toast } = useToast();
  const onSubmit = (element) => {
    console.log(element);
    const URL = `${API_URL}${name}${data ? `/${data.id}` : ''}`;
    const formData = new FormData();
    formData.append('name', element.name);
    formData.append('release_date', element.release_date);
    formData.append('genre', element.genre);
    formData.append('id_artist', element.id_artist);
    // formData.append('image', element.image);
    if(!data)formData.append('image', element.image[0]);
    const PARAMS = {
      method: data ? 'PUT' : 'POST',
      headers: data && { 'Content-Type': 'application/x-www-form-urlencoded' },
      body:data?new URLSearchParams(element).toString():formData
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
          toast({
            variant: "success",
            title: "SUCCESS",
            description: `The ${name} was ${data?'edited':'inserted'} successfully`,
          })
          setOpen(false);
      })
      .catch(error => {
          console.error("Error during fetch operation:", error);
          toast({
            variant: "destructive",
            title: "ERROR",
            description: 'error',
          })
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
        {!data &&
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-foreground text-right">
              Image
            </Label>
            <Input id="image" {...register("image")}  type="file" accept="image/*"  className="file:text-muted-foreground col-span-3" />
          </div>
        }
        
        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
