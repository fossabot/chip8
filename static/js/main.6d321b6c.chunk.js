(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,i){e.exports=i(21)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),r=i(7),n=i.n(r),o=(i(14),i(1)),c=i(2),h=i(4),l=i(3),u=i(5);i(15);function d(e){return 4095&e}function m(e){return 255&e}function y(e){return 15&e}function v(e){return(3840&e)>>8}function p(e){return(240&e)>>4}var f=[240,144,144,144,240,32,96,32,32,112,240,16,240,128,240,240,16,240,16,240,144,144,240,16,16,240,128,240,16,240,240,128,240,144,240,240,16,32,64,64,240,144,240,144,240,240,144,240,16,240,240,144,240,144,144,224,144,224,144,224,240,128,128,128,240,224,144,144,144,224,240,128,240,128,240,240,128,240,128,128],k=function(){function e(t){Object(o.a)(this,e),t=t||{},this.MEM_SIZE=t.memSize||4096,this.PC_START=t.pcStart||512,this.STACK_SIZE=t.stackSize||16,this.DISPLAY_SIZE=t.displaySize||2048,this.screen={draw:function(e){}},this.reset()}return Object(c.a)(e,[{key:"reset",value:function(){var e=this;this.memory=new Uint8Array(this.MEM_SIZE),f.forEach(function(t,i){e.memory[i]=t}),this.V=new Uint8Array(16),this.I=0,this.DT=0,this.ST=0,this.PC=this.PC_START,this.SP=0,this.stack=new Uint16Array(this.STACK_SIZE),this.display=new Array(this.DISPLAY_SIZE).fill(0),this.keys={},this.waitingKey=!1,this.waitingKeyTarget=-1,this.screen.draw(this.display)}},{key:"pressKey",value:function(e){this.keys[15&e]=!0,this.waitingKey&&(this.V[this.waitingKeyTarget]=e,this.waitingKey=!1)}},{key:"releaseKey",value:function(e){this.keys[15&e]=!1}},{key:"delayTimerTick",value:function(){this.DT>0&&(this.DT-=1)}},{key:"soundTimerTick",value:function(){this.ST>0&&(this.ST-=1),this.ST&&console.log("Stop sound!")}},{key:"writeWord",value:function(e,t){return this.writeByte(e,t>>8&255),this.writeByte(e+1,255&t),this}},{key:"writeByte",value:function(e,t){this.memory[e]=t}},{key:"cycle",value:function(){if(!this.waitingKey){var e=this.memory[this.PC]<<8|this.memory[this.PC+1];this.executeOpCode(e),this.shouldDraw&&(this.shouldDraw=!1,this.screen.draw(this.display))}}},{key:"throwInvalidOpCode",value:function(e){throw new Error("Invalid instruction opCode=".concat(e.toString(16)))}},{key:"executeOpCode",value:function(e){switch(this.PC+=2,(61440&e)>>12){case 0:return void this.opCodeFamily_0x0(e);case 1:return void this.opCodeFamily_0x1(e);case 2:return void this.opCodeFamily_0x2(e);case 3:return void this.opCodeFamily_0x3(e);case 4:return void this.opCodeFamily_0x4(e);case 5:return void this.opCodeFamily_0x5(e);case 6:return void this.opCodeFamily_0x6(e);case 7:return void this.opCodeFamily_0x7(e);case 8:return void this.opCodeFamily_0x8(e);case 9:return void this.opCodeFamily_0x9(e);case 10:return void this.opCodeFamily_0xA(e);case 11:return void this.opCodeFamily_0xB(e);case 12:return void this.opCodeFamily_0xC(e);case 13:return void this.opCodeFamily_0xD(e);case 14:return void this.opCodeFamily_0xE(e);case 15:return void this.opCodeFamily_0xF(e);default:return void this.throwInvalidOpCode(e)}}},{key:"opCodeFamily_0x0",value:function(e){switch(e){case 224:this.display.fill(0);break;case 238:this.SP-=1,this.PC=this.stack[this.SP]}}},{key:"opCodeFamily_0x1",value:function(e){var t=d(e);this.PC=t}},{key:"opCodeFamily_0x2",value:function(e){var t=d(e);this.stack[this.SP]=this.PC,this.SP+=1,this.PC=t}},{key:"opCodeFamily_0x3",value:function(e){var t=v(e),i=m(e);this.V[t]===i&&(this.PC+=2)}},{key:"opCodeFamily_0x4",value:function(e){var t=v(e),i=m(e);this.V[t]!==i&&(this.PC+=2)}},{key:"opCodeFamily_0x5",value:function(e){var t=v(e),i=p(e);0!==y(e)&&this.throwInvalidOpCode(e),this.V[t]===this.V[i]&&(this.PC+=2)}},{key:"opCodeFamily_0x6",value:function(e){var t=v(e),i=m(e);this.V[t]=i}},{key:"opCodeFamily_0x7",value:function(e){var t=v(e),i=m(e);this.V[t]=this.V[t]+i&255}},{key:"opCodeFamily_0x8",value:function(e){var t=y(e),i=v(e),a=p(e);switch(t){case 0:this.V[i]=this.V[a];break;case 1:this.V[i]=this.V[i]|this.V[a];break;case 2:this.V[i]=this.V[i]&this.V[a];break;case 3:this.V[i]=this.V[i]^this.V[a];break;case 4:var s=this.V[i]+this.V[a];this.V[15]=s>255,this.V[i]=255&s;break;case 5:var r=this.V[i]-this.V[a];this.V[15]=this.V[i]>=this.V[a],this.V[i]=255&r;break;case 6:this.V[15]=1&this.V[a],this.V[i]=this.V[a]=this.V[a]>>1;break;case 7:var n=this.V[a]-this.V[i];this.V[15]=this.V[a]>=this.V[i],this.V[i]=255&n;break;case 14:this.V[15]=(128&this.V[a])>>7,this.V[i]=this.V[a]=this.V[a]<<1;break;default:return void this.throwInvalidOpCode(e)}}},{key:"opCodeFamily_0x9",value:function(e){var t=v(e),i=p(e);0!==y(e)&&this.throwInvalidOpCode(e),this.V[t]!==this.V[i]&&(this.PC+=2)}},{key:"opCodeFamily_0xA",value:function(e){var t=d(e);this.I=t}},{key:"opCodeFamily_0xB",value:function(e){var t=d(e);this.PC=t+this.V[0]}},{key:"opCodeFamily_0xC",value:function(e){var t=v(e),i=m(e);this.V[t]=256*Math.random()&i}},{key:"opCodeFamily_0xD",value:function(e){var t=v(e),i=p(e),a=y(e);this.shouldDraw=!0,this.V[15]=0;for(var s=0;s<a;s++)for(var r=this.memory[this.I+s],n=0;n<8;n++){if(r&128>>n){var o=(this.V[t]+n)%64+64*((this.V[i]+s)%32);0!==this.display[o]&&(this.V[15]=1),this.display[o]^=1}}}},{key:"opCodeFamily_0xE",value:function(e){var t=v(e);switch(m(e)){case 158:var i=this.V[t];this.keys[i]&&(this.PC+=2);break;case 161:var a=this.V[t];this.keys[a]||(this.PC+=2);break;default:return void this.throwInvalidOpCode(e)}}},{key:"opCodeFamily_0xF",value:function(e){var t=v(e);switch(m(e)){case 7:this.V[t]=this.DT;break;case 10:this.waitingKey=!0,this.waitingKeyTarget=t;break;case 21:this.DT=this.V[t];break;case 24:this.ST=this.V[t];break;case 30:this.I=this.I+this.V[t]&65535;break;case 41:this.I=5*(15&this.V[t]);break;case 51:this.memory[this.I]=Math.floor(this.V[t]/100)%10,this.memory[this.I+1]=Math.floor(this.V[t]/10)%10,this.memory[this.I+2]=this.V[t]%10;break;case 85:for(var i=0;i<=t;i++)this.memory[this.I]=this.V[i],this.I=this.I+1&65535;break;case 101:for(var a=0;a<=t;a++)this.V[a]=this.memory[this.I],this.I=this.I+1&65535;break;default:return void this.throwInvalidOpCode(e)}}}]),e}(),C=(i(16),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(h.a)(this,Object(l.a)(t).call(this,e))).containerRef=s.a.createRef(),i.canvasRef=s.a.createRef(),i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"resizeCanvas",value:function(){var e=this.containerRef.current.offsetWidth,t=this.containerRef.current.offsetHeight,i=Math.floor(Math.min(e/64,t/32));this.canvasWidth=this.canvasRef.current.width=64*i,this.canvasHeight=this.canvasRef.current.height=32*i}},{key:"draw",value:function(){this.ctx.fillStyle=this.rgbFromColor(this.props.backgroundColor),this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight);var e=this.canvasHeight/32;this.ctx.fillStyle=this.rgbFromColor(this.props.drawColor);for(var t=this.props.displayData,i=0;i<t.length;i++){var a=Math.floor(i/64),s=i%64;if(0!==t[i]){var r=s*e,n=a*e;this.ctx.shadowBlur=30*Math.random(),this.ctx.shadowColor="rgba(102, 255, 102, ".concat(.3*Math.random(),")"),this.ctx.fillRect(r,n,e,e)}}this.requestFrameId=window.requestAnimationFrame(this.draw.bind(this))}},{key:"rgbFromColor",value:function(e){return"rgb(".concat(e.r,",").concat(e.g,",").concat(e.b,")")}},{key:"componentDidMount",value:function(){this.ctx=this.canvasRef.current.getContext("2d"),this.canvasWidth=this.canvasRef.current.width,this.canvasHeight=this.canvasRef.current.height,this.resizeCanvas(),this.requestFrameId=window.requestAnimationFrame(this.draw.bind(this)),window.addEventListener("resize",this.resizeCanvas.bind(this))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.requestFrameId),window.removeEventListener("resize",this.resizeCanvas.bind(this))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return s.a.createElement("section",{ref:this.containerRef,className:"ScreenContainer"},s.a.createElement("canvas",{ref:this.canvasRef,className:"ScreenCanvas"}))}}]),t}(s.a.Component));C.defaultProps={backgroundColor:{r:40,g:40,b:40},drawColor:{r:102,g:255,b:102},displayData:new Array(2048).fill(0)};var b=C,V=(i(17),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(h.a)(this,Object(l.a)(t).call(this,e))).state={oldValue:0,currentValue:0},i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.currentValue!==e.value&&(this.setState({oldValue:this.state.currentValue,currentValue:e.value}),!0)}},{key:"render",value:function(){return s.a.createElement("li",{className:"Register"},this.getLabel(),s.a.createElement("span",{className:"OldValue"},this.numberToHex(this.state.oldValue)),s.a.createElement("span",{className:"CurrentValue"},this.numberToHex(this.state.currentValue)))}},{key:"getLabel",value:function(){if(this.props.label)return s.a.createElement("label",{className:"Label"},this.props.label)}},{key:"numberToHex",value:function(e){return e.toString(16).padStart(2*this.props.bytes,"0").toUpperCase()}}]),t}(s.a.Component));V.defaultProps={bytes:1};var w=V,S=(i(18),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Array.from(this.props.v).map(function(e,t){return s.a.createElement(w,{key:t.toString(),label:"V".concat(t.toString(16).toUpperCase()),value:e})});return s.a.createElement("section",null,s.a.createElement("h1",null,"V Registers"),s.a.createElement("ul",{className:"RegistersList"},e))}}]),t}(s.a.Component)),g=(i(19),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Array.from(this.props.stack).map(function(e,t){return s.a.createElement(w,{key:t.toString(),label:"SP".concat(t.toString(16).toUpperCase()),value:e,bytes:2})});return s.a.createElement("section",null,s.a.createElement("h1",null,"Stack"),s.a.createElement("ul",{className:"StackList"},e))}}]),t}(s.a.Component)),x=(i(20),function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=Array.from(this.props.memorySlice).map(function(t,i){return s.a.createElement(w,{key:i.toString(),label:e.getIndexLabel(i),value:t,bytes:1})});return s.a.createElement("section",null,s.a.createElement("h1",null,"Memory"),s.a.createElement("ul",{className:"MemoryList"},s.a.createElement(w,{label:"PC ",value:this.props.pc,bytes:2}),t))}},{key:"getIndexLabel",value:function(e){return(this.props.pc+e).toString(16).toUpperCase().padStart(4,"0")}}]),t}(s.a.Component)),F=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(h.a)(this,Object(l.a)(t).call(this,e))).handleFile=function(e){e.preventDefault();var t=e.target.files[0],a=new FileReader;a.onload=function(e){var t=e.target.result;i.rom=new Uint8Array(t)},a.readAsArrayBuffer(t)},i.handleStart=function(e){e.preventDefault(),i.intervalHandle&&clearInterval(i.intervalHandle),i.chip8.reset();var t=512;console.log("Rom size ".concat(i.rom.length)),i.rom.forEach(function(e){i.chip8.writeByte(t,e),t++});i.intervalHandle=setInterval(function(){var e=i.cyclesPerTick;do{i.chip8.cycle(),e--}while(e>0);i.setState({displayData:i.chip8.display,v:i.chip8.V,stack:i.chip8.stack,pc:i.chip8.PC,memorySlice:i.memorySlice(i.chip8.PC,i.chip8.memory)}),i.chip8.soundTimerTick(),i.chip8.delayTimerTick()},1e3/60)},i.state={displayData:new Array(0).fill(0),v:new Uint8Array(16),stack:new Uint16Array(16),pc:512,memorySlice:new Uint8Array(7)},i.myRef=s.a.createRef(),i.intervalHandle=null,i.cyclesPerTick=10,i.rom=[],i.chip8=new k,i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"memorySlice",value:function(e,t){return t.slice(e,e+7)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("input",{className:"SelectRom",type:"file",id:"file",onChange:this.handleFile}),s.a.createElement("button",{id:"start",onClick:this.handleStart},"Start!"),s.a.createElement("section",{className:"MemoryView"},s.a.createElement(S,{v:this.state.v}),s.a.createElement(g,{stack:this.state.stack}),s.a.createElement(x,{memorySlice:this.state.memorySlice,pc:this.state.pc})),s.a.createElement("section",{className:"DisplayView"},s.a.createElement(b,{displayData:this.state.displayData})))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.6d321b6c.chunk.js.map