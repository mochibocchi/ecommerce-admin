// A modal is a UI window that sits on top of the main page,
// with the main page background often being blurred.
// In Next.js, this is usually a new page.tsx that sits on top
// // of the main page.tsx, blurring out the contents of main page.tsx
// This feature is particularly useful if you want to show the 
// user content from another route while keeping them on the same page.

// An example of this is when you click on an image, then the image pops 
// up over the main page without redirecting you to another page just to 
// display the image; this is also known as route interception

"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog" // same ./dialog; 

// Below is setting the properties inside Modal. The ? indidates that
// you can create an object of type ModalProps without providing a
// children property.

interface ModalProps {
    title: string;
    description: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

// Export allows other files to have access to this react component:
export const Modal: React.FC<ModalProps> = ({
    title,
    description,
    isOpen,
    onClose,
    children
}) => {
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
    )
}

