// Class responsible for game scripts, since we don't use any scripting language (for example lua)

// Step 1: import node class
// import NExampleNode from "./scripts/example.js"

export default class ClassReferenceDictonary
{
    static getScript(path)
    {
        return this.dict[path];
    }
}

ClassReferenceDictonary.dict = {
    // Legend: .sw = wrapper screen 
    // Step 2: Use alias e.g. res://foo/bar.sw
    // "res://example.sw": NExampleNode
}


