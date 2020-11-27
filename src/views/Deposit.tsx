import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import SButton from "../components/SButton";

const Deposit: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header title="充值" backRoute>
        <SButton onClick={(e) => history.push("/deposit-record")}>
          充值记录
        </SButton>
      </Header>
      <div className="pintop-section d-flex flex-column justify-content-center fixed">
        <div className="user-id-col">bet8888</div>
        <div className="user-wallet-col">可用余额: 20,849.55</div>
        <div className="reload-btn">
          <i className="iconfont iconreload" />
        </div>
      </div>
      <div className="main-content section-padding" style={{ paddingTop: 105 }}>
        <form>
          <label className="form-label2">银行卡</label>
          <div className="method-btn-wrap">
            <div className="outline_btn color-gray">转账汇款</div>
            <div className="outline_btn color-gray">银行卡转卡</div>
            <div className="outline_btn color-gray">支付宝</div>
            <div className="outline_btn color-gray">银联快捷</div>
            <div className="outline_btn color-gray">支付宝转卡</div>
            <div className="outline_btn color-gray">网银支付</div>
          </div>
          <label className="form-label2">汇款姓名</label>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              required
              placeholder="请输入汇款人姓名"
            />
            <a className="iconfont iconclear btn_cancel" />
          </div>
          <label className="form-label2">存款金额</label>
          <div className="method-btn-wrap">
            <div className="outline_btn color-gray">+50</div>
            <div className="outline_btn color-gray">+100</div>
            <div className="outline_btn color-gray">+1000</div>
            <div className="outline_btn color-gray">+5000</div>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-input"
              required
              placeholder="单笔充值金额:200~5000"
            />
            <a className="iconfont iconclear btn_cancel" />
          </div>
          <button
            type="submit"
            className="btnbase primary_btn mt-4 mb-2"
            data-toggle="modal"
            data-target="#dpModal"
          >
            立即充值
          </button>
        </form>
      </div>
    </>
  );
};

export default Deposit;
