import React from "react";
import { View } from "@tarojs/components";
import { DatePicker } from "@nutui/nutui-react-taro";
import "./index.scss";

function Index() {
  return (
    <View className="nutui-react-demo">
      <DatePicker visible />
    </View>
  );
}

export default Index;
