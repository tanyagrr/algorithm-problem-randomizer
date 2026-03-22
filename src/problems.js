export const problems = [
  {
    id: 1,
    title: "Group objects by property",
    difficulty: "⭐",
    signature: `groupBy(users, "age")`,
    input: `[
  { name: "John", age: 20 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 25 }
]`,
    output: `{
  20: [
    { name: "John", age: 20 },
    { name: "Jane", age: 20 }
  ],
  25: [
    { name: "Bob", age: 25 }
  ]
}`,
    tests: ["objects", "loops", "dynamic keys"],
  },
  {
    id: 2,
    title: "Remove duplicates from array",
    difficulty: "⭐",
    signature: `unique(arr)`,
    input: `[1, 2, 2, 3, 3, 4]`,
    output: `[1, 2, 3, 4]`,
    tests: ["Set", "filter", "object lookup"],
  },
  {
    id: 3,
    title: "Find the most frequent element",
    difficulty: "⭐",
    signature: `mostFrequent(arr)`,
    input: `["a", "b", "a", "c", "a", "b"]`,
    output: `"a"`,
    tests: ["hash maps / objects", "frequency counting"],
  },
  {
    id: 4,
    title: "Flatten a nested array",
    difficulty: "⭐",
    signature: `flatten(arr)`,
    input: `[1, [2, [3, 4]], 5]`,
    output: `[1, 2, 3, 4, 5]`,
    tests: ["recursion", "arrays"],
  },
  {
    id: 5,
    title: "Sort array of objects",
    difficulty: "⭐",
    signature: `sortBy(users, "age")`,
    input: `[
  { name: "John", age: 30 },
  { name: "Jane", age: 20 }
]`,
    output: `[
  { name: "Jane", age: 20 },
  { name: "John", age: 30 }
]`,
    tests: ["Array.sort", "comparator functions"],
  },
  {
    id: 6,
    title: "Filter objects by condition",
    difficulty: "⭐",
    signature: `filterUsers(users, { age: 20 })`,
    input: `[
  { name: "John", age: 20 },
  { name: "Jane", age: 25 }
]`,
    output: `[
  { name: "John", age: 20 }
]`,
    tests: ["Array.filter", "object matching"],
  },
  {
    id: 7,
    title: "Deep object search",
    difficulty: "⭐",
    signature: `findKey(obj, "c")`,
    input: `{
  a: {
    b: {
      c: 5
    }
  }
}`,
    output: `5`,
    tests: ["recursion", "nested objects"],
  },
  {
    id: 8,
    title: "Generate all combinations",
    difficulty: "⭐",
    signature: `combinations(arrays)`,
    input: `[
  ["A", "B"],
  ["1", "2"]
]`,
    output: `["A1", "A2", "B1", "B2"]`,
    tests: ["recursion", "DFS traversal"],
  },
  {
    id: 9,
    title: "Count words in a string",
    difficulty: "⭐",
    signature: `countWords(str)`,
    input: `"hello world hello"`,
    output: `{
  hello: 2,
  world: 1
}`,
    tests: ["string manipulation", "objects"],
  },
  {
    id: 10,
    title: "Implement simple memoization",
    difficulty: "⭐",
    signature: `memoize(fn)`,
    input: `slowFunction(5)  // first call — computed
slowFunction(5)  // second call — cached`,
    output: `// returns cached result on repeated calls`,
    tests: ["closures", "objects", "function wrapping"],
  },
];
