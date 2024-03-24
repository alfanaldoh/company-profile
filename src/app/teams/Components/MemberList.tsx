import { result } from "@/types/result.types";
import Image from "next/image";
import { GetRandomUser } from "./GetRandomUser";


const MemberList = async () => {
    const { results } = await GetRandomUser();
    console.log(results);

    return (
        <div className="mx-10 mt-10 pb-10 md:pb-0">
            <div className='bg-black px-4 md:px-24 md:bg-opacity-15 md:flex md:items-center md:justify-center rounded-lg'>
                <div className='flex max-md:flex-col justify-center items-center p-4 md:p-0 md:grid md:grid-cols-4 gap-x-6 gap-y-6 rounded-md'>
                    {results.map((result : result) => (
                        <div className="relative min-w-[225px] max-w-[100px] w-full aspect-[15/17]">
                            <Image
                                src={result.picture.large}
                                alt="Team"
                                fill
                                className="object-cover rounded-lg"
                            />
                            <div className='flex flex-col gap-1 bg-black/50 backdrop-blur absolute bottom-0 lift-0 px-4 py-2 w-full'>
                                <h3 className="text-white text-left font-bold text">
                                    {result.name.first}{result.name.last}
                                </h3>
                                <h3 className="text-white text-left">
                                    {result.email}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MemberList