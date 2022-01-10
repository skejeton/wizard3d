import Texture from "../agljs/src/Texture";
import ShaderProgram from "../agljs/src/ShaderProgram";
import Shader from "../agljs/src/Shader";

export default class AssetLoader {
  
  constructor()
  {
    this.queue = [];
    this.ptrTable = {};
  }
  
  image(src, handle)
  {
    this.queue.push({
      src: src,
      handle: handle,
      type: "image"
    })
  }
  
  raw(src, handle)
  {
    this.queue.push({
      src: src,
      handle: handle,
      type: "raw"
    })
  }
  
  parseAssetPath(path)
  {
    var pathArray = [];
    var pointer = 0;
    if (path.slice(0, 6) != "res://")
    {
      throw new Error("[Asset loader] Asset paths should start with prefix `res://` in `"+path+"`")
    }
    path.slice(6).split("/").forEach((e) => {
      if (e != "." && e != "")
      {
        if (e == "..")
        {
          if (pointer <= 0)
          {
            throw new Error("[Asset loader] You can't go lower than root directory in `"+path+"`");
          }
          pointer--;
          pathArray.pop();
          return;
        }
        pointer++;
        pathArray.push(e);
      }
    })
    
    return pathArray;
  }
  
  give(handle)
  {
    
    return this.ptrTable[handle].asset;
  }
  
  scripts(arr, handle)
  {
    this.queue.push({
      src: arr,
      handle: handle,
      type: "scripts"
    })
  }
  
  prog(vsh, fsh, handle)
  {
    this.queue.push({
      src: [vsh, fsh],
      handle: handle,
      type: "prog"
    })
  }
  
  texture2d(src, handle)
  {
    this.queue.push({
      src: src,
      handle: handle,
      type: "texture2d"
    })
  }
  
  load(callback, gl, i = 0)
  {
    if (i == this.queue.length)
    {
      this.queue.forEach((e) => {
        if (e.type == "texture2d")
        {
          var img = e.asset;
          e.asset = new Texture();
          e.asset.setContext(gl);
          e.asset.fromImage(img);
          e.image = img;
        } 
        else if (e.type == "prog")
        {
          var shaderprog = new ShaderProgram();
          shaderprog.setContext(gl);
          var vsh = new Shader(0);
          var fsh = new Shader(1);
          
          e.compiled = {};
          
          vsh.setContext(gl);
          fsh.setContext(gl);
          
          e.asset = shaderprog;
          
          
          vsh.compile(e.sources.vertex);
          fsh.compile(e.sources.fragment);
          
          e.compiled.vertex = vsh;
          e.compiled.fragment = fsh;
          
          shaderprog.createFrom(vsh, fsh);
          
        }
      })
      callback();
      return;
    }
    var e = this.queue[i];
    if (e.type !== "scripts")
    {
      this.ptrTable[e.handle] = e;
    }
    else 
    {
      for (var key in e.src) {
        this.ptrTable[key] = e.src[key]; 
      }
    }
    
    
    if (e.type == "image" || e.type == "texture2d")
    {
      e.asset = new Image();
      e.asset.src = e.src;
      e.asset.onload = () =>
      {
        this.load(callback, gl, i+1);
      }
    }
    else if (e.type == "raw")
    {
      fetch(e.src).then((res) => {
        res.json().then((data) => {
          e.asset = data;
          this.load(callback, gl, i+1);
        });
      })
    }
    else if (e.type == "prog")
    {
      
      fetch(e.src[0]).then((res) => {
        res.text().then((vsh) => {
          e.sources = {};
          e.sources.vertex = vsh;
          fetch(e.src[1]).then((res) => {
            res.text().then((fsh) => {
              e.sources.fragment = fsh;
              this.load(callback, gl, i+1);
            });
          })
        });
      })
      
    }
  }
}