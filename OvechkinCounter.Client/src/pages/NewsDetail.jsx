import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
    const { id } = useParams();
    const [newsItem, setNewsItem] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5228/api/news/${id}`)
            .then(response => response.json())
            .then(data => setNewsItem(data))
            .catch(error => console.error("Ошибка загрузки новости:", error));
    }, [id]);

    if (!newsItem) {
        return <div className="text-center text-gray-500">Загрузка...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {newsItem.imageUrl && (
                <img src={newsItem.imageUrl} alt={newsItem.title} className="w-full h-72 object-cover rounded-md" />
            )}
            <h1 className="text-3xl font-bold mt-4">{newsItem.title}</h1>
            <p className="text-gray-600 text-sm mt-2">{new Date(newsItem.publishedDate).toLocaleDateString()}</p>
            <p className="mt-4 text-gray-800">{newsItem.content}</p>
        </div>
    );
}
