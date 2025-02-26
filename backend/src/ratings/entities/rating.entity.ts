import { Song } from "src/songs/entities/song.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Rating {
    @PrimaryGeneratedColumn()
    rating_id: number;

    // to be implemented when the song entity contains the ratings relationship
    // @ManyToOne(() => Song, (song) => song.ratings)
    // song: Song;

    @Column()
    user_id: number;

    @Column('float')
    rating: number;

    // to be implemented when the region resource is available
    // @ManyToOne(() => Region, (region) => region.ratings)
    // region: Region;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    timestamp: Date;
}
