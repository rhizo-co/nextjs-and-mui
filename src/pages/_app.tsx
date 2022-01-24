import type { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { AppBar, Box, CssBaseline, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import * as React from 'react';

import { themeProvider } from '../theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Next.js & MUI</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export const ColorModeContext = React.createContext<{
  toggleColorMode: () => void;
  nextMode: () => string;
}>({
  toggleColorMode: () => {
    return;
  },
  nextMode: () => 'dark',
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setDarkMode((prevMode) => !prevMode);
      },
      nextMode: () => (darkMode ? 'light' : 'dark'),
    }),
    [darkMode],
  );

  const theme = React.useMemo(() => themeProvider({ darkMode }), [darkMode]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <MyAppBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}
