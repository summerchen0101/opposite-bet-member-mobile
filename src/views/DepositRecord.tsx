import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const DepositRecord: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header backRoute="deposit" title="充值记录" />
      <div className="main-content">
        <ul
          className="nav nav-tabs d-flex justify-content-between section-padding"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link active">今日</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">近3日</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">近7日</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">查询</a>
          </li>
        </ul>
        <div className="pintop-section d-flex flex-column justify-content-center">
          <ul className="acc-inner mt-1">
            <li className="acc-item px-5">
              <p>3000.00</p>
              <span className="text-lighgray">总提现笔额</span>
            </li>
            <li className="divider" />
            <li className="acc-item px-5">
              <p className="user-wallet">2</p>
              <span className="text-lighgray">总提现笔数</span>
            </li>
          </ul>
        </div>
        <div className="tab-content pt-2 section-padding">
          <div className="tab-pane active">
            {/* <div className="data_null">
              <img src="images/data_null.svg" />
              <p>暂无数据</p>
              <button type="submit" className="btnbase outline_btn mt-4">
                添加银行卡
              </button>
            </div> */}
            <div className="list-container ">
              {[...Array(4)].map((t, i) => (
                <div
                  className="recharge-record background-white"
                  key={i}
                  onClick={(e) => history.push("/deposit-record-detail")}
                >
                  <div className="info-col">
                    <div className="d-flex align-items-center">
                      <div className="record-title">充值</div>
                      <div className="time ml-2">2020-06-30 11:19</div>
                    </div>
                    <div className="status">未付款</div>
                  </div>
                  <div>中国邮政(1223)</div>
                  <div>充值金额:100</div>
                  <div className="order-num">订单号:20160130123145675434</div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="tab-pane">
            <div className="form-group form-date-picker">
              <input
                type="date"
                className="form-input "
                name="start"
                placeholder="请选择日期"
              />
              <span>至</span>
              <input
                type="date"
                className="form-input  "
                name="start"
                placeholder="请选择日期"
              />
            </div>
            <button
              type="submit"
              className="btnbase primary_btn mt-4"
              data-toggle="modal"
              data-target="#"
            >
              查询
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default DepositRecord;
