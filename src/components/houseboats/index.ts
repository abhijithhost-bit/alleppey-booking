import React from "react";
import OneBedroomView from "./OneBedroomView";
import TwoBedroomView from "./TwoBedroomView";
import ThreeBedroomView from "./ThreeBedroomView";
import FourBedroomView from "./FourBedroomView";
import FiveBedroomView from "./FiveBedroomView";
import SixBedroomView from "./SixBedroomView";
import SevenBedroomView from "./SevenBedroomView";
import EightBedroomView from "./EightBedroomView";
import TenBedroomView from "./TenBedroomView";
import TwelveBedroomView from "./TwelveBedroomView";
import FourteenBedroomView from "./FourteenBedroomView";

export const HOUSEBOAT_VIEWS: Record<string, React.ComponentType> = {
  "1-bedroom-houseboat-alleppey": OneBedroomView,
  "2-bedroom-houseboat-alleppey": TwoBedroomView,
  "3-bedroom-houseboat-alleppey": ThreeBedroomView,
  "4-bedroom-houseboat-alleppey": FourBedroomView,
  "5-bedroom-houseboat-alleppey": FiveBedroomView,
  "6-bedroom-houseboat-alleppey": SixBedroomView,
  "7-bedroom-houseboat-alleppey": SevenBedroomView,
  "8-bedroom-houseboat-alleppey": EightBedroomView,
  "10-bedroom-houseboat-alleppey": TenBedroomView,
  "12-bedroom-houseboat-alleppey": TwelveBedroomView,
  "14-bedroom-houseboat-alleppey": FourteenBedroomView,
};
