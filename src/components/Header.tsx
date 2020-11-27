import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
  backRoute?: string;
  title: JSX.Element | string;
}
const Header: React.FC<HeaderProps> = ({ children, backRoute, title }) => {
  return (
    <nav className="main_nav">
      <div className="nav-bar">
        {backRoute && (
          <Link className="left-item" to={backRoute}>
            <i className="iconfont iconallow-left"></i>
          </Link>
        )}

        <div className="nav-title">{title}</div>
        {/* <div class="right-item"><a class="s-btn">删除</a><a class="s-btn">取消</a></div> */}
        <div className="right-item">
          {/* <i className="iconfont iconmessage" />
          <span className="red-dot" /> */}
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;
