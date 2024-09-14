function dateConversion(dateRaw) {
  const dataRawSplitted = dateRaw.split("-");
  const firstPart = dataRawSplitted[0];
  const secondPart = dataRawSplitted[1];
  let thirdPart = dataRawSplitted[2];
  const thirdNew = thirdPart.split("T");
  thirdPart = thirdNew[0];
  const dateNew = [];
  dateNew.push(thirdPart);
  dateNew.push(secondPart);
  dateNew.push(firstPart);
  const dateOk = dateNew.join("/");
  return dateOk;
}
export { dateConversion };
