"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

interface LocaleContextState {
  locale: string;
  setLocale: (loc: string) => void;
}

const LocaleContext = createContext<LocaleContextState | null>(null);

export const LocaleProvider = ({
  children,
  init,
}: React.PropsWithChildren<{ init: string }>) => {
  const [locale] = useState(init);
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (loc: string) => {
    const newPath = pathname.split("/").slice(2);
    router.replace(`/${loc}/${newPath.join("/")}`);
  };

  const providerValue = {
    locale,
    setLocale: handleChange,
  };

  return (
    <LocaleContext.Provider value={providerValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error(`Please use useLocale within LocaleProvider`);
  }
  return ctx;
};
