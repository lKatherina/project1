export const kruskal = {
    name: "Kruskal's algorithm",
    theory: {
      paragraphs: ["The description of the algorithm is going to be here. /TAB/ The long space was just before this sentence. /TAB//TAB//TAB/ Cool that long space was just tripled."],
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