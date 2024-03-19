import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  news: [
    {
      "id": 1,
      "title": "The Future of Artificial Intelligence",
      "description": "Exploring the latest advancements and future possibilities of artificial intelligence, including deep learning, neural networks, and their applications in various industries.",
      "image_url": "https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
    },
    {
      "id": 2,
      "title": "Blockchain: Beyond Cryptocurrency",
      "description": "Delving into the potential of blockchain technology beyond its use in cryptocurrency, discussing its applications in supply chain management, healthcare, finance, and more.",
      "image_url": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "id": 3,
      "title": "The Rise of Quantum Computing",
      "description": "An overview of quantum computing, its fundamental principles, and its potential to revolutionize computational power, cryptography, and problem-solving in various fields.",
      "image_url": "https://st4.depositphotos.com/13349494/26799/i/450/depositphotos_267998672-stock-photo-selective-focus-young-woman-virtual.jpg"
    },
    {
      "id": 4,
      "title": "Augmented Reality: Bridging the Physical and Digital Worlds",
      "description": "Examining the latest developments in augmented reality technology, including its applications in gaming, education, healthcare, and immersive experiences.",
      "image_url": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-07/11/full/1626023772-9613.jpg?im=FeatureCrop,size=(826,465)"
    },
    {
      "id": 5,
      "title": "Cybersecurity in the Age of IoT",
      "description": "Discussing the importance of cybersecurity in the era of the Internet of Things (IoT), exploring potential vulnerabilities and strategies to safeguard connected devices and networks.",
      "image_url": "https://www.techopedia.com/wp-content/uploads/2023/02/istock-1154231467-3.jpeg"
    },
    {
      "id": 6,
      "title": "5G: Transforming Connectivity and Communication",
      "description": "An exploration of the capabilities of 5G technology, its impact on mobile communication, Internet speed, and its potential applications in autonomous vehicles, smart cities, and more.",
      "image_url": "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
    }
  ]
  
  ,

};

export const TodoSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      const news = {
        id: nanoid(),
        text: action.payload,
      };
      state.news.push(news);
    },

    removeNews: (state, action) => {
      state.news = state.news.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addNews, removeNews } = TodoSlice.actions;
export default TodoSlice.reducer;