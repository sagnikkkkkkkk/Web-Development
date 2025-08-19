// I Love U

const crtLoveTl = () => 
    {
        const move = 1000 ;
        const boom = 200 ;
        const easing = "sin.inOut" ;
        const easingBoom = "sin.in" ;
        const easingOut = "sin.out" ;
        const opts = { duration: move , easing , opacity: 1 } ;
        const delta = 150 ;

        return new mojs.Timeline().add([
            new mojs.Tween({
                duration: move ,
                onComplete: () => {
                    [el.l , el.o , el.v , el.e].forEach((el) => 
                    (el.style.opacity = 0) ) ;
                },
            }),
        ])
    }


    // forEach??