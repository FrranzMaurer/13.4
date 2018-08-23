function convertTime (input) {
  return (input / 3600).toFixed(0), "hrs", ((input % 3600) / 60).toFixed(0), "min", input % 60, "sec";
}

module.exports = convertTime;