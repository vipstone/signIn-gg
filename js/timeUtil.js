/**
 * Created by zhangminbo on 2015/9/22.
 */

/**
 * 获取当前时间的时间戳
 * @returns {number}        返回13位时间戳
 */
function getCurrTimeStamp(){
    var date = new Date();
    return date.getTime() / 1000;
}

/**
 * 获取指定时间（字符串）的时间戳
 * @param timeStr   时间字符串："2014-07-10 10:21:12"
 * @returns {number}    返回14位时间戳
 */
function getTimeStampFromTimeStr(timeStr){
    var date = new Date(timeStr);
    return date.getTime() / 1000;
}

/**
 *
 * @fmt 格式化字符串
 * @Date 为需要格式化的日期
 *
 * 示例：format(new Date(),'yyyy-MM-dd hh:mm:ss');
 * 返回值为字符串
 */
function dateFormat(pdate, fmt) {
    var date = new Date(Number(pdate) * 1000);
    if (date == "Invalid Date") {
        date = new Date(pdate);
    }
    if (null == date || undefined == date) return '';
    var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}