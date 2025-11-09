import "@/static/css/tailwind.css";

import type { AppProps } from "next/app";
import { Handjet, Space_Grotesk } from "next/font/google";

import { cn } from "@/utils/helpers";

const handjet = Handjet({
  subsets: ["latin"],
  variable: "--font-handjet",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={cn(handjet.variable, spaceGrotesk.variable)}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
