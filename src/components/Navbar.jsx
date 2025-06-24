import useSWR from "swr";
import { apifetcher } from "../api/client";
import { useNavigate } from "react-router";
  

export default function Navbar() {
  const { data } = useSWR("/users/profile", apifetcher);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between px-8 py-4">
      <h1 className="font-bold text-heading">
        <span>Event</span>
        <span className="text-primary"> Hive</span>
      </h1>
      <div>
        <h1>{data?.data?.name || "Unknown User"}</h1>
        <button
          onClick={logout}
          className="bg-primary cursor-pointer rounded-md py-2 px-4 text-white"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <button className="text-primary">
          <a href="/login">Login</a>
        </button>
        <button className="bg-primary rounded-md py-2 px-4 text-white">
          <a href="/sign-up">Signup</a>
        </button>
      </div>
    </nav>
  );
}
