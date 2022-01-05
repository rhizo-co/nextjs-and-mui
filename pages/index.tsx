import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Button, Divider, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Box padding={2}>
      
      <Head>
        <title>NextJS App with MUI</title>
        <meta name="description" content="example index page" />
      </Head>
      
      <Container maxWidth="xl">

        <Container maxWidth="sm">
          <Typography variant="h2" component="h2" align="center" color="text.primary" gutterBottom>
            Welcome to <Link href="https://nextjs.org">Next.js</Link> and <Link href="https://mui.com">Material UI!</Link>
          </Typography>
        </Container>

        <Grid container spacing={2} align="center"  alignItems="stretch" justifyContent="center">

          <Grid item xs={12} sm={11} md={10} lg={6} >
            <Paper elevation={3}  sx={{ height: 1 }}>
              <Box padding={2}>
                <Typography variant="h4" component="h4" gutterBottom>Getting Started</Typography>
                <Typography>
                  Get started by editing <code>pages/index.tsx</code>
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={6} >
            <Paper elevation={3} sx={{ height: 1 }}>
            <Box padding={2}>
            <Typography variant="h4" component="h4" gutterBottom>Documentation & Examples</Typography>
            <Stack
              direction="row"
              direction={{ xs: 'column', sm: 'column' , md: 'row', lg: 'column', xl: 'row' }}
              spacing={2}
              justifyContent="center"
              >
                <Button variant="outlined" href="https://nextjs.org/docs">
                Next.js features and API
                </Button>
                <Button variant="outlined" href="https://nextjs.org/examples">
                Next.js examples
                </Button>
                <Button variant="outlined" href="https://mui.com/components/autocomplete/">
                Material UI features and API
                </Button>
                <Button variant="outlined" href="https://mui.com/getting-started/example-projects/">
                Material UI examples
                </Button>
            </Stack>
            </Box>
            </Paper>
          </Grid>

        </Grid>

      </Container>

      <Container maxWidth="sm">
        <Box padding={6} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            align="center"
            color="text.secondary"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
