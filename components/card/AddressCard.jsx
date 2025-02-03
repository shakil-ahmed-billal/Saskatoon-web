import { PhoneCall } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Building2 } from "lucide-react"

const AddressCard = ({ item }) => {

    const { title, address, phone, telephone, location } = item || {}

    return (
        <div>
            <Card className="bg-light-color">
                <CardHeader>
                    <CardTitle className="flex items-center ga-3"><Building2 />{location}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="py-5">{address}</CardDescription>

                    <p>View on map</p>
                    <h1 className="flex items-center gap-3 my-3 "><PhoneCall />{phone}</h1>
                    <h1 className="flex items-center gap-3"><Building2 />{telephone}</h1>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddressCard