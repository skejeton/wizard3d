/** 
 * you are die
*/
export default class Node
{
  preInit()
  {

  }

  init()
  {

  }

  setGame(game)
  {
    this.game = game;
  }
  
  postInit()
  {

  }

  constructor()
  {
    this.children = [];
    this.parent = undefined;
    this.id = null;
    this.handle = "";
    this.enabled = true;
  }

  findByHandle(handle)
  {
    return this.system.findByHandle(handle);
  }

  update()
  {

  }

  setSystem(system)
  {
    this.system = system;
  }

  destroy()
  {
    if (this.parent)
      this.parent.children.splice(this.parent.children.findIndex(e => e.id == this.id),1);
    this._destroy(); 
  }

  destroy_r()
  {
    this.children.forEach(e => {
      e.destroy();
    });

    delete this;
  }


  addChild(node)
  {
    this.children.push(node);
    node.parent = this;
    this.system.expand();
  }
}
