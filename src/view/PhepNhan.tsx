import { useNavigate } from "react-router";

const PhepNhan = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Phep Nhan</h1>
      <button onClick={() => navigate("/basic-math")}>Back</button>
    </div>
  );
};

export default PhepNhan;
