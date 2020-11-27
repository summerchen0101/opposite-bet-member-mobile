import React from "react";

const Header: React.FC = ({ children }) => {
  return (
    <nav className="main_nav">
      <div className="nav-bar">
        {/* <a class="left-item"><i class="iconfont iconallow-left"></i></a> */}
        <div className="nav-title">{children}</div>
        {/* <div class="nav-title">市场列表</div> */}
        {/* <div class="right-item"><a class="s-btn">删除</a><a class="s-btn">取消</a></div> */}
        <div className="right-item">
          <i className="iconfont iconmessage" />
          <span className="red-dot" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
