import featureData from "@/utils/featureData"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

const LatestSection = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <p className="text-3xl font-bold text-center py-14">The Latest at a SOSDS</p>
            <div className="grid grid-cols-3 gap-5">
                {featureData?.map(data => <>
                    <div key={data?.id} className="">
                        <Card>
                            <img className="w-full object-cover" src={data?.image} alt="" />
                            <CardHeader>
                                <CardTitle>{data?.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{data?.description}</CardDescription>
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