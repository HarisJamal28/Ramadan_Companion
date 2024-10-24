var Siparah = document.getElementById('CounterStack');
const butt = CounterStack.querySelectorAll('button');
var Tasbeeh = document.getElementById('Tracker');
var ReciteButt = document.getElementById('ReciteButt');
var count = 0,flag = true;

var audio = document.getElementById('audio');

butt.forEach(button => {
    count++;
    button.innerText = `${count}`;
    button.setAttribute('id',`${count}`);
    const color = localStorage.getItem(`button-${count}-color`)
    if(color){
        button.style.backgroundColor = color;
        button.style.color = 'green'?'white' : 'black';
    }
    button.onclick = () => ok(button.id);
});

window.addEventListener('load', () => {
    butt.forEach(button => {
        const color = button.style.backgroundColor;
        button.style.color = color === 'green' ? 'white' : 'black';
    });
});

function ok(id){
    let butter = document.getElementById(`${id}`);
    const colorbutt = butter.style.backgroundColor;

    if(colorbutt == 'green'){
        butter.style.backgroundColor = 'white';
        butter.style.color = 'black';
    
        localStorage.setItem(`button-${id}-color`,'white');
    }else{
        butter.style.backgroundColor = 'green';
        butter.style.color = 'white';

    localStorage.setItem(`button-${id}-color`,'green');
    }
}


var i=0;
var flag1=false,flag2=false,flag3=false;


var Rakats = document.getElementById("Rakats");
var j=0,a=0;
var arr = [4,2,2,2,2,2,2,2,2,2,2,2,3];
var TCount = document.getElementById('TCount');
// var TEnd = (arr.length);

function Track(){
   
    let butt = document.createElement('button');
    if(j==arr.length){
        j=0;
        Rakats.innerHTML = '';
    }else{
    butt.innerText = `${arr[j]}`;
    j++;
    console.log(j);

        if(j>=3){
            a+=2;
            TCount.innerText = a;
            TCount.style.fontWeight = 'bolder';
            TCount.style.color = 'white';
            if(j==13){
                a=0;
                TCount.innerText = '';
            }
        }

        if(j==3){
            let divT = document.createElement('div');
            divT.style.width = 'fit-content';
            divT.innerText = 'Taraweeh';
            divT.style.padding = '10px';
            divT.style.fontWeight = 'bolder';
            divT.style.color = 'white';
            Rakats.appendChild(divT);
        }


    Rakats.appendChild(butt);
    }
}

var TStack = document.getElementById('TasbeehSTack');
var first = document.getElementById('first');
var k=0,z=0;
var flagOne = true;
var flagSec = false;
var flagThir =false;
var flagFour =false;
var TasbeehF = document.getElementById('TasbeehFatima');

var count3 = document.getElementById('CounterStack3');

function tasbeeh(){
    
    // TasbeehF.scrollIntoView({behavior: 'smooth'});

if(z==0){
    TasbeehF.style.backgroundImage = 'url(./images/SubhanAllah.png)'
}

if(flagOne==true){
    if(k>=10){
        if(flagSec==true){
            if(k>=20){
                if(flagThir==true){
                    if(k>=30){
                        if(flagFour==true){
                            if(k>=33){
                                if(k>=33&&z==2){
                                    if(k>=34){
                                        TStack.innerHTML = '';
                                        flagOne = false;
                                        flagSec = false;
                                        flagThir = false;
                                        flagFour = false;
                                        k=0;
                                        z=0;
                                        TasbeehF.style.backgroundImage = 'url(./images/SubhanAllah.png)';
                                        audio.play();
                                        count3.style.minHeight = 'fit-content';
                                    }else{
                                        let butt3 = document.createElement('button');
                                        k++;
                                        butt3.innerText = k;
                            
                                        let fourth = document.getElementById('fourth');
                                        fourth.appendChild(butt3);
                                    }
                                }else{
                                TStack.innerHTML = '';
                                flagOne = false;
                                flagSec = false;
                                flagThir = false;
                                flagFour = false;
                                k=0;
                                z++;
                                if(z==1){
                                    TasbeehF.style.backgroundImage = 'url(./images/Alhamdulillah.png)'
                                    audio.play();
                                }

                                if(z==2){
                                    TasbeehF.style.backgroundImage = 'url(./images/AllahuAkbar.png)'
                                    audio.play();
                                }
                            }
                            }else{
                            let butt3 = document.createElement('button');
                            k++;
                            butt3.innerText = k;
                
                            let fourth = document.getElementById('fourth');
                            fourth.appendChild(butt3);
                            }
                        }else{
                            flagFour = true;
                            let div3 = document.createElement('div');
                            div3.setAttribute('id','fourth');
        
                            TStack.appendChild(div3);
                        }
                    }else{
                    let butt2 = document.createElement('button');
                    k++;
                    butt2.innerText = k;
        
                    let third = document.getElementById('third');
                    third.appendChild(butt2);
                    }
                }else{
                    flagThir = true;
                    let div2 = document.createElement('div');
                    div2.setAttribute('id','third');

                    TStack.appendChild(div2);
                }
            }else{
            let butt1 = document.createElement('button');
            k++;
            butt1.innerText = k;

            let second = document.getElementById('second');
            second.appendChild(butt1);
            }
        }else{
        flagSec = true;
        let div1 = document.createElement('div');
        div1.setAttribute('id','second');
        
        TStack.appendChild(div1);
        }
    }else{
    let butt = document.createElement('button');
    k++;
    butt.innerText = k;

    let first = document.getElementById('first');

    first.appendChild(butt);
    }
}else{
    flagOne = true;
    let div = document.createElement('div');
    div.setAttribute('id','first');

    count3.style.height = '600px';

    TStack.appendChild(div);
}
}


function reset(){
    TStack.innerHTML = '';
    flagOne = false;
    flagSec = false;
    flagThir = false;
    flagFour = false;
    k=0;
    z=0;
    TasbeehF.style.backgroundImage = 'url(./images/SubhanAllah.png)';
    audio.play();
}


function resetTara(){
    Rakats.innerHTML = '';
    j=0;
    a=0;
    TCount.innerHTML = '';
}

var toggleOn1 = true;
var toggleOn2 = false;
var toggleOn3 = false;
var disp1 = document.getElementById('Page1');
var disp2 = document.getElementById('Page2');
var disp3 = document.getElementById('Page3');


var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');
var icon3 = document.getElementById('icon3');

var navbutt1 = document.getElementById('nav-butt1');
var navbutt2 = document.getElementById('nav-butt2');
var navbutt3 = document.getElementById('nav-butt3');

icon1.style.color = 'white';
navbutt1.style.border = '3px solid rgb(151, 151, 151)';



function Disp1() {
    if (!toggleOn1) {
        toggleOn1 = true;
        toggleOn2 = false;
        toggleOn3 = false;
        
        disp1.style.display = 'block';
        icon1.style.color = 'white';
        navbutt1.style.border = '3px solid rgb(151, 151, 151)';

        // Hide other displays
        disp2.style.display = 'none';
        icon2.style.color = 'black';
        navbutt2.style.border = '3px solid black';
        
        disp3.style.display = 'none';
        icon3.style.color = 'black';
        navbutt3.style.border = '3px solid black';
    }
}

function Disp2() {
    if (!toggleOn2) {
        toggleOn1 = false;
        toggleOn2 = true;
        toggleOn3 = false;
        
        disp2.style.display = 'block';
        icon2.style.color = 'white';
        navbutt2.style.border = '3px solid rgb(151, 151, 151)';

        // Hide other displays
        disp1.style.display = 'none';
        icon1.style.color = 'black';
        navbutt1.style.border = '3px solid black';
        
        disp3.style.display = 'none';
        icon3.style.color = 'black';
        navbutt3.style.border = '3px solid black';
    }
}

function Disp3() {
    if (!toggleOn3) {
        toggleOn1 = false;
        toggleOn2 = false;
        toggleOn3 = true;
        
        disp3.style.display = 'block';
        icon3.style.color = 'white';
        navbutt3.style.border = '3px solid rgb(151, 151, 151)';

        // Hide other displays
        disp1.style.display = 'none';
        icon1.style.color = 'black';
        navbutt1.style.border = '3px solid black';
        
        disp2.style.display = 'none';
        icon2.style.color = 'black';
        navbutt2.style.border = '3px solid black';
    }
}