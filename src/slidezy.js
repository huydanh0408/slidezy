function Slidezy(selector, options) {
  this.container = document.querySelector(selector);

  if (!this.container) {
    return console.error(`Slidezy: Container "${selector}" not found!`);
  }

  this.opt = Object.assign({}, options);
  this.slides = Array.from(this.container.children);

  this._init();
}

Slidezy.prototype._init = function () {
  this.container.classList.add("slidezy-wrapper");

  this._createTrack();
  this._createNavigation();
};

Slidezy.prototype._createTrack = function () {
  this.track = document.createElement("div");
  this.track.className = "slidezy-track";

  this.slides.forEach((slide) => {
    slide.classList.add("slidezy-slide");
    this.track.append(slide);
  });

  this.container.append(this.track);
};

Slidezy.prototype._createNavigation = function () {
  this.preBtn = document.createElement("button");
  this.nextBtn = document.createElement("button");

  this.preBtn.textContent = "<";
  this.nextBtn.textContent = ">";

  this.preBtn.className = "slidezy-pre";
  this.nextBtn.className = "slidezy-next";

  this.container.append(this.preBtn, this.nextBtn);

  this.preBtn.onclick = () => this.moveSlide(-1);
  this.nextBtn.onclick = () => this.moveSlide(1);
};

Slidezy.prototype.moveSlide = function (step) {
  //   logic
  console.log(step);
};
