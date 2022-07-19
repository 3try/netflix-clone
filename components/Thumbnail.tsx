import { Movie } from "../typings"
import Image from 'next/image'

interface props {
    // when using firebase
    // movie: Movie | DocumentData
    movie: Movie 
}



export const Thumbnail = ({movie}: props) => {
  return (
    <div className="relative h-28 min-w-[6rem] cursor-pointer transition duration-200 
      case-out md:h-36 md:min-w-[16.25rem] md:hover:scale-105"
    >
        <Image 
            src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }`}
            className="rounded-sm object-cover md:rounded"
            layout="fill" 
        />
    </div>
  )
}
