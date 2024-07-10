import React from 'react'
import { toast } from "sonner"
import { Button } from './ui/button'

const SonnerPage = () => {
  return (
    <div className='grid grid-cols-4 gap-2'>
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          duration: 5000,
          position: "top-right",
          description: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()
          } ${new Date().toLocaleTimeString('es-ES')}`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast
    </Button>
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Event has been created", {
          className: "bg-green-500 text-white",
          duration: 5000,
          position: "top-right",
          description: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()
          } ${new Date().toLocaleTimeString('es-ES')}`,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast Success
    </Button>
    </div>
  )
}

export default SonnerPage