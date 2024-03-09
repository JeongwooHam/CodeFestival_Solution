const dfs = (connection, position, visited) => {
    visited[position] = true;
    for(let node = 0; node < connection.length; node++){
        if(connection[position][node] && !visited[node]) dfs(connection, node, visited)
    }
}

const solution = (n, computers) => {
    let network = 0;
    const visited = [];
    
    for(let pos = 0; pos < n; pos++){
        if(!visited[pos]){
            dfs(computers, pos, visited)
            network++
        }
    }
    
    return network
}