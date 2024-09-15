// FOR SIDEBAR NAVIGATION
const menuItems = document.querySelectorAll('.menu_items')

// FOR MESSAGE 
const messageNotification = document.querySelector('#messages-notification')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search")

// THEME CUSTIMISATION
const theme = document.querySelector('#theme')
const themeModel = document.querySelector('.custumised_theme');
const fontSizes = document.querySelectorAll(".choose_size span");
const root = document.querySelector(':root');
const colorPallate = document.querySelectorAll('.choose-color span')

const bg1 = document.querySelector('.bg-1')
const bg2 = document.querySelector('.bg-2')
const bg3 = document.querySelector('.bg-3')



// remove menu from all the menu items
function changeMenuItems(){
    menuItems.forEach((item)=>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        changeMenuItems();
       item.classList.add('active')
       if(item.id == 'notifications'){
        document.querySelector('.notification-popUp').style.display = 'block'
        document.querySelector('#notification-count').style.display = 'none'
    }else{
           document.querySelector('.notification-popUp').style.display = 'none'
       }

    })
})


// =====  MESSAGE NOTIFICATION BOX AND POP-UP =============
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messageNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(()=>{
        messages.style.boxShadow = 'none'
    }, 2000)
})


// ============  SEARCHBAR ==========
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('.message-body h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}


// Search Chat
messageSearch.addEventListener('keyup', searchMessage)


// ============THEME MODEL OPEN AND CLOSE AND ITS CUSTIMISATION ========
const openThemeModel = ()=> {
    themeModel.style.display = 'grid'
}

const closeModel = (e)=>{
    if(e.target.classList.contains('custumised_theme')){
        themeModel.style.display = 'none'
    }
}

// To close the theme box
themeModel.addEventListener("click", closeModel)

// To open the Theme Box
theme.addEventListener('click', openThemeModel)



// ======== FONT SIZE FOR CUSTIMISE FONTS =========
fontSizes.forEach(size => {
    let fontSize;

    size.addEventListener('click', () => {
        // Reset any active classes
        fontSizes.forEach(item => item.classList.remove('active'));
        size.classList.add('active');

        if (size.classList.contains("font_size-1")) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains("font_size-2")) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains("font_size-3")) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains("font_size-4")) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains("font_size-5")) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        // Change the font size of the root HTML
        document.querySelector('html').style.fontSize = fontSize;
        console.log('Font size set to:', fontSize);
    });
});


// ===== CHANGE OF PRIMARY COLOR ======
colorPallate.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        // Remove active class from all colors
        colorPallate.forEach(e => e.classList.remove('active'));

        // Add active class to the clicked color
        color.classList.add('active');

        // Set primary color based on clicked color class
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        // Update the CSS variable
        root.style.setProperty('--color-primary-hue', primaryHue);
        // console.log('Primary color hue set to:', primaryHue);
    });
});


// Theme background values 
let lightColorLightNess;
let darkColorLightNess;
let whiteColorLightNess;

const changeBg = () =>{
    root.style.setProperty('--light-color-lightness',lightColorLightNess )
    root.style.setProperty('--white-color-lightness',whiteColorLightNess )
    root.style.setProperty('--dark-color-lightness',darkColorLightNess )
}


// Bg1 background
bg1.addEventListener('click', ()=>{

    bg1.classList.add('active')
    // remove active class
    bg3.classList.remove('active')
    bg2.classList.remove('active')

    window.location.reload();
})

// Bg2 background
bg2.addEventListener('click', ()=>{
    darkColorLightNess = '95%';
    whiteColorLightNess = '20%';
    lightColorLightNess = '15%'

    bg2.classList.add('active')
    // remove active class
    bg3.classList.remove('active')
    bg1.classList.remove('active')

    changeBg();
})

// Bg3 background
bg3.addEventListener('click', ()=>{
    darkColorLightNess = '95%';
    whiteColorLightNess = '10%';
    lightColorLightNess = '0%'

    bg3.classList.add('active')
    // remove active class
    bg1.classList.remove('active')
    bg2.classList.remove('active')

    changeBg();
})