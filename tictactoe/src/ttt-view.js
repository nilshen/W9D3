class View {

  constructor(game, el) {
    this.game = game;
    this.el = el;
  }



  setupBoard() {
    // game.board
    // const ttt = document.querySelector('.ttt');
    let ul = document.createElement("ul");
    // const grid = [];
    let counter = 1;
    for (let i = 0; i < 3; i++) {
      // li.setAttribute
      for (let j = 0; j < 3; j++) {

        let li = document.createElement("li");
        li.setAttribute("data-pos", `[${i},${j}]`);
        li.setAttribute("id", `${counter}`);

        // grid.push(li);
        counter += 1;
        this.el.appendChild(li);
      }
    }
    // think we create a for loop
    // append into an array?
    // add an attribute for the position??
  }

  bindEvents() { }

  handleClick(e) {
    let grid = Array.from(document.querySelectorAll("li"));
    // console.log(e)
    grid.map(box => {
      let pos = JSON.parse(box.getAttribute("data-pos"))   //"[0,0]"
      // console.log(pos)
      box.addEventListener("click", this.makeMove(pos));
    });
    // this.el.addEventListener("click", console.log(e.target))
  }

  makeMove(square) { }
  
}

module.exports = View;
