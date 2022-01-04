const bagpack={
    volume:40,
    color:"black",
    size:{
    width:10,
    height:20
    },
    pocket:2,
    zipOpen:false,
    carryLuggage:function(status){
        this.zipOpen=status;
    },
    newSize:function(newWidth,newHeight){
        this.size.width=newWidth;
        this.size.height=newHeight;
    }
    }
    //console.log("bagpack object:",bagpack)
    //console.log(bagpack.zipOpen)
    //console.log("bagpack object:",bagpack.size.height)
    console.log(bagpack["pocket"])


    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
      }

      const ramesh = new Person('Ramesh', 33, 'M');
      


      const Animal = {
        type: 'abc', // Default value of properties
        displayType: function() {  // Method which will display type of Animal
          console.log(this.type);
        }
      };
      
      // Create new animal type called animal1
      const animal1 = Object.create(Animal);
      animal1.displayType(); // Output: Invertebrates

        const fish = Object.create(Animal);
        fish.type = 'Fishes';
        fish.displayType(); // Output: Fishes