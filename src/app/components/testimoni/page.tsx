import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GetRandomUser } from "@/app/teams/Components/GetRandomUser";

const Testimoni = () => {
  return (
    <div className="md:h-[100vh] bg-[#E7EB5D] border-black border-t-2 w-full">
      <h1 className="text-center md:pt-8 md:text-4xl text-2xl font-bold">
        What People Say
      </h1>
      <div className="md:w-[1300px] md:h-[85vh] bg-black md:mt-5 mx-auto bg-opacity-20 rounded-md flex gap-10 justify-center items-center flex-col p-4 ">
        <div className="md:w-[750px] md:h-[10vh] rounded-lg bg-gray-100 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Avatar className="md:w-[50px] md:h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>-Albert Einstein</h1>
          </div>
          <p className="ml-4">"Saya telah mengikuti sosialisasi dan hasilnya sangat bagus"</p>
        </div>
        <div className="md:w-[750px] md:h-[10vh] rounded-lg bg-gray-100 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Avatar className="md:w-[50px] md:h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>-Albert Einstein</h1>
          </div>
          <p className="ml-4">"Saya telah mengikuti sosialisasi dan hasilnya sangat bagus"</p>
        </div>
        <div className="md:w-[750px] md:h-[10vh] rounded-lg bg-gray-100 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Avatar className="md:w-[50px] md:h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>-Albert Einstein</h1>
          </div>
          <p className="ml-4">"Saya telah mengikuti sosialisasi dan hasilnya sangat bagus"</p>
        </div>
        <div className="md:w-[750px] md:h-[10vh] rounded-lg bg-gray-100 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Avatar className="md:w-[50px] md:h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>-Albert Einstein</h1>
          </div>
          <p className="ml-4">"Saya telah mengikuti sosialisasi dan hasilnya sangat bagus"</p>
        </div>
        <div className="md:w-[750px] md:h-[10vh] rounded-lg bg-gray-100 flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <Avatar className="md:w-[50px] md:h-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1>-Albert Einstein</h1>
          </div>
          <p className="ml-4">"Saya telah mengikuti sosialisasi dan hasilnya sangat bagus"</p>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
