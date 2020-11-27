import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const Events: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header>市场列表</Header>
      <div className="main-content">
        {/* 公告 */}
        <div className="notice-section d-flex align-items-center">
          <i className="iconfont iconnotification" />
          {/* <span>
            系统维护公告!将于11月4日 17:00系统更新，为了维护您的权益...
          </span> */}
        </div>
        {/* 熱門賽事 */}
        <div className="section-title-bar d-flex justify-content-between section-padding">
          <div className="section-title">赛事列表</div>
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
        {/* 日期頁籤 */}
        <ul
          className="nav nav-tabs d-flex justify-content-between section-padding"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link active">全部(100)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">今日(40)</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">本週(40)</a>
          </li>
        </ul>
        <div className="tab-content pt-2 section-padding">
          <div className="tab-pane active">
            {/* <div className="data_null">
              <img src="images/data_null.svg" />
              <p>暂无数据</p>
            </div> */}
            <div className="list-container">
              {[...Array(5)].map((t, i) => (
                <div
                  className="team-item"
                  key={i}
                  onClick={(e) => history.push("/event-detail")}
                >
                  <div className="info-col">
                    <div className="d-flex justify-content-between align-items-center bdb">
                      <div className="time ">
                        <i className="iconfont iconcalendar" />
                        00时22分19秒
                      </div>
                      <div className="tricks-num">99+</div>
                    </div>
                    <div className="team-col">富山胜利(主)VS熊本深红</div>
                    <div className="league-col">瑞典北部甲组联赛</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
