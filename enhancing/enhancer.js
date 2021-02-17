module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 10) {
    item.durability -= 5;
  } else if (item.enhancement === 15) {
    item.durability += 5;
  } else {
    item.enhancement -= 1; // enhacement = enhancement - 1;
    item.durability -= 10;
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
