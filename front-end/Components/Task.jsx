import React from 'react';
import { Box, Text, Checkbox, Stack, Tag } from "@chakra-ui/react"

function Task(props) {
    const tags = props.tags

    if(props.status == '0'){
        return (
            <Checkbox w='100%' size='lg' border='3px solid #ededed' borderRadius='10' p='1rem' colorScheme='green' onChange={props.action}>
                <Text fontSize='2xl' fontWeight='bold'>{props.title}</Text>
                <Text>{props.date}</Text>

                <Box pos='absolute' right='5' top='40%'>
                    <Stack direction='row' spacing='5'>
                        {
                            tags?.map((i) => {
                                return(
                                    <>
                                        <Tag size='md' borderRadius='full' variant='solid' colorScheme='green'>{i}</Tag>
                                    </>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Checkbox>
        );
    } else if(props.status == '1') {
        return(
            <Checkbox w='100%' size='lg' border='3px solid #ededed' borderRadius='10' p='1rem' colorScheme='green' isDisabled defaultChecked>
                <Text fontSize='2xl' fontWeight='bold' as='s'>{props.title}</Text>
                <br />
                <Text as='s'>{props.date}</Text>

                <Box pos='absolute' right='5' top='40%'>
                    <Stack direction='row' spacing='5'>
                        {
                            tags?.map((i) => {
                                return(
                                    <>
                                        <Tag size='md' borderRadius='full' variant='solid' colorScheme='green'>{i}</Tag>
                                    </>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Checkbox>
        );
    }
}

export default Task;