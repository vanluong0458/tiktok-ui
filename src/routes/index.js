import Following from "~/papes/Following";
import Home from "~/papes/Home";
import Profile from "~/papes/Profile";
import Upload from "~/papes/Upload";
import Search from "~/papes/Search";
import { HeaderOnly } from "~/components/Layout";

const publishRoutes = [
  { path: "/", element: Home },
  { path: "/following", element: Following },
  { path: "/@:nickname", element: Profile },
  { path: "/upload", element: Upload, layout: HeaderOnly },
  { path: "/search", element: Search, layout: null },
];
const privateRoutes = [];
export { publishRoutes, privateRoutes };
