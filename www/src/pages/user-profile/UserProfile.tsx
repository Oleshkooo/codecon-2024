import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Pencil, Twitter } from "lucide-react"
import { useState } from "react";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('Initial bio text');

  const handleDoubleClick = () => {
      setIsEditing(true);
  };

  const handleChange = (event) => {
      setBio(event.target.value);
  };

  const handleBlur = () => {
      setIsEditing(false);
  };  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="relative">
        <Avatar className="m-auto w-40 h-40 relative">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>   
          <div className="w-12 h-12 rounded-full bg-gray-200 transition ease delay-50  hover:bg-gray-300 border-2 border-color-gray-500 bg-opacity-80 absolute right-[23%] flex justify-center items-center bottom-0">
            <Pencil/>
          </div>
      </div>
      <div className="border-2 border-black rounded-xl">
        <div className="p-2 border-b-2 border-black flex justify-between">
          <h2>Full name:</h2>
          <h2>Igor Carlov</h2>
        </div>
        <div className="p-2 border-b-2 border-black flex justify-between">
          <h2>Email:</h2>
          <h2>kazmirchukvitaliy2016@gmail.com</h2>
        </div>
        <div className="p-2 border-b-2 border-black flex justify-between">
          <h2>Location:</h2>
          <h2>Lviv</h2>
        </div>
        <div className="p-2 flex justify-between">
          <h2>Gender:</h2>
          <h2>Man</h2>
        </div>
      </div>
      <div className="border-2 border-black rounded-xl">
        <div className="p-2 border-b-2 border-black flex justify-between"><Instagram/><span><a>@_kazmik_</a></span></div>
        <div className="p-2 border-b-2 border-black flex justify-between"><Facebook/><span>Vitaliy Kazmirchuk</span></div>
        <div className="p-2 flex justify-between"><Twitter/>Kazmik</div>
      </div>
      <div className="border-2 border-black rounded-xl">
      {isEditing ? (
                <Textarea className="rounded-xl p-4 text-base	" value={bio} onChange={handleChange}
                onBlur={handleBlur}
                autoFocus/>
            ) : (
                <h2 className="p-4" onClick={handleDoubleClick}>{bio}</h2>
            )}
      </div>
      <div className="border-2 border-black rounded-xl">
        <div className="p-2 border-b-2 border-black flex justify-between"><Instagram/><span><a>@_kazmik_</a></span></div>
        <div className="p-2 border-b-2 border-black flex justify-between"><Facebook/><span>Vitaliy Kazmirchuk</span></div>
        <div className="p-2 flex justify-between"><Twitter/>Kazmik</div>
      </div>
    </div>
  )
}

export default UserProfile