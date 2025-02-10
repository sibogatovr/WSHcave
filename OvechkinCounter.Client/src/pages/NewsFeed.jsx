import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5228/api/news")
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Ошибка загрузки новостей:", error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest news</h1>

      <div className="space-y-6">
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            
            <Link to={`/news/${item.id}`}>
              <h2 className="text-2xl font-semibold mt-4 hover:text-blue-500 transition">
                {item.title}
              </h2>
            </Link>

            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover rounded-md"
              />
            )}

            <p className="text-gray-600 text-sm mt-2">
              {new Date(item.publishedDate).toLocaleDateString()}
            </p>
            <p className="mt-3 text-gray-800">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
