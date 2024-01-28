import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "@mantine/core/styles.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { LocalePageProps } from "./ts/locale";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import { theme } from "../mantine/theme";
import Header from "./components/nav/header";
import { LocaleProvider } from "./components/locale/locale.provider";
import Providers from "./providers";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reddit Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: LocalePageProps;
}>) {
  return (
    <html className="min-h-screen relative" lang={lang} dir={dir(lang)}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={`${inter.className} h-full w-full absolute`}>
        <Providers>
          <MantineProvider theme={theme}>
            <LocaleProvider init={lang}>
              <Header />
              <Container
                className="background-back flex flex-col items-center"
                py="md"
                mih={"93.5%"}
                maw={"100vw"}
              >
                {children}
              </Container>
            </LocaleProvider>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
