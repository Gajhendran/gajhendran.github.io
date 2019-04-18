    const container = popmotion.styler(document.querySelector('.container'));
        const formElements = document.querySelector('.inner');
        const msgPop = popmotion.styler(document.querySelector('.msg'));

        const myAnim = popmotion.tween({ 
            from: { 
                scale: .2, 
                opacity: 0,
                y: -300
            },
            to: { 
                scale: 1, 
                opacity: 1,
                y: 0
            },
            duration: 3000
        })

        const myAnim2 = popmotion.keyframes({ 
                    values: [
                        { y: -50, opacity: 0 },
                        { y: -20, opacity: 1 },
                        { y: -20, opacity: 1 },
                        { y: 0, opacity: 0 },
                    ],
                    times: [0, .2,.8, 1],
                    duration: 3000
                })

        myAnim.start({
            update: container.set,
            complete: () => { myAnim2.start(msgPop.set) }
        });


        const stylers = Array
        .from(formElements.children)
        .map(popmotion.styler); 
                
        const animations = Array(stylers.length)
        .fill(popmotion.spring({ from: 100, to:  0 }));

        popmotion.stagger(animations, 100)
        .start((v) => v.forEach((x, i) => stylers[i].set({'y': x})));



var TxtType=function(a,b,c)
{this.toRotate=b;this.el=a;this.loopNum=0;this.period=parseInt(c,10)||2000;this.txt="";this.tick();this.isDeleting=false};
TxtType.prototype.tick=function()
{var a=this.loopNum%this.toRotate.length;var c=this.toRotate[a];
    if(this.isDeleting)
        {this.txt=c.substring(0,this.txt.length-1)}
    else{this.txt=c.substring(0,this.txt.length+1)}
        this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";
    var b=this;var d=200-Math.random()*100;
    if(this.isDeleting){d/=2}if(!this.isDeleting&&this.txt===c){d=this.period;
        this.isDeleting=true}else{if(this.isDeleting&&this.txt===""){this.isDeleting=false;this.loopNum++;d=500}}
        setTimeout(function(){b.tick()},d)};
        window.onload=function(){var c=document.getElementsByClassName("typewrite");for(var b=0;b<c.length;b++){var d=c[b].getAttribute("data-type");
        var e=c[b].getAttribute("data-period");
        if(d){new TxtType(c[b],JSON.parse(d),e)}}var a=document.createElement("style");
        a.type="text/css";a.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}";document.body.appendChild(a)};