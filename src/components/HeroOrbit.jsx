// src/components/HeroOrbit.jsx
import a1 from "../assets/avatars/a1.jpg";
import a2 from "../assets/avatars/a2.jpg";
import a3 from "../assets/avatars/a3.jpg";
import a4 from "../assets/avatars/a4.jpg";
import a5 from "../assets/avatars/a5.jpg";
import a6 from "../assets/avatars/a6.jpg";

export default function HeroOrbit({ children }) {
  return (
    <div className="orbit">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
      <img className="avatar a1" src={a1} alt="" />
      <img className="avatar a2" src={a2} alt="" />
      <img className="avatar a3" src={a3} alt="" />
      <img className="avatar a4" src={a4} alt="" />
      <img className="avatar a5" src={a5} alt="" />
      <img className="avatar a6" src={a6} alt="" />
      {children}
    </div>
  );
}