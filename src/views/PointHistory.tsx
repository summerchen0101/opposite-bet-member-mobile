import React from "react";
import Header from "../components/Header";

const PointHistory: React.FC = () => {
  return (
    <>
      <Header>帐务历史</Header>
      <div className="main-content">
        <ul
          className="nav nav-tabs d-flex justify-content-between section-padding"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link active">本週</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">本月</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">上个月</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">一年</a>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane active">
            {/* <div className="data_null">
              <img src="images/data_null.svg" />
              <p>暂无数据</p>
            </div> */}
            <div className="list-container">
              <div className="accordion-item">
                <div className="accordion-title section-padding">本週(2)</div>
                <div className="accordion-content table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>日期</th>
                        <th>笔数</th>
                        <th>下注金额</th>
                        <th>总收益</th>
                        <th>明细</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pinbottom-section">
        <ul className="acc-inner mt-1">
          <li className="acc-item px-5">
            <p>400.00</p>
            <span className="text-lighgray">累计流水</span>
          </li>
          <li className="divider" />
          <li className="acc-item px-5">
            <p className="text-green">76.00</p>
            <span className="text-lighgray">总收益</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PointHistory;
