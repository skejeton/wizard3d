export default class NodeSystem
{
  constructor(node = null)
  {
    this.nodes = node;
    node.setSystem(this);
    node.id = 0;
    this.expanded = [];
    this.expand();
    this.lastId = 0;
  }

  create(n, handle)
  {
    n.setSystem(this);   
    n.id = ++this.lastId;
    n.handle = handle;   
    return n;            
  }

  findByHandle(handle)
  {
    return this.expanded.find((e) => e.handle = handle);
  }

  root()
  {
    return this.nodes;
  }


  /**
   * Expand recursive function 
   */
  ncexpand(node)
  {
    this.expanded.push(node);
    node.children.forEach((e) => {
      this.ncexpand(e);
    })
  }

  /**
   * Expand with warning check
   */
  expand()
  {
    this.expanded = [];
    this.ncexpand(this.root());
    var occ = [];
    this.expanded.forEach((e) => {
      var i = occ.findIndex((d) => d.value == e.handle);
      if (i === -1)
      {
        occ.push({value: e.handle, count: 1});
      }
      else
      {
        occ[i].count += 1;
      }
    });

    occ.forEach((e) => {
      if (e.count > 1)
      {
        console.warn(`[Node Collision]: node "${e.value}" found ${e.count} times`);
      }
    })
  }

}