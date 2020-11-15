class Renderer {
  constructor() {}
  render(data){
      this.renderUser(data.user)
      this.renderFriends(data.friends)
      this.renderQuote(data.quote)
      this.renderPoke(data.poke)
      this.renderMeat(data.meat)
  }
  renderUser(user) {
    $(".user-container").empty()
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(user);
    $(".user-container").append(newHTML);
  }
  renderFriends(friends){
    $(".friends-container").empty()
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(friends);
    $(".friends-container").append(newHTML);
  }
  renderQuote(quote){
    $(".quote-container").empty()
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({quote});
    $(".quote-container").append(newHTML);
  }
  renderPoke(poke){
    $(".pokemon-container").empty()
    const source = $("#poke-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({poke});
    $(".pokemon-container").append(newHTML);
  }
  renderMeat(meat){
    $(".meat-container").empty()
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({meat});
    $(".meat-container").append(newHTML);
  }
}
