window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// 监听登录成功：定义一个检查函数
function checkAndRedirect() {
    // 假设登录成功后，页面会跳转到 10.0.0.19 的另一个页面，比如 /success.html，或者页面的标题会变成 "登录成功"
    
    // 访问“http://10.0.0.19/”“https://www.baidu.com/”都会提示“该域名未授权”，访问“https://www.fjpit.edu.cn/”则正常
    if (window.location.pathname === '/success.html' || 
        document.title.includes('注销页') || document.title.includes('百度一下，你就知道') || document.title.includes('福建信息职业技术学院')) {
        window.location.replace('https://passport2.chaoxing.com/login');
    }
}

// 每隔 500毫秒 检查一次页面状态
setInterval(checkAndRedirect, 500);