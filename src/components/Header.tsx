import React, { ReactNode } from "react";
import { Link, useHistory } from "react-router-dom";
interface HeaderProps {
  backRoute?: boolean;
  title: JSX.Element | string;
}
const Header: React.FC<HeaderProps> = ({ children, backRoute, title }) => {
  const history = useHistory();
  return (
    <nav className="main_nav">
      <div className="nav-bar">
        {backRoute && (
          <a className="left-item" onClick={(e) => history.goBack()}>
            <i className="iconfont iconallow-left"></i>
          </a>
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
