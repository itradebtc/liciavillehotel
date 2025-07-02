// components/ReviewsCarousel.js
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const reviews = [
  {
    id: 1,
    text: 'Amazing experience! The rooms were clean and the service was top-notch.',
    name: 'Emeka Okechukwu',
  },
  {
    id: 2,
    text: 'Beautiful location and excellent amenities. Highly recommended!',
    name: 'Hillary Ajuebon',
  },
  {
    id: 3,
    text: 'Had a wonderful stay. The staff was very friendly and helpful.',
    name: 'Onyekachi Nwosu',
  },
];

export default function ReviewsCarousel() {
  return (
    <div className="reviews-carousel">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide">
            <div className="review-text">
              <p>{review.text}</p>
              <h3>- {review.name}</h3>
            </div>
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        .reviews-carousel {
          text-align: center;
          padding: 20px;
        }
        .review-slide {
          padding: 20px;
          background: #f5f5f5;
          border-radius: 10px;
        }
        .review-text {
          font-size: 1.2em;
        }
        .review-text p {
          margin: 0;
        }
        .review-text h3 {
          margin: 10px 0 0;
          font-size: 1em;
          color: #555;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
