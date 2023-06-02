AFRAME.registerComponent("square",{
    init: function(){
        this.placesContainer=this.el
        this.createCards()
    },

    createCards: function () {
        const thumbNailsRef = [
          {
            id: "captain-aero-poster",
            url: "./assets/thumbnails/captain-aero-poster.jpg"
          },
          {
            id: "outer-space-poster",
            url: "./assets/thumbnails/outer-space-poster.jpg"
          },
    
          {
            id: "spiderman-poster",
            url: "./assets/thumbnails/spiderman-poster.jpg"
          },
          {
            id: "superman-poster",
            url: "./assets/thumbnails/superman-poster.jpg"
          },
        ];
        let prevoiusXPosition = -60;
    
        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;
    
          // Border Element
          const borderEl=this.createBorder(position,item.id)
          
          const posterEl=this.createPoster(item)
          borderEl.appendChild(posterEl)
          this.placesContainer.appendChild(borderEl)
        }
      },

     createBorder:function(position,id){
      const entityEl=document.createElement("a-entity")
      entityEl.setAttribute("id",id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry",{
          primitive: "plane",
          width: 22,
          height: 40
      })
      entityEl.setAttribute("position",position)
      entityEl.setAttribute("material",{color:"#00bcd4", opacity:0.4})
      return entityEl
    },

    createPoster: function(item){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        });

        entityEl.setAttribute("material", {src: item.url})
        return entityEl
      }
})