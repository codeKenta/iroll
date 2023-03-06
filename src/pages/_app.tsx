import '~/styles/globals.css'
import type { AppProps } from 'next/app'
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { QueryClient, QueryClientProvider } from 'react-query'



const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemePicker>
    </StyleProvider>)
}


