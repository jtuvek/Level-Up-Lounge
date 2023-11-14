import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import ProfilePage from './components/pages/ProfilePage.jsx'
import Forums from './components/pages/Forums.jsx'
import DiscussionBoards from './components/pages/DiscussionBoards.jsx'



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
        path: "profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "forums",
        element: <Forums />,
      },
      {
        path: "discussion/:forumId",
        element: <DiscussionBoards />,
      },
      
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
