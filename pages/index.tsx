import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Container, Link, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>NextJS App with MUI</title>
        <meta name="description" content="Template" />
      </Head>

       <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to <Link href="https://nextjs.org">Next.js!</Link>
        </Typography>

        <Typography>
          Get started by editing{' '}
          <code>pages/index.tsx</code>
        </Typography>

        <Typography>
          <Link href="https://nextjs.org/docs">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </Link>

          <Link href="https://nextjs.org/learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Link>

          <Link
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </Link>
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit"
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </Link>
      </Typography>
    </Container>
  )
}

export default Home
