class InMemorySearch {
  constructor() {
    this.documents = {};
  }

  addDocuments(category, ...docs) {
    if (!this.documents[category]) {
      this.documents[category] = [];
    }
    this.documents[category].push(...docs);
  }

  search(category, filterFn, sortOptions) {
    if (!this.documents[category]) {
      return [];
    }

    let results = this.documents[category].filter(filterFn);

    if (sortOptions) {
      const { key, asc } = sortOptions;
      results.sort((a, b) => {
        if (a[key] < b[key]) return asc ? -1 : 1;
        if (a[key] > b[key]) return asc ? 1 : -1;
        return 0;
      });
    }

    return results;
  }
}

// Test cases
const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "John Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);

// Output
/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/
