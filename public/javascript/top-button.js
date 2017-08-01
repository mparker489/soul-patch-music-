// // // When the user scrolls down 20px from the top of the document, show the button
// // window.onscroll = function() {scrollFunction()};

// // function scrollFunction() {
// //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// //         document.getElementById("myBtn");
// //     } else {
// //         document.getElementById("myBtn");
// //     }
// // }

// // // When the user clicks on the button, scroll to the top of the document
// // function topFunction() {
// //     document.body.scrollTop = 0; // For Chrome, Safari and Opera 
// //     document.documentElement.scrollTop = 0; // For IE and Firefox
// // }

// // ===== Scroll to Top ==== 
// $(window).scroll(function() {
//     if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200);    // Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(200);   // Else fade out the arrow
//     }
// });
// $('#return-to-top').click(function() {      // When arrow is clicked
//     $('body,html').animate({
//         scrollTop : 0                       // Scroll to top of body
//     }, 500);
// });