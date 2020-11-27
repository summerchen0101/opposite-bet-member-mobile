import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-list-item market">
          <Link to="/events">市场</Link>
        </li>
        <li className="footer-list-item detail">
          <Link to="/betting-record">明细</Link>
        </li>
        <li className="footer-list-item index">
          <Link to="/home">首页</Link>
        </li>
        <li className="footer-list-item history">
          <a href="history.html">历史</a>
        </li>
        <li className="footer-list-item my">
          <Link to="/user">我的</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
