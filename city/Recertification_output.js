window.onpageshow=function(n){var t;if(n.persisted){var i=String(Cookies.get("UserName")),r=String(Cookies.get("Password")),u=String(Cookies.get("Recertification"));i=="undefined"||r=="undefind"?window.location.href="./403.html":u=="undefined"&&(t=location.href,t=CryptoJS.AES.encrypt(t,"URL_POST"),window.location.href="userrecertification.html?url="+t)}};window.addEventListener("load",function(){var t=String(Cookies.get("UserName")),i=String(Cookies.get("Recertification")),n;t=CryptoJS.AES.decrypt(t,"UsernameEncrypt");Recertification=CryptoJS.AES.decrypt(i,"Recertification");Recertification=Recertification.toString(CryptoJS.enc.Utf8);Username=t.toString(CryptoJS.enc.Utf8);t=="undefined"?window.location.href="./403.html":i=="undefined"?(n=location.href,n=CryptoJS.AES.encrypt(n,"URL_POST"),window.location.href="userrecertification.html?url="+n):Username!==Recertification?(n=location.href,n=CryptoJS.AES.encrypt(n,"URL_POST"),window.location.href="userrecertification.html?url="+n):Cookies.remove("Recertification")})