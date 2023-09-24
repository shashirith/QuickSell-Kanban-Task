
export function groupByProperty(data, property) {
    if(!data) return {};
    const groups = {};
    data.forEach(item => {
      const key = item[property];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    });
    return groups;
}



