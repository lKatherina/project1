export const bfs = {
    name: "Алгоритм BFS",
    theory: {
      paragraphs: [
        "Алгоритм BFS предполагает исследование графа по слоям, т.е. вершина s определяет 0-й слой, \
      её непосредственные соседи 1-ый слой и тд. Выходными данными алгоритма являются: массив d, в котором содержится расстояние от вершины i до начальной s\
      (≡ номер слоя), и массив parent, в котором хранятся указатели на родительскую вершину из которой текущая была обнаружена впервые \
      (если существует грань (i,j), то parent[i] = j).",
        "Результирующая производительность алгоритма BFS - O(m + n).",
        "BFS(G,s)".split("BFS(G,s)").map((paragraphs, index) => <>{index !== 0 && <b>BFS(G,s)</b>} {paragraphs}</>),
        "1. d = [∞,..,∞]",
        "2. parent = [⊥,..,⊥]",
        "3. d[s] = 0",
        "4. parent[s] = s",
        "5. Q = {s}   // текущий слой",
        "6. Q' = {}   //следующий слой",
        "7. for l = 1 to ∞ while Q ≠ {}",
        "8. foreach u ∈ Q",
        "9. foreach(u,v) ∈ E //сканируем все исходящие грани",
        "10. if parent[v] = ⊥ //была вершина обнаружена ранее?",
        "11. Q' = Q' ∪ {v}",
        "12. d[v] = l",
        "13. parent[v] = u",
        "14. (Q, Q') = (Q', {}) //переход на следующий уровень",
        "15. return (d, parent)"],
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
                { id: 25, from: 2, to: 5 },
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
              { id: 5, label: "5" },
              { id: 6, label: "6" },
              { id: 7, label: "7" },
              { id: 8, label: "8" }
            ],
            edges: [
              { id: 12, from: 1, to: 2 },
              { id: 13, from: 1, to: 3 },
              { id: 24, from: 2, to: 4 },
              { id: 25, from: 2, to: 5 },
              { id: 36, from: 3, to: 6 },
              { id: 68, from: 6, to: 8 },
              { id: 57, from: 5, to: 7 }
            ]
        },
        correctPaths: [
          [13, 12, 24, 25, 36, 57, 68],
          [13, 12, 24, 25, 36, 68, 57],
          [13, 12, 25, 24, 36, 57, 68],
          [13, 12, 25, 24, 36, 68, 57],
          [13, 12, 36, 24, 25, 57, 68],
          [13, 12, 36, 24, 25, 68, 57],
          [13, 12, 36, 25, 24, 57, 68],
          [13, 12, 36, 25, 24, 68, 57],
          [12, 13, 24, 25, 36, 57, 68],
          [12, 13, 24, 25, 36, 68, 57],
          [12, 13, 25, 24, 36, 57, 68],
          [12, 13, 25, 24, 36, 68, 57],
          [12, 13, 36, 24, 25, 57, 68],
          [12, 13, 36, 24, 25, 68, 57],
          [12, 13, 36, 25, 24, 57, 68],
          [12, 13, 36, 25, 24, 68, 57]
        ]
    }
}