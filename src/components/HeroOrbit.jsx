// src/components/HeroOrbit.jsx
import pro1 from "../assets/avatars/pro1.png";
import pro2 from "../assets/avatars/pro2.png";
import pro3 from "../assets/avatars/pro3.png";
import pro4 from "../assets/avatars/pro4.png";

export default function HeroOrbit({ children }) {
  return (
    <div className="orbit">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
  <img className="avatar a1" src={pro1} alt="" />
  <img className="avatar a2" src={pro2} alt="" />
  <img className="avatar a3" src={pro3} alt="" />
  <img className="avatar a4" src={pro4} alt="" />
  <img className="avatar a5" src={pro1} alt="" />
  <img className="avatar a6" src={pro2} alt="" />
      {children}
    </div>
  );
}