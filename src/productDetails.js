import acid1 from "./photos/acid1.jpeg";
import bones1 from "./photos/bones1.jpeg";
import bones2 from "./photos/bones2.jpeg";
import bones3 from "./photos/bones3.jpeg";
import globe1 from "./photos/globe1.jpeg";
import globe2 from "./photos/globe2.jpeg";
import ricta1 from "./photos/ricta1.jpeg";
import ricta2 from "./photos/ricta2.jpeg";
import spitfire1 from "./photos/spitfire1.jpeg";
import spitfire2 from "./photos/spitfire2.jpeg";
import spitfire3 from "./photos/spitfire3.jpeg";
import spitfire4 from "./photos/spitfire4.jpeg";

const dollarsToCents = usdStr => {
  const [dollars,cents] =  usdStr.split(".");
  return Number(cents) + (Number(dollars) * 100)
}

export let productDetails = [
  { name: "Acid Skaterade", photo: acid1, price: dollarsToCents("29.95") },
  { name: "Bones 100's", photo: bones1, price: dollarsToCents("35.95") },
  { name: "Bones Clears", photo: bones2, price: dollarsToCents("39.99") },
  { name: "Bones 100's Alt", photo: bones3, price: dollarsToCents("35.95") },
  { name: "Globe Bruiser Orange", photo: globe1, price: dollarsToCents("44.95") },
  { name: "Globe Bruiser Blue", photo: globe2, price: dollarsToCents("44.95") },
  { name: "Ricta Nyjah Hustons", photo: ricta1, price: dollarsToCents("35.95") },
  { name: "Ricta Sparx", photo: ricta2, price: dollarsToCents("35.95") },
  { name: "Spitfire 52mm", photo: spitfire1, price: dollarsToCents("30.99") },
  { name: "Spitfire 80HD", photo: spitfire2, price: dollarsToCents("30.99") },
  { name: "Spitfire Camo", photo: spitfire3, price: dollarsToCents("30.99") },
  { name: "Spitfire Soft D's", photo: spitfire4, price: dollarsToCents("30.99") },
];
