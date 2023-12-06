function knapsack(items, capacity) {
    const n = items.length;
    const m = new Array(n + 1).fill(null).map(() => new Array(capacity + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      const item = items[i - 1];

      for (let w = 1; w <= capacity; w++) {
        
        if (item.weight > w) {
          m[i][w] = m[i - 1][w];
        } else {
          m[i][w] = Math.max(m[i - 1][w], item.value + m[i - 1][w - item.weight]);
        }
      }
    }
  
    const selectedItems = [];

    let i = n;
    let w = capacity;

    while (i > 0 && w > 0) {

      if (m[i][w] !== m[i - 1][w]) {
        selectedItems.push(items[i - 1]);
        w -= items[i - 1].weight;
      }

      i--;
    }
  
    console.log("Max Value:", m[n][capacity])
    console.log("Selected Items:", selectedItems.reverse())

    return {
      maxValue: m[n][capacity],
      selectedItems: selectedItems.reverse(),
    };
  }

export default knapsack
//   const items = [
//     { name: "Item 1", weight: 1, value: 1 },
//     { name: "Item 2", weight: 2, value: 6 },
//     { name: "Item 3", weight: 5, value: 18 },
//     { name: "Item 4", weight: 6, value: 22 },
//     { name: "Item 5", weight: 7, value: 28 },
//   ];
//   const capacity = 11;
//   const result = knapsack(items, capacity);
//   console.log("Max Value:", result.maxValue);
//   console.log("Selected Items:", result.selectedItems.map(item => item.name));
  