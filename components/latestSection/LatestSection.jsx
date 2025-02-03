import sodsData from "@/utils/sodsData"
import DefaultCard from "../card/DefaultCard"

const LatestSection = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <p className="text-3xl font-bold text-center py-14 mt-24">The Latest at a SOSDS</p>
            <div className="w-8/12 mx-auto grid md:grid-cols-3 gap-5">
                {sodsData?.map(data => <DefaultCard key={data?.id} data={data}></DefaultCard>)}
            </div>
        </div>
    )
}

export default LatestSection