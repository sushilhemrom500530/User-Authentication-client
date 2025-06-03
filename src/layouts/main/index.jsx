import { useAuth } from "../../hooks/use-auth";
import { useUsers } from "../../hooks/use-user";
import Signin from "../../view/auth/signin";
import Signup from "../../view/auth/signup";

export default function MainLayout() {
const { user, loading, error } = useAuth();
const { users,} = useUsers();

console.log("Current users:", users)
  return (
    <div className="text-xl font-medium text-center">
           <Signin />
           {/* <Signup /> */}
    </div>
  )
}
