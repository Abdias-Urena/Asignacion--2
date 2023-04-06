import { TodoProvider } from "@/components/TodoContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
};

export default MyApp;
