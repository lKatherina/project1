export const dfs = {
    name: "DFS",
    theory: {
        text: "bla bla bla",
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
                  { from: 1, to: 2 },
                  { from: 1, to: 3 },
                  { from: 2, to: 4 },
                  { from: 2, to: 5 }
                ]
            },
            animationPath: [1, 2, 1, 3]
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
              { from: 1, to: 2 },
              { from: 1, to: 3 },
              { from: 2, to: 4 },
              { from: 2, to: 5 }
            ]
        },
        correctPaths: [
            [1, 2, 1, 3],
            [1, 3, 1, 2]
        ]
    }
}
