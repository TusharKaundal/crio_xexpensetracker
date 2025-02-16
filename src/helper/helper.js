const initialData = [
  {
    name: "Food",
    total: 0,
  },
  {
    name: "Entertainment",
    total: 0,
  },
  {
    name: "Travel",
    total: 0,
  },
];

export const initialState = {
  title: "",
  price: "",
  category: "",
  date: new Date().toLocaleDateString("sv-SE"),
};

export function validateInput(data) {
  let category = ["Food", "Entertainment", "Travel"].includes(data.category);
  let flag = true;
  let message = "";
  if (!data.title) {
    message = "Please enter Title";
    flag = false;
  } else if (!data.price) {
    message = "Please enter Price";
    flag = false;
  } else if (!category) {
    message = "Please enter Category:{Food, Entertainment, Travel}";
    flag = false;
  } else if (Number(data.price) <= 0) {
    message = "Price should be greater then 0";
    flag = false;
  }
  return { flag, message };
}

export const graphData = (data) => {
  if (data.length) {
    const filterGraphdata = data.reduce((accumulator, item) => {
      const category = item.category;
      if (!accumulator[category]) {
        accumulator[category] = 0;
      }
      accumulator[category] += Number(item.price);
      return accumulator;
    }, {});

    const sumedUpData = initialData.map((item) => ({
      ...item,
      total: filterGraphdata[item.name] ? filterGraphdata[item.name] : 0,
    }));
    return sumedUpData;
  }
  return initialData;
};
