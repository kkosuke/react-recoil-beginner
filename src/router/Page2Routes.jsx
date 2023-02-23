import Page2 from '../components/pages/Page2';
import UrlParameter from '../components/pages//UrlParameter';

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2 />
  },
  {
    path: "/:id",
    exact: false,
    children: <UrlParameter />
  }
]