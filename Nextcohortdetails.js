import React from "react";

export default function Nextcohortdetails(props) {
  return (
    <div>
      <span class="comming-up">{props.mainheadcohort}</span>
      <span class="comming-down" style={{ color: props.colortext }}>
        {props.subheadcohort}
      </span>
    </div>
  );
}
