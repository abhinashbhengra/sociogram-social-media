import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // 1
  {
    _id: uuid(),
    fullName: "Abhinash Bhengra",
    username: "abhinashbhengra",
    password: "abhinashbhengra123",
    bio: "Versatile",
    website: "https://abhinashbhengra.vercel.app/",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: uuid(),
        fullName: "Aarav Gupta",
        username: "aaravgupta",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_04.png?updatedAt=1687861494883",
      },
      {
        _id: uuid(),
        fullName: "Sneha Sharma",
        username: "snehas",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_08.png?updatedAt=1687861495462",
      },
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
      {
        _id: uuid(),
        fullName: "Vikram Singh",
        username: "vikrams",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_01.png?updatedAt=1687861494980",
      },
      {
        _id: uuid(),
        fullName: "Priya Patel",
        username: "priyap",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_07.png?updatedAt=1687861495169",
      },
      {
        _id: uuid(),
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
      },
    ],
  },

  // 2
  {
    _id: uuid(),
    fullName: "Aarav Gupta",
    username: "aaravgupta",
    password: "aaravgupta123",
    bio: "Passionate about technology and travel.",
    website: "https://www.aaravgupta.com",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_04.png?updatedAt=1687861494883",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
      {
        _id: uuid(),
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
      },
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
    ],
  },
  //3
  {
    _id: uuid(),
    fullName: "Aditi Sharma",
    username: "aditisharma",
    password: "aditisharma123",
    bio: "Book lover, aspiring writer, and dog enthusiast.",
    website: "https://www.aditisharma.com",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
      },
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
    ],
  },
  //4
  {
    _id: uuid(),
    fullName: "Vikram Singh",
    username: "vikrams",
    password: "vikrams123",
    bio: "Software developer by profession, music lover by heart.",
    website: "https://www.vikram-singh.co",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_01.png?updatedAt=1687861494980",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Aarav Gupta",
        username: "aaravgupta",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_04.png?updatedAt=1687861494883",
      },
      {
        _id: uuid(),
        fullName: "Sneha Sharma",
        username: "snehas",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_08.png?updatedAt=1687861495462",
      },
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
    ],
  },
  //5
  {
    _id: uuid(),
    fullName: "Priya Patel",
    username: "priyap",
    password: "priyap123",
    bio: "Nature lover, foodie, and photography enthusiast.",
    website: "https://www.priyapatel.com",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_07.png?updatedAt=1687861495169",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
      {
        _id: uuid(),
        fullName: "Vikram Singh",
        username: "vikrams",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_01.png?updatedAt=1687861494980",
      },
    ],
  },
  //6
  {
    _id: uuid(),
    fullName: "Rahul Khanna",
    username: "rahulk",
    password: "rahulk123",
    bio: "Sports enthusiast, fitness freak, and adventure seeker.",
    website: "https://www.rahulkhanna.com",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Aditi Sharma",
        username: "aditisharma",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_05.png?updatedAt=1687861495414",
      },
      {
        _id: uuid(),
        fullName: "Vikram Singh",
        username: "vikrams",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_01.png?updatedAt=1687861494980",
      },
    ],
  },
  //7
  {
    _id: uuid(),
    fullName: "Sneha Sharma",
    username: "snehas",
    password: "snehas123",
    bio: "Art lover, aspiring painter, and coffee addict.",
    website: "https://www.snehasharma.com",
    profileAvatar:
      "https://ik.imagekit.io/u6itcrvxy/Avator/ava_08.png?updatedAt=1687861495462",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
    followers: [
      {
        _id: uuid(),
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_02.png?updatedAt=1687861494994",
      },
    ],
  },
];
