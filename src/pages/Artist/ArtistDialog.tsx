import { Label } from "../../components/UI/Label"
import { Button } from "../../components/UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMenuItem,
  DialogTitle,
  DialogTrigger,
} from "../../components/UI/Dialog"
import { Input } from "../../components/UI/Input"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Checkbox } from "../../components/UI/Checkbox"
import { API_URL } from "../../utils/constantes"

export function ArtistDialog({artist}) {
  const {
    register,
    handleSubmit,
    setValue ,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('country', data.country);
    formData.append('verified', data.verified);
    if(!artist)formData.append('image', data.image[0]);
    console.log(data)
    const URL = `${API_URL}artist${artist ? `/${artist.id}` : ''}`;
      const PARAMS = {
        method: artist ? 'PUT' : 'POST',
        headers: artist && { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:artist?new URLSearchParams(data).toString():formData
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
  const [isChecked, setIsChecked] = useState(artist?artist.verified:false);
  const handleChange = () => {
    setValue('verified', !isChecked? 1 : 0);
    setIsChecked(!isChecked);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
      {
        artist?<DialogMenuItem>Edit</DialogMenuItem>:<Button variant="outline">Insert Artist</Button>
      }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">{artist?'EDIT ARTIST':'INSERT ARTIST'}</DialogTitle>
          <DialogDescription>
            Fill this form to {artist?'edit':'insert'} a artist. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="text-foreground grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-foreground text-right">
              Name
            </Label>
            <Input id="name" {...register("name")} defaultValue={artist?artist.name:''} placeholder="Name Artist" className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-foreground text-right">
              Country
            </Label>
            <Input id="country" {...register("country")} defaultValue={artist?artist.country:''} placeholder="Country" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isVerified" className="text-foreground text-right">
              Verified
            </Label>
            {/* <input id="isVerified" {...register("isVerified")} type="checkbox" checked={isChecked} onChange={handleChange} /> */}
            {/* <Checkbox  id="isVerified" {...register("verified")} value={artist?artist.verified:0} checked={artist?artist.verified:0}   onCheckedChange={handleChange}/> */}
            <Checkbox  id="isVerified" {...register("verified")} value={isChecked?1:0} defaultChecked={isChecked}   onCheckedChange={handleChange}/>
          </div>
          {!artist &&
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
