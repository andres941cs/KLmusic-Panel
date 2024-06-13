import { Label } from "@components/UI/Label"
import { Button } from "@components/UI/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog"
import { Input } from "@components/UI/Input"
import { useForm } from "react-hook-form"
import { API_URL } from "@utils/constants"
import { useState } from "react"
import { User } from "@schemas/UserSchema"

interface IEditDialog { user: User }
export function EditDialog({user}:IEditDialog) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log(user)
  /* EVENTO DEL FORMULARIO */
  const onSubmit = (data:User) => {
    const URL =`${API_URL}user/${user.id}`;
      const PARAMS = {
        method: 'PUT',
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


  // ESTADO DEL DIALOG{...props} 
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <p className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent focus:text-accent-foreground">
          Edit
        </p>
        {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">EDIT SONG</DialogTitle>
          <DialogDescription>
            Fill this form to edit a song. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(()=>onSubmit)} className="text-foreground grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Username
            </Label>
            <Input id="name" {...register("username")} defaultValue={user.username} className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className=" text-right">
                Email
            </Label>
            <Input id="email" {...register("email")} defaultValue={user.email} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
                Role
            </Label>
            <Input id="role" {...register("role")}  defaultValue={user.role} className="col-span-3" />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
                Password
            </Label>
            <Input id="password" type="password" {...register("password")}  value={user.password} className="col-span-3" />
          </div> */}

        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Edit</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
