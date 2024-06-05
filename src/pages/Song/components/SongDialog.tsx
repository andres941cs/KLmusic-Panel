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
import { API_URL } from "@utils/constants"


export function SongDialog({data}) {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (song) => {
    // PERSONALIZAR EL ENVIO
    const formData = new FormData();
    formData.append('name', song.name);
    formData.append('duration', song.duration);
    formData.append('genre', song.genre);
    formData.append('id_artist', song.id_artist);
    if(!data)formData.append('image', song.image[0]);

    const URL = `${API_URL}song${data ? `/${data.id}` : ''}`;
      const PARAMS = {
        method: data ? 'PUT' : 'POST',
        headers: data && { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data?new URLSearchParams(song).toString():formData
      }
      fetch(URL,PARAMS)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(song => {
            console.log(song);
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
          data?<DialogMenuItem>Edit</DialogMenuItem>:<Button variant="outline">Insert Song</Button>
        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">{data?'EDIT SONG':'INSERT SONG'}</DialogTitle>
          <DialogDescription>
            Fill this form to {data?'edit':'insert'} a song. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="text-foreground grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-foreground text-right">
              Name
            </Label>
            <Input id="name" {...register("name")} placeholder="Name Song" defaultValue={data?data.name:''} className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
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
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="id_artist" className="text-foreground text-right">
              ID Artist
            </Label>
            <Input id="id_artist" {...register("id_artist")} placeholder="Id Artist" defaultValue={data && data.id_artist || ''} className="col-span-3" />
          </div>
          {!data &&
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-foreground text-right">
              Image
            </Label>
            <Input id="image" {...register("image")}  type="file"  className="file:text-muted-foreground col-span-3" />
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
