$(document).ready(function () {
    var s = $(".header");
    var pos = s.position();
    $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if ((windowpos >= pos.top) & (windowpos >= 30)) {
            $("header").addClass("top");
        } else {
            $(".header").removeClass("top"); 
        }
    });
});
// resoonsive nav
function myFunction() {
    let navElement = document.querySelector("nav");
    navElement.classList.toggle("nav-show");
    let toggleBtnElement = document.querySelector(".toggle-btn");
    toggleBtnElement.classList.toggle("toggle-open");
  }
  document.querySelector(".toggle-btn").addEventListener("click", myFunction);

// modal slider gallery js here 
$(document).ready(function() {
    $('#lightbox-modal').fadeOut(0);
    let sliderInitialized = false;
    $(document).on('click', '.gallery-card', function() {
        // Show the lightbox slider modal
        $('#lightbox-modal').fadeIn();

        // Initialize the slider only the first time the modal is opened
        if (!sliderInitialized) {
            $('.gallery-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: true,
                lazyLoad: 'ondemand', // Lazy load images
                prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>', // Custom left arrow
                nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>'  // Custom right arrow
            });
            sliderInitialized = true; // Mark the slider as initialized
        } else {
            // If already initialized, refresh the slider in case it's hidden
            $('.gallery-slider').slick('refresh');
        }
    });

    // Close modal when clicking the close button
    $('.close-lightbox').on('click', function() {
        $('#lightbox-modal').fadeOut();
    });

    // Close modal when clicking outside the content
    $(document).on('click', function(e) {
        if ($(e.target).is('.gallery-slide')) {
            $('#lightbox-modal').fadeOut();
        }
    });
});
// aos animation intiallize here 
// Initialize AOS animations
AOS.init({
    duration: 1000,
    offset: 120, 
    easing: 'ease-in-out', 
    once: true, 
});
// Get all custom select items
document.querySelectorAll('.form-select-item').forEach(function(select) {
    const trigger = select.querySelector('.select-trigger');
    const options = select.querySelector('.select-options');
    // Toggle the open class on click
    trigger.addEventListener('click', function() {
      select.classList.toggle('open');
    });
    // Hide the dropdown if clicked outside
    document.addEventListener('click', function(e) {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
      }
    });
  
    // Add click event for each option
    select.querySelectorAll('.custom-option').forEach(function(option) {
      option.addEventListener('click', function() {
        select.querySelector('.custom-option.selected').classList.remove('selected');
        option.classList.add('selected');
        trigger.textContent = option.textContent;
        select.classList.remove('open');
      });
    });
  });