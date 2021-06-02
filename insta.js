function CreateWhatsappChatWidget(option = {
    brandSetting: {
        autoShow: true,
        backgroundColor: "#0a6114",
        borderRadius: "25",
        brandImg: "https://cdn.clare.ai/wati/images/WATI_logo_square_2.png",
        brandImgData: null,
        brandName: "WATI",
        brandSubTitle: "Typically replies within a day",
        ctaText: "Start Chat",
        welcomeText: "Hi, there! \nHow can I help you?",
        messageText: "",
        phoneNumber: "85252859384"
    },
    chatButtonSetting: {
        backgroundColor: "#4dc247",
        borderRadius: "25",
        ctaText: "",
        marginLeft: "0",
        marginRight: "20",
        marginBottom: "20",
        position: "right"
    },
    enabled: false
}) {
    if (option.enabled == false){
        return;
    }
    if(!option.chatButtonSetting.position){
        option.chatButtonSetting.position = "right";
        option.chatButtonSetting.marginBottom = "20";
        option.chatButtonSetting.marginLeft = "0";
        option.chatButtonSetting.marginRight = "20";
    }
    var css = document.createElement("STYLE");
    if(window.jQuery){
        initWidget();
    }else{
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            initWidget();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    }
    function initWidget(){
        if (option.brandSetting.messageText) {
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("{{page_link}}", window.location.href);
            option.brandSetting.messageText = option.brandSetting.messageText.replaceAll("{{page_title}}", jQuery("title").text());
        }
        jQuery('body').append(`<div id="whatsapp_chat_widget">
            <div id="wa-widget-send-button">
                <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title"
aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Instagram</title>
  <desc>A color styled icon from Orion Icon Library.</desc>
  <defs>
    <radialGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0 -.5 -16 -1395.5)"
    r="163.552" cy="-2919.444" cx="51.111" id="c8fda8db-da88-4668-96d5-1a67bb30477f">
      <stop data-name="layer1" stop-color="#ffb140" offset="0"></stop>
      <stop data-name="layer2" stop-color="#ff5445" offset=".256"></stop>
      <stop data-name="layer3" stop-color="#fc2b82" offset=".599"></stop>
      <stop data-name="layer4" stop-color="#8e40b7" offset="1"></stop>
    </radialGradient>
  </defs>
  <path fill="url(#c8fda8db-da88-4668-96d5-1a67bb30477f)" d="M52.922 14.918a3.84 3.84 0 1 1-3.84-3.84 3.84 3.84 0 0 1 3.84 3.84zM32 42.668A10.667 10.667 0 1 1 42.667 32 10.666 10.666 0 0 1 32 42.667zm0-27.1A16.433 16.433 0 1 0 48.433 32 16.432 16.432 0 0 0 32 15.568zm0-9.8c8.545 0 9.556.03 12.93.186a17.7 17.7 0 0 1 5.943 1.1 9.916 9.916 0 0 1 3.68 2.394 9.908 9.908 0 0 1 2.394 3.68 17.714 17.714 0 0 1 1.1 5.942c.154 3.375.187 4.386.187 12.93s-.033 9.557-.187 12.932a17.7 17.7 0 0 1-1.1 5.942 10.6 10.6 0 0 1-6.074 6.074 17.714 17.714 0 0 1-5.942 1.1c-3.37.154-4.382.187-12.93.187s-9.554-.033-12.93-.187a17.7 17.7 0 0 1-5.94-1.1 9.916 9.916 0 0 1-3.68-2.394 9.914 9.914 0 0 1-2.394-3.68 17.714 17.714 0 0 1-1.1-5.942c-.154-3.375-.19-4.387-.19-12.932s.033-9.556.188-12.93a17.7 17.7 0 0 1 1.1-5.943 9.916 9.916 0 0 1 2.394-3.68 9.908 9.908 0 0 1 3.68-2.394 17.714 17.714 0 0 1 5.942-1.1c3.374-.153 4.385-.187 12.93-.187zM32 0c-8.69 0-9.78.037-13.194.192A23.487 23.487 0 0 0 11.04 1.68a15.68 15.68 0 0 0-5.67 3.69 15.68 15.68 0 0 0-3.69 5.67 23.49 23.49 0 0 0-1.488 7.766C.037 22.22 0 23.31 0 32s.037 9.78.192 13.194A23.49 23.49 0 0 0 1.68 52.96a15.68 15.68 0 0 0 3.69 5.67 15.687 15.687 0 0 0 5.67 3.69 23.49 23.49 0 0 0 7.766 1.487c3.413.156 4.5.193 13.194.193s9.78-.037 13.194-.193a23.49 23.49 0 0 0 7.767-1.487 16.363 16.363 0 0 0 9.36-9.36 23.49 23.49 0 0 0 1.49-7.767C63.963 41.78 64 40.69 64 32s-.037-9.78-.193-13.194a23.49 23.49 0 0 0-1.487-7.767 15.687 15.687 0 0 0-3.69-5.67 15.687 15.687 0 0 0-5.67-3.69A23.49 23.49 0 0 0 45.194.19C41.78.037 40.69 0 32 0z"></path>
</svg>
                <div style="color: white; font-size: 18px">${option.chatButtonSetting.ctaText}</div>
            </div>
        </div>`);
        jQuery('#whatsapp_chat_widget').append(`
            <div class='wa-chat-box'>
                <div class='wa-chat-box-header'>
                    <img class='wa-chat-box-brand' onError='this.src= "https://cdn.clare.ai/wati/images/WATI_logo_square_2.png";' src='${option.brandSetting.brandImg}'/>
                    <div class='wa-chat-box-brand-text'>
                        <div class='wa-chat-box-brand-name'>${option.brandSetting.brandName}</div>
                        <div class='wa-chat-box-brand-subtitle'>${option.brandSetting.brandSubTitle}</div>
                    </div>
                    <div class="wa-chat-bubble-close-btn"><img style="display: table-row" src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/Vector.png?574"></div>
                </div>
                
                <div class='wa-chat-box-content'>
                    <div class='wa-chat-box-content-chat'>                            
                        <div class='wa-chat-box-content-chat-brand'>${option.brandSetting.brandName}</div>
                        <div class='wa-chat-box-content-chat-welcome'>${option.brandSetting.welcomeText.replace(/\n/g, "<br/>")}</div>
                    </div>
                </div>
                
                <div class='wa-chat-box-send'>
                    <a role="button" target="_blank" href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(/\+/g, "")}&text=${option.brandSetting.messageText?option.brandSetting.messageText:""}" title="WhatsApp" class="wa-chat-box-content-send-btn"><svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="wa-chat-box-content-send-btn-icon"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>
                        <span class="wa-chat-box-content-send-btn-text">${option.brandSetting.ctaText}</span>
                    </a>
                    <div class='wa-chat-box-poweredby'>âš¡ by <a href="https://wati.io/?utm_source=shopify&utm_medium=chat_widget&utm_campaign=shopify_widget" target="_blank" style="color: #006eff6e;">wati.io</a></div>
                </div>
            </div>
        `);
        if(option.brandSetting.autoShow){
            jQuery(".wa-chat-box").css("display", "block");
        }else{
            jQuery(".wa-chat-box").css("display", "none");
        }
        jQuery("#whatsapp_chat_widget").on('click', '.wa-chat-bubble-close-btn', function(){                
            jQuery(".wa-chat-box").css("display", "none");
        })
        jQuery("#whatsapp_chat_widget").on('click', '#wa-widget-send-button', function(){                
            jQuery(".wa-chat-box").css("display", "block");
        })
    }
    var styles = `
        #whatsapp_chat_widget{
            display: ${option.enabled?"block":"none"}
        }
        .wa-chat-box-content-send-btn-text{
            margin-left: 8px;
            margin-right: 8px;
            z-index: 1;
            color: rgb(255, 255, 255);
        }
        .wa-chat-box-content-send-btn-icon{
            width: 16px;
            height: 16px;
            fill: rgb(255, 255, 255);
            z-index: 1;
            flex: 0 0 16px;
        }
        .wa-chat-box-content-send-btn{
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-size: 15px;
            font-weight: 700;
            line-height: 20px;
            cursor: pointer;
            position: relative;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-appearance: none;
            padding: 8px 12px;
            border-radius: ${option.brandSetting.borderRadius}px;
            border-width: initial;
            border-style: none;
            border-color: initial;
            border-image: initial;
            background-color: ${option.chatButtonSetting.backgroundColor};
            margin: 20px;
            overflow: hidden;
        }
        .wa-chat-box-send{
            background-color:white;

        }
        .wa-chat-box-content-chat-brand{        
            font-size: 13px;
            font-weight: 700;
            line-height: 18px;
            color: rgba(0, 0, 0, 0.4);
        }
        .wa-chat-box-content-chat-welcome{        
            font-size: 14px;
            line-height: 19px;
            margin-top: 4px;
            color: rgb(17, 17, 17);
        }
        .wa-chat-box-content-chat{
            background-color: white;
            display: inline-block;
            margin: 20px;
            padding: 10px;
            border-radius: 10px;
        }
        .wa-chat-box-content{
            background: url('https://www.ecarsida.com/wp-content/uploads/2021/06/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
            
        }
        .wa-chat-bubble-close-btn{
            cursor: pointer;
            position: absolute;
            right: 20px;
            top: 20px;
        }
        .wa-chat-box-brand-text{
            margin-left: 20px;
        }
        .wa-chat-box-brand-name{
            font-size: 16px;
            font-weight: 700;
            line-height: 20px;
        }
        .wa-chat-box-brand-subtitle{
            font-size: 13px;
            line-height: 18px;
            margin-top: 4px;
        }
        
        .wa-chat-box-header{
            height: 100px;
            max-height: 100px;
            min-height: 100px;
            background-color: ${option.brandSetting.backgroundColor};
            color: white;
            border-radius: 10px 10px 0px 0px;
            display:flex;
            align-items: center;
        }
        .wa-chat-box-brand{
            margin-left: 20px;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
        }
        .wa-chat-box{
            background-color:white;
            z-index: 16000160 !important;
            margin-bottom: 60px;
            width: 360px;
            position: fixed !important;
            bottom: ${option.chatButtonSetting.marginBottom}px !important;
            ${option.chatButtonSetting.position == "left" ? "left : "+option.chatButtonSetting.marginLeft+"px" : "right : "+option.chatButtonSetting.marginRight+"px"};
            border-radius: 10px;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
        }
        #wa-widget-send-button {
            margin: 0 0 ${option.chatButtonSetting.marginBottom}px 0 !important;      
            padding-left: ${option.chatButtonSetting.ctaText?"15px":"0px"};
            padding-right: ${option.chatButtonSetting.ctaText?"15px":"0px"};
            position: fixed !important;
            z-index: 16000160 !important;
            bottom: 0 !important;
            text-align: center !important;
            height: 50px;
            min-width: 50px;
            border-radius: ${option.chatButtonSetting.borderRadius}px;
            visibility: visible;
            transition: none !important;
            background-color: ${option.chatButtonSetting.backgroundColor};
            box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
            ${option.chatButtonSetting.position == "left" ? "left : "+option.chatButtonSetting.marginLeft+"px" : "right : "+option.chatButtonSetting.marginRight+"px"};
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content:center;
        }
        .wa-messenger-svg-whatsapp{
            fill: white;
            width: 41px;
            height: 50px;
        }
        .wa-chat-box-poweredby{
            text-align: center;
            font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
            margin-bottom: 15px;
            margin-top: -10px;
            font-style: italic;
            font-size: 12px;
            color: lightgray;
        }
        @media only screen and (max-width: 600px) {
            .wa-chat-box
            {
                width: auto;
                position: fixed !important;
                right: 20px!important;
                left: 20px!important;
            }
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
}