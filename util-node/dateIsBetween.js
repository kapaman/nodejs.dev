function dateIsBetween(startDate, endDate) {
  const invalidDateStr = 'Invalid Date';
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (
    start.toString() === invalidDateStr ||
    end.toString() === invalidDateStr
  ) {
    return false;
  }

  const now = new Date();
  return start < now && now < end;
}

module.exports = dateIsBetween;
