# Information about RangeSlider

## Introduction

RangeSlider (noUiSlider) is a lightweight, ARIA-accessible JavaScript range slider with multi-touch and keyboard support. It is fully GPU animated: no reflows, so it is fast, even on older devices. It also fits wonderfully in responsive designs and has no dependencies.
## Features

- **Accessible**: ARIA and keyboard support
- **GPU Animated**: No reflows, fast performance even on older devices
- **Browser Support**: All modern browsers and IE > 9 are supported
- **No Dependencies**: No external libraries needed
- **Fully Responsive**: Adapts to different screen sizes
- **Multi-touch Support**: Works on Android, iOS, and Windows devices

## Prerequisites
Before you begin, ensure you have the following:
- A modern web browser
- Basic knowledge of JavaScript and HTML

## Slider Configuration

### 1. Handles

The number of handles can be set using the `start` option. This option accepts an array of initial handle positions. A handle is created for every provided value.

```javascript
noUiSlider.create(handlesSlider, {
  start: [4000, 8000],
  range: {
    'min': [2000],
    'max': [10000]
  }
});
 ```
### 2. Range

All values on the slider are part of a range. The range has a minimum and maximum value. If the minimum value is equal to the maximum value, handles are evenly spread across the slider.

```javascript
noUiSlider.create(handlesSlider, {
  range: {
    'min': [2000],
    'max': [10000]
  }
});
 ```

### 3. Stepping and Snapping to Values

The amount the slider changes on movement can be set using the step option.

```javascript
noUiSlider.create(stepSlider, {
  step: 1000,
});
 ```

## Events

noUiSlider offers several ways to listen to interaction events: `update`, `change`, `set`, `slide`, and `drag`. These events can all be used simultaneously. There are also the `start` and `end` events, which fire when a drag is started or ended.

Events always fire in the following order:
- `start` > `slide` > `drag` > `update` > `change` > `set` > `end`

## Links

For more information, refer to the [official documentation](https://refreshless.com/nouislider/).
