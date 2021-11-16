import Head from "next/head";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function FilmDetay({ movie }) {
  console.log(movie);
  return (
    <div className="movie">
      <Head>
        <title style={{color:'white'}}>{movie.title}</title>
      </Head>
      <Card style={{backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}>
       
        
        <Card.Body >
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} /></Col>
              <Col xs={12} md={8}>
                 <Card.Title style={{color:'white'}}>{movie.title} ( {movie.release_date} )</Card.Title> 
                   <Card.Text >
                       <p style={{color:'white'}}>  <strong>Özet :  </strong>{movie.overview} </p>
                      <p style={{color:'white'}}> <strong>Puanı : </strong>{movie.vote_average} </p>   
                      <p style={{color:'white'}}> <strong>Genre : </strong>{movie.genre_ids} </p>   

          </Card.Text>
             
             
              </Col>


            </Row>
          </Container>

      </Card.Body>
      </Card>
      <style jsx>{`
        .movie {
          width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 20px;

          h3 {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .summary {
            font-size: 18px;
            color: #666;
            line-height: 1.7;
          }

          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            background-size: cover;
            opacity: 0.3;
            z-index: -1;

            &::before {
              content: "";
              background: linear-gradient(to bottom, transparent, #ddd);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
          }
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=3044afc915e1301ae1d9551614db3711&language=tr-TR`
    
  );
  const movie = await request.json();


  return {
    props: {
      movie,
    },
  };
}
