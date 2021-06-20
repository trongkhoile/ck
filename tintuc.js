function subBoxes1(){
    document.getElementById('triangle1').style.borderTopColor='#F9F9F9'
    document.getElementById('subBoxes1').style.display='block'
    document.getElementById('box1').style.borderBottom='2px solid #FF4655'
}

function nonSubBoxes1(){
    document.getElementById('triangle1').style.borderTopColor='#7E7E7E'
    document.getElementById('subBoxes1').style.display='none'
    document.getElementById('box1').style.borderBottom='2px solid transparent'
}

function subBoxes4(){
    document.getElementById('triangle3').style.borderTopColor='#F9F9F9'
    document.getElementById('subBoxes4').style.display='block'
    document.getElementById('box4').style.borderBottom='2px solid #FF4655'
}

function nonSubBoxes4(){
    document.getElementById('triangle3').style.borderTopColor='#7E7E7E'
    document.getElementById('subBoxes4').style.display='none'
    document.getElementById('box4').style.borderBottom='2px solid transparent'
}

function subBoxes5(){
    document.getElementById('triangle4').style.borderTopColor='#F9F9F9'
    document.getElementById('subBoxes5').style.display='block'
    document.getElementById('box5').style.borderBottom='2px solid #FF4655'
}

function nonSubBoxes5(){
    document.getElementById('triangle4').style.borderTopColor='#7E7E7E'
    document.getElementById('subBoxes5').style.display='none'
    document.getElementById('box5').style.borderBottom='2px solid transparent'
}

function subSubBoxes5(){
    document.getElementById('subBoxes5').style.display='block'
    document.getElementById('subSubBoxes5').style.display='block'
    
    document.getElementById('subSubBox5').style.borderBottom='2px solid #FF4655'
}

function nonSubSubBoxes5(){
    document.getElementById('subBoxes5').style.display='none'
    document.getElementById('subSubBoxes5').style.display='none'
    document.getElementById('subBoxBox5').style.borderBottom='2px solid transparent'
}

function riotGamesSwitcher(){
    document.getElementById('riotLogo').style.transition='background-position 0.25s steps(15, end)'
    document.getElementById('riotLogo').style.backgroundPosition='0 0'
    document.getElementById('triangle6').style.display='block'
    //document.getElementById('switchWrapper').style.display='block'
}

function keep(){
    document.getElementById('subBox5.1').style.backgroundColor='#333333'
}

function closeSwitcher(){
    document.getElementById('riotLogo').style.transition='background-position 0.25s steps(15, end)'
    document.getElementById('riotLogo').style.backgroundPosition='0 -2400'
    document.getElementById('triangle6').style.display='none'
    //document.getElementById('switchWrapper').style.display='none'
}
