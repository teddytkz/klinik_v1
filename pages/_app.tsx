import FullLayout from "../src/layouts/FullLayout";
import Head from "next/head";
import "../styles/style.scss";
import { useRouter } from 'next/router'
import { AppProps } from "next/dist/shared/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const path = router.pathname.split("/")
  console.log(path[1])
  console.log(router.pathname)
  if (path[1] === 'auth') {
    return (
      <>
        <Head>
          <title>Monster Free Next Js Dashboard Template</title>
          <meta
            name="description"
            content="Monster Free Next Js Dashboard Template"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <Component {...pageProps} />

      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Monster Free Next Js Dashboard Template</title>
          <meta
            name="description"
            content="Monster Free Next Js Dashboard Template"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <FullLayout>
          <Component {...pageProps} />
        </FullLayout>
      </>
    );
  }

}

export default MyApp;
