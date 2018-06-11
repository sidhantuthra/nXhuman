import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/CaseOverview/CaseOverview.jsx";
import TableList from "../views/TableList/TableList.jsx";
import Typography from "../views/Dialogue/dialogue.jsx";
import Icons from "../views/CaseReview/casereview.jsx";
import Maps from "../views/Maps/Maps.jsx";
import NotificationsPage from "../views/Notifications/Notifications.jsx";
import Login from "../views/Login/login.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  
} from "material-ui-icons";

const appRoutes = [
  {
    path: "/login", 
    sidebarName: "Login",
    navbarName: "Login",
    icon: Dashboard,
    component: Login
  },
  {
    path: "/dashboard", 
    sidebarName: "Welcome",
    navbarName: "Welcome",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/caseoverview",
    sidebarName: "Case Overview",
    navbarName: "Case Overview",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/patientchart",
    sidebarName: "Patient Chart",
    navbarName: "Patient Chart",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/dialogue",
    sidebarName: "Dialogue",
    navbarName: "Dialogue",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/review",
    sidebarName: "Review and Submit",
    navbarName: "Review and Submit",
    icon: BubbleChart,
    component: Icons
  },
 


{ redirect: true, path: "/", to: "/login", navbarName: "Redirect" }

];

export default appRoutes;
