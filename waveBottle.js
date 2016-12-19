var container = document.querySelector('.container'),
    waveTop = document.querySelector('.waveTop'),
    waveMid = document.querySelector('.waveMid'),
    waveBot = document.querySelector('.waveBot'), 
    bottle = document.querySelector('.bottle'), 
    bottleMask = document.querySelector('.bottleMask')

var xLink = "http://www.w3.org/1999/xlink"
var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));



TweenMax.set(container, {
  position:'absolute',
  top:'50%',
  left:'50%',
  xPercent:-50,
  yPercent:-50
})

var waveTl = new TimelineMax({repeat:-1});

waveTl.timeScale(3)

var waveTopTween = TweenMax.to([waveTop,bottleMask],6, {
  x:-600,
  repeat:-1,
  ease:Linear.easeNone
})

var waveMidTween = TweenMax.to(waveMid,6, {
  x:-600,
  repeat:-1,
  ease:Linear.easeNone
})

var waveBotTween = TweenMax.to(waveBot,6, {
  x:-600,
  repeat:-1,
  ease:Linear.easeNone
})

waveTl.add(waveTopTween, 0)
waveTl.add(waveMidTween, 0)
waveTl.add(waveBotTween,0)

var bottleBob = TweenMax.to(bottle, 2, {
  y:30,
  repeat:-1,
  ease:Sine.easeInOut,
  yoyo:true
})
var bottleDrift = TweenMax.to(bottle, 9, {
  x:-130,
  repeat:-1,
  ease:Sine.easeInOut,
  yoyo:true
})

var bottleRotation = new TimelineMax({repeat:-1});
bottleRotation.to(bottle, 12, {
  rotation:23,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})
.to(bottle, 4, {
  rotation:33,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})

.to(bottle, 8, {
  rotation:12,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})
.to(bottle, 8, {
  rotation:-12,
  delay:2,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})

.to(bottle, 6, {
  rotation:-6,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})


.to(bottle, 6, {
  rotation:0,
  ease:Sine.easeInOut,
  transformOrigin:'50% 80%'
})


var mainTimeline = new TimelineMax();
mainTimeline.timeScale(2)
//mainTimeline.add(waveTl, 0)
mainTimeline.add(bottleRotation, 0)
mainTimeline.add(bottleBob, 0)
mainTimeline.add(bottleDrift, 0)
