const manager = new APIManager()
const render = new Renderer()
let users = []
let i = 0;

$("#load").on("click", function(){
    manager.loadData()
})

$("#display").on("click", function(){
    render.render(manager.data)
})

$("#save").on("click", function(){
    const page = {...manager.data}
    page.id = i++
    users.push(page)
    localStorage.users = JSON.stringify(users)
    $(".dropdown-content").empty()
    const source = $("#drop-template").html();
    const template = Handlebars.compile(source);
    const names = users.map(u => {return {first: u.user.name.first, last: u.user.name.last, id: u.id}})
    const newHTML = template(names);
    $(".dropdown-content").append(newHTML);
})

$("#loadPage").on("click",function(){
    $(".dropdown-content").slideToggle()
})

$(".dropdown-content").on("click", ".pages", function(){
    const page = users.find(u => u.id == $(this).data().id)
    render.render(page)
})
