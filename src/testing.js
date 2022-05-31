let liz = {
    name: "Liz",
    age: 32,
    location: {
      city: "Portland",
      state: "Oregon"
    },
    pets: [
      {type: "cat", name: "Redux"}
    ]
  }


  let lizSister = {...liz,
                    age:22 ,
                    location:{...liz.location,
                        city:"başka"},
                    pets : [...liz.pets,
                            {type:"dog",name:"react"}]   
                        };

  console.log(lizSister)