import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchCast } from 'configAPI';
import {
  ActorsImg,
  CastItem,
  CastList,
  CastWrapper
} from './Cast.styled';
import Loader from 'components/Loader/Loader';
import { animateScroll } from 'react-scroll';
import image2 from '.././images/image2.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getCast = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const castInfo = await fetchSearchCast(movieId, {
          signal: abortController.signal,
        });
        setCast(castInfo);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
    return () => {
      abortController.abort();
    };
  }, [movieId]);

  if (cast) {
    animateScroll.scrollMore(640);
  }

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>There is no information yet.</p>}
      <CastWrapper>
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                
                  <ActorsImg
                    src={
                      profile_path ? IMAGE_URL + profile_path : image2
                    }
                    alt={name}
                    width={200}
                    height={300}
                  />
                  <p>
                    <b>Name: </b>
                    {name}
                  </p>
                  <p>
                    <b>Character: </b>
                    {character}
                  </p>
              </CastItem>
            );
          })}
        </CastList>
      </CastWrapper>
    </>
  );
};

export default Cast;
