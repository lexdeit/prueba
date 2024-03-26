import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { TrashIcon } from "@/icons/trash-icon";
import { useState } from "react";

export const DeleteModal = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                size="sm"
                color="danger"
                variant="light"
                radius="full"
                startContent={<TrashIcon />}
                onPress={onOpen}
            >Eliminar</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Confirmar Eliminación</ModalHeader>
                            <ModalBody>
                                <p
                                    className="text-neutral-500 text-sm"
                                >
                                    ¿Estás seguro de que deseas eliminar este elemento?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    color="danger"
                                    onPress={onClose}
                                    startContent={<TrashIcon />}
                                    variant="light"
                                >
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
