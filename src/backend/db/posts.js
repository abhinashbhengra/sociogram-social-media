import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Must try of this week: Vada Pao from SK Vadewale in Pune. The taste is absolutely mind-boggling and fresh.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aditya_jadhav",
    fullName: "Aditya Jadhav",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066367/frittr/vada-pav_g0u58t.webp",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",

        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Participating in the NASA App Challenge hackathon was an incredibly enjoyable experience, filled with excitement and a sense of anticipation. Working alongside talented individuals who shared a passion for space exploration and technology, we collaborated, brainstormed, and overcame obstacles together. Overall, the hackathon provided a unique platform for collaboration, innovation, and learning, leaving me with new skills, connections, and a sense of accomplishment that will inspire future endeavors.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "abhinashbhengra",
    fullName: "Abhinash Bhengra",
    createdAt: "2022-05-11",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/Abhinash_Bhengra.png?updatedAt=1688886050019",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Aditya Jadhav",
        username: "aditya_jadhav",
        profileAvatar: "https://picsum.photos/id/100/150",
        createdAt: "2022-05-12",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Securing a spot in the top 10 among more than 100 teams of the NASA App Challenge hackathon fills us with immense joy and pride. It is a testament to our team's hard work, innovative ideas, and technical skills. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "abhinashbhengra",
    fullName: "Abhinash Bhengra",
    createdAt: "2022-05-13",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/nasa01_lg-GxlPIK?updatedAt=1688892904523",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Aditya Jadhav",
        username: "aditya_jadhav",
        profileAvatar: "https://picsum.photos/id/100/150",
        createdAt: "2022-05-12",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I successfully completed an e-commerce project using ReactJS. The project involved implementing various features such as product listings, shopping cart functionality, wishlist functionality and many more, resulting in a fully functional e-commerce application. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },

    username: "abhinashbhengra",
    fullName: "Abhinash Bhengra",
    createdAt: "2022-05-13",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/Screenshot_2023-07-09_at_2.20.22_PM.png?updatedAt=1688892655010",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: "2022-05-11",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Aditya Jadhav",
        username: "aditya_jadhav",
        profileAvatar: "https://picsum.photos/id/100/150",
        createdAt: "2022-05-12",
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Ordered Meghana's Special Chicken Biryani from Meghana's. Recommend 10/10. ✨  ",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          fullName: "Abhinash Bhengra",
          username: "abhinashbhengra",
          profileAvatar: "https://picsum.photos/id/334/150",
        },
        {
          _id: uuid(),
          fullName: "John Doe",
          username: "johndoe",
          profileAvatar: "https://picsum.photos/id/1009/150",
        },
      ],
      dislikedBy: [],
    },
    username: "anshaal10",
    fullName: "Anshaal Khanna",
    postImage: null,
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-04-20",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "anshaal10",
    fullName: "Anshaal Khanna",
    createdAt: "2022-05-05",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Went out for dinner at Chili's Hyderabad. The taste reminds me of back home in Autralia.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    postImage: null,
    username: "johndoe",
    fullName: "John Doe",
    createdAt: "2022-05-11",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Nairobi is such a great city with so many people going about their business. One thing that you need to know while there are the places where to find great food/meals. Best recommendation is @al_yusra Restaurant located along Banda Street just next to Nation Centre. #Kenya",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    fullName: "John Doe",
    createdAt: "2022-05-09",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653066477/frittr/E-HqxXdWUAM0z-U_a44utb.jpg",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I met this street food seller in Gyeongju on a recommendation from a dating app. This man was adopted and grew up in US. He moved to Korea to find his birth mother. And he did! I often think back to our conversation #MondayMotivation",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johndoe",
    fullName: "John Doe",
    postImage:
      "https://res.cloudinary.com/dwebygldw/image/upload/v1653067279/frittr/E7OX3WgXoAEu0gR_z9x7zu.jpg",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Anshaal Khanna",
        username: "anshaal10",
        profileAvatar: "https://picsum.photos/id/1005/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  // here

  // arav
  {
    _id: uuid(),
    content:
      "Exploring, adventuring, laughing, discovering, relaxing, experiencing, immersing, capturing, savoring, embracing.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aaravgupta",
    fullName: "Aarav Gupta",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/arav01.jpeg?updatedAt=1688897580589",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // arav02
  {
    _id: uuid(),
    content: "Espresso yourself with a cup of coffee.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aaravgupta",
    fullName: "Aarav Gupta",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/arav02.jpeg?updatedAt=1688897592276",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // aditi
  {
    _id: uuid(),
    content: "Lucy🐶",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aditisharma",
    fullName: "Aditi Sharma",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/aditi01.jpeg?updatedAt=1688898467486",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // aditi
  {
    _id: uuid(),
    content: "Books open doors to imagination, knowledge, and inspiration.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "aditisharma",
    fullName: "Aditi Sharma",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/aditi02.jpeg?updatedAt=1688898480505",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // vikaram
  {
    _id: uuid(),
    content: "Thriving in the daily grind of office life.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vikrams",
    fullName: "Vikram Singh",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/vikaram01.jpeg?updatedAt=1688899224841",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // vikaram
  {
    _id: uuid(),
    content: "Booster",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vikrams",
    fullName: "Vikram Singh",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/vikaram02.jpeg?updatedAt=1688899235723",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // priya
  {
    _id: uuid(),
    content: "Feeding both body and soul with delightful flavors.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "priyap",
    fullName: "Priya Patel",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/priya01.jpeg?updatedAt=1688899841434",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // priya
  {
    _id: uuid(),
    content: "Passion🙌",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "priyap",
    fullName: "Priya Patel",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/priya003.webp?updatedAt=1688900249347",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // rahul
  {
    _id: uuid(),
    content: "Sweat, lift, repeat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulk",
    fullName: "Rahul Khanna",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/rahul01.jpeg?updatedAt=1688900490150",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // rahul
  {
    _id: uuid(),
    content: "ज़िंदगी का सफ़र है ये कैसा सफ़र, कोई समझाये ना, कोई समझाए ना।",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulk",
    fullName: "Rahul Khanna",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/rahul02.webp?updatedAt=1688900501586",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },

  // sneha
  {
    _id: uuid(),
    content: "Fueling my day, one cup of coffee at a time.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "snehas",
    fullName: "Sneha Sharma",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/sneha01.jpeg?updatedAt=1688901201368",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // sneha
  {
    _id: uuid(),
    content: "In every brushstroke, I find freedom and self-expression.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "snehas",
    fullName: "Sneha Sharma",
    postImage:
      "https://ik.imagekit.io/u6itcrvxy/Posts-Image/sneha03.webp?updatedAt=1688901687001",
    createdAt: "2022-05-01",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        comment: "Nice!",
        fullName: "Rahul Khanna",
        username: "rahulk",
        profileAvatar:
          "https://ik.imagekit.io/u6itcrvxy/Avator/ava_03.png?updatedAt=1687861495452",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        comment: "Wow!",
        fullName: "Abhinash Bhengra",
        username: "abhinashbhengra",
        profileAvatar: "https://picsum.photos/id/334/150",
        createdAt: formatDate(),
        updatedAt: formatDate(),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
