import react from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Rigester() {
  const Navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signup = async () => {
    const res = await fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    Navigate('/')
  };
  return (
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
        onClick={signup}
      >
        signup
      </button>
    </div>
  );
}

export default Rigester;
