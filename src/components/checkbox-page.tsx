import { Checkbox } from "@/components/ui/checkbox";

import { useState } from 'react';
import { Badge } from "./ui/badge";

const CheckboxPage = () => {
  const [terms, setTerms] = useState(false)
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms"
        onCheckedChange={(value: boolean) => setTerms(value)}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      {terms
        ? <Badge>Great!</Badge>
        : <Badge variant="destructive" >Warning!</Badge>}

    </div>
  )
}

export default CheckboxPage