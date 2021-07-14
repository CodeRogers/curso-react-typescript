import { Switch } from "react-router-dom";
import { useAuth } from "../contexts/auth";

import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import User from "../pages/User";
import CustonRoute from "./Route";

export default function Routes() {
  const { signed } = useAuth();
  
  return(
    <Switch>
      <CustonRoute path='/user' component={User} exact isPrivate signed={signed}/>
      <CustonRoute path='/dashboard' component={Dashboard} exact isPrivate signed={signed} />
      <CustonRoute path='/' component={SignIn} isPrivate={false} signed={signed} />
    </Switch>
  );
}