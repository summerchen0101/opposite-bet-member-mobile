import React from "react";
import Header from "../components/Header";

const DepositRecordDetail: React.FC = () => {
  return (
    <>
      <Header title="充值详情" backRoute="/deposit-record" />
      <div className="main-content">
        <div className="main-section main-section-padding">
          <div className="cash-box my-3 d-flex flex-column justify-content-center">
            <div className="cash-num">100</div>
            <span>实际到账</span>
          </div>
          <ul className="info-inner border-bottom pb-3">
            <li className="info-item">
              <div className="info-item-title">支付方式:</div>
              <div className="info-item-content">网银转账</div>
            </li>
            <li className="info-item">
              <div className="info-item-title">支付银行:</div>
              <div className="info-item-content">中国邮政(1223)</div>
            </li>
            <li className="info-item">
              <div className="info-item-title">充值状态:</div>
              <div className="info-item-content text-green">充值成功</div>
            </li>
            <li className="info-item">
              <div className="info-item-title">转账地址:</div>
              <div className="info-item-content">深圳龙岗营业所</div>
            </li>
            <li className="info-item">
              <div className="info-item-title">备注:</div>
              <div className="info-item-content">fpNU5</div>
            </li>
          </ul>
          <ul className="info-inner pt-3">
            <li className="info-item">
              <div className="info-item-title">订单号:</div>
              <div className="info-item-content">
                20160130123145675434
                <button className="icon_btn">
                  <i className="iconcopy iconfont" />
                </button>
              </div>
            </li>
            <li className="info-item">
              <div className="info-item-title">充值时间:</div>
              <div className="info-item-content">2020-06-30 11:19</div>
            </li>
          </ul>
          <p className="text-center ft-15 mt-5">
            如需要帮助请<span className="text-blue">联系客服</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default DepositRecordDetail;
