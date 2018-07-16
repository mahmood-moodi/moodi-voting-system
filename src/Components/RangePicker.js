import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";


export default () => {
  return (
    <div>
      <RangePicker
        defaultValue={[
          moment("2015/01/01", dateFormat),
          moment("2015/01/01", dateFormat)
        ]}
        format={dateFormat}
      />
    </div>
  );
};
