import React from "react";
import Header from "../components/Header";

const BettingHistory: React.FC = () => {
  return (
    <>
      <Header title="交易明細" />
      <div className="pintop-section d-flex flex-column justify-content-center fixed">
        <ul className="acc-inner mt-1">
          <li className="acc-item px-5">
            <p>400.00</p>
            <span className="text-lighgray">金額統計</span>
          </li>
          <li className="divider" />
          <li className="acc-item px-5">
            <p className="text-green">76.00</p>
            <span className="text-lighgray">預估獲利</span>
          </li>
        </ul>
      </div>
      <div className="main-content background-gray" style={{ paddingTop: 105 }}>
        <div className="list-container ">
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status">未开</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                    <button
                      className="mini_btn color-red"
                      data-toggle="modal"
                      data-target="#revokeModal"
                    >
                      撤单
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>预估获利:19</div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status text-blue">已开</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>预估获利:19</div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status text-green">中奖</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>
                  预估获利:<span className="text-green">19</span>
                </div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status">未开</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>预估获利:19</div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status">未开</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>预估获利:19</div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-header">
              <div className="d-flex justify-content-between">
                <div className="team-col">富山胜利(主)VS熊本深红</div>
                <div className="status">未开</div>
              </div>
              <div className="bet-col">
                <span className="text-red mr-2">反对</span>全场坡胆 0-1
              </div>
              <div className="detail-content">
                <ul className="title-inner">
                  <li className="title-item">单号</li>
                  <li className="title-item">开赛时间</li>
                  <li className="title-item">交易时间</li>
                  <li className="title-item">联盟</li>
                  <li className="title-item">队伍</li>
                  <li className="title-item">比分</li>
                  <li className="title-item">金额</li>
                  <li className="title-item">赔率</li>
                  <li className="title-item">预估获利</li>
                </ul>
                <ul className="content-inner">
                  <li className="content-item">
                    ASCCBB1365
                    <button className="icon_btn">
                      <i className="iconcopy iconfont" />
                    </button>
                  </li>
                  <li className="content-item">2020-08-26 14:21:18</li>
                  <li className="content-item">2020-08-26 12:20:10</li>
                  <li className="content-item">瑞典北部甲组联赛</li>
                  <li className="content-item">富山胜利(主)VS熊本深红</li>
                  <li className="content-item">
                    <span className="text-red">反对</span>全场坡胆 0-2
                  </li>
                  <li className="content-item">100.00</li>
                  <li className="content-item">2.7%</li>
                  <li className="content-item">
                    <span className="text-green">2.56</span>
                    <span className="text-yellow ml-3">已扣除手续费5%</span>
                  </li>
                </ul>
              </div>
              <div className="detail-footer">
                <div>投注额:100</div>
                <div>预估获利:19</div>
              </div>
            </div>
            <div className="icon-col">
              <i className="iconfont iconallow-down" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BettingHistory;
