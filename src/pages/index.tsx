import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Link, Stack, Typography } from '@mui/material';
// uncomment if you want to use. Unused variables upset the linter
// import { useTheme } from '@mui/styles';
import Head from 'next/head';
import * as React from 'react';

import { ColorModeContext } from './_app';

export default function Home() {
  // uncomment if you want to use. Unused variables upset the linter
  // const theme = useTheme();

  const colorMode = React.useContext(ColorModeContext);

  return (
    <Box padding={2}>
      <Head>
        <title>NextJS App with MUI</title>
        <meta name="description" content="example index page" />
      </Head>

      <Container maxWidth="xl">
        <Container maxWidth="sm">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Welcome to <Link href="https://nextjs.org">Next.js</Link> and <Link href="https://mui.com">MUI</Link>!
          </Typography>
        </Container>

        <Grid container spacing={2} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={11} md={10} lg={6} xl={4}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Getting Started"></CardHeader>
              <CardContent>
                <Typography>
                  Get started by editing <code>pages/index.tsx</code>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={6} xl={4}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Interactive"></CardHeader>
              <CardContent>
                <Button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.preventDefault();
                    colorMode.toggleColorMode();
                  }}
                >
                  Switch to {colorMode.nextMode()} mode
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={6} xl={4}>
            <Card sx={{ height: '100%' }}>
              <CardHeader title="Documentation & Examples"></CardHeader>
              <CardContent>
                <Typography gutterBottom>Click a button to open the official documentation in a new window</Typography>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'column', xl: 'row' }} spacing={2} justifyContent="center">
                  <Button variant="contained" href="https://nextjs.org/docs" target="_blank">
                    Next.js features and API
                  </Button>
                  <Button variant="contained" href="https://nextjs.org/examples" target="_blank">
                    Next.js examples
                  </Button>
                  <Button variant="contained" href="https://mui.com/components/autocomplete/" target="_blank">
                    Material UI features and API
                  </Button>
                  <Button variant="contained" href="https://mui.com/getting-started/example-projects/" target="_blank">
                    Material UI examples
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Box padding={6} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography align="center" color="text.secondary">
            Something here to give the footer a purpose!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
