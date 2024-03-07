import { Label } from "@radix-ui/react-dropdown-menu"
import { Button } from "../../../components/UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/UI/Dialog"
import { Input } from "../../../components/UI/Input"
import { useForm } from "react-hook-form"


export function SongDialog() {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const URL ="http://127.0.0.1:8000/api/song";
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
        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
        });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Insert Song</Button>
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
            <Input id="name" {...register("name")} placeholder="Name Song" className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="duration" className="text-right">
              Duration
            </Label>
            <Input id="duration" {...register("duration")} placeholder="Duration" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genre" className="text-right">
              Genre
            </Label>
            <Input id="genre" {...register("genre")} placeholder="Genre" className="col-span-3" />
          </div>
        
        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
