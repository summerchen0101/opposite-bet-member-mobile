import React from "react";
import Header from "../components/Header";

const EventDetail: React.FC = () => {
  return (
    <>
      <Header title="赛事详情" />
      <div className="main-content">
        {/* 公告 */}
        <div className="notice-section d-flex align-items-center">
          <i className="iconfont iconnotification" />
          {/* <marquee behavior="scroll" direction="left">
            系统维护公告!将于11月4日 17:00系统更新，为了维护您的权益...
          </marquee> */}
        </div>
        {/* 賽事資訊 */}
        <div className="teaminfo-section background-red">
          <a className="left-item">
            <i className="iconfont iconallow-left" />
          </a>
          <div className="league-col">瑞典北部甲组联赛</div>
          <div className="time-col">2020-09-02 14:00</div>
          <div className="team-col">
            <div className="t1">富山胜利(主)</div>
            <div className="icon_vs">VS</div>
            <div className="t2">熊本深红</div>
          </div>
          <div className="score-col">22:19</div>
        </div>
        {/* 日期頁籤 */}
        <div className="main-section section-padding">
          <ul
            className="nav nav-tabs d-flex justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a className="nav-link active">全场反波胆</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">半场反波胆</a>
            </li>
          </ul>
          <div className="section-title-bar d-flex justify-content-between align-items-center">
            <div className="vol-col">
              成交量：<span className="text-blue">42,823,114</span>
            </div>
            <div className="d-flex group-btn">
              <button className="group-btn-item icon_btn">
                <i
                  className="iconfont iconbillboard"
                  data-toggle="modal"
                  data-target="#chartsModal"
                />
              </button>
              <button className="group-btn-item icon_btn ml-3">
                <i className="iconfont iconreload" />
                <span className="countdown">30s</span>
              </button>
            </div>
          </div>
          {/* Tab panes */}
          <div className="tab-content">
            <div className="tab-pane active" id="tabs-1" role="tabpanel">
              {/* <div className="data_null">
                <img src="images/data_null.svg" />
                <p>暂无数据</p>
              </div> */}

              {/* 表頭 */}
              <div className="tricks-item-thead d-flex">
                <div className="tricks-item-title">比分</div>
                <div className="tricks-item-title">获利</div>
                <div className="tricks-item-title">可交易</div>
              </div>
              <div className="list-container">
                <div
                  className="tricks-item"
                  data-toggle="modal"
                  data-target="#betlistModal"
                >
                  <div className="score">0-0</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
                <div className="tricks-item">
                  <div className="score">0-1</div>
                  <div className="profit text-red">5.41%</div>
                  <div className="price">￥ 500000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
