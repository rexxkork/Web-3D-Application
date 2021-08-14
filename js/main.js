const banner = document.getElementById('stage').getElementsByClassName('container-fluid')[0];
const header = banner.getElementsByTagName('h1')[0]
const para = banner.getElementsByTagName('p')[0]
const cokeBanner = "\"./assets/images/coke-long-banner.svg\""
const costaBanner = "\"./assets/images/costa-long-banner.svg\""

//Change Banner depends on button pressed
function changeBanner(name){

    switch (name){
        case 'sprite':
            banner.setAttribute("style",
                "background: linear-gradient(210deg, rgba(55, 73, 117, 1) 0%, rgba(55, 73, 117, 1) 3%, rgba(33, 151, 85, 1) 80%);" +
                "white-space: pre;")
            header.textContent = 'Sprite'
            para.textContent = 'The ultimate cut-through refreshment. \r\nObey Your Thirst.'
            document.getElementById('Model-Switch').setAttribute('whichChoice', '0');
            break
        case 'coke':
            banner.setAttribute("style","background: white" + " url(" + cokeBanner + ") left bottom;" +
                "white-space: pre;")
            header.textContent = 'Coca-Cola'
            para.textContent = 'The world\'s favourite soft drink since 1886.'
            document.getElementById('Model-Switch').setAttribute('whichChoice', '1');
            break
        case 'costa':
            banner.setAttribute("style","background: #870C20" + " url(" + costaBanner + ") left bottom;" +
                "white-space: pre;")
            header.textContent = 'Costa Coffee'
            para.textContent = 'Feel the Italian taste. Feel Costa.'
            document.getElementById('Model-Switch').setAttribute('whichChoice', '2');
            break
        default:
            banner.setAttribute("style","background: white" + " url(" + cokeBanner + ") left bottom;" +
                "white-space: pre;")
            header.textContent = 'Coca-Cola'
            para.textContent = 'The world\'s favourite soft drink since 1886.'
            document.getElementById('Model-Switch').setAttribute('whichChoice', '1');
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function cameraChange(name)
{
    switch (name){
        case 'front':
            document.getElementById('Camera-Front').setAttribute('bind', 'true');
            break
        case 'back':
            document.getElementById('Camera-Back').setAttribute('bind', 'true');
            break
        case 'left':
            document.getElementById('Camera-Left').setAttribute('bind', 'true');
            break
        case 'right':
            document.getElementById('Camera-Right').setAttribute('bind', 'true');
            break
        case 'top':
            document.getElementById('Camera-Top').setAttribute('bind', 'true');
            break
        case 'bottom':
            document.getElementById('Camera-Bottom').setAttribute('bind', 'true');
            break
        default:
            document.getElementById('Camera-Front').setAttribute('bind', 'true');
    }
}

function lightChange(name)
{
    document.getElementById('target').setAttribute('on', 'false')
    document.getElementById('point').setAttribute('on', 'false')
    document.getElementById('spot').setAttribute('on', 'false')
    switch (name){
        case 'target':
            document.getElementById('target').setAttribute('on', 'true')
            break
        case 'point':
            document.getElementById('point').setAttribute('on', 'true')
            break
        case 'spot':
            document.getElementById('spot').setAttribute('on', 'true')
            break
        default:

    }
}

function wireFrame()
{
    var e = document.getElementById('wire');
    e.runtime.togglePoints(true);
    e.runtime.togglePoints(true);
}


var currentBanner = getParameterByName('b');