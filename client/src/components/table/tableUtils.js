function toDisplayFormat(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function getTableValues(dataTable) {
  if (!Array.isArray(dataTable) || dataTable.length === 0) {
    return [];
  }
  return dataTable.map((d) => {
    return Object.values(d);
  });
}

function getHeaderValues(dataTable) {
  if (!Array.isArray(dataTable) || dataTable.length === 0) {
    return [];
  }
  return Object.keys(dataTable[0]);
}

export { toDisplayFormat, getTableValues, getHeaderValues };
