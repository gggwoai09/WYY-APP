import service from "..";
function getDeviceType() {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) {
        return 1;  // 安卓
    } else if (/iPhone|iPad/i.test(ua)) {
        return 2;  // 苹果
    } else if(/iPod/i.test(ua)){
        return 3;
    }else if(/pc/i.test(ua)){
        return 0;
    }else{
        return 1;
    }
}

// 动态设置 type 参数并输出到控制台
export function getBanner() {
    const type = getDeviceType();  // 根据设备类型设置 type
    console.log("Device type:", type);  // 输出 type 到浏览器控制台
    return service({
        method: "GET",
        url: `/banner?type=${type}`  // 动态使用 type
    });
}