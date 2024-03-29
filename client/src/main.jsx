import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './components/pages/forums.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ProfilePage from './components/pages/ProfilePage.jsx'
import Forums from './components/pages/Forums.jsx'
import SignUpForm from './components/SignUpForm.jsx'
import LoginForm from './components/LoginForm.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "forums",
        element: <Forums />,
      },


  
      {
      path: "signup",
      element: <SignUpForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
     

      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
