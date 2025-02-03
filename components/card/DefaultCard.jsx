import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

const DefaultCard = ({ data }) => {

    const { image, title, description } = data

    return (
        <Card className={'h-[415px] w-[300px] flex flex-col justify-between'}>
            <img className="w-full rounded-t-lg object-cover" src={image} alt="" />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription >{description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button>Learn More</Button>
            </CardFooter>
        </Card>
    )
}

export default DefaultCard