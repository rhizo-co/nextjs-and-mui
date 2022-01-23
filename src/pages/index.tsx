import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import Head from 'next/head';

export default function Home() {
  const theme = useTheme();
  console.log('theme', theme);
  return (
    <Box padding={2}>
      <Head>
        <title>NextJS App with MUI</title>
        <meta name="description" content="example index page" />
      </Head>

      <Container maxWidth="xl">
        <Container maxWidth="sm">
          <Typography variant="h2" component="h2" align="center" gutterBottom>
            Welcome to <Link href="https://nextjs.org">Next.js</Link> and <Link href="https://mui.com">Material UI!</Link>
          </Typography>
        </Container>

        <Grid container spacing={2} alignItems="stretch" justifyContent="center">
          <Grid item xs={12} sm={11} md={10} lg={6}>
            <Card elevation={3} sx={{ bgcolor: 'secondary.light' }}>
              <CardHeader title="Getting Started" sx={{ bgcolor: 'primary.light' }}></CardHeader>
              <CardContent>
                <Typography variant="body1">
                  Get started by editing <code>pages/index.tsx</code>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={11} md={10} lg={6}>
            <Card elevation={3} sx={{ bgcolor: 'secondary.light' }}>
              <CardHeader title="Documentation & Examples" sx={{ bgcolor: 'primary.light' }}></CardHeader>
              <CardContent>
                <Stack direction={{ xs: 'column', sm: 'column', md: 'row', lg: 'column', xl: 'row' }} spacing={2} justifyContent="center">
                  <Button variant="contained" href="https://nextjs.org/docs">
                    Next.js features and API
                  </Button>
                  <Button variant="contained" href="https://nextjs.org/examples">
                    Next.js examples
                  </Button>
                  <Button variant="contained" href="https://mui.com/components/autocomplete/">
                    Material UI features and API
                  </Button>
                  <Button variant="contained" href="https://mui.com/getting-started/example-projects/">
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
