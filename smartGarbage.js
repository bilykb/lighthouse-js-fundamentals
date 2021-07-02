const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  if (trash === "waste" && keys.includes("waste")) {
    bins.waste++;
  } else if (trash === "recycling" && keys.includes("recycling")) {
    bins.recycling++;
  } else if (trash === "compost" && keys.includes("compost")) {
    bins.compost++;
  }
  return bins;
}


smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 })