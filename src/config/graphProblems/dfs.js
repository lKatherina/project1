export const dfs = {
    name: "DFS",
    theory: {
        text: "Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.",
        graphAnimationExample: {
            graph: {
                nodes: [
                  { id: 1 },
                  { id: 2 },
                  { id: 3 },
                  { id: 4 },
                  { id: 5 }
                ],
                edges: [
                  { id: 12, from: 1, to: 2 },
                  { id: 13, from: 1, to: 3 },
                  { id: 24, from: 2, to: 4 },
                  { id: 25, from: 2, to: 5 }
                ]
            },
            animationPath: [12, 13, 24, 25]
        },
    },
    graphQuestion: {
        graph: {
            nodes: [
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 }
            ],
            edges: [
              { id: 12, from: 1, to: 2 },
              { id: 13, from: 1, to: 3 },
              { id: 24, from: 2, to: 4 },
              { id: 25, from: 2, to: 5 }
            ]
        },
        correctPaths: [
            [1, 2, 1, 3],
            [1, 3, 1, 2]
        ]
    }
}
