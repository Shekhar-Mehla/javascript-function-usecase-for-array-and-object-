const cOMMONDataArray = [
  {
    name: "shekhar",
    country: "India",
    institue: "dented code accademy",
    education: "bachlor of information system",
  },
  {
    name: "saurin",
    country: "Nepal",
    institue: "dented code accademy",
    education: "bachlor of information system",
    Phone: 1234,
  },
  {
    name: "savit",
    country: "India",
    institue: "dented code accademy",
    education: "bachlor of information system",
    Address: "13 glenavon street tukley",
  },
  {
    name: "shankar",
    country: "Nepal",
    institue: "victoria",
    phone: 345674382,

    interst: "football,cricket and coding",
  },
];
// this function will execute only when it will recieve the Address property from the object in array

const adress = ({ Address }) => {
  const newadr = `my home address is ${Address} }`;
  return newadr;
};
const Hobbies = ({ interst }) => {
  const newadr = `my hobbies are ${interst} }`;
  return newadr;
};

const Hellodata = ({ name, country, institue, ...rest }) => {
  let str = ` Hello my name is ${name}, i am from ${country}. I have completeD my study from ${institue}.  `;

  if (rest.Address) {
    str += adress(rest);
  } else if (rest.interst) {
    str += Hobbies(rest);
  } else {
  }

  return str;
};
const hurrey = cOMMONDataArray.forEach((item) => {
  console.log(Hellodata(item));
});
