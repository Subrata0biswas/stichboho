import React, { useState, useEffect } from "react";

// import Component
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Layout({ children }) {
  const [isMenu, setMenu] = useState(false);
  console.log("childres", children);

  function onOpenMenu() {
    setMenu(!isMenu);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <Header
        isMenu={isMenu}
        onOpenMenu={onOpenMenu}
        props={children.props}
        isLogin={children.props.isLogin}
        userType={children.props.userType}
      />
      <div onClick={() => setMenu(false)}>{children}</div>
      <Footer props={children.props} />
    </>
  );
}
