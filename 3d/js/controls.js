(function() {
    var slider = document.getElementById("slider");
    slider.style.marginLeft = "2em";
    slider.style.marginRight = "2em";
    slider.style.width = "calc(100%-4em)";

    noUiSlider.create(slider, {
        start: [0],
        range: {
            'min': 0,
            'max': 100
        }
    });

    slider.noUiSlider.on("update", function() {
        if (slider.noUiSlider) {
            timestamp_update(slider.noUiSlider.get());
        }
    });
})();
