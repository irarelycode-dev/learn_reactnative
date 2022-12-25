import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.45 * SCREEN_WIDTH;

export { SCREEN_WIDTH, SWIPE_THRESHOLD };
