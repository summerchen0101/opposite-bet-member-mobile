import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import SButton from "../components/SButton";

const Withdraw: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Header title="提领" backRoute>
        <SButton onClick={(e) => history.push("/withdraw-record")}>
          提领记录
        </SButton>
      </Header>
      <div className="pintop-section fixed">
        <ul className="acc-inner mt-1">
          <li className="acc-item ">
            <p>6%</p>
            <span className="text-lightgray">提领手续费</span>
          </li>
          <li className="divider" />
          <li className="acc-item">
            <p className="user-wallet">20,849.55</p>
            <span>可用余额</span>
          </li>
          <li className="divider" />
          <li className="acc-item">
            <p>1,849.55</p>
            <span>交易中金额</span>
          </li>
        </ul>
      </div>
      <div className="main-content section-padding" style={{ paddingTop: 105 }}>
        <form>
          <label className="form-label2">
            银行卡
            <span className="label-right text-lighgray">卡片数量:0/3</span>
          </label>
          <div
            className="btnbase outline_btn color-gray"
            // onClick="location.href = 'bankcard-add.html'"
          >
            添加银行卡
          </div>
          <label className="form-label2">提领金额</label>
          <div className="form-group d-flex flex-nowrap">
            <input
              type="number"
              className="form-input w-75 mr-2"
              required
              placeholder="可提领金额100~5000"
            />
            <div className="btnbase primary_btn w-25 ft-15">最大额度</div>
          </div>
          <label className="form-label2">
            提领密码<span className="label-right text-blue">前往设定</span>
          </label>
          <div className="form-group ">
            <input
              type="text"
              className="form-input"
              required
              placeholder="请输入提领密码"
            />
            <i className="iconfont iconeye-close btn_eye" />
          </div>
          <div className="background-gray ft-14 section-padding py-2 my-3">
            <div className="mb-1 handling-charge">手续费:0</div>
            <div className="mb-1 administrative_expense">行政费:0</div>
            <div className="mb-1 promotion-charge">补充存款优惠:0</div>
          </div>
          <div className="d-flex justify-content-between ft-14 section-padding">
            实际到账:<span className="text-blue">0</span>
          </div>
          <button
            type="submit"
            className="btnbase primary_btn mt-4 mb-2"
            data-toggle="modal"
            data-target="#"
          >
            立即提领
          </button>
        </form>
      </div>
    </>
  );
};

export default Withdraw;
