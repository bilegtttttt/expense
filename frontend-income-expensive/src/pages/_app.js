import "@/styles/globals.css";
import AddCatiProvider from "@/components/Provider/AddCatiProvider";

export default function App({ Component, pageProps }) {
  return (
    <AddCatiProvider>
      <Component {...pageProps} />;
    </AddCatiProvider>
  );
}
