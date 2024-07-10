import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
  
const AlertDialogPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className='grid grid-cols-2 gap-4'>
    <AlertDialog 
    open={dialogOpen} 
    // onOpenChange={open =>  console.log({open})}
    onOpenChange={(open)=> setDialogOpen(open)}
    >
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel onClick={()=>console.log('Cancel')}>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={()=>console.log('Continue')}>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  <Button onClick={()=> setDialogOpen(true)}>Open Dialog Manually</Button>
  </div>
  )
}

export default AlertDialogPage