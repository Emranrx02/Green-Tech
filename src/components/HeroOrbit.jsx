// src/components/HeroOrbit.jsx
export default function HeroOrbit({ children }) {
  return (
    <div className="orbit">
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />
      <img className="avatar a1" src="/src/assets/avatars/a1.jpg" alt="" />
      <img className="avatar a2" src="/src/assets/avatars/a2.jpg" alt="" />
      <img className="avatar a3" src="/src/assets/avatars/a3.jpg" alt="" />
      <img className="avatar a4" src="/src/assets/avatars/a4.jpg" alt="" />
      <img className="avatar a5" src="/src/assets/avatars/a5.jpg" alt="" />
      <img className="avatar a6" src="/src/assets/avatars/a6.jpg" alt="" />
      {children}
    </div>
  );
}