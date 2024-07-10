import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const ToastPage = () => {
  const { toast } = useToast()
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again"
            onClick={() => {console.log("Trying again...")}}
            >Try again</ToastAction>,
          })
        }}
      >
        Default
      </Button>

      {/* Destructive */}
      <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
     Destructive
    </Button>
    {/* Success */}
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "success",
          title: "Success!",
          description: "Your request was successful.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      }}
    >
     Success
    </Button>
    </div>
  )
}

export default ToastPage