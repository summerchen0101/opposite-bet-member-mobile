import React from "react";
import Header from "../components/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header>
        <img className="logo" alt="logo" src="images/logo.png" />
      </Header>
      <div className="main-content">
        {/* 輪撥BANNER */}
        <div className="banner-section">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img
                  src="images/banner/banner-1.jpg"
                  className="d-block w-100"
                />
              </div>
              <div className="swiper-slide">
                <img
                  src="images/banner/banner-2.jpg"
                  className="d-block w-100"
                />
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
        {/* 公告 */}
        <div className="notice-section d-flex align-items-center">
          <i className="iconfont iconnotification" />
          {/* <span>
            系统维护公告!将于11月4日 17:00系统更新，为了维护您的权益...
          </span> */}
        </div>
        {/* 快速選單 */}
        <div className="middle-menu-section">
          <div className="user-info d-flex justify-content-between">
            <div className="user-id">bet8888</div>
            <div>
              账户余额<span className="user-wallet">¥ 20,849.55</span>
            </div>
          </div>
          <ul className="menu-list">
            <li
              className="menu-list-item ic_recharge"
              // onClick="location.href = 'recharge.html'"
            >
              <img src="images/ic_recharge.svg" />
              充值
            </li>
            <li className="divider" />
            <li
              className="menu-list-item ic_withdrawal"
              // onClick="location.href = 'withdrawal.html'"
            >
              <img src="images/ic_withdrawal.svg" />
              提领
            </li>
            <li className="divider" />
            <li className="menu-list-item ic_promotion">
              <img src="images/ic_promotion.svg" />
              优惠
            </li>
            <li className="divider" />
            <li className="menu-list-item ic_score">
              <img src="images/ic_score.svg" />
              比分
            </li>
          </ul>
        </div>
        {/* 熱門賽事 */}
        <div className="main-section section-padding">
          <div className="section-title-bar d-flex justify-content-between align-items-center">
            <div className="section-title">热门赛事</div>
            <div className="d-flex group-btn">
              <button
                className="group-btn-item icon_btn"
                data-toggle="modal"
                data-target="#leagueModal"
              >
                <i className="iconfont iconfilter" />
              </button>
              <button className="group-btn-item icon_btn ml-3">
                <i className="iconfont iconreload" />
                <span className="countdown">30s</span>
              </button>
            </div>
          </div>
          <div className="list-container">
            <div className="team-item">
              <div className="info-col">
                <div className="time text-red">
                  <i className="iconfont iconclock" />
                  00时22分19秒
                </div>
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="league-col">瑞典北部甲组联赛</div>
              </div>
              <div className="chart-col">
                <span>總搶購量</span>
                <div className="donut-chart" id="donut-chart" />
              </div>
            </div>
            <div className="team-item">
              <div className="info-col">
                <div className="time">
                  <i className="iconfont iconcalendar" />
                  2020-09-02 14:00
                </div>
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="league-col">瑞典北部甲组联赛</div>
              </div>
              <div className="chart-col">
                <span>總搶購量</span>
                <div className="donut-chart" id="donut-chart" />
              </div>
            </div>
            <div className="team-item">
              <div className="info-col">
                <div className="time">
                  <i className="iconfont iconcalendar" />
                  2020-09-02 14:00
                </div>
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="league-col">瑞典北部甲组联赛</div>
              </div>
              <div className="chart-col">
                <span>總搶購量</span>
                <div className="donut-chart" id="donut-chart" />
              </div>
            </div>
            <div className="team-item">
              <div className="info-col">
                <div className="time">
                  <i className="iconfont iconcalendar" />
                  2020-09-02 14:00
                </div>
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="league-col">瑞典北部甲组联赛</div>
              </div>
              <div className="chart-col">
                <span>總搶購量</span>
                <div className="donut-chart" id="donut-chart" />
              </div>
            </div>
            <div className="team-item">
              <div className="info-col">
                <div className="time">
                  <i className="iconfont iconcalendar" />
                  2020-09-02 14:00
                </div>
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="league-col">瑞典北部甲组联赛</div>
              </div>
              <div className="chart-col">
                <span>總搶購量</span>
                <div className="donut-chart" id="donut-chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
