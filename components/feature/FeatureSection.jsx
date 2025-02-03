import featureData from "@/utils/featureData"
import DefaultCard from "../card/DefaultCard"

const FeatureSection = () => {
  return (
    <div className='max-w-[1400px] mx-auto mb-20'>
      <p className='text-3xl font-bold text-center py-10'>Featured Stories</p>
      <div className="w-8/12 mx-auto grid md:grid-cols-3 gap-5">
        {featureData?.map(data => <DefaultCard key={data.id} data={data}></DefaultCard>)}
      </div>
    </div>
  )
}

export default FeatureSection