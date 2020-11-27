import BettingRecord from "../views/BettingRecord";
import EventDetail from "../views/EventDetail";
import Events from "../views/Events";
import HomePage from "../views/HomePage";
import PointHistory from "../views/PointHistory";
import Profile from "../views/Profile";
import User from "../views/User";
import Messages from "../views/Messages";
import MessageDetail from "../views/MessageDetail";
import Help from "../views/Help";
import HelpDetail from "../views/HelpDetail";
import About from "../views/About";
import Deposit from "../views/Deposit";
import DepositPayment from "../views/DepositPayment";
import DepositRecord from "../views/DepositRecord";
import DepositRecordDetail from "../views/DepositRecordDetail";
import WithdrawRecord from "../views/WithdrawRecord";
interface Route {
  path: string;
  auth?: boolean;
  component: React.FC;
}
export const routes: Route[] = [
  { path: "/home", component: HomePage },
  { path: "/user", component: User, auth: true },
  { path: "/profile", component: Profile, auth: true },
  { path: "/betting-record", component: BettingRecord, auth: true },
  { path: "/events", component: Events },
  { path: "/event-detail", component: EventDetail },
  { path: "/point-history", component: PointHistory },
  { path: "/messages", component: Messages },
  { path: "/message-detail", component: MessageDetail },
  { path: "/help", component: Help },
  { path: "/help-detail", component: HelpDetail },
  { path: "/about", component: About },
  { path: "/deposit", component: Deposit },
  { path: "/deposit-payment", component: DepositPayment },
  { path: "/deposit-record", component: DepositRecord },
  { path: "/deposit-record-detail", component: DepositRecordDetail },
  { path: "/withdraw-record", component: WithdrawRecord },
];
