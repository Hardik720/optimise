import React from "react";
import "../../assets/css/programs.css";
export default function Curriculum_cont_info(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div class=" content-info">
        <span class="info-1">{props.cur_info}</span>
        <span class="info-2">{props.cur_info_hrs}</span>
        <span class="info-3">{props.cur_hrs}</span>
      </div>
      <div id="div_block-1195-352" class="ct-div-block seperator-pipe"></div>
    </div>
  );
}
