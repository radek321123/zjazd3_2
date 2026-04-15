import './App.css'

const FILMS = [
    {id: 1, title: 'Oppenheimer', year: 2023, genre: 'Dramat', rating: 5, watched: true},
    {id: 2, title: 'Dune: Część druga', year: 2024, genre: 'Sci-Fi', rating: 4, watched: false},
    {id: 3, title: 'Past Lives', year: 2023, genre: 'Romans', rating: 5, watched: true},
    {id: 4, title: 'Poor Things', year: 2023, genre: 'Komedia', rating: 4, watched: false},
];

function App() {
    return (
        <div className="App">
            <h1>🎬 Biblioteka Filmów</h1>
            <FilmList title={"obejrzane"} films={FILMS.filter(film => film.watched)}/>
            <FilmList title={"nieobejrzane"} films={FILMS.filter(film => !film.watched )}/>
        </div>
    )
}


function RatingStars({rating = 2}) {
    const stars = '★★★★★☆☆☆☆☆'
    return (<span>{stars.slice(5 - rating, 10 - rating)}</span>)
}


function FilmCard({title, year, genre, rating, watched}) {
    console.log('render:', title)
    return (
        <div className="Card">
            <h3>Title: {title}, Year: {year}</h3>
            <GenreBadge genre={genre}/>
            <RatingStars rating={rating}/>
            <WatchedBadge watched={watched} />
        </div>
    )
}

function GenreBadge({genre}) {
    const genres = new Map();
    genres.set("Dramat", "blue")
    genres.set("Sci-Fi", "violet")
    genres.set("Romans", "pink")
    genres.set("Komedia", "orange")

    return (
        <span style={{background: genres.get(genre) ?? "gray"}}>{genre}</span>
    )
}

function WatchedBadge({ watched }) {
    return (
        <p>{watched ? "✓ Obejrzany" : null}</p>
    )
}

function FilmList({title, films}) {
    return (
        <div>
            <h2>{title}</h2>
            <table>
                <tbody>
                {films.map(row =>
                    <tr>
                        <td>
                            <FilmCard key={row.id} title={row.title} year={row.year} genre={row.genre} rating={row.rating} watched={row.watched}/>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>

    )
}

export default App

