import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import db from "../firebase";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    const fetchData = () => {
      let recommend = [];
      let newDisney = [];
      let original = [];
      let trending = [];
      getDocs(collection(db, "movies")).then((snapshot) => {
        snapshot.docs.map((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommend = [...recommend, { id: doc.id, ...doc.data() }];
              break;
            case "new":
              newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
              break;
            case "original":
              original = [...original, { id: doc.id, ...doc.data() }];
              break;
            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
          }
          dispatch(
            setMovies({
              recommend: recommend,
              newDisney: newDisney,
              original: original,
              trending: trending,
            })
          );
          return;
        });
        return;
      });
    };
    fetchData();
  }, [userName, useDispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  background: url("/images/home-background.png") no-repeat center center fixed;
  background-size: cover;
`;

export default Home;
