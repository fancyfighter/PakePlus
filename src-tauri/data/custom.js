window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 方案4：原因分析：网关“放行前”，重定向到合法白名单，“该域名未授权”指放行前，就访问超星
const authTimer = setInterval(() => {
    const title = document.title.trim();    //获取去掉前后空格的标签页标题
    if (title.includes("注销页") || title.includes("登录成功页")) {
        clearInterval(authTimer);    //匹配成功后，立刻清除定时器轮询，防止重复触发
        window.location.replace("https://www.fjpit.edu.cn/");    //跳转到被授权的学校官网，不会触发“未授权”
    }
}, 500);

// 二次跳板：已安全到达学校官网，网络已完全打通，这时超星能完美打开，不会有前面的提示
if (window.location.href.includes("fjpit.edu.cn")) {
    setTimeout(() => {
        window.location.replace("https://passport2.chaoxing.com/login");
    }, 500);
}