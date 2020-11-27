import React from "react";
import Header from "../components/Header";

const DepositPayment: React.FC = () => {
  return (
    <>
      <Header title="转账汇款" />
      <div className="main-content section-padding">
        <div className="cash-box my-3 ">
          <p>转账金额务必与订单一致</p>
          <div className="cash-num">
            100
            <button className="icon_btn">
              <i className="iconcopy iconfont" />
            </button>
          </div>
          <span>订单金额</span>
        </div>
        <ul className="info-inner">
          <li className="info-item">
            <div className="info-item-title">转账银行:</div>
            <div className="info-item-content">中国邮政</div>
          </li>
          <li className="info-item">
            <div className="info-item-title">银行账号:</div>
            <div className="info-item-content">62110320330066335</div>
          </li>
          <li className="info-item">
            <div className="info-item-title">转账姓名:</div>
            <div className="info-item-content">曾友黔</div>
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
        <div className="d-flex justify-content-between flex-nowrap mt-4">
          <button type="button" className="btnbase outline_btn color-blue mr-1">
            撤销申请
          </button>
          <button type="button" className="btnbase primary_btn ml-1">
            已完成支付
          </button>
        </div>
        <div className="remind-section mt-4">
          <div className="remind-title">
            <i className="iconfont iconremind" />
            重要提醒
          </div>
          <ol>
            <li>请填写正确的转账金额和备注，否则存款无法及时到账</li>
            <li>下次存款时，请获取新的账号，存入旧账号将无法到账</li>
            <li>转账时，优先复制收款卡号粘贴</li>
            <li>不知道如何存款，请按存款教程页面的“存款教程”步骤操作</li>
            <li>请及时前往存款，附言（备注）有效时间只有15分钟</li>
            <li>若存款存在疑问，请联系客服及时处理</li>
            <li>请勿使用支付宝、微信转账至公司账户</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default DepositPayment;
