export const bfs = {
    name: "BFS",
    theory: {
      paragraphs: ["Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. It starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored."],
        graphAnimationExample: {
            graph: {
                nodes: [
                  { id: 1, label: "1" },
                  { id: 2, label: "2" },
                  { id: 3, label: "3" },
                  { id: 4, label: "4" },
                  { id: 5, label: "5" }
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
              { id: 1, label: "1" },
              { id: 2, label: "2" },
              { id: 3, label: "3" },
              { id: 4, label: "4" },
              { id: 5, label: "5" }
            ],
            edges: [
              { id: 12, from: 1, to: 2 },
              { id: 13, from: 1, to: 3 },
              { id: 24, from: 2, to: 4 },
              { id: 25, from: 2, to: 5 }
            ]
        },
        correctPaths: [
            [12, 13],
            [13, 12]
        ]
    }
}