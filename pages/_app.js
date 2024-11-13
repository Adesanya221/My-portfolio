// Import any global CSS or context providers you need
import '../styles/globals.css'; // Import global CSS
import { MyProvider } from '../path/to/context'; // Import context provider if you have one

function MyApp({ Component, pageProps }) {
  return (
    // Wrap your app in any providers or wrappers
    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>
  );
}

export default MyApp;
