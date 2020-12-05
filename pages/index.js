import Head from 'next/head'
import Image from 'next/image' //**  Eu costumo utilizar o componente de Image do Next, não o do Chakra. */
import Link from 'next/link'
import { AspectRatio, Box, Grid, Text } from '@chakra-ui/react'

import Layout, { LayoutContainer } from '../components/layout'

//** Abaixo, eu organizo os cursos em titulo, imagem e link. Dessa forma, evito acumular coisas no Index.  */
const IndexItems = [
  { 
    imagem: "/images/pcpa.png",
    titulo: "PCPA",
    href: "/"
  },
  { 
    imagem: "/images/pf.png",
    titulo: "PF",
    href: "/"
  },
  { 
    imagem: "/images/prf.png",
    titulo: "PRF",
    href: "/"
  },
  { 
    imagem: "/images/pcdf.png",
    titulo: "PCERJ",
    href: "/"
  },
  { 
    imagem: "/images/pcdf.png",
    titulo: "PCDF",
    href: "/"
  },
]

//** A função Home usa o componente Layout pra estruturar a página. Também importei o LayoutContainer, mas se for um padrão, posso colocar ele dentro de Layout e tanto faz.  */
export default function Home() {
  return (
    <div className="wrapper">
      <Head>
        <title>Título</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <LayoutContainer> 
        <Grid 
          py={4}
          alignContent="space-around"
          templateColumns={["auto", "repeat(auto-fill, minmax(45%, 1fr))", "repeat(auto-fill, minmax(33%, 1fr))",  "repeat(auto-fill, minmax(20%, 1fr))"]}
        >
          {IndexItems.map((curso) => ( //** Aqui eu mapeio os items daquele componente lá em cima, IndexItems, e gero os valores no render. Dessa forma, temos mais controle sobre o que é colocado no conteúdo.  */
            <Link href={curso.href}>
              <a>
                <Box textAlign="center" mx={2} mb={[".5rem", "0" ]} p={1} _hover={{ bgColor: "black.200", color: "orange.700" }}>
                  <AspectRatio ratio={1}>
                    <Image src={curso.imagem} layout="fill" alt={curso.titulo} />
                  </AspectRatio>
                  <Text>{curso.titulo}</Text>
                </Box>
              </a>
            </Link>
          ))}
        </Grid>
      </LayoutContainer>
      </Layout> 
    </div>
  )
}
