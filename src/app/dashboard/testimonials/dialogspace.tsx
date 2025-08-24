import { type Dispatch, type SetStateAction, useState } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"


type TestimonialEmbedDialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    embedCode: string;
};

export const TestimonialEmbedDialog: React.FC<TestimonialEmbedDialogProps> = ({
    open,
    setOpen,
    embedCode,
}) => {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(embedCode);
        } catch (err) {
            // fallback or error handling
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-gray-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-white">
                        Embed Your Testimonial
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        To embed your testimonial on your website, copy the code below and paste it into your website's HTML where you want the testimonial to appear.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                    <pre className="relative bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-gray-300">
                        {embedCode}
                        <Button
                            onClick={handleCopy}
                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600"
                            size="sm"
                        >
                            Copy
                        </Button>
                    </pre>
                </div>

                <DialogFooter className="gap-2">
                    <DialogClose asChild>
                        <Button
                            variant="outline"
                            className="bg-transparent border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all"
                        >
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TestimonialEmbedDialog;