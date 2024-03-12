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
import { API_URL } from "../../utils/constantes"


export function UserDialog(user) {
  const {
    register,
    handleSubmit,
    setValue ,
    formState: { errors },
  } = useForm()
  /* EVENTO DEL FORMULARIO */
  const onSubmit = (data) => {
    console.log(data)
    const URL =`${API_URL}user`;
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
            setOpen(false);

        })
        .catch(error => {
            console.error("Error during fetch operation:", error);
        });
    
  }
  // CREATE RANDOM PASSWORD
  function randomPassword() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const length = 8;
    const generetePassword =  Array.from({length} , () => charset[Math.floor(Math.random() * charset.length)]).join('');
    setValue('password',generetePassword)
  }
  

  // ESTADO DEL DIALOG
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-2" variant="outline"><PlusCircledIcon/>Insert User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-foreground">INSERT SONG</DialogTitle>
          <DialogDescription>
            Fill this form to create a song. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="text-foreground grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
                Username
            </Label>
            <Input id="name" {...register("username")} placeholder="Username" className="col-span-3" />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className=" text-right">
                Email
            </Label>
            <Input id="email" {...register("email")} placeholder="Email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="role" className="text-right">
                Role
            </Label>
            <Input id="role" {...register("role")} placeholder="Role" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Button type="button" onClick={randomPassword}>
                Password
            </Button>
            <Input id="password" type="password" {...register("password")} placeholder="Password" className="col-span-3" />
          </div>

        <DialogFooter>
          <Button className=" bg-gray-600 rounded-md hover:bg-gray-600/90" type="submit">Save</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
