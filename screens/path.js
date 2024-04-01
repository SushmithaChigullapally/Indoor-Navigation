
var count = 0;

function f(event,c) {
    console.log(event.target.id)
    console.log(c)
    if (count === 0) {

        event.target.style.fill = "Yellow"
        source_id = event.target.id
        count++
        document.getElementById("source").innerHTML = "Source:" + c
    }

    else if (count === 1) {
        console.log(count)
        event.target.style.fill = "Green"
        destination_id = event.target.id
        count++
        document.getElementById("destination").innerHTML = "Destination: " + c
    }

    else if (count >= 2) {
        alert("Source and Destination Picked. Please Click Get Path or Reset Path")
    }
}

function reverseDateString(dateString) {
    const dateArray = dateString.split("/"); 
    return dateArray.reverse().join("/");
}

const graph = {
    c1:{c2:1},
    c2:{c1:1,c27:1,c28:1,c3:1},
    c3:{c2:1,c4:1,c5:1 ,c20:1},
    c4:{c3:1},
    c5:{c3:1,c6:1 },
    c6:{c5:1,c23:1,c26:1},
    c7:{c8:1,c10:1,c26:1 },
    c8:{c7:1,c9:1,c20:1},
    c9:{c8:1,c10:1},
    c10:{c7:1,c9:1,c11:1},
    c11:{c10:1,c12:1},
    c12:{c11:1,c13:1},
    c13:{c12:1,c14:1},
    c14:{c15:1,c13:1},
    c15:{c14:1,c16:1,c25:1},
    c16:{c15:1,c17:1},
    c17:{c16:1,c18:1,c25:1},
    c18:{c19:1,c21:1,c17:1},
    c19:{c20:1,c21:1,c18:1},
    c20:{c19:1,c21:1,c22:1,c8:1},
    c21:{c18:1,c20:1},
    c22:{c20:1,c23:1},
    c23:{c6:1,c8:1,c22:1,c24:1},
    c24:{c23:1,c27:1},
    c25:{c15:1,c17:1},
    c26:{c3:1,c6:1,c7:1},
    c27:{c2:1,c24:1},
    c28:{c2:1},
    
  };
const printTable = (table) => {
    return Object.keys(table)
      .map((vertex) => {
        var { vertex: from, cost } = table[vertex];
        return `${vertex}: ${cost} via ${from}`;
      })
      .join("\n");
  };
  
  const tracePath = (table, start, end) => {
    var path = [];
    var next = end;
    while (true) {
      path.unshift(next);
      if (next === start) {
        break;
      }
      next = table[next].vertex;
    }
  
    return path;
  };
  
  const formatGraph = (g) => {
    const tmp = {};
    Object.keys(g).forEach((k) => {
      const obj = g[k];
      const arr = [];
      Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
      tmp[k] = arr;
    });
    return tmp;
  };
  
  const dijkstra = (graph, start, end) => {
    var map = formatGraph(graph);
  
    var visited = [];
    var unvisited = [start];
    var shortestDistances = { [start]: { vertex: start, cost: 0 } };
  
    var vertex;
    while ((vertex = unvisited.shift())) {
     
      var neighbors = map[vertex].filter((n)=>!visited.includes(n.vertex));
  
     
      unvisited.push(...neighbors.map((n) => n.vertex));
  
      var costToVertex = shortestDistances[vertex].cost;
  
      for (let { vertex: to, cost } of neighbors) {
        var currCostToNeighbor =
          shortestDistances[to] && shortestDistances[to].cost;
        var newCostToNeighbor = costToVertex + cost;
        if (
          currCostToNeighbor == undefined ||
          newCostToNeighbor < currCostToNeighbor
        ) {
         
          shortestDistances[to] = { vertex, cost: newCostToNeighbor };
        }
      }
  
      visited.push(vertex);
    }
  
    console.log("Table of costs:");
    console.log(printTable(shortestDistances));
  
    const path=tracePath(shortestDistances, start, end);
  
    console.log(
      "Shortest path is: ",
      path.join(" -> "),
      " with weight ",
      shortestDistances[end].cost
    );
    console.log(path)
    for(let index=0;index<path.length-1;index++){
        string=path[index]+"/"+path[index+1]
        console.log(string)
        try{document.getElementById(string).style.stroke="red"}
        catch(err){
            string=reverseDateString(string)
            document.getElementById(string).style.stroke="red"
        }
        path.push(string)
        string=""

    }
  };
function compute(){
    dijkstra(graph,source_id,destination_id)
}