export function QWChat() {
    var Settings = {
        "apikey": "cVRavLWX23Ix9g09lh7edNM6hAuonV",
        "botkey": "RATPDHF9iRq8oI4afiDJEv0E8",
        "conversationTitle": "Chat",
        "apptype": "Web",
        "css": ".chatbubble {background-color:#0E106A;}.chatbubble .chat-window{background:#fff;}.chatbubble .chats .input{background:#f0f0f0;}.chatbubble .messages li.support {border-radius: 18px 18px 18px 0px;background-color: #F0F0F0;color: black;font-family:Andale Mono;}.chatbubble .messages li {border-radius: 18px 18px 0px 18px;background-color: #0E106A;color: white;font-family:Andale Mono;}#logochat{content:url('https://qarma-pms.s3-us-west-2.amazonaws.com/QuickworkLogoWhiteText.png');}#logochat:after{content:url('https://i.ibb.co/6v6pGv9/Logo.png');}.btn-groupx .button{background-color: #0E106A;}.btn-group button{color: #0E106A;border: 1px solid#0E106A;}.chatbubble .loader{color:#0084FF;}#website:after{content:'Quickwork.co';}#logobutton{content:url('https://i.ibb.co/4sGqxb7/Bot-image.png');animation-name: shake;animation-duration: 2.5s;animation-iteration-count: infinite;animation-timing-function: ease-in;cursor: pointer; border-radius: 15px 15px 15px 15px}.logobutton:hover{animation-name: shakeAnim;} @keyframes shakeAnim {0% {left: 0}1% {left: -30px}2% {left: 50px}3% {left: -80px}4% {left: 80px}5% {left: -50px}6% {left: 30px}7% {left: 0};} @keyframes shake {0% {left: 0}1% {left: -30px}2% {left: 50px}3% {left: -80px}4% {left: 80px}5% {left: -50px}6% {left: 30px}7% {left: 0};}}.logobutton: after{/*this for firefox browser*/content:url('https://i.ibb.co/4sGqxb7/Bot-image.png');},,,widget_support_image = 'https://i.ibb.co/4sGqxb7/Bot-image.png';inputwidth= '85';widget_bot_image = 'https://i.ibb.co/4sGqxb7/Bot-image.png';widget_location = 'false';widget_file = 'false';document.getElementById('website').href='www.quickwork.com';document.getElementById('logochat').src = 'https://i.ibb.co/6v6pGv9/Logo.png';document.getElementById('widgetdropup1').innerHTML = ' ';document.getElementById('logobutton').src = 'https://i.ibb.co/4sGqxb7/Bot-image.png';document.getElementById('senderdata').innerHTML = '<span style=\\'float: left;margin: auto;font-size: 20px;color : #FFFFFF;padding: 6% 0 6% 0;\\'>Chat</span>';document.getElementById('newMessage').style.width = '75%';"
    };
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://hubliteamtest.s3-us-west-2.amazonaws.com/widget02/logic/server.min.js";
    var h = document.getElementsByTagName("head")[0];
    h.appendChild(s);
    s.onload = function () { loaded(); }
}