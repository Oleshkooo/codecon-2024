import { Facebook, Instagram, Pencil, Twitter } from "lucide-react"



function GuestProfile() {
  return (
    <div>
      <div className="w-[90%] m-auto flex flex-col justify-center">
        <img src="https://github.com/shadcn.png" alt="person photo" className="h-80 mt-5 rounded-[12px] w-[365px] m-auto" />
        <div className="m-auto pl-2 w-[375px] flex- justify-center flex-col">
          <h2 className="text-[20px] font-bold mt-5">Sviatoslav Nakonechiy</h2>
          <p className="text-[14px]">Lviv, Domazhyr</p>
          <p className="text-[14px]">25.12.2004</p>
          <div className="border-[1px] border-gray-400 rounded-xl max-w-lg mt-3">
          <div className="p-2 border-b-[1px] border-gray-400 flex flex-row-reverse justify-between"><Instagram/><span><a>@savapedrogonza</a></span></div>
          <div className="p-2 border-b-[1px] border-gray-400 flex flex-row-reverse justify-between"><Facebook/><span>Nakoneckniy Sviatoslav</span></div>
          <div className="p-2 flex justify-between flex-row-reverse"><Twitter/>Sviatyc</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GuestProfile