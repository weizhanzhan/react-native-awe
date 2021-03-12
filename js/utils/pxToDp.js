import {Dimensions} from 'react-native';
// 设计稿的宽度 / 元素的宽度 =  手机屏幕 / 手机中元素的宽度
// 手机中的元素 = 手机屏幕宽度 * 蒜素的宽度 / 设计稿的元素
// 58 app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
// UI 默认给图是 375
const uiWidthPx = 375;

function pxToDp(uiElementPx) {
return uiElementPx *  deviceWidthDp / uiWidthPx;
}

export default pxToDp;