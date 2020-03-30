import SisalBetModule from 'sisal-bet-module';
import LoginForm from '../components/auth/login/login.component';
import BetsList from '../components/bets/bets-list/bets-list.component';
import BetsDetail from '../components/bets/bets-detail/bets-detail.component';
import AuthService from '../services/auth.service';
import RoutesList from "../types/routesList.interface";

const always = () => true;
const { isAdmin, isAuthenticated } = AuthService();

const routes: Array<RoutesList> = [
  // @ts-ignore
  { path: '/module', component: SisalBetModule, canActivate: isAdmin },
  { path: '/bets/:id', component: BetsDetail, canActivate: isAuthenticated },
  { path: '/bets/', component: BetsList, canActivate: isAuthenticated },
  { path: '', component: LoginForm, canActivate: always },
];

export default routes;
