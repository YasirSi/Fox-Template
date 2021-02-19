$('.part_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 5
        }
    }
});

$('.screenshot_slider').owlCarousel({
    // items: 4,
    loop: false,
    center: true,
    margin: 10,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1100: {
            items: 4
        }
    }
});

// $('.screenshot_slider').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 5
//         }
//     }
// })