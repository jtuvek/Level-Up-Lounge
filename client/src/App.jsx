import "./index.css";
import "./components/layout/layout.css"
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Header />
    </div>
    </ApolloProvider>
  );
};

export default App;