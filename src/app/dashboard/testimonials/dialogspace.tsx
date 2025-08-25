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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

type TestimonialEmbedDialogProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    testimonialId: string;
};

export const TestimonialEmbedDialog: React.FC<TestimonialEmbedDialogProps> = ({
    open,
    setOpen,
    testimonialId,
}) => {
    const [copied, setCopied] = useState(false);
    
    const embedCodes = {
        nextjs: `import TestimonialCard from '@/components/TestimonialCard'

export default function Page() {
  return (
    <TestimonialCard testimonialId="${testimonialId}" />
  )
}`,
        react: `import { useEffect } from 'react';

function TestimonialCard() {
  useEffect(() => {
    // Initialize testimonial widget
    const script = document.createElement('script');
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.iFrameResize(
        { log: false, checkOrigin: false },
        "#testimonial-${testimonialId}"
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="testimonial-${testimonialId}"
      src="https://embed-v2.testimonial.to/w/${testimonialId}"
      style={{ width: '100%', border: 'none' }}
      scrolling="no"
    />
  );
}`,
        html: `<script src="https://testimonial.to/js/iframeResizer.min.js"></script>
<iframe 
  id="testimonial-${testimonialId}"
  src="https://embed-v2.testimonial.to/w/${testimonialId}"
  frameborder="0"
  scrolling="no"
  width="100%"
></iframe>
<script>
  iFrameResize(
    {log: false, checkOrigin: false},
    "#testimonial-${testimonialId}"
  );
</script>`
    };

    const handleCopy = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px] bg-gray-900 border-gray-800 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-white">
                        Embed Your Testimonial
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                        Choose your preferred framework and copy the code to embed the testimonial.
                    </DialogDescription>
                </DialogHeader>

                <Tabs defaultValue="nextjs" className="w-full">
                    <TabsList className="grid grid-cols-3 bg-gray-800">
                        <TabsTrigger value="nextjs">Next.js</TabsTrigger>
                        <TabsTrigger value="react">React</TabsTrigger>
                        <TabsTrigger value="html">HTML</TabsTrigger>
                    </TabsList>
                    {Object.entries(embedCodes).map(([key, code]) => (
                        <TabsContent key={key} value={key}>
                            <div className="relative">
                                <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm text-gray-300">
                                    <code>{code}</code>
                                </pre>
                                <Button
                                    onClick={() => handleCopy(code)}
                                    className={`absolute top-2 right-2 ${
                                        copied 
                                            ? 'bg-green-600 hover:bg-green-700' 
                                            : 'bg-gray-700 hover:bg-gray-600'
                                    }`}
                                    size="sm"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="w-4 h-4 mr-1" /> Copied
                                        </>
                                    ) : (
                                        'Copy'
                                    )}
                                </Button>
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

               
            </DialogContent>
        </Dialog>
    );
};

export default TestimonialEmbedDialog;