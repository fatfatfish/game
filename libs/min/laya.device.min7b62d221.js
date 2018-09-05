!function(e,t,n){n.un,n.uns;var i=n.static,a=n.class,o=n.getset,r=(n.__newvec,laya.resource.Bitmap),s=laya.utils.Browser,c=(laya.events.Event,laya.events.EventDispatcher),l=(laya.utils.Handler,laya.maths.Rectangle,laya.renders.Render),d=laya.display.Sprite,h=(laya.display.Stage,laya.resource.Texture),u=laya.utils.Utils,v=laya.webgl.WebGL,m=laya.webgl.WebGLContext,g=(function(){function e(){}a(e,"laya.device.geolocation.Geolocation"),e.getCurrentPosition=function(t,n){e.navigator.geolocation.getCurrentPosition(function(n){e.position.setPosition(n),t.runWith(e.position)},function(e){n.runWith(e)},{enableHighAccuracy:laya.device.geolocation.Geolocation.enableHighAccuracy,timeout:laya.device.geolocation.Geolocation.timeout,maximumAge:laya.device.geolocation.Geolocation.maximumAge})},e.watchPosition=function(t,n){return e.navigator.geolocation.watchPosition(function(n){e.position.setPosition(n),t.runWith(e.position)},function(e){n.runWith(e)},{enableHighAccuracy:e.enableHighAccuracy,timeout:e.timeout,maximumAge:e.maximumAge})},e.clearWatch=function(t){e.navigator.geolocation.clearWatch(t)},e.PERMISSION_DENIED=1,e.POSITION_UNAVAILABLE=2,e.TIMEOUT=3,e.enableHighAccuracy=!1,e.maximumAge=0,i(e,["navigator",function(){return this.navigator=s.window.navigator},"position",function(){return this.position=new g},"supported",function(){return this.supported=!!e.navigator.geolocation},"timeout",function(){return this.timeout=1e10}])}(),function(){function e(){this.pos=null,this.coords=null}a(e,"laya.device.geolocation.GeolocationInfo");var t=e.prototype;return t.setPosition=function(e){this.pos=e,this.coords=e.coords},o(0,t,"heading",function(){return this.coords.heading}),o(0,t,"latitude",function(){return this.coords.latitude}),o(0,t,"altitudeAccuracy",function(){return this.coords.altitudeAccuracy}),o(0,t,"longitude",function(){return this.coords.longitude}),o(0,t,"altitude",function(){return this.coords.altitude}),o(0,t,"accuracy",function(){return this.coords.accuracy}),o(0,t,"speed",function(){return this.coords.speed}),o(0,t,"timestamp",function(){return this.pos.timestamp}),e}()),f=function(){function e(){}return a(e,"laya.device.media.Media"),e.supported=function(){return!!s.window.navigator.getUserMedia},e.getMedia=function(e,t,n){s.window.navigator.getUserMedia&&s.window.navigator.getUserMedia(e,function(e){t.runWith(s.window.URL.createObjectURL(e))},function(e){n.runWith(e)})},e.__init$=function(){navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia},e}(),p=function(){function e(){this.x=NaN,this.y=NaN,this.z=NaN}return a(e,"laya.device.motion.AccelerationInfo"),e}(),y=function(){function e(){this.absolute=!1,this.alpha=NaN,this.beta=NaN,this.gamma=NaN,this.compassAccuracy=NaN}return a(e,"laya.device.motion.RotationInfo"),e}(),E=function(e){function t(e){t.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}a(t,"laya.device.motion.Accelerator",e);var r=t.prototype;return r.on=function(t,n,i,a){return e.prototype.on.call(this,t,n,i,a),s.window.addEventListener("devicemotion",this.onDeviceOrientationChange),this},r.off=function(t,n,i,a){return void 0===a&&(a=!1),this.hasListener(t)||s.window.removeEventListener("devicemotion",this.onDeviceOrientationChange),e.prototype.off.call(this,t,n,i,a)},r.onDeviceOrientationChange=function(e){var n=e.interval;t.acceleration.x=e.acceleration.x,t.acceleration.y=e.acceleration.y,t.acceleration.z=e.acceleration.z,t.accelerationIncludingGravity.x=e.accelerationIncludingGravity.x,t.accelerationIncludingGravity.y=e.accelerationIncludingGravity.y,t.accelerationIncludingGravity.z=e.accelerationIncludingGravity.z,t.rotationRate.alpha=-1*e.rotationRate.gamma,t.rotationRate.beta=-1*e.rotationRate.alpha,t.rotationRate.gamma=e.rotationRate.beta,s.onAndriod?(t.onChrome&&(t.rotationRate.alpha*=180/Math.PI,t.rotationRate.beta*=180/Math.PI,t.rotationRate.gamma*=180/Math.PI),t.acceleration.x*=-1,t.accelerationIncludingGravity.x*=-1):s.onIOS&&(t.acceleration.y*=-1,t.acceleration.z*=-1,t.accelerationIncludingGravity.y*=-1,t.accelerationIncludingGravity.z*=-1,n*=1e3),this.event("change",[t.acceleration,t.accelerationIncludingGravity,t.rotationRate,n])},o(1,t,"instance",function(){return t._instance=t._instance||new t(0),t._instance},laya.events.EventDispatcher._$SET_instance),t.getTransformedAcceleration=function(e){t.transformedAcceleration=t.transformedAcceleration||new p,t.transformedAcceleration.z=e.z,90==s.window.orientation?(t.transformedAcceleration.x=e.y,t.transformedAcceleration.y=-e.x):-90==s.window.orientation?(t.transformedAcceleration.x=-e.y,t.transformedAcceleration.y=e.x):s.window.orientation?180==s.window.orientation&&(t.transformedAcceleration.x=-e.x,t.transformedAcceleration.y=-e.y):(t.transformedAcceleration.x=e.x,t.transformedAcceleration.y=e.y);var i=NaN;return-90==n.stage.canvasDegree?(i=t.transformedAcceleration.x,t.transformedAcceleration.x=-t.transformedAcceleration.y,t.transformedAcceleration.y=i):90==n.stage.canvasDegree&&(i=t.transformedAcceleration.x,t.transformedAcceleration.x=t.transformedAcceleration.y,t.transformedAcceleration.y=-i),t.transformedAcceleration},t._instance=null,t.transformedAcceleration=null,i(t,["acceleration",function(){return this.acceleration=new p},"accelerationIncludingGravity",function(){return this.accelerationIncludingGravity=new p},"rotationRate",function(){return this.rotationRate=new y},"onChrome",function(){return this.onChrome=s.userAgent.indexOf("Chrome")>-1}]),t}(c),L=(function(e){function t(e){t.__super.call(this),this.onDeviceOrientationChange=this.onDeviceOrientationChange.bind(this)}a(t,"laya.device.motion.Gyroscope",e);var n=t.prototype;n.on=function(t,n,i,a){return e.prototype.on.call(this,t,n,i,a),s.window.addEventListener("deviceorientation",this.onDeviceOrientationChange),this},n.off=function(t,n,i,a){return void 0===a&&(a=!1),this.hasListener(t)||s.window.removeEventListener("deviceorientation",this.onDeviceOrientationChange),e.prototype.off.call(this,t,n,i,a)},n.onDeviceOrientationChange=function(e){t.info.alpha=e.alpha,t.info.beta=e.beta,t.info.gamma=e.gamma,e.webkitCompassHeading&&(t.info.alpha=-1*e.webkitCompassHeading,t.info.compassAccuracy=e.webkitCompassAccuracy),this.event("change",[e.absolute,t.info])},o(1,t,"instance",function(){return t._instance=t._instance||new t(0),t._instance},laya.events.EventDispatcher._$SET_instance),t._instance=null,i(t,["info",function(){return this.info=new y}])}(c),function(e){function t(){this.throushold=0,this.shakeInterval=0,this.callback=null,this.lastX=NaN,this.lastY=NaN,this.lastZ=NaN,this.lastMillSecond=NaN,t.__super.call(this)}a(t,"laya.device.Shake",c);var n=t.prototype;n.start=function(e,t){this.throushold=e,this.shakeInterval=t,this.lastX=this.lastY=this.lastZ=NaN,E.instance.on("change",this,this.onShake)},n.stop=function(){E.instance.off("change",this,this.onShake)},n.onShake=function(e,t,n,i){if(isNaN(this.lastX))return this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z,void(this.lastMillSecond=s.now());var a=Math.abs(this.lastX-t.x),o=Math.abs(this.lastY-t.y),r=Math.abs(this.lastZ-t.z);this.isShaked(a,o,r)&&(s.now()-this.lastMillSecond>this.shakeInterval&&(this.event("change"),this.lastMillSecond=s.now()));this.lastX=t.x,this.lastY=t.y,this.lastZ=t.z},n.isShaked=function(e,t,n){return e>this.throushold&&t>this.throushold||e>this.throushold&&n>this.throushold||t>this.throushold&&n>this.throushold},o(1,t,"instance",function(){return t._instance=t._instance||new t,t._instance},laya.events.EventDispatcher._$SET_instance),t._instance=null}(),function(e){function t(e,n){this.htmlVideo=null,this.videoElement=null,this.internalTexture=null,void 0===e&&(e=320),void 0===n&&(n=240),t.__super.call(this),l.isWebGL?this.htmlVideo=new x:this.htmlVideo=new w,this.videoElement=this.htmlVideo.getVideo(),this.videoElement.layaTarget=this,this.internalTexture=new h(this.htmlVideo),this.videoElement.addEventListener("abort",t.onAbort),this.videoElement.addEventListener("canplay",t.onCanplay),this.videoElement.addEventListener("canplaythrough",t.onCanplaythrough),this.videoElement.addEventListener("durationchange",t.onDurationchange),this.videoElement.addEventListener("emptied",t.onEmptied),this.videoElement.addEventListener("error",t.onError),this.videoElement.addEventListener("loadeddata",t.onLoadeddata),this.videoElement.addEventListener("loadedmetadata",t.onLoadedmetadata),this.videoElement.addEventListener("loadstart",t.onLoadstart),this.videoElement.addEventListener("pause",t.onPause),this.videoElement.addEventListener("play",t.onPlay),this.videoElement.addEventListener("playing",t.onPlaying),this.videoElement.addEventListener("progress",t.onProgress),this.videoElement.addEventListener("ratechange",t.onRatechange),this.videoElement.addEventListener("seeked",t.onSeeked),this.videoElement.addEventListener("seeking",t.onSeeking),this.videoElement.addEventListener("stalled",t.onStalled),this.videoElement.addEventListener("suspend",t.onSuspend),this.videoElement.addEventListener("timeupdate",t.onTimeupdate),this.videoElement.addEventListener("volumechange",t.onVolumechange),this.videoElement.addEventListener("waiting",t.onWaiting),this.videoElement.addEventListener("ended",this.onPlayComplete.bind(this)),this.size(e,n),s.onMobile&&(this.onDocumentClick=this.onDocumentClick.bind(this),s.document.addEventListener("touchend",this.onDocumentClick))}a(t,"laya.device.media.Video",e);var i=t.prototype;return i.onPlayComplete=function(e){n.timer.clear(this,this.renderCanvas),this.event("ended")},i.load=function(e){0==e.indexOf("blob:")?this.videoElement.src=e:this.htmlVideo.setSource(e,laya.device.media.Video.MP4)},i.play=function(){this.videoElement.play(),n.timer.frameLoop(1,this,this.renderCanvas)},i.pause=function(){this.videoElement.pause(),n.timer.clear(this,this.renderCanvas)},i.reload=function(){this.videoElement.load()},i.canPlayType=function(e){var t;switch(e){case laya.device.media.Video.MP4:t="video/mp4";break;case laya.device.media.Video.OGG:t="video/ogg";break;case laya.device.media.Video.WEBM:t="video/webm"}return this.videoElement.canPlayType(t)},i.renderCanvas=function(){0!==this.readyState&&(l.isWebGL&&this.htmlVideo.updateTexture(),this.graphics.clear(),this.graphics.drawTexture(this.internalTexture,0,0,this.width,this.height))},i.onDocumentClick=function(){this.videoElement.play(),this.videoElement.pause(),s.document.removeEventListener("touchend",this.onDocumentClick)},i.size=function(t,n){return e.prototype.size.call(this,t,n),this.videoElement.width=t/s.pixelRatio,this.paused&&this.renderCanvas(),this},i.destroy=function(n){void 0===n&&(n=!0),e.prototype.destroy.call(this,n),this.videoElement.removeEventListener("abort",t.onAbort),this.videoElement.removeEventListener("canplay",t.onCanplay),this.videoElement.removeEventListener("canplaythrough",t.onCanplaythrough),this.videoElement.removeEventListener("durationchange",t.onDurationchange),this.videoElement.removeEventListener("emptied",t.onEmptied),this.videoElement.removeEventListener("error",t.onError),this.videoElement.removeEventListener("loadeddata",t.onLoadeddata),this.videoElement.removeEventListener("loadedmetadata",t.onLoadedmetadata),this.videoElement.removeEventListener("loadstart",t.onLoadstart),this.videoElement.removeEventListener("pause",t.onPause),this.videoElement.removeEventListener("play",t.onPlay),this.videoElement.removeEventListener("playing",t.onPlaying),this.videoElement.removeEventListener("progress",t.onProgress),this.videoElement.removeEventListener("ratechange",t.onRatechange),this.videoElement.removeEventListener("seeked",t.onSeeked),this.videoElement.removeEventListener("seeking",t.onSeeking),this.videoElement.removeEventListener("stalled",t.onStalled),this.videoElement.removeEventListener("suspend",t.onSuspend),this.videoElement.removeEventListener("timeupdate",t.onTimeupdate),this.videoElement.removeEventListener("volumechange",t.onVolumechange),this.videoElement.removeEventListener("waiting",t.onWaiting),this.videoElement.removeEventListener("ended",this.onPlayComplete),this.pause(),this.videoElement=null},i.syncVideoPosition=function(){var e,t=n.stage;e=u.getGlobalPosAndScale(this);var i=t._canvasTransform.a,a=t._canvasTransform.d,o=e.x*t.clientScaleX*i+t.offset.x,r=e.y*t.clientScaleY*a+t.offset.y;this.videoElement.style.left=o+"px",this.videoElement.style.top=r+"px",this.videoElement.width=this.width/s.pixelRatio,this.videoElement.height=this.height/s.pixelRatio},o(0,i,"buffered",function(){return this.videoElement.buffered}),o(0,i,"videoWidth",function(){return this.videoElement.videoWidth}),o(0,i,"currentSrc",function(){return this.videoElement.currentSrc}),o(0,i,"currentTime",function(){return this.videoElement.currentTime},function(e){this.videoElement.currentTime=e,this.renderCanvas()}),o(0,i,"ended",function(){return this.videoElement.ended}),o(0,i,"volume",function(){return this.videoElement.volume},function(e){this.videoElement.volume=e}),o(0,i,"videoHeight",function(){return this.videoElement.videoHeight}),o(0,i,"readyState",function(){return this.videoElement.readyState}),o(0,i,"duration",function(){return this.videoElement.duration}),o(0,i,"error",function(){return this.videoElement.error}),o(0,i,"loop",function(){return this.videoElement.loop},function(e){this.videoElement.loop=e}),o(0,i,"playbackRate",function(){return this.videoElement.playbackRate},function(e){this.videoElement.playbackRate=e}),o(0,i,"muted",function(){return this.videoElement.muted},function(e){this.videoElement.muted=e}),o(0,i,"paused",function(){return this.videoElement.paused}),o(0,i,"preload",function(){return this.videoElement.preload},function(e){this.videoElement.preload=e}),o(0,i,"seekable",function(){return this.videoElement.seekable}),o(0,i,"seeking",function(){return this.videoElement.seeking}),o(0,i,"height",e.prototype._$get_height,function(e){n.superSet(d,this,"height",e),this.paused&&this.renderCanvas()}),o(0,i,"width",e.prototype._$get_width,function(e){this.videoElement.width=this.width/s.pixelRatio,n.superSet(d,this,"width",e),this.paused&&this.renderCanvas()}),t.onAbort=function(e){e.target.layaTarget.event("abort")},t.onCanplay=function(e){e.target.layaTarget.event("canplay")},t.onCanplaythrough=function(e){e.target.layaTarget.event("canplaythrough")},t.onDurationchange=function(e){e.target.layaTarget.event("durationchange")},t.onEmptied=function(e){e.target.layaTarget.event("emptied")},t.onError=function(e){e.target.layaTarget.event("error")},t.onLoadeddata=function(e){e.target.layaTarget.event("loadeddata")},t.onLoadedmetadata=function(e){e.target.layaTarget.event("loadedmetadata")},t.onLoadstart=function(e){e.target.layaTarget.event("loadstart")},t.onPause=function(e){e.target.layaTarget.event("pause")},t.onPlay=function(e){e.target.layaTarget.event("play")},t.onPlaying=function(e){e.target.layaTarget.event("playing")},t.onProgress=function(e){e.target.layaTarget.event("progress")},t.onRatechange=function(e){e.target.layaTarget.event("ratechange")},t.onSeeked=function(e){e.target.layaTarget.event("seeked")},t.onSeeking=function(e){e.target.layaTarget.event("seeking")},t.onStalled=function(e){e.target.layaTarget.event("stalled")},t.onSuspend=function(e){e.target.layaTarget.event("suspend")},t.onTimeupdate=function(e){e.target.layaTarget.event("timeupdate")},t.onVolumechange=function(e){e.target.layaTarget.event("volumechange")},t.onWaiting=function(e){e.target.layaTarget.event("waiting")},t.MP4=1,t.OGG=2,t.CAMERA=4,t.WEBM=8,t.SUPPORT_PROBABLY="probably",t.SUPPORT_MAYBY="maybe",t.SUPPORT_NO="",t}(d)),w=function(e){function t(){this.video=null,t.__super.call(this),this._w=1,this._h=1,this.createDomElement()}a(t,"laya.device.media.HtmlVideo",r);var n=t.prototype;return n.createDomElement=function(){var e=this;this._source=this.video=s.createElement("video");var t=this.video.style;t.position="absolute",t.top="0px",t.left="0px",this.video.addEventListener("loadedmetadata",function(){this._w=e.video.videoWidth,this._h=e.video.videoHeight}.bind(this))},n.setSource=function(e,t){for(;this.video.childElementCount;)this.video.firstChild.remove();t&L.MP4&&this.appendSource(e,"video/mp4"),t&L.OGG&&this.appendSource(e+".ogg","video/ogg")},n.appendSource=function(e,t){var n=s.createElement("source");n.src=e,n.type=t,this.video.appendChild(n)},n.getVideo=function(){return this.video},t.create=function(){return new t},t}(),x=function(e){function t(){this.gl=null,this.preTarget=null,this.preTexture=null,t.__super.call(this),s.onIPhone||(this.gl=v.mainContext,this._source=this.gl.createTexture(),this.preTarget=m.curBindTexTarget,this.preTexture=m.curBindTexValue,m.bindTexture(this.gl,3553,this._source),this.gl.texParameteri(3553,10242,33071),this.gl.texParameteri(3553,10243,33071),this.gl.texParameteri(3553,10240,9729),this.gl.texParameteri(3553,10241,9729),this.preTarget&&this.preTexture&&m.bindTexture(this.gl,this.preTarget,this.preTexture))}return a(t,"laya.device.media.WebGLVideo",w),t.prototype.updateTexture=function(){s.onIPhone||(m.bindTexture(this.gl,3553,this._source),this.gl.texImage2D(3553,0,6407,6407,5121,this.video))},t}();n.__init([f])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(e,t){"use strict";for(var n in Object.defineProperty(t,"__esModule",{value:!0}),Laya){var i=Laya[n];i&&i.__isclass&&(t[n]=i)}});