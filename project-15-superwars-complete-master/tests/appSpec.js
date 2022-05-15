// Helps to mimic div creations
const TEST_PLAYERS = ["Spiderman","Captain America"];
const TEST_PLAYER = [0, "Spiderman", 'hero'];
let HTMLElements = {};
document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function (ID) {
  if (!HTMLElements[ID]) {
    var newElement = document.createElement('div');
    HTMLElements[ID] = newElement;
  }
  return HTMLElements[ID];
});

function isElement(element) {
  return element instanceof Element || element instanceof HTMLDocument;
}
describe("Creating a player", function () {
  describe("Construction of a player", function () {
    it("should create a  valid Player object\
    given id,name and type", function () {


      let player = new Player(...TEST_PLAYER);

      expect(player).toBeInstanceOf(Player);
    });

    it("should create player with a valid name \
    ", function () {


      let player = new Player(...TEST_PLAYER);
      let keys = Object.keys(player);
      let found = keys.findIndex(k => k == 'name');

      expect(found).toBeGreaterThan(-1);
      expect(player.name).toBeInstanceOf(String);
    });


    it("should create player with a valid image url \
    ", function () {


      let player = new Player(...TEST_PLAYER);
      let keys = Object.keys(player);
      let found = keys.findIndex(k => k == 'image');

      expect(found).toBeGreaterThan(-1);
      expect(player.image).toBeInstanceOf(String);
      expect(player.image).toMatch(/images\/super-[0-9]+\.png/);
    });

    it("should create player who is either Hero or Villain \
    ", function () {


      let player = new Player(...TEST_PLAYER);
      let keys = Object.keys(player);
      let found = keys.findIndex(k => k == 'strength');

      expect(found).toBeGreaterThan(-1);
      expect(player.type).toMatch(/(hero|villain)/);
    });

    it("should create player with a valid numerical strength \
    ", function () {


      let player = new Player(...TEST_PLAYER);
      let keys = Object.keys(player);
      let found = keys.findIndex(k => k == 'strength');

      expect(found).toBeGreaterThan(-1);
      expect(player.strength).toBeInstanceOf(Number);
    });

  });

  describe("Player getting random strength", function () {
    it("should return a number", function () {
      let expectedType = Number;


      let player = new Player(...TEST_PLAYER);
      let strength = player.getRandomStrength();

      expect(strength).toBeInstanceOf(expectedType);
    });

    it("should return a 0 < number <= 100", function () {
      let expectedType = Number;


      let player = new Player(...TEST_PLAYER);
      let strength = player.getRandomStrength();

      expect(strength).toBeGreaterThan(0);
      expect(strength).toBeLessThanOrEqual(100);
    });
  });

  describe("View of Player", function () {
    it("should return HTML element", function () {
      let player = new Player(...TEST_PLAYER);

      let view = player.view();

      expect(isElement(view)).toBeTrue();
    });

    it("should return HTML element with 'player' CSS class\
      ", function () {

      let player = new Player(...TEST_PLAYER);

      let view = player.view();

      expect(view).toHaveClass('player');
    });

    it("should return HTML element \
      with 'data-id' as attribute \
      ", function () {

      let player = new Player(...TEST_PLAYER);

      let view = player.view();
      let hasAttribute = view.hasAttribute('data-id');

      expect(hasAttribute).toBeTrue();
    });

    it("should append valid image to \
      'player' element ", function () {

      let player = new Player(...TEST_PLAYER);

      let view = player.view();
      let img = view.children[0];
      let img_src = img.getAttribute('src');

      expect(img_src).toBe('images/super-1.png');
    });

    it("should append name using a div element to \
      'player' element ", function () {

      let player = new Player(...TEST_PLAYER);

      let view = player.view();
      let child = view.children[1];
      let child_content = child.textContent;

      expect(child_content).toBe('Spiderman');
    });

    it("should append strength using a div element \
      with `strength` class\
      to 'player' element ", function () {

      let player = new Player(...TEST_PLAYER);

      let view = player.view();
      let child = view.children[2];
      let child_content = child.textContent;

      expect(child).toHaveClass('strength');
      expect(child_content).toBeGreaterThan(0);
    });

  });

});



describe("Setting up Super War", function () {
  describe("Initialize players", function () {
    it("should create an array of JSON objects \
    from given array of players", function () {
      let superWar = new Superwar(TEST_PLAYERS);
      let players = superWar.players;

      expect(players[0]).toBeInstanceOf(Player);
    });

    it("should create equal number of players for \
    given players name", function () {
      let superWar = new Superwar(TEST_PLAYERS);
      let players = superWar.players;
      let expectedLength = TEST_PLAYERS.length;

      expect(players.length).toBe(expectedLength);
    });
  });


  describe("Building player blocks", function () {
    it("should return a template for the players\
      ", function () {
      let superWar = new Superwar(TEST_PLAYERS);
      let superStrength = superWar.players[0].strength;
      let player = new Player(...TEST_PLAYER);
      player.strength = superStrength;
      let expectedFragment = player.view();

      let fragment = superWar.buildPlayers('hero');
      let fragmentHTML = document.createElement('div');
      fragmentHTML.append(fragment);

      expect(fragmentHTML.children[0].innerHTML).toBe(expectedFragment.innerHTML);
    });
  });


  describe("Handling player selection",function(){

    beforeEach(function(){
      superWar = new Superwar(TEST_PLAYERS);
    });

    it("should return HTML element with score\
     for given player types",function(){
     superWar.players.map(player => player.selected = true);
     superWar.players[1].strength = 0;
     superWar.announceWinner = jasmine.createSpy("announceWinner");
     superWar.fight()
     let fragment = document.getElementById('score');

     expect(isElement(fragment)).toBeTrue();
     expect(fragment.textContent).toBe('1 - 0');
   });

    it("should return clash when there is a fight\
    ",function(){
      superWar.players.map(player => player.selected = true);
  
      expect(superWar.isFight()).toBe('clash');
    });

    it("should return total score of the\
    team",function(){
     superWar.players[1].strength = 0;
     superWar.players[0].wins = 1;
     let score = superWar.calculateScore();
     let expectedScore = 1;

     expect(score['hero']).toBe(expectedScore);
   });

    it("should return hero when villains total\
    score reaches zero",function(){
     superWar.players[1].strength = 0;

     expect(superWar.checkWin()).toBe('hero');
    });

    it("should return total strength\
    of the team",function(){
     let expectedStrength = superWar.players[0].strength;

     expect(superWar.totalStrength('hero')).toBe(expectedStrength);
    });

  });
});