import React from 'react';
import { Flex, Box, Text, Button, Checkbox, Stack, Badge } from "@chakra-ui/react"


function Main() {
    return (
        <Flex w='100vw' h='100vh' bg='#f0f0f0' align='center' justify='center'>
            <Box width='40rem' p='2rem' bg='white' borderRadius='10' boxShadow='xl' border='3px solid #ededed'>
                {/* Header */}
                <Flex w='100%' justify='space-between' marginBottom='2rem'>
                    <Text fontSize='3xl'>Todo</Text>
                    <Button size='md'>Criar uma Tarefa</Button>
                </Flex>

                {/* Tasks */}
                <Flex w='100%' direction='column'>
                    <Stack spacing={5}>

                        <Checkbox w='100%' size='lg' border='3px solid #ededed' borderRadius='10' p='1rem' colorScheme='green'>
                            <Text fontSize='2xl' fontWeight='bold'>Tarefa teste</Text>
                            <Text>descrição teste</Text>

                            <Box pos='absolute' right='5' top='40%'>
                                <Stack direction='row' spacing='5'>
                                    <Badge>Teste</Badge>
                                    <Badge>Teste</Badge>
                                    <Badge>Teste</Badge>
                                </Stack>
                            </Box>
                        </Checkbox>

                    </Stack>

                    {/* Concluídos */}

                    <Text fontSize='lg' fontWeight='semibold' margin='2rem 0'>Concluídos</Text>

                    <Stack spacing={5}>

                        <Checkbox w='100%' size='lg' border='3px solid #ededed' borderRadius='10' p='1rem' colorScheme='green' isDisabled defaultChecked>
                            <Text fontSize='2xl' fontWeight='bold' as='s'>Tarefa teste</Text>
                            <br />
                            <Text as='s'>descrição teste</Text>

                            <Box pos='absolute' right='5' top='40%'>
                                <Stack direction='row' spacing='5'>
                                    <Badge>Teste</Badge>
                                    <Badge>Teste</Badge>
                                    <Badge>Teste</Badge>
                                </Stack>
                            </Box>
                        </Checkbox>
                        
                    </Stack>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Main;