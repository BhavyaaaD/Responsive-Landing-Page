const companyBtn=document.getElementById('company-btn');
const featuresBtn=document.getElementById('features-btn');
const featuresDropDown=document.querySelector('.sub-menu');
const companyDropDown=document.querySelector('.company-menu');
const  menuBar=document.querySelector('.mobile-menu');
const navBtn=document.querySelector('.menu');
const closeBtn=document.querySelector('.close');
const overlay=document.querySelector('.overlay');
const fm=document.querySelector('.fm-menu');
const cm=document.querySelector('.cm-menu');
const cmBtn=document.getElementById('cm-btn');
const fmBtn=document.getElementById('fm-btn');

function toggleMenuCompany(){
    companyDropDown.classList.toggle('show');
    if(companyDropDown.classList.contains('show')){
        companyBtn.innerHTML=`<img src="./images/icon-arrow-up.svg" alt="icon-arrow-up">`

    }
    else{
        companyBtn.innerHTML=`<img src="./images/icon-arrow-down.svg" alt="icon-arrow-down">`;
    }

}

function toggleMenuFeatures(){
    featuresDropDown.classList.toggle('show');
    if(featuresDropDown.classList.contains("show")){
        featuresBtn.innerHTML=`<img src="./images/icon-arrow-up.svg" alt="icon-arrow-up">`
    }
    else{
        featuresBtn.innerHTML=`<img src="./images/icon-arrow-down.svg" alt="icon-arrow-down">`;
    }
}

function showNavMobile(){
    navBtn.style.display='none';
    menuBar.style.visibility='inherit';
    overlay.style.display='block';

}

function hideOverLay(){
    overlay.style.display='none';
    menuBar.style.visibility='hidden';
    navBtn.style.display='inline-block';
}

function toggleDisplayFm(){
    fm.classList.toggle('display');
    if(fm.classList.contains('display')){
        fmBtn.innerHTML=`<img src="./images/icon-arrow-up.svg" alt="icon-arrow-up">`
    }
    else{
        fmBtn.innerHTML=`<img src="./images/icon-arrow-down.svg" alt="icon-arrow-down">`;
    }
}

function toggleDisplayCm(){
    cm.classList.toggle('display');
    if(cm.classList.contains('display')){
        cmBtn.innerHTML=`<img src="./images/icon-arrow-up.svg" alt="icon-arrow-up">`
    }
    else{
        cmBtn.innerHTML=`<img src="./images/icon-arrow-down.svg" alt="icon-arrow-down">`;
    }
}

companyBtn.addEventListener('click',toggleMenuCompany);
featuresBtn.addEventListener('click',toggleMenuFeatures);
navBtn.addEventListener('click',showNavMobile);
closeBtn.addEventListener('click',hideOverLay);
fmBtn.addEventListener('click',toggleDisplayFm);
cmBtn.addEventListener('click',toggleDisplayCm);