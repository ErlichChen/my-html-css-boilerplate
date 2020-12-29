(function(window, document) {
  const canvas = document.getElementById('canvas');
  const [width,height]=[window.innerWidth,window.innerHeight];
  canvas.width=width;
  canvas.height=height;
  const ctx = canvas.getContext('2d');

  class Sector {
    constructor(radius=200,startAngle=0,endAngle=Math.PI/2,color='chocolate'){
      this.radius=radius;
      this.startAngle=startAngle;
      this.endAngle=endAngle;
      this.color=color;
      this.x=0;
      this.y=0;
      this.text='标签文字';
      this.data=1000;
      this.textAlign='left';
      this.p1={x:0,y:0,d:20};
      this.p2={x:0,y:0,d:70};
      this.p3={x:0,y:0,d:20};
      this.p4={x:0,y:0,d:10};
  }

    draw(ctx) {
      const {x, y, radius, startAngle, endAngle, color, p1, p2, p3, p4, text, textAlign}=this;
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle=color;
      ctx.moveTo(x,y);
      ctx.arc(
          x,y,
          radius,
          startAngle,endAngle,
      )
      ctx.fill();
      ctx.retore();
    }
  }

  const item = new Sector();
  item.draw(ctx);


})(window, document);
