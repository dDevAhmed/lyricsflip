import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateRatingDto {
    @IsString()
    @IsNotEmpty()
    user_id: number;
    
    @IsInt()
    @IsNotEmpty()
    rating: number;
    
    @IsString()
    @IsNotEmpty()
    region_id: number;
}
