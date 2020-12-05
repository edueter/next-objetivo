import Image from 'next/image'
import Link from 'next/link' 

import { AspectRatio, Text, Box, Flex, Grid, IconButton, HStack, Spacer } from '@chakra-ui/react'

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialIconNames = [ <FaYoutube/>, <FaInstagram/>, <FaTwitter/> ]

const ItemsMenu = [
  { 
    nome: "Home",
    href: "/"
  },
  { 
    nome: "Materiais",
    href: "/"
  },
  { 
    nome: "Editais",
    href: "/"
  },
  { 
    nome: "Sobre",
    href: "/"
  },
  { 
    nome: "Contato",
    href: "/"
  },
]


const Header = ({ h, minH }) => {

  const SocialButtons = ({ children }) => {
    return <IconButton colorScheme="black" size="sm"  icon={children} />

  }

  const TopBar = ({ gridArea }) => {
    return (
      <Flex
        gridArea={gridArea} 
        className="header--social--links" 
        px={24} 
        py={2}>
        <Text>Qual o seu objetivo?</Text>
        <Spacer />
        <HStack>
          {SocialIconNames.map((item) => ( <SocialButtons>{item}</SocialButtons>))}
        </HStack>
      </Flex>
    )
  }

  const Brand = ({ gridArea }) => {
    return (
      <Box 
        gridArea={gridArea}
        className="header--logo brand">
        <AspectRatio w="100%" ratio={ 1198 / 317 } >
          <Image src="/images/cover.png" layout="fill"/>
        </AspectRatio>
      </Box>
    )
  }

  const NavBar = ({ gridArea }) => {
    return (
      <Flex 
        gridArea={gridArea}
        className="header--menu nav--bar" 
        as="nav" 
        alignItems="center" 
        h="100%" 
        minH={10} 
        alignSelf="flex-end"
        flexDirection="row" 
        justifyContent="space-around" 
        w="100%" 
        h="2rem">
        {ItemsMenu.map((link) => (<NavLink href={link.href}>{link.nome}</NavLink>))}
      </Flex>
    )
  }
  
  const NavLink = ({ children, href }) => {
    return (
      <Link href={href}>
        <a>
          <Box 
            h="100%" 
            py={2} 
            px={4}
            borderBottomWidth={2}
            borderBottomColor="transparent"
            borderBottomStyle="solid"
            _hover={{ color: "orange.500", borderBottomColor: "orange.500" }}
            >{children}</Box></a>
      </Link>
    )
  }

  return (
    <Grid 
      borderBottom="1px white solid"
      minH={minH}
      h={h}
      className="header"
      templateAreas={["'topbar' 'brand' 'menu'", "'topbar topbar topbar'  '. brand .'  '. menu .'"]}
      >
      <TopBar gridArea="topbar" />
      <Brand gridArea="brand" />
      <NavBar gridArea="menu" />
    </Grid>
  )
}

const Content = ({ h, children }) => {
  return (
    <Box
      h={h}
      bgColor="black.900">
        { children && children || "Body"}
    </Box>
  )
}

const Footer = ({ h, minH, children }) => {
  return (
    <Box
      h={h}
      minH={minH}
      as="footer"
      bgColor="black.900">
        { children && children || "Footer"}
    </Box>
  )
}

const LayoutContainer = ({ children, maxW }) => {
  return (
    <Box 
      as="div" 
      width="100%" 
      maxW={maxW || ["auto", "740px", "920px", "1100px"]} 
      px={[".75rem", "0rem"]}
      mx="auto">
      {children}
    </Box>
  )
}

const Layout = ({ children }) => {
  return (
    <Flex 
      as="main" 
      className="layout"
      w={["fit-content", "100%"]}
      h={["auto", "", "", "100vh"]}
      color="white"
      bgColor="black.900"
      flexDir="column"
      justifyContent="space-between"
      >        
      <Header h="auto" minH="16rem" />
      <Content>
        
          {children}
        
      </Content>
      <Footer minH="auto" minH="4rem" />
      
    </Flex> 
  )
}

export default Layout
export {
  Header,
  Footer,
  LayoutContainer
}