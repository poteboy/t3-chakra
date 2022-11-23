import type { AppProps } from "next/app";
import type { TRPCLink } from "@trpc/client";
import { httpBatchLink, loggerLink } from "@trpc/client";
import SuperJSON from "superjson";
import { AppRouter } from "@src/server/route";
import { createTRPCNext } from "@trpc/next";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default createTRPCNext<AppRouter>({
  config({ ctx }) {
    const url = `http://${
      process.env.NEXT_PUBLIC_VERCE_URL ?? "localhost:3000"
    }/api/trpc`;
    const links: TRPCLink<any>[] = [
      loggerLink(),
      httpBatchLink({
        url,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      links,
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            "x-ssr": "1",
          };
        } else return {};
      },
      transformer: SuperJSON,
      ssr: false,
    };
  },
}).withTRPC(App);
