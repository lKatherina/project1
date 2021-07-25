export const dfs = {
    name: "DFS",
    theory: {
        text: "bla bla bla",
        graphAnimationExample: {
            graphElements: [
            {
                number: 1,
                connections: [2, 3]
            },
            {
                number: 2,
                connections: [1, 3]
            },
            {
                number: 3,
                connections: [1, 2]
            }
            ],
            animationPath: [1, 2, 1, 3]
        },
    },
    graphQuestion: {
        graphElements: [
        {
            number: 1,
            connections: [2, 3]
        },
        {
            number: 2,
            connections: [1, 3]
        },
        {
            number: 3,
            connections: [1, 2]
        }
        ],
        correctPaths: [
            [1, 2, 1, 3],
            [1, 3, 1, 2]
        ]
    }
}