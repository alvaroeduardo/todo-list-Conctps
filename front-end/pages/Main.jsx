import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

import { 
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    FormLabel, 
    Input, 
    Flex, 
    Box, 
    Text, 
    Button, 
    Stack,
    useDisclosure,
    useToast
} from '@chakra-ui/react';

import { updateStatus, inserTaks, deleteOk } from './api/utils';
import Task from '../Components/Task';
import api from './api/config';


function Main() {
    const [dataRes, setData] = useState();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    
    const toast = useToast()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const reloadPage = () => {
        const func = location.reload()
        setTimeout(func, 10000)
    }

    useEffect(() => {
        async function getData(){
            try {
                const response = await api.get('/tasks');

                const data = response.data;

                setData(data)
            } catch (error) {
                console.log(error)
            }
            
        }

        getData()
    }, [])

    async function confirmComplete(data){
        try {
            const idTask = await parseInt(data)

            const dataUpdate = {
                id: idTask,
                status: 1
            }

            toast({
                title: 'Tarefa Concluída.',
                description: "Você concluiu a tarefa com sucesso!.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

            await updateStatus(dataUpdate)
            reloadPage()
        } catch (error) {
            return null
        }
    }

    async function onSubmit(data){
        try {
            toast({
                title: 'Tarefa criada com sucesso.',
                description: "Você criou a tarefa com sucesso.",
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
            await inserTaks(data)
            reloadPage()
        } catch (error) {
            return null
        }
    }

    async function deleteTasks(){
        try {
            await deleteOk();
            reloadPage()
        } catch (error) {
            return null;
        }
    }

    return (
        <Flex w='100%' h='100vh' bg='#f0f0f0' align='center' justify='center'>
            <Box width='40rem' p='2rem' bg='white' borderRadius='10' boxShadow='xl' border='3px solid #ededed'>
                {/* Header */}
                <Flex w='100%' justify='space-between' marginBottom='2rem'>
                    <Text fontSize='3xl'>Todo</Text>
                    <Button size='md' onClick={onOpen}>Criar uma Tarefa</Button>
                </Flex>

                {/* Tasks */}
                <Flex w='100%' direction='column'>
                    <Stack spacing={5}>

                        {
                            dataRes?.map((i, index) => {
                                if(i.status == 0){
                                    const tags = i?.tags.split(" ")

                                    const date = format(new Date(i?.date), 'PPPP')

                                    return (
                                        <Task key={index} title={i.title} date={date} status={i.status} tags={tags} action={() => { confirmComplete(i.id) }}/>
                                    )
                                }
                            })
                        }

                    </Stack>

                    {/* Concluídos */}

                    <Flex direction='row' align='center' justify='space-between'>
                        <Text fontSize='lg' fontWeight='semibold' margin='2rem 0'>Concluídos</Text>

                        <Button colorScheme='red' onClick={deleteTasks}>Apagar todas as tarefas concluídas</Button>
                    </Flex>

                    <Stack spacing={5}>

                        {
                            dataRes?.map((i, index) => {
                                if(i.status == 1){
                                    const tags = i?.tags.split(" ")
                                    const date = format(new Date(i?.date), 'PPPP')

                                    return (
                                        <Task key={index} title={i.title} date={date} status={i.status} tags={tags}/>
                                    )
                                }
                            })
                        }

                    </Stack>
                </Flex>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='right'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Inserir uma nova Tarefa
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormLabel htmlFor='title'>Título</FormLabel>
                                    <Input
                                    ref={firstField}
                                    id='title'
                                    placeholder='Por favor, insira o título'
                                    {...register("title", {})}
                                    />
                                </Box>
                                
                                <Box>
                                    <FormLabel htmlFor='tags'>Tags</FormLabel>
                                    <Input type='text' id='tags' placeholder='Separe as tags por espaço' {...register("tags", {})}/>
                                </Box>

                                <input {...register("status", {})} defaultValue={0} className="noexist"/>

                                <Box>
                                    <FormLabel htmlFor='date'>Data</FormLabel>
                                    <Input type='date' id='date' {...register("date", {})}/>
                                </Box>

                                
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                            Cancelar
                            </Button>
                            <Button colorScheme='green' type='submit'>Inserir</Button>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Main;