class Home
{
   constructor()
   {
      this.title = createElement('h1');
      this.input = createInput("Enter your name");
      this.button = createButton("Play");
      this.greeting = createElement('h2');
   }
   display()
   {
      this.title.html("Car racer");
      this.title.position(500,100);
      this.input.position(500,250);
      this.button.position(500,400);
      this.button.mousePressed(()=>
      {
         this.input.hide();
         this.button.hide();

         var name = this.input.value();
         this.greeting.html("Hello "+name);
         this.greeting.position(500,250);
      })
   }
}