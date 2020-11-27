import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const categorys = ["存款教程", "取款教程", "技术支持", "联络我门"];

const Help: React.FC = ({ children }) => {
  const history = useHistory();
  return (
    <>
      <Header backRoute="/user">帮助中心</Header>
      <div className="main-content">
        <ul className="list-group col-list section-padding">
          {categorys.map((category, i) => (
            <li
              className="col-list-item border-bottom pointer"
              key={i}
              onClick={(e) => history.push("/help-detail")}
            >
              {category}
              <i className="iconfont iconallow-right" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Help;
