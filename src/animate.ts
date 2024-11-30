export const menuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
    initial: { x: 80 },
    enter: (i: number) => ({ x: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

export const reset = {
    initial: { y: 0 },
    enter: { y: 0 },
}


export const trampoline = {
    initial: { y: -50, opacity: 0 },
    enter: (i: number) => ({
        y: [0, -10, 6, -6, 2, 0],
        opacity: 1,
        transition: {
            duration: 2,
            ease: "easeOut",
            delay: 1 + 0.2 * i,
        },
    }),
};

export const balloon = {
    initial: { x: "-300px", scale: 0.2, rotate: 0 },
    enter: {
        x: "0",
        scale: [0.3, 0.4, 0.5, 1],
        rotate: 360,
        transition: {
            duration: 1.2,
            ease: "easeOut",

        },
    },
};
export const balloonSlide = {
    initial: { x: "300px", scale: 0.2, rotate: 0 },
    enter: {
        x: "0",
        scale: [0.3, 0.4, 0.5, 1],
        rotate: 360,
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: 2,
        },
    },
};

export const fadeOut = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { amount: 0.3 },
    transition: { ease: "easeIn", duration: 0.5 }
}

export const translate = {
    initial: { opacity: 0, y: "50%" },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.05 * i,  
        },
    }),
}

const initialPath = `M100 0 L100 ${window.innerHeight}
Q-100 ${window.innerHeight / 2} 100 0`;
const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`
export const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        d: initialPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }

    }

}

