/* register the property change handler */
Prefab.onPropertyChange = propertyChangeHandler;

function propertyChangeHandler(key, newVal, oldVal) {
    switch (key) {
        case "start":
        case "end":
        case "min":
        case "max":
        case "step":
        case "pipdensity":
            Prefab.handlesSlider = Prefab.getSlider();
            if (!Prefab.handlesSlider) {
                break;
            }
            Prefab.handlesSlider.noUiSlider.updateOptions({
                start: [Prefab.start, Prefab.end],
                range: {
                    'min': Prefab.min,
                    'max': Prefab.max
                },
                step: Prefab.step,
                pips: {
                    mode: Prefab.pipmode || 'steps',
                    density: Prefab.pipdensity,
                    values: Prefab.values
                }
            }, true);
            break;
        case "disable":
            Prefab.handlesSlider = Prefab.getSlider();
            if (!Prefab.handlesSlider) {
                break;
            }
            newVal ? Prefab.handlesSlider.setAttribute('disabled', true) : Prefab.handlesSlider.removeAttribute('disabled');
            break;
        default:
            break;

    }
}

Prefab.onReady = function() {
    // this method will be triggered post initialization of the prefab.
    Prefab.handlesSlider = Prefab.getSlider();
    if (Prefab.handlesSlider && Prefab.handlesSlider.noUiSlider) {
        Prefab.handlesSlider.noUiSlider.on('start', function(stringValues, index, absValues) {
            Prefab.onStart(stringValues, index, absValues);
        });
        Prefab.handlesSlider.noUiSlider.on('end', function(stringValues, index, absValues) {
            Prefab.onEnd(stringValues, index, absValues);
        });
        Prefab.handlesSlider.noUiSlider.on('change', function(stringValues, index, absValues) {
            // set the values to outbound prefab properties
            Prefab.start = absValues[0].toFixed();
            Prefab.end = absValues[1].toFixed();
            Prefab.onHandlechange(stringValues, index, absValues);
        });
    }
};

Prefab.getSlider = function() {
    if (Prefab.handlesSlider && Prefab.handlesSlider.noUiSlider) {
        return Prefab.handlesSlider;
    } else {
        if ((Prefab.step || Prefab.step === 0) && (Prefab.start || Prefab.start === 0) &&
            (Prefab.end || Prefab.end === 0) && (Prefab.min || Prefab.min === 0) && (Prefab.max || Prefab.max === 0)) {
            //added this logic to use this prefab twice in smame page
            if ($('[name="containerGoalAmount"]').length > 0) {
                var containerId = Prefab.containerid;
                $('[name="containerGoalAmount"]').filter(function() {
                    if ($(this).is(':empty')) {
                        $(this).attr('id', containerId);
                    }
                });

                Prefab.handlesSlider = null;
                if ($('#' + containerId).is(':empty'))
                    Prefab.handlesSlider = document.getElementById(containerId);
                if (!Prefab.handlesSlider) {
                    return;
                }
                noUiSlider.create(Prefab.handlesSlider, {
                    start: [Prefab.start, Prefab.end],
                    connect: true,
                    step: Prefab.step,
                    behaviour: 'tap',
                    range: {
                        min: [Prefab.min],
                        max: [Prefab.max]
                    },
                    pips: {
                        mode: Prefab.pipmode,
                        density: Prefab.pipdensity,
                        values: Prefab.values
                    },
                    tooltips: true,
                });

                return Prefab.handlesSlider;
            }

        } else {
            return;
        }
    }

};

Prefab.filterPips = function(value, type) {
    return value % Prefab.step ? 1 : 2;
};
