import { Label } from "../../components/UI/Label"
import { Button } from "../../components/UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/UI/Dialog"
import { Input } from "../../components/UI/Input"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Checkbox } from "../../components/UI/Checkbox"

export function ArtistDialog() {
  const {
    register,
    handleSubmit,
    setValue ,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    const URL ="http://127.0.0.1:8000/api/artist";
      const PARAMS = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }
      fetch(URL,PARAMS)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setOpen(false);
        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
        });
    
  }
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setValue('verified', !isChecked? 1 : 0);
    setIsChecked(!isChecked);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2" variant="outline"><PlusCircledIcon/>Insert Song</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>INSERT SONG</DialogTitle>
          <DialogDescription>
            Fill this form to create a song. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" {...register("name")} placeholder="Name Artist" className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input id="country" {...register("country")} placeholder="Country" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isVerified" className="text-right">
              Verified
            </Label>
            {/* <input id="isVerified" {...register("isVerified")} type="checkbox" checked={isChecked} onChange={handleChange} /> */}
            <Checkbox  id="isVerified" {...register("verified")} value={0}  onCheckedChange={handleChange}/>
          </div>
        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
