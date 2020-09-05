import { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <GeistProvider>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    );
};

export default App;
