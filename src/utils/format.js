// 格式化播放量
export function formatCount(count) {
    count = Number(count)
    if (count > 100000000) {
        return (count / 100000000).toFixed(1) + '亿'
    } else if (count > 10000) {
        return (count / 10000).toFixed(1) + '万'
    } else {
        return count
    }
}
function padLeft(time) {
    // 秒数小于10秒的前边将会加0
    if ((time + "").length >= 2) return time
    return "0" + time
}
// 格式化时间
export function formatTime(time) {
    // 获取时间
    let mintute = Math.floor(time / 60)
    let second = Math.floor(time % 60)
    // 拼接
    return padLeft(mintute) + ":" + padLeft(second)
}
