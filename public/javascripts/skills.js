let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};
let lst = []
TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    lst.push(this.toRotate[i])

    let fullTxt = (lst.join(''));
    this.el.innerHTML = `<span class="wrap"> ${fullTxt} </span>`;

    let that = this;
    let delta = 250 - Math.random() * 100;
    this.loopNum++;
    if(this.loopNum == this.toRotate.length) return;

    setTimeout(function() {
    that.tick();
    }, delta);
};



window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};









