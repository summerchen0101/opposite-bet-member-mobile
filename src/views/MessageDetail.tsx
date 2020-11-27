import React from "react";
import Header from "../components/Header";

const MessageDetail: React.FC = () => {
  return (
    <>
      <Header backRoute="/messages" title="公告详情" />
      <div className="main-content section-padding">
        <div className="message-title w-100 my-3">保本活动重要通知</div>
        <div className="message-time w-100 ">2020-09-07 02:48:36</div>
        <div className="message-content-col w-100 mt-4">
          瑞士乙 明辛根 vs 尼奈斯因比赛待定，所有注单取消，投注金额自动返还
        </div>
      </div>
    </>
  );
};

export default MessageDetail;
