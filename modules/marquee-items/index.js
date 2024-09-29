import './style.css';

class MarqueeItems {
    constructor(el, options = {}) {
        let default_options = {
            height: 50,
            gap: 30,
            pause_on_hover: true,
            animation_duration: 50000,
            direction: 'left'
        }

        this.el = el;
        this.options = Object.assign(default_options, options);
        this.el.classList.add('marquee-items');
        this.el.append(this.el.querySelector('.items').cloneNode(true));
        this.el.classList.add('animate-' + this.options.direction);
        this.el.style.setProperty('--height', this.options.height + 'px');
        this.el.style.setProperty('--gap', this.options.gap + 'px');
        this.el.style.setProperty('--animation-duration', this.options.animation_duration + 'ms');

        if (this.options.pause_on_hover) {
            this.el.classList.add('pause-on-hover');
        }
    }
}

function $_marquee_items(el, options = {}) {
    return new MarqueeItems(el, options);
}

export default $_marquee_items;