import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"

const DefaultCard = ({ data }) => {

    const { image, title, description } = data

    return (
        <Card className={'h-full'}>
            <img className="w-full rounded-t-lg object-cover" src={image} alt="" />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className={''}>
                <CardDescription >{description}</CardDescription>
            </CardContent>
            <CardFooter>
                <Button>Learn More</Button>
            </CardFooter>
        </Card>
    )
}

export default DefaultCard