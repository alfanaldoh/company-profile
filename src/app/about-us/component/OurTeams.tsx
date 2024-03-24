import MemberList from "@/app/teams/Components/MemberList"

const OurTeams = () => {
  return (
    <div className="bg-[#E7EB5D] md:h-[100vh] md:w-full md:border-black md:border-t-2 md:pt-0 pt-10">
        <h1 className="md:text-5xl md:font-semibold md:pt-10 md:pl-10 text-xl md:text-left text-center font-semibold">Team Moral +</h1>
        <div>
            <MemberList/>
        </div>
    </div>
  )
}

export default OurTeams