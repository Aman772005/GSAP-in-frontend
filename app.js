function page1animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h3,nav button", {
        y: -30,
        opacity: 0,
        stagger: 0.3,
        delay: 0.5,
        duration: 0.7
    })

    tl.from(".center1 h1", {
        x: -250,
        opacity: 0,
        delay: 0.3,
        duration: 0.5
    })
    tl.from(".center1 p", {
        x: -250,
        opacity: 0,
        delay: 0.2,
        duration: 0.5
    })
    tl.from(".center1 button", {
        x: -250,
        opacity: 0,
        delay: 0.1,
        duration: 0.5
    })
    tl.from(".center2 img", {
        x: 250,
        opacity: 0,
        duration: 0.5
    }, "-=0.3")

    tl.from(".section1bottom img", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        delay: 0.15,
        stagger: 0.18
    })
}
page1animation()

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 0",
        scrub: 2
    }
})

tl2.from(".services", {
    y: 30,
    opacity: 0,
})

tl2.from(".line1.left", {
    x: -200,
    opacity: 0
}, "anim")
tl2.from(".line1.rigth", {
    x: 200,
    opacity: 0
}, "anim")
tl2.from(".line2.left", {
    x: -200,
    opacity: 0
}, "anim2")
tl2.from(".line2.right", {
    x: 200,
    opacity: 0
}, "anim2")