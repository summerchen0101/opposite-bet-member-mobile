import BettingHistory from "../views/BettingHistory";
import EventDetail from "../views/EventDetail";
import Events from "../views/Events";
import HomePage from "../views/HomePage";
import User from "../views/User";
interface Route {
  path: string;
  auth?: boolean;
  component: React.FC;
}
export const routes: Route[] = [
  { path: "/home", component: HomePage },
  { path: "/user", component: User, auth: true },
  { path: "/betting-history", component: BettingHistory, auth: true },
  { path: "/events", component: Events },
  { path: "/event-detail", component: EventDetail },
];
