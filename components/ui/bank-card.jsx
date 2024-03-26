import {
    CardHeader,
    Card,
    CardFooter,
    CardBody
} from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { CloseIcon } from "@/icons/close-icon"

export const BankCard = ({ bankName, description, age, url, onDelete }) => {
    return (
        <Card
            shadow="none"
            className="w-full h-full p-0 border border-neutral-100 shadow-md shadow-neutral-100 flex flex-col relative overflow-hidden"
        >

            <CardBody
                className="overflow-hidden flex flex-col gap-1 relative"
            >
                <div
                    className="w-full h-auto flex absolute justify-end pr-4 pb-4"
                >
                    <Button
                        size="sm"
                        variant="light"
                        isIconOnly
                        onPress={onDelete}
                    >
                        <CloseIcon />
                    </Button>
                </div>
                <div
                    className="w-full h-full flex flex-col md:flex-row gap-4 md:justify-start items-start md:items-center md:p-4"
                >
                    <div
                        className="flex justify-center items-center w-[50px] md:w-[100px] h-[50px] relative overflow-hidden  rounded-full md:rounded-md"
                    >
                        <img
                            src={url}
                            alt={bankName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        className="w-full h-auto flex flex-col gap-1 justify-center items-start"
                    >
                        <h4
                            className="text-xl md:text-2xl font-semibold text-neutral-800"
                        >
                            {bankName}
                        </h4>
                        <div
                            className="flex flex-col gap-1"
                        >
                            <p
                                className="text-neutral-400 text-tiny"
                            >
                                {description}
                            </p>
                            <p
                                className="text-neutral-400 text-tiny"
                            >
                                Antiguedad {age}
                            </p>
                        </div>
                    </div>
                </div>
            </CardBody>

        </Card>
    )
}