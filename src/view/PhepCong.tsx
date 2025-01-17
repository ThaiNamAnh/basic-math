import { useNavigate } from "react-router";

const PhepCong = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Phep Cong</h1>
      <button onClick={() => navigate("/basic-math")}>Back</button>
    </div>
  );
};

export default PhepCong;
