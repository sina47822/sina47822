const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('checkbox_text').textContent="فعال سازی حالت روشن";

    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById('checkbox_text').textContent="فعال سازی حالت تیره";

    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


var $ = jQuery.noConflict();

$(document).ready(function(){

  console.log("hello");
  $('.categoryfilter').on('click', function (e) { 
  e.preventDefault();
  
  $('.categoryfilter').removeClass('active');
  $(this).addClass('active');
  

  });

  $('.page-item').on('click' , function (e) {
    $('.page-item').removeClass('active');
    $(this).addClass('active');
  });

  // if $('.page-item') {
    
  // }
  $('.page-item-one').on('')
});









