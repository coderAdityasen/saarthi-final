import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from '../redux/NewsSlices';
import FadeIn from 'react-fade-in';
import { motion } from 'framer-motion';

function News() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const newses = useSelector((state) => state.news);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addNews(input));
    setInput('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <FadeIn>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newses.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image_url}
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h1 className="text-xl font-bold mb-2">{item.title}</h1>
                <p>{item.description}</p>
                {/* Add tags here if needed */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </FadeIn>
      {/* Form to add new todo */}
      <form onSubmit={addTodoHandler} className="flex items-center space-x-3 mt-8">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex-1"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default News;
