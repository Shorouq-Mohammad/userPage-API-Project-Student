//This is the class that will manage all your APIs
class APIManager {
  constructor() {
    this.data = {};
  }
  loadData() {
    //get user
    $.ajax({
      method: "GET",
      url: "https://randomuser.me/api/?results=7&inc=name,location,picture",
      dataType: "json",
      success: (data) => {
        this.data["user"] = data.results[0];
        // render.renderUser({ user: data.results[0] });
        data.results.splice(0, 1);
        const friends = data.results.map((d) => {
          return { name: d.name };
        });
        this.data["friends"] = friends;
      },
      error: function (xhr, text, error) {
        alert(
          "Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you."
        );
      },
    });
    //get Quote
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      success: (data) => {
        this.data["quote"] = data.quote;
      },
      error: function (xhr, text, error) {
        alert("Uh oh, something has gone wrong.");
      },
    });
    //get Pokemon
    const i = Math.floor(Math.random() * 100)
    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${i}`,
      success: (data) => {
          const nameCase= data.name.charAt(0).toUpperCase() +  data.name.slice(1); 
        this.data["poke"] = {
          name: nameCase,
          img: data.sprites.front_default,
        };
      },
      error: function (xhr, text, error) {
        alert("Uh oh, something has gone wrong.");
      },
    });
    //get Bacon
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler&paras=1",
      success: (data) => {
        this.data["meat"] = data;
      },
      error: function (xhr, text, error) {
        alert("Uh oh, something has gone wrong.");
      },
    });
  }
}
