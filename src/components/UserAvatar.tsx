import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserAvatar = () => {
  return (
    <Avatar className="my-2 h-6 w-6 justify-center">
      <AvatarImage src="https://github.com/shadcn.png" alt="profile picture" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
