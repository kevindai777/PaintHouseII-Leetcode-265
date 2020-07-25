//Objective is to find the minimum cost for painting a house with k colors,
//where k also represents the number of houses in each row

let costs = [[1,5,3],[2,9,4]]


//O(n * k^2) solution where n is the number of houses and k is the number of colors
//We use a dynamic programming approach here where we 

if (costs.length < 1) {
    return []
}

let prevRow = costs[0]
for (let i = 1; i < costs.length; i++) {
    let currRow = new Array(costs[0].length).fill(0)
    
    for (let j = 0; j < costs[0].length; j++) {
        let min = Infinity
        for (let k = 0; k < costs[0].length; k++) {
            if (k == j) {
                continue
            }
            
            //Update the minimum cost from the previous row
            min = Math.min(min, prevRow[k])
        }
        costs[i][j] += min
        currRow[j] += costs[i][j]
    }
    
    prevRow = currRow
}

return Math.min(...prevRow)