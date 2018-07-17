// When the user scrolls the page, execute stickyHeaders 
window.onscroll = function() {stickyHeaders()};
window.addEventListener('resize', freshPage)

function freshPage() {
    "use strict";
    setTimeout(window.location.reload(), 200);
}

// Get title names
var introtitle = document.getElementById("introtitle");
var researchtitle = document.getElementById("researchtitle");
var researchfooter = document.getElementById("researchfooter")
var whyagetitle = document.getElementById("whyagetitle");
var whyagefooter = document.getElementById("whyagefooter")
var pubstitle = document.getElementById("pubstitle");
var pubsfooter = document.getElementById("pubsfooter")
var onetitle = document.getElementById("onetitle");
var onefooter = document.getElementById("onefooter")
var softwaretitle = document.getElementById("softwaretitle");
var softwarefooter = document.getElementById("softwarefooter")
var teachingtitle = document.getElementById("teachingtitle");
var teachingfooter = document.getElementById("teachingfooter")
var EandDtitle = document.getElementById("EandDtitle");
var EandDfooter = document.getElementById("EandDfooter")
var CVtitle = document.getElementById("CVtitle");
var CVfooter = document.getElementById("CVfooter")
// Get the offset position of the navbar
var introstickyval = introtitle.getBoundingClientRect().top + window.scrollY;
var researchstickyval = researchtitle.getBoundingClientRect().top + window.scrollY;
var researchunstickyval = researchfooter.getBoundingClientRect().top + window.scrollY;
var whyagestickyval = whyagetitle.getBoundingClientRect().top + window.scrollY;
var whyageunstickyval = whyagefooter.getBoundingClientRect().top + window.scrollY;
var pubsstickyval = pubstitle.getBoundingClientRect().top + window.scrollY;
var pubsunstickyval = pubsfooter.getBoundingClientRect().top + window.scrollY;
var onestickyval = onetitle.getBoundingClientRect().top + window.scrollY;
var oneunstickyval = onefooter.getBoundingClientRect().top + window.scrollY;
var softwarestickyval = softwaretitle.getBoundingClientRect().top + window.scrollY;
var softwareunstickyval = softwarefooter.getBoundingClientRect().top + window.scrollY;
var teachingstickyval = teachingtitle.getBoundingClientRect().top + window.scrollY;
var teachingunstickyval = teachingfooter.getBoundingClientRect().top + window.scrollY;
var EandDstickyval = EandDtitle.getBoundingClientRect().top + window.scrollY;
var EandDunstickyval = EandDfooter.getBoundingClientRect().top + window.scrollY;
var CVstickyval = CVtitle.getBoundingClientRect().top + window.scrollY;
var CVunstickyval = CVfooter.getBoundingClientRect().top + window.scrollY;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeaders() {
    if (window.pageYOffset >= introstickyval) {
        introtitle.classList.add("stickyhead");
    } else {
        introtitle.classList.remove("stickyhead");
    }

    if (window.pageYOffset >= researchstickyval &&
        window.pageYOffset <= researchunstickyval) {
        researchtitle.classList.add("stickyhead");
    } else {
        researchtitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= researchunstickyval) {
        researchfooter.classList.add("unstickyhead")
    } else {
        researchfooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= whyagestickyval &&
        window.pageYOffset <= whyageunstickyval) {
        whyagetitle.classList.add("stickyhead");
    } else {
        whyagetitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= whyageunstickyval) {
        whyagefooter.classList.add("unstickyhead")
    } else {
        whyagefooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= pubsstickyval &&
        window.pageYOffset <= pubsunstickyval) {
        pubstitle.classList.add("stickyhead");
    } else {
        pubstitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= pubsunstickyval) {
        pubsfooter.classList.add("unstickyhead")
    } else {
        pubsfooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= onestickyval &&
        window.pageYOffset <= oneunstickyval) {
        onetitle.classList.add("stickyhead");
    } else {
        onetitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= oneunstickyval) {
        onefooter.classList.add("unstickyhead")
    } else {
        onefooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= softwarestickyval &&
        window.pageYOffset <= softwareunstickyval) {
        softwaretitle.classList.add("stickyhead");
    } else {
        softwaretitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= softwareunstickyval) {
        softwarefooter.classList.add("unstickyhead")
    } else {
        softwarefooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= teachingstickyval &&
        window.pageYOffset <= teachingunstickyval) {
        teachingtitle.classList.add("stickyhead");
    } else {
        teachingtitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= teachingunstickyval) {
        teachingfooter.classList.add("unstickyhead")
    } else {
        teachingfooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= EandDstickyval &&
        window.pageYOffset <= EandDunstickyval) {
        EandDtitle.classList.add("stickyhead");
    } else {
        EandDtitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= EandDunstickyval) {
        EandDfooter.classList.add("unstickyhead")
    } else {
        EandDfooter.classList.remove("unstickyhead");
    }

    if (window.pageYOffset >= CVstickyval &&
        window.pageYOffset <= CVunstickyval) {
        CVtitle.classList.add("stickyhead");
    } else {
        CVtitle.classList.remove("stickyhead");
    }
    if (window.pageYOffset >= CVunstickyval) {
        CVfooter.classList.add("unstickyhead")
    } else {
        CVfooter.classList.remove("unstickyhead");
    }

}
