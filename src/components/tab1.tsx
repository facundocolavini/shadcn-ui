import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"


const Tab1 = () => {
    return (
        <div><Card>
            <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                    Make changes to your account here. Click save when you're done.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <label htmlFor="name">Name</label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                    <label htmlFor="username">Username</label>
                    <Input id="username" defaultValue="@peduarte" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save changes</Button>
            </CardFooter>
        </Card></div>
    )
}

export default Tab1