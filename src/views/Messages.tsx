import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const Messages: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header backRoute="/user">站内信</Header>
      <div className="main-content">
        {/* 公告 */}
        <div className="notice-section d-flex align-items-center">
          <i className="iconfont iconnotification" />
          {/* <marquee behavior="scroll" direction="left">
            系统维护公告!将于11月4日 17:00系统更新，为了维护您的权益...
          </marquee> */}
        </div>
        {/* 日期頁籤 */}
        <ul
          className="nav nav-tabs d-flex justify-content-between section-padding"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#tabs-1"
              role="tab"
            >
              公告
            </a>
            <div className="counter-point">99</div>
          </li>
          <li className="nav-item">
            <a className="nav-link">通知</a>
            <div className="counter-point">99</div>
          </li>
          <li className="nav-item">
            <a className="nav-link">活动</a>
            <div className="counter-point">99</div>
          </li>
          <li className="nav-item">
            <a className="nav-link">赛事</a>
            <div className="counter-point">99</div>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content section-padding">
          {/* <div className="data_null">
            <img src="images/data_null.svg" />
            <p>暂无数据</p>
          </div> */}
          <div className="tab-pane active">
            <ul className="list-container list-group">
              {[...Array(5)].map((t, i) => (
                <li
                  className="message-item"
                  key={i}
                  onClick={(e) => history.push("message-detail")}
                >
                  <input type="checkbox" className="message-select" />
                  <i className="iconfont iconmail-open" />
                  <div className="message-container d-flex flex-column">
                    <div className="title-col">
                      <div className="message-title">保本活动重要通知</div>
                      <div className="message-time text-right">刚刚</div>
                    </div>
                    <div className="message-content-col">
                      尊敬的会员您好，因应近日支付宝提升安全机制，部分会员限制转账，如遇无法打款至本平台支付宝帐号，
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
