import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.45 * SCREEN_WIDTH;
const FIREBASE_FUNCTIONS_BASE_URL = "https://a934-173-178-59-186.ngrok.io";

export { SCREEN_WIDTH, SWIPE_THRESHOLD, FIREBASE_FUNCTIONS_BASE_URL };
