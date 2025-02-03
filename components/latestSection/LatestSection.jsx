import featureData from "@/utils/featureData"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

const LatestSection = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <p className="text-3xl font-bold text-center py-14">The Latest at a SOSDS</p>
            <div className="w-8/12 mx-auto grid md:grid-cols-3 gap-5">
                {featureData?.map(data => <>
                    <div key={data?.id} className="">
                        <Card className={'h-full'}>
                            <img className="w-full rounded-t-lg object-cover" src={data?.image} alt="" />
                            <CardHeader>
                                <CardTitle>{data?.title}</CardTitle>
                            </CardHeader>
                            <CardContent className={''}>
                                <CardDescription >{data?.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button>Learn More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default LatestSection