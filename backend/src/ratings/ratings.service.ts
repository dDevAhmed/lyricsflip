import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingsRepository: Repository<Rating>,
  ) {}

  create(createRatingDto: CreateRatingDto) {
    const rating = this.ratingsRepository.create(createRatingDto);
    return this.ratingsRepository.save(rating);
  }

  async getDifficulty(songId: number) {
    const ratings = await this.ratingsRepository.find({ where: { song: songId } });
    if (!ratings.length) return { songId, difficulty: 'No ratings yet' };

    const average = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
    return { songId, difficulty: average.toFixed(2) };
  }
}
