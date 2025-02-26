import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Post('rate')
  rateSong(@Param('song_id') songId: number, @Body() createRatingDto: CreateRatingDto) {
    return this.ratingsService.create({ ...createRatingDto, song: songId });
  }

  @Get('difficulty')
  getDifficulty(@Param('song_id') songId: number) {
    return this.ratingsService.getDifficulty(songId);
  }
}
