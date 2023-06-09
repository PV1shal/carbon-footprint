const houseSizeValue = {
  1: 1.89,
  2: 1.3,
  3: 0.94,
  4: 0.76,
  5: 0.64,
  "6+": 0.48,
};

const houseTypeValue = {
  "Detached single family home": 1.09,
  "Attached single family home": 0.95,
  "Apartment Building (2 to 4 units)": 0.94,
  "Apartment Building (5+ units)": 0.69,
  "Mobile Home": 0.74,
};

const houseSizingValue = {
  "Under 500 sq ft": 0.7,
  "500-999": 0.76,
  "1,000-1,499": 0.8,
  "1,500-1,999": 0.97,
  "2,000-2,499": 1.08,
  "2,500-2,999": 1.15,
  "3,000-3,999": 1.25,
  "Over 4000": 1.44,
};

const recyclingValue = {
  Yes: 0.1819,
  No: 0.3139,
};

const cleanValue = {
  "Yes, some": 0.67,
  "Yes, most": 0.33,
  "Yes, all": 0.000000000001,
  "No (US Average)": 1,
  "I don't know": 1,
};

const dietValue = {
  "Meat Lover": 3.3,
  "Average omnivore (US Average)": 2.5,
  "No beef": 1.9,
  Vegetarian: 1.7,
  Vegan: 1.5,
};

const checksValue = {
  "I have a programmable thermostat": 0.9,
  "I use ENERGY STAR appliances": 0.925,
  "I use energy efficient lightbulbs": 0.6,
  "I line dry my laundry": 0.1,
};

const milleageValue = {
  "0 miles": 0,
  "Under 1,000 miles": 499.5,
  "1,000 to 2,499 miles": 1749.5,
  "2,500 to 4,999 miles": 3749.5,
  "5,000 to 9,999 miles": 7499.5,
  "10,000 to 14,999 miles (US Average)": 12499.5,
  "15,000 to 19,999 miles": 17499.5,
  "20,000 to 29,999 miles ": 24999.5,
  "30,000+ miles": 30000,
};

const busValue = {
  "0 miles (US Average)": 0,
  "Under 5 miles": 2.5,
  "Under 5 to 9.9 miles": 7.5,
  "10 to 14.9 miles": 12.5,
  "15 to 19.9 miles": 17.5,
  "20 to 29.9 miles": 25,
  "30+ miles": 35,
};

const travelValue = {
  0: 0,
  "1 (US Average)": 1,
  2: 2,
  3: 3,
  "4 to 9": 6,
  "10 to 19": 15,
  "20+": 20,
};

const hotelValue = {
  0: 0,
  "1 to 2 Nights": 1.5,
  "3-4 Nights": 3.5,
  "5-6 Nights (US Average)": 5.5,
  "1-2 Weeks": 10.5,
  "3-4 Weeks": 24.5,
  "1-2 Months": 45,
};

const calulateFootprint = (data) => {
  console.log(data);

  let [
    houseSize,
    houseType,
    houseSizing,
    clean,
    recycle,
    diet,
    checks,
    busTravel,
    carTravel,
    longFlights,
    mediumFlights,
    shortFlights,
    hotelStays,
  ] = data;

  houseSize = houseSizeValue[houseSize];
  houseType = houseTypeValue[houseType];
  houseSizing = houseSizingValue[houseSizing];
  clean = cleanValue[clean];
  recycle = recyclingValue[recycle];
  diet = dietValue[diet];
  busTravel = busValue[busTravel];
  carTravel = milleageValue[carTravel];
  longFlights = travelValue[longFlights];
  mediumFlights = travelValue[mediumFlights];
  shortFlights = travelValue[shortFlights];
  hotelStays = hotelValue[hotelStays];
  const check1 =
    "I have a programmable thermostat" in checks
      ? checksValue["I have a programmable thermostat"]
      : 1;
  const check2 =
    "I use ENERGY STAR appliances" in checks
      ? checksValue["I use ENERGY STAR appliances"]
      : 1;
  const check3 =
    "I line dry my laundry" in checks
      ? checksValue["I line dry my laundry"]
      : 0;
  const check4 =
    "I use ENERGY STAR appliances" in checks
      ? checksValue["I have a programmable thermostat"]
      : 0;

  console.log("houseSize", houseSize);
  console.log("houseType", houseType);
  console.log("houseSizing", houseSizing);
  console.log("clean", clean);
  console.log("recycle", recycle);
  console.log("diet", diet);
  console.log("busTravel", busTravel);
  console.log("carTravel", carTravel);
  console.log("longFlights", longFlights);
  console.log("mediumFlights", mediumFlights);
  console.log("shortFlights", shortFlights);
  console.log("hotelStays", hotelStays);
  console.log("check1", check1);
  console.log("check2", check2);
  console.log("check3", check3);
  console.log("check4", check4);

  // Calculate household footprint
  const householdFootprint =
    (4.61 + 1238.516 * clean * 0.00199896) *
      check1 *
      check2 *
      houseSize *
      houseType *
      houseSizing +
    diet +
    recycle -
    check3 -
    check4;

  const commuteFootprint = (carTravel / 22) * 0.0089 + busTravel * 0.00468;

  const travelFootprint =
    longFlights * 0.85 +
    mediumFlights * 0.392 +
    shortFlights * 0.075 +
    hotelStays * 0.0383;

  console.log("householdFootprint", householdFootprint);
  console.log("commuteFootprint", commuteFootprint);
  console.log("travelFootprint", travelFootprint);

  return householdFootprint + commuteFootprint + travelFootprint;
};

export default calulateFootprint;
