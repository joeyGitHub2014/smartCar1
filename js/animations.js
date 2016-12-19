function runAnimation(){
    var tl1 = new TimelineMax( );
    
    CSSPlugin.defaultSmoothOrigin = false;
     // Move car
     tl1.to('#car', .7, {left:491, ease:Power2.easeout})
         .to('#text1', .5, {opacity:1,  y:15})  
         
        // Remove car and show wireframe
        .to('#svg-mask image', .4, {x:-127 , onComplete:carOff() , delay:.5} )
        .to('#text1', .5, {opacity:0})  
       
        .to('#svg-wireframe-image', .3, {x:1,  y: 1,rotation:3.5, transformOrigin:'50% 50%', ease:Power2.easeout}, '-=.7' )
        .to('#svg-wireframe-image', .3, {x:-1,  y: -1,rotation:-3.5, ease:Power2.easeout},   '-=.4')
        .to('#svg-wireframe-image', .2, {x:-1,  y: 1,rotation:0, ease:Power2.easeout},'-=.3' )
        .to('#svg-wireframe-image', .1, {x:.5,  ease:Power2.easeout},'-=.2' )
         
        // Pump airbags
        .to('#text2', .5, {opacity:1,  y:15})  
        .to('#arbag1', .5, {attr:{rx:7,ry:5},   ease:Power2.easeout}, '-=.5' )
        .to('#arbag2', .5, {attr:{rx:6,ry:3},   ease:Power2.easeout}, '-=.5')
        .to('#arbag3', .5, {attr:{rx:10,ry:7},  ease:Power2.easeout}, '-=.5')
        .to('#arbag4', .5, {attr:{rx:15,ry:6},  ease:Power2.easeout}, '-=.5')
        .to('#arbag5', .5, {attr:{rx:6,ry:4},   ease:Power2.easeout}, '-=.5')
        .to('#arbag6', .5, {attr:{rx:7,ry:4},   ease:Power2.easeout}, '-=.5')
        .to('#svg-wireframe-image', .3, {x:1,   y: 1,rotation:3.5, ease:Power2.easeout}, '-=.5' )
        .to('#svg-wireframe-image', .3, {x:-1,  y: -1,rotation:-3.5, ease:Power2.easeout},   '-=.3')
        .to('#svg-wireframe-image', .2, {x:-1,  y: 1,rotation:0, ease:Power2.easeout},'-=.3' )
        .to('#svg-wireframe-image', .1, {x:.5,  ease:Power2.easeout},'-=.2' )

        // Deflate airbags
        .to(['#arbag1','#arbag2' ,'#arbag3','#arbag4','#arbag5','#arbag6'], .5, {attr:{rx:0,ry:0},  ease:Power2.easeout, delay:1})
        .to('#text2', .5, {opacity:0},'-=.3')  
     
         // Start road bumps
        .to('#text3', .5, {opacity:1})  
        .to('#svg-wireframe-image', .5, {scale:.90, y:-7, ease:Power2.easeout},'-=.5')
        .to('#svg-wheelBack-image', .5, {scale:.90, x:4.5, y:-9, ease:Power2.easeout,  transformOrigin:'50% 50%'},'-=.5')
        .to('#svg-wheelFront-image',.5, {scale:.90, x:-5,  y:-9, ease:Power2.easeout,  transformOrigin:'50% 50%'},'-=.5')
        .to('g #bumps path', .2 , {x:-128})
        .to('#bumps', .7 , {opacity:1})
        .to(['#svg-wheelBack-image','#svg-wheelFront-image'], 1.6, {rotation:1600, ease:Linear.easeNone})
        .to('g #bumps path', 1.6 , {x:-370, ease:Linear.easeNone} ,'-=1.6')
        .call(bounceTire,[],null, "-=1.6" )
        .to('#bumps', .5 , {opacity:0})
        .to('#text3', .5, {opacity:0}, "-=.3")  
 
        // Start up ramp
        .to('#text4', .5, {opacity:1, y:15})  
        .to('#svg-wireframe-image', .2, {scale:1, y:4, ease:Power2.easeout },"-=1")
        .to('#svg-wireframe-image', .2, { y:0, ease:Power2.easeout },"-=1")
        .to(['#svg-wheelFront-image','#svg-wheelBack-image'], .2, {scale:1, x:0, y:0,  ease:Bounce.easeout },"-=1")
        .to('#svg-wireframe-image' , .2, {scale:.85, x:4, y:-6,rotation:-33 })
        .to('#svg-wheelFront-image' , .2, {scale:.85,x:2, y:-30.5 },'-=.2')
        .to('#svg-wheelBack-image' , .2,  {scale:.85, x:26, y:8},'-=.2')
        .to(['#ramp','#sign']  , .2,  {opacity:1},'-=.2')
        .to(['#svg-wheelBack-image','#svg-wheelFront-image'], 1.2, {rotation:-360, ease:Linear.easeNone})
        .to('#sign' , 1,  {x:-150,y:90,ease:Linear.easeNone},'-=1.2')
        .to(['#ramp','#sign'], .2,  {opacity:0})
        .to('#svg-wireframe-image', .2, {scale:1, x:1, y:-1,rotation:4 ,ease:Power2.easeout },'-=.2')
        .to('#svg-wireframe-image', .4, { x:0, y:0, rotation:-2, ease:Power2.easeout })
        .to('#svg-wireframe-image', .4, { rotation:0, ease:Power2.easeout })
        .to(['#svg-wheelFront-image','#svg-wheelBack-image'], .2, {scale:1, x:-1, y:0,  ease:Bounce.easeout },'-=1')
        .to('#text4', .5, {opacity:0},'-=1')  

         //  display safty features 
        .to('#text5', .5, {opacity:1})  
        .to('#safty', .2, {opacity:1, repeat:5, yoyo:true, ease:Linear.easeNone})
        .to('#text5', .5, {opacity:0}) 
        .to('#text6', .5, {opacity:1})  
        .to('#svg-mask-tridion image', .4, {x:-111 } )
        .to('#svg-tridion-image', .2, {opacity:0, repeat:5, yoyo:true, ease:Linear.easeNone})
        .to('#svg-tridion-image', .1, {opacity:0,   ease:Linear.easeNone, delay:1})
        .to('#text6', .5, {opacity:0})  

        // Send wire frame off screen
        .to(["#svg-wireframe-image" ,"#svg-wheelBack-image","#svg-wheelFront-image"], .3, {x:300 , ease:Linear.easeNone, delay:.5 })  
     
        // Slide angled black car in
        .to("#carAngle" , .2, {x:210 , ease:Linear.easeOut   })
  
        // Display smart button angle car
        .to("#smartBtn" , .4, {opacity:1 , ease:Linear.ease   },"-=.2")
        
        // Start text Small car...  
        .to('#text7', .5, {opacity:1, y:15}) 
        .to('#text8', .5, {opacity:1, y:15}) 
        .to(['#text7','#text8'], .5, {opacity:0, delay:1}) 
        
         // Start text Unworry...  
        .to('#text9', .5, {opacity:1, y:15}) 
        .to('#text9', .5, { x:-60}) 
        .to('#text10', .5, {opacity:1, y:15}) 
        .to('#text11', .5, {opacity:1, y:45}) 
     
        // animate find button
        .to('#findBtn', .3, {scale:1.2,  transformOrigin:'50% 50%', ease: Elastic.easeOut})
        .to('#findBtn', .3, {scale:1.0,  transformOrigin:'50% 50%', ease: Elastic.easeOut})
        .to('#rectYellow' , .1, {x:-90, ease:Bounce.easeout })
        .to('#findBtn', .1, {x:-80, ease:Elastic.easeout }, '-=.1')
        .to('#findBtn', .1, {x:-70, ease:Elastic.easeout } ) 
        .to('#findTxt', .3, {opacity:1  } )
     
        // add disclaimer button 
        .to('#theSkinny', .3, {opacity:1, y:-30  },'-=.3' )
        .to('#replayBtn', .3, {opacity:1, x:25 },'-=.3' )

 }

function carOff() {
      var tl2 = new TimelineLite();
      tl2.to('#car', .2, {opacity:0, ease:Power2.easeout, delay:2});
 }

function bounceTire() {
    TweenMax.to( ['#svg-wheelFront-image' ], .1, {y:-6,x:-5, repeat:15, yoyo:true,ease:Bounce.easeinout });
    TweenMax.to( ['#svg-wheelBack-image' ], .1, {y:-6,x:5, repeat:15, yoyo:true,ease:Bounce.easeinout });
    TweenMax.to( ['#svg-wireframe-image' ], .1, {rotation:1, repeat:15,  yoyo:true,ease:Bounce.easeinout },'-=.1');
}

function showText() {
    TweenLite.to( ['#text12'] , .4, {x:790, ease:Linear.easeout });
}

function hideText() {
    TweenLite.to( ['#text12'] , .4, {x:-790, ease:Linear.easeout });
}

function replay() {
    window.location.reload(true);
}
