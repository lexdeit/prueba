import {
    CardHeader,
    Card,
    CardFooter
} from "@nextui-org/card";
import { Button, Skeleton } from "@nextui-org/react";

export const BankCardSkeleton = () => {
    return (
        <Card
            shadow="none"
            className="p-4 border border-neutral-100 shadow-md shadow-neutral-100 h-44"
        >

            <CardHeader>
                <div
                    className="w-full h-full flex gap-4 justify-start items-center"
                >
                    <div
                        className="flex justify-center items-center w-[100px] h-[50px] relative overflow-hidden rounded-md"
                    >
                        <Skeleton className="rounded-lg w-[100px] h-[50px]">
                            bankImage
                        </Skeleton>
                    </div>

                    <div
                        className="w-full h-auto flex flex-col gap-1 justify-center items-start"
                    >
                        <Skeleton className="rounded-full w-full">
                            <h4
                                className="text-xl"
                            >
                                bankName
                            </h4>
                        </Skeleton>
                        <Skeleton className="rounded-full">
                            <p
                                className="text-sm"
                            >
                                bankDescription
                            </p>
                        </Skeleton>
                    </div>
                </div>
            </CardHeader>

            <CardFooter>
                <div
                    className="w-full flex gap-2 justify-end"
                >
                    <Skeleton className="rounded-full">
                        <Button size="sm">
                            Eliminar
                        </Button>
                    </Skeleton>

                    <Skeleton className="rounded-full">
                        <Button size="sm">
                            Seleccionar
                        </Button>
                    </Skeleton>
                </div>
            </CardFooter>

        </Card>
    )
}