class Drop 
{

    constructor(x,y)
    {

        var option = 
        {
            restitution : 0.1,
            friction : 0.1
        }

        this.rain = Bodies.circle(x,y,5,option);
        this.radius = 5;
        World.add(world,this.rain);
    }

    display()
    {
        var pos = this.rain.position
        fill("Blue");
        ellipseMode(CENTER);
        ellipse(pos.x , pos.y , this.radius , this.radius);
        console.log("hii");
    }

    update()
    {
        var pos = this.rain.position;
        if(pos.y > height )
        {

            Matter.Body.setPosition(this.rain,{ x: random(0,400), y: random(0,400) });
            console.log("Update");
        }
    }
}