import Slider from "react-slick";
import { Link } from "react-router-dom";

const NewsSlider = ({ news }) => {
  if (news.length === 0) {
    return <p>Нет новостей для отображения</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {news.map((item) => (
          <div
            key={item.id}
            className="news-slide bg-white rounded-lg shadow-md p-4 w-64 h-72 flex flex-col justify-between"
          >
            <Link to={`/news/${item.id}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 rounded-lg object-cover mb-3"
              />
              <h2 className="text-lg font-bold text-gray-800 text-center line-clamp-2 leading-tight">
                {item.title}
              </h2>
              <p className="text-xs text-gray-500 text-center">
                {new Date(item.date).toLocaleDateString()}
              </p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
