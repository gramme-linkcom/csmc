window.onload = onLoad;

function onLoad() {
    let link = document.getElementById('news');
    link.setAttribute('href', "news/index.html");

    link = document.getElementById('about');
    link.setAttribute('href', "about/index.html");
    
    link = document.getElementById('ir');
    link.setAttribute('href', "ir/index.html");
    
    link = document.getElementById('recruit');
    link.setAttribute('href', "recruit/index.html");

    link = document.getElementById('base');
    let root = "csmc.linkcom.f5.si"
    link.setAttribute('href', "http://"+root);

    console.log("completed rewrite")
}

