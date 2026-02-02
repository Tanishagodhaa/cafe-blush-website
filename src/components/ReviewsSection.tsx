'use client';

import { motion } from 'framer-motion';
import { reviews, getAverageRating } from '@/data/content';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ReviewsSection() {
  const averageRating = getAverageRating();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-accent-gold' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Average Rating */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex">{renderStars(Math.round(averageRating))}</div>
          <span className="text-2xl font-bold text-blush-coral">{averageRating}</span>
        </div>
        <p className="text-muted-gray">Based on {reviews.length} reviews</p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 6).map((review, index) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex">{renderStars(review.rating)}</div>
              {review.source && (
                <span className="text-xs text-muted-gray bg-gray-100 px-2 py-1 rounded">
                  {review.source}
                </span>
              )}
            </div>

            <p className="text-blush-brown mb-4 italic">"{review.comment}"</p>

            <div className="flex items-center justify-between">
              <p className="font-medium text-blush-coral">{review.name}</p>
              <time className="text-xs text-muted-gray">
                {new Date(review.date).toLocaleDateString('en-IN', {
                  month: 'short',
                  year: 'numeric'
                })}
              </time>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
