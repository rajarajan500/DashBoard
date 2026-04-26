import react from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const called = async () => {
    const res=await fetch("https://dashboard-fflc.onrender.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const req =await res.json()
    console.warn("sent");
    if (req.token) {
      localStorage.setItem("token", req.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="p-2">
      {" "}
      <Link to="/signup">
        <button className="p-2 hover:bg-gray-700 text-white text-center bg-gray-500 rounded-full">
          sign up
        </button>
      </Link>
      <div className="min-h-screen  flex flex-col items-center justify-center">
        <div className="border p-2 flex flex-col gap-5 text-center bg-gray-500 rounded-xl">
          <input
            className="p-1 rounded-sm"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="p-1 rounded-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button
          className="border p-3 mt-3 rounded-full bg-gray-200 font-semibold hover:bg-gray-600"
          onClick={called}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
