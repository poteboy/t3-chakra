import type { AppProps } from "next/app";
import type { TRPCLink } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import SuperJSON from "superjson";
import { AppRouter } from "@src/server/route";
import { withTRPC } from "@trpc/next";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
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
            staleTime: Infinity,
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
})(App);

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const url = `${baseUrl}/api/trpc`;
