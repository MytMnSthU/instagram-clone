function mountSplide(id, options = defaultOptions) {
    const slider = new Splide(id, { ...defaultOptions, ...options });
    slider.mount();

    return slider;
}

const defaultOptions = {
    type: "slide",
    gap: 5,
    perPage: 1,
    pagination: true,
    arrows: true,
};

const storiesOptions = {
    fixedWidth: 70,
    pagination: false,
    drag: "free",
    arrows: false,
};

mountSplide("#stories", storiesOptions);
mountSplide("#profiles", { fixedWidth: 170, gap: 20 });
mountSplide("#post1");
mountSplide("#post2");
