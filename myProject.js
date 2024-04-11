function homepageAnimation() {
  gsap.set(".slidesm", { scale: 5 });
  var t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
  t1.to(
    ".vdodiv",
    {
      "--clipping": "0%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(
      ".left",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    )
    .to(
      ".right",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
      },
      "b"
    );
}

function realPageAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -300,
    ease: Power4,
  });
}

function teamListAnimation() {
  const list = document.querySelectorAll(".Listelem");

  list.forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -100, 100, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function paragraph() {
  var clutter = "";

  document
    .querySelector(".textParagraph")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textParagraph").innerHTML = clutter;

  gsap.set(".textParagraph span", { opacity: 0.1 });
  gsap.to(".textParagraph span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 60%",
      end: "bottom 90%",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function locomotive() {
  (function () {
    var scroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
}

document.querySelectorAll(".section")
.forEach(function (e) {
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }
        
    })
})

homepageAnimation();
realPageAnimation();
teamListAnimation();
paragraph();
capsulesAnimation();
locomotive();
