
const CW = new Audio('Music_Note/C.wav');
const Cblack = new Audio('Music_Note/C_s.wav');
const DW = new Audio('Music_Note/D.wav');
const Dblack = new Audio('Music_Note/D_s.wav');
const EW = new Audio('Music_Note/E.wav');
const FW = new Audio('Music_Note/F.wav');
const Fblack = new Audio('Music_Note/F_s.wav');
const GW = new Audio('Music_Note/G.wav');
const Gblack = new Audio('Music_Note/G_s.wav');
const AW = new Audio('Music_Note/A.wav');
const Bbblack = new Audio('Music_Note/Bb.wav');
const BW = new Audio('Music_Note/B.wav');
const C1W = new Audio('Music_Note/C1.wav');
const C1black = new Audio('Music_Note/C_s1.wav');
const D1W = new Audio('Music_Note/D1.wav');
const D1black = new Audio('Music_Note/D_s1.wav');
const E1W = new Audio('Music_Note/E1.wav');
const F1W = new Audio('Music_Note/F1.wav');

document.getElementById('C').addEventListener('click',firstW);
document.getElementById('D').addEventListener('click',secondW);
document.getElementById('E').addEventListener('click',thirdW);
document.getElementById('F').addEventListener('click',fourthW);
document.getElementById('G').addEventListener('click',fifthW);
document.getElementById('A').addEventListener('click',sixthW);
document.getElementById('B').addEventListener('click',seventhW);
document.getElementById('C1').addEventListener('click',eigthW);
document.getElementById('D1').addEventListener('click',ninthW);
document.getElementById('E1').addEventListener('click',tenthW);
document.getElementById('F1').addEventListener('click',eleventhW);
document.getElementById('C#').addEventListener('click',firstB);
document.getElementById('D#').addEventListener('click',secondB);
document.getElementById('F#').addEventListener('click',thirdB);
document.getElementById('G#').addEventListener('click',fourthB);
document.getElementById('Bb').addEventListener('click',fifthB);
document.getElementById('C#1').addEventListener('click',sixthB);
document.getElementById('D#1').addEventListener('click',seventhB);

function firstW(){
    CW.play();
}
function secondW(){
    DW.play();
}
function thirdW(){
    EW.play();
}
function fourthW(){
    FW.play();
}
function fifthW(){
    GW.play();
}
function sixthW(){
    AW.play();
}
function seventhW(){
    BW.play();
}
function eigthW(){
    C1W.play();
}
function ninthW(){
    D1W.play();
}
function tenthW(){
    E1W.play();
}
function eleventhW(){
    F1W.play();
}
function firstB(){
    Cblack.play();
}
function secondB(){
    Dblack.play();
}
function thirdB(){
    Fblack.play();
}
function fourthB(){
    Gblack.play();
}
function fifthB(){
    Bbblack.play();
}
function sixthB(){
    C1black.play();
}
function seventhB(){
    D1black.play();
}

addEventListener('keypress',(e)=>{
    if(e.charCode === 65 || e.charCode === 97){
        CW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 83 || e.charCode === 115){
        DW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 68 || e.charCode === 100){
        EW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 70 || e.charCode === 102){
        FW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 71 || e.charCode === 103){
        GW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 72 || e.charCode === 104){
        AW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 74 || e.charCode === 106){
        BW.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 75 || e.charCode === 107){
        C1W.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 76 || e.charCode === 108){
        D1W.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 58 || e.charCode === 59){
        E1W.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 39 || e.charCode === 64){
        F1W.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 69 || e.charCode === 101){
        Cblack.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 82 || e.charCode === 114){
        Dblack.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 84 || e.charCode === 116){
        Fblack.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 89 || e.charCode === 121){
        Gblack.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 85 || e.charCode === 117){
        Bbblack.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 73 || e.charCode === 105){
        C1black.play();
    }
});
addEventListener('keypress',(e)=>{
    if(e.charCode === 79 || e.charCode === 111){
        D1black.play();
    }
});