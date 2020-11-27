import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

const User: React.FC = () => {
  return (
    <>
      <Header>我的</Header>
      <Content>
        {/* 個人資訊 */}
        <div className="top-section">
          <div className="user-card">
            <div className="d-flex ">
              <div className="avatar d-flex align-items-center justify-content-center">
                <img src="/images/avatar.jpg" />
              </div>
              <div className="user-info d-flex flex-column justify-content-center  ">
                <div className="user-id-col d-flex">
                  bet8888
                  <i
                    className="iconfont iconedit ml-2"
                    // onClick="location.href = 'profile.html'"
                  />
                </div>
                <div className="last-login-col">
                  上次登入时间{" "}
                  <span className="last-time ml-1">2020/06/08 15:50:16</span>
                </div>
              </div>
            </div>
            <ul className="acc-inner mt-3">
              <li className="acc-item text-white">
                <p>6%</p>
                <span>提领手续费</span>
              </li>
              <li className="divider" />
              <li className="acc-item text-white">
                <p className="user-wallet">20,849.55</p>
                <span>可用余额</span>
              </li>
              <li className="divider" />
              <li className="acc-item text-white">
                <p>1,849.55</p>
                <span>交易中金额</span>
              </li>
            </ul>
          </div>
        </div>
        {/* 中間快速選單 */}
        <div className="middle-section">
          <ul className="middle-menu-list">
            <li className="menu-list-item">
              <img src="images/ic_promotion.svg" />
              优惠活动
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'recharge.html'"
            >
              <img src="images/ic_recharge.svg" />
              立即充值
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'withdrawal.html'"
            >
              <img src="images/ic_withdrawal.svg" />
              立即提领
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'cash-record.html'"
            >
              <img src="images/ic_cashhistory.svg" />
              资金明细
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'gameresult.html'"
            >
              <img src="images/ic_gameresult.svg" />
              比赛结果
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'score.html'"
            >
              <img src="images/ic_score.svg" />
              即时比分
            </li>
          </ul>
        </div>
        {/* 下方List選單 */}
        <div className="bottom-section section-padding">
          <ul className="bottom-menu-list list-group">
            <li
              className="menu-list-item"
              // onClick="location.href = 'message.html'"
            >
              <img src="images/ic_message.svg" />
              <div className="item-title">站内信(10)</div>
              <i className="iconfont iconallow-right" />
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'profile.html'"
            >
              <img src="images/ic_profile.svg" />
              <div className="item-title">个人资料</div>
              <i className="iconfont iconallow-right" />
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'help.html'"
            >
              <img src="images/ic_help.svg" />
              <div className="item-title">帮助中心</div>
              <i className="iconfont iconallow-right" />
            </li>
            <li
              className="menu-list-item"
              // onClick="location.href = 'about.html'"
            >
              <img src="images/ic_about.svg" />
              <div className="item-title">关于AG</div>
              <i className="iconfont iconallow-right" />
            </li>
          </ul>
          <button type="submit" className="btnbase outline_btn color-blue mt-4">
            登出
          </button>
          <div className="version my-2">V.1.01</div>
        </div>
      </Content>
    </>
  );
};

export default User;
