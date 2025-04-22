import { createBrowserRouter } from "react-router";
import Sidebar from "../common/Sidebar";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Interests from "../pages/Interests";
import HireMe from "../pages/HireMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },

      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/interests",
        element: <Interests />,
      },
      {
        path: "/hire",
        element: <HireMe />,
      },
    ],
  },
]);

export default router;
