import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
} from "../../components/UI/Dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/UI/DropdownMenu"
import { Label } from "../../components/UI/Label"
import { Button } from "../../components/UI/Button"

interface Props
{
  triggerChildren:string

}
export function DialogItem(props, forwardedRef) {
  const { triggerChildren, children, onOpenChange, ...itemProps } = props;
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <DropdownMenuItem
          // {...itemProps}
          // ref={forwardedRef}
        >
          <p>{triggerChildren}</p>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="DialogOverlay" />
        <DialogContent className="DialogContent">
          {children}

        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};