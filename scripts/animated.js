TweenMax.to(".bgImg", 9, {
  rotation: 0.001, //trick for keeping 3d transform in FF
  scale: 0.5,
  yoyo: true,
  repeat: -1,
  ease: Linear.easeNone
});
