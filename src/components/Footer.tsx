import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <ul className="footer-list">
        <li className="footer-list-item market">
          <a href="market.html">市场</a>
        </li>
        <li className="footer-list-item detail">
          <a href="detail.html">明细</a>
        </li>
        <li className="footer-list-item index">
          <a href="index.html">首页</a>
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
