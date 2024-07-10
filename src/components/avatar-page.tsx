import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const AvatarPage = () => {
    return (
        <div className="h-[500px] flex justify-center items-center">
            <Avatar >
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>

    )
}

export default AvatarPage