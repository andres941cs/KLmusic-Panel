import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
} from "@components/UI/Dialog"
import { DropdownMenuItem } from "@components/UI/DropdownMenu"

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
}