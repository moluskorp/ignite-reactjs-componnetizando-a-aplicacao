import { useEffect, useState } from "react";
import { Button } from '../components/Button';
import { useGenre } from "../hooks/genre";

import '../styles/sidebar.scss';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

import { api } from '../services/api';



export function SideBar() {
  const {setGenre, getGenre} = useGenre();
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);


  function handleClickButton(id: number) {
    setGenre(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  return(
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={getGenre() === genre.id}
            />
          ))}
        </div>

      </nav>
      </div>
  )
}