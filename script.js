var display;
var buttons;
var clear;
var equal;
var delt;   
var pinkthemeEL;
var darkTheme;
var btnArea;
var greenTheme;
var brownTheme;



(function () {
    display = document.querySelector('.display');
    buttons = document.querySelectorAll('.btn');
    clear = document.querySelector('.clear-btn');
    equal = document.querySelector('.equal-btn');
    delt = document.querySelector('.delt-btn');
    pinkthemeEL = document.querySelector('#pinkTheme');
    btnArea = document.querySelector('#calculator');
    darkTheme = document.querySelector('#darkTheme');
    greenTheme = document.querySelector('#greenTheme');
    brownTheme = document.querySelector('#brownTheme');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    })
    equal.addEventListener('click', function (e) {
        if (display.value === '') {
            display.value = "";
        }
        else {
            let ans = eval(display.value);
            display.value = ans;
        }
    })

    clear.addEventListener('click', function (e) {
        display.value = "";


    })
    delt.addEventListener('click', function (e) {
        let deleteLatest = display.value;
        display.value = deleteLatest.substr(0, deleteLatest.length - 1);
    })

   

// PINK THEME ----------------------------------------------------


    pinkthemeEL.addEventListener('click',function(e){
        display.style.background = '#FF69B4';
        btnArea.style.background = '#FFC0CB';
        display.style.color = 'white'
        display.style.border = '2px solid grey'
        display.style.width = '292px';
        equal.style.background = 'cyan';
        clear.style.background = 'cyan';
        delt.style.background = 'aquamarine' ;
        delt.style.border = '2px solid grey';
        clear.style.border = '2px solid grey';
        delt.style.border = '2px solid grey';
        equal.style.border = '2px solid grey';


        let numBtn = document.getElementsByClassName('btn numbers-btn');
        for(var i = 0; i<numBtn.length;i++){
            numBtn[i].style.color = 'black';
            numBtn[i].style.background = 'white';   
            
        }
        
        let optBtn = document.getElementsByClassName('btn operators-btn');
        for(var i = 0; i<optBtn.length;i++){
            optBtn[i].style.color = 'cyan';
            optBtn[i].style.background = 'white';

        }

        for(var i = 0;i<=buttons.length;i++){
        buttons[i].style.border = '2px solid #FF69B4';
        buttons[i].style.backgroundcolor = 'white';

        }
    
    })

//DARK THEME ------------------------------------------------------------------------------------



    darkTheme.addEventListener('click',function(){
        display.style.background = 'black';
        display.style.color = 'blue';
        display.style.border = '2px solid grey'
        display.style.width = '292px';
        btnArea.style.background = 'black';
        equal.style.background = 'blue';
        clear.style.background = 'blue';
        delt.style.background = 'skyblue' 

        var numBtn = document.getElementsByClassName('btn numbers-btn');
        for(var i = 0; i<numBtn.length;i++){
            numBtn[i].style.color = 'white';
        }
        
        var optBtn = document.getElementsByClassName('btn operators-btn');
        for(var i = 0; i<optBtn.length;i++){
            optBtn[i].style.color = 'blue';
        }
        for(var i = 0;i<=buttons.length;i++){
        buttons[i].style.border = '1px solid grey';
        buttons[i].style.background = 'rgb(33,33,33)';

        }

    })



// GREEN THEME -----------------------------------------------------------------------------
    
    greenTheme.addEventListener('click',function(){
        display.style.background = 'rgb(200,200,150)';
        display.style.color = 'black';
        display.style.border = '2px solid grey'
        display.style.width = '292px';
        btnArea.style.background = 'grey';
        equal.style.background = 'green';
        clear.style.background = 'green';
        delt.style.background = 'honeydew';
        // delt.style.border = '1px solid black';

        var numBtn = document.getElementsByClassName('btn numbers-btn');
        for(var i = 0; i<numBtn.length;i++){
            numBtn[i].style.color = 'white';
        }
        
        var optBtn = document.getElementsByClassName('btn operators-btn');
        for(var i = 0; i<optBtn.length;i++){
            optBtn[i].style.color = 'greenyellow';
        }
        for(var i = 0;i<=buttons.length;i++){
        buttons[i].style.border = '1px solid honeydew';
        buttons[i].style.background = 'black';

        }

    })

//BROWN THEME -------------------------------------------------------------------------------------

    brownTheme.addEventListener('click',function(){
        display.style.background = 'skyblue';
        display.style.color = 'black';
        display.style.border = '2px solid grey'
        display.style.width = '292px';
        btnArea.style.background = 'honeydew';
        equal.style.background = 'brown';
        clear.style.background = 'brown';
        delt.style.background = 'skyblue';
        // delt.style.border = '1px solid black';

        var numBtn = document.getElementsByClassName('btn numbers-btn');
        for(var i = 0; i<numBtn.length;i++){
            numBtn[i].style.color = 'white';
        }
        
        var optBtn = document.getElementsByClassName('btn operators-btn');
        for(var i = 0; i<optBtn.length;i++){
            optBtn[i].style.color = 'orangered';
        }
        for(var i = 0;i<=buttons.length;i++){
        buttons[i].style.border = '1px solid honeydew';
        buttons[i].style.background = 'black';


        }

    })
    var pinkbtn = document.getElementById('pinkTheme');
    var darkbtn = document.getElementById('darkTheme');
    var brownbtn = document.getElementById('brownTheme');
    var greenbtn = document.getElementById('greenTheme');
    pinkbtn.addEventListener('mousedown',function(){
        pinkbtn.style.background = 'grey';
        brownTheme.style.background = '';
        darkTheme.style.background = '';
        greenTheme.style.background = '';
    })

    darkbtn.addEventListener('mousedown',function(){
        pinkbtn.style.background = '';
        brownTheme.style.background = '';
        darkTheme.style.background = 'grey';
        greenTheme.style.background = '';
    })

    greenbtn.addEventListener('mousedown',function(){
        pinkbtn.style.background = '';
        brownTheme.style.background = '';
        darkTheme.style.background = '';
        greenTheme.style.background = 'grey';
    })
    brownbtn.addEventListener('mousedown',function(){
        pinkbtn.style.background = '';
        brownTheme.style.background = 'grey';
        darkTheme.style.background = '';
        greenTheme.style.background = '';
    })


    

        // buttons[0].style.background = 'grey';


    
})()
function refreshPage(){
    window.location.reload();
} 

