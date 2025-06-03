import { useAuth } from "../../hooks/use-auth";
import { useUsers } from "../../hooks/use-user";
import Navbar from "../../navbar";
import Signin from "../../view/auth/signin";
import Signup from "../../view/auth/signup";
import Home from "../../view/home";

export default function MainLayout() {
const { user, loading, error } = useAuth();

  return (
    <div>
          <Navbar />
          <Home />
    </div>
  )
}
