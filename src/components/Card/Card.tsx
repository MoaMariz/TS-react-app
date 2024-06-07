import { Box, Center, Input } from "@chakra-ui/react"
import { BtnLogin } from "./Button/Button"
import { Header } from "./Header/Header"

export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#874f88'>
      <Header/>
      <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='1rem' margin="2rem" >
        <Center mt='1rem'>
          <h1>Bem vindo(a)!</h1>
        </Center>
        <Input mt='1rem' placeholder="email" />
        <Input mt='1rem' placeholder="password" />
        <Center mt='1rem'>
          <BtnLogin />
        </Center>
      </Box>
    </Box>
  )
}