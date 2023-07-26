import { v4 as uuid } from "uuid";
import {
  oneOfUsIsLying,
  rogerAckroyd,
  murderAnnounced,
  deathNile,
  bookThief,
  kiteRunner,
  splendidSuns,
  norwegianWood,
  wingsOfFire,
  DYG,
  michelle,
  historyTime,
  stars,
  pride,
  notebook
} from "../../Assets/images";

export const products = [
  {
    _id: "3fbe8787-7618-4606-aee2-5df44023578b",
    title: "One of Us is Lying",
    description: ` Four ordinary high schoolers become murder suspects after the death of Simon Keheller, each with their own secrets. We follow Bronwyn, Nate, Addy, and Cooper as they navigate the daily adventures of being a high schooler all while trying to find a murderer.`,
    author: "Karen M. McManus",
    badge: "",
    image: oneOfUsIsLying,
    price: 264,
    discount: 17,
    rating: 4.5,
    reviewers: 42,
    categoryName: "Mystery"
  },
  {
    _id: "9d8b7008-53b7-4ef1-ae7a-a9bf3cafe69b",
    title: "The Murder of Roger Ackroyd",
    description:
      "A classic detective novel featuring Hercule Poirot investigating the murder of a wealthy man in a small village.",
    author: "Agatha Christie",
    badge: "",
    image: rogerAckroyd,
    price: 256,
    discount: 30,
    rating: 4.2,
    reviewers: 28,
    categoryName: "Mystery"
  },
  {
    _id: "1df47f33-50e1-4b4d-9e7e-7f73cabf42c9",
    title: "A Murder Is Announced ",
    description:
      "Another gripping Agatha Christie mystery, where an advertisement in the local newspaper announces a murder will take place at a specific time and location.",
    author: "Agatha Christie",
    badge: "",
    image: murderAnnounced,
    price: 387,
    discount: 45,
    rating: 4.0,
    reviewers: 34,
    categoryName: "Mystery"
  },
  {
    _id: "041b5d72-d90c-45ba-8f28-4df2e15b36f3",
    title: "Death on the Nile ",
    description: `Hercule Poirot finds himself in the midst of a murder investigation while on a luxurious cruise on the Nile River..`,
    author: "Agatha Christie",
    badge: "New",
    image: deathNile,
    price: 1196,
    discount: 25,
    rating: 4.0,
    reviewers: 56,
    categoryName: "Mystery"
  },
  {
    _id: "0e2a940c-4819-4a54-81a5-d8f57993c01b",
    title: "The Book Thief ",
    description:
      "Set in Nazi Germany, this novel follows a young girls relationship with books and the people around her during a tumultuous time.",
    author: "Markus Zusak",
    badge: "New",
    image: bookThief,
    price: 316,
    discount: 12,
    rating: 4.4,
    reviewers: 30,
    categoryName: "Fiction"
  },
  {
    _id: "511c319d-e584-4433-b861-63d0fb652f09",
    title: "The Kite Runner ",
    description:
      "This powerful story revolves around the friendship of two young boys from Afghanistan and the lasting impact of their choices during turbulent times.",
    author: "Khaled Hosseini",
    badge: "",
    image: kiteRunner,
    price: 405,
    discount: 20,
    rating: 4.3,
    reviewers: 54,
    categoryName: "Fiction"
  },
  {
    _id: "b012cb96-201f-4a05-b4bc-134d98909817",
    title: "A Thousand Splendid Suns",
    description:
      "A gripping tale of two women whose lives intersect in war-torn Afghanistan, showing the resilience and strength of women in difficult circumstances.",
    auhtor:
      "A gripping tale of two women whose lives intersect in war-torn Afghanistan, showing the resilience and strength of women in difficult circumstances.",
    author: "Khaled Hosseini",
    badge: "Out of Stock",
    image: splendidSuns,
    price: 243,
    rating: 4.4,
    reviewers: 3,
    categoryName: "Fiction"
  },
  {
    _id: "300c8fe7-db61-404a-aad2-e8b10ee1b227",
    title: "Norwegian Wood",
    description:
      "A coming-of-age novel set in 1960s Tokyo, exploring themes of love, loss, and the complexities of human relationships.",
    author: "Haruki Murakami",
    badge: "Out of Stock",
    image: norwegianWood,
    price: 295,
    discount: 50,
    rating: 4.0,
    reviewers: 23,
    categoryName: "Fiction"
  },
  {
    _id: "d251ff01-9051-4fc2-b336-535b30591f00",
    title: "Wings of Fire",
    description: `An autobiographical account of Dr. A.P.J. Abdul Kalam's early life and his journey to becoming one of India's most respected scientists and the President of India.`,
    author: " Dr. A.P.J. Abdul Kalam",
    badge: "",
    image: wingsOfFire,
    price: 899,
    discount: 0,
    rating: 4.1,
    reviewers: 152,
    categoryName: "NonFiction"
  },
  {
    _id: "6944f288-124f-4ec9-8ef5-4ce351b6feb9",
    title: "The Diary of a Young Girl ",
    description:
      "The diary of Anne Frank, a Jewish girl hiding with her family during the Nazi occupation of the Netherlands, offering a poignant perspective on the Holocaust.",
    author: "Anne Frank",
    badge: "New",
    image: DYG,
    price: 215,
    discount: 67,
    rating: 4.1,
    reviewers: 29,
    categoryName: "NonFiction"
  },
  {
    _id: "5dd8e435-52ec-4e04-9cc0-1fbfb108fbe2",
    title: "Becoming ",
    description: `Michelle Obama's memoir, sharing her journey from her childhood in Chicago to becoming the First Lady of the United States.`,
    author: "Michelle Obama",
    badge: "",
    image: michelle,
    price: 427,
    discount: 30,
    rating: 4.5,
    reviewers: 43,
    categoryName: "NonFiction"
  },
  {
    _id: "91bb055b-87c6-463a-b3c9-546cf82cd2c5",
    title: "A Brief History of Time",
    description:
      "An exploration of complex scientific concepts, written in a way accessible to general readers, by renowned physicist Stephen Hawking.",
    author: "Stephen Hawking",
    badge: "",
    image: historyTime,
    price: 697,
    discount: 20,
    rating: 4.2,
    reviewers: 59,
    categoryName: "NonFiction"
  },
  {
    _id: "46c5cdf0-cc23-44b4-9271-93fcc86fee20",
    title: "The Fault in Our Stars ",
    description:
      "A heart-wrenching young adult novel about two teenagers who fall in love while dealing with serious health issues.",
    author: "John Green",
    badge: "",
    image: stars,
    price: 243,
    discount: 0,
    rating: 4.2,
    reviewers: 78,
    categoryName: "Romance"
  },
  {
    _id: "b75cb869-a94d-4ddd-8b0c-ccd0e674ff74",
    title: "Pride and Prejudice",
    description:
      " A classic romance novel revolving around the lively and independent Elizabeth Bennet and her relationship with the proud Mr. Darcy.",
    author: "Jane Austen",
    badge: "",
    image: pride,
    price: 649,
    discount: 10,
    rating: 4.3,
    reviewers: 122,
    categoryName: "Romance"
  },
  {
    _id: "4d6f7abc-9785-45ca-b9b9-fdb12b3cba98",
    title: "Call Me by Your Name",
    description:
      "A sensual and emotional novel about the passionate relationship between a young man and an older scholar during a summer in Italy.",
    author: "André Aciman",
    badge: "",
    image: name,
    price: 302,
    discount: 12,
    rating: 4.2,
    reviewers: 157,
    categoryName: "Romance"
  },
  {
    _id: "c3b4b256-745e-4da0-b63e-82597886176f",
    title: "The Notebook ",
    description:
      "A touching love story between a young couple, chronicled through the reading of a notebook in their old age.",
    author: " Nicholas Sparks",
    badge: "",
    image: notebook,
    price: 227,
    discount: 20,
    rating: 4.1,
    reviewers: 157,
    categoryName: "Romance"
  }
];
