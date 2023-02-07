import Axios from "axios";
import { useState, useEffect } from "react";
import classes from "./RandomDog.module.css";
import { FavoriteAdd } from "./generatedDoggo";

export const GetRandomdog = () => {
  const [getDog, setDog] = useState(null);
  const [isDogFetch, setDogFetch] = useState(false);
  const [getFavDoggo, setFavDoggo] = useState([]);

  const SaveFavDoggo = () => {
    const favDoggo = {
      id:
        getFavDoggo.length === 0
          ? 1
          : getFavDoggo[getFavDoggo.length - 1].id + 1,
      url: getDog.message,
    };
    setFavDoggo([...getFavDoggo, favDoggo]);
  };
  const getDogData = () => {
    setDogFetch(true);
  };

  useEffect(() => {
    if (isDogFetch) {
      Axios.get("https://dog.ceo/api/breeds/image/random")
        .then((res) => {
          setDog(res.data);
          setDogFetch(false);
        })
        .catch((er) => {
          console.error(er);
          setDogFetch(false);
        });
    }
  }, [isDogFetch]);

  return (
    <div className={classes.randogcontainer}>
      <button onClick={getDogData} className={classes.button}>
        Get a Dog Pic
      </button>
      <div>
        {isDogFetch ? (
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              alt="wala"
            />
          </div>
        ) : getDog ? (
          <div className={classes.dogcard}>
            <img src={getDog.message} alt="wala" />
            <div className={classes.btncontainer}>
              <button onClick={SaveFavDoggo} className={classes.heart}>
                <img src="heart.png" alt="wala" />
              </button>
              <button onClick={getDogData} className={classes.button}>
                Generate Again
              </button>
            </div>
          </div>
        ) : (
          <div>
            <img
              src="undraw_dog_c7i6.svg"
              alt="ala"
              className={classes.doggo}
            />
          </div>
        )}
      </div>
      {getFavDoggo.map((doggo, i) => {
        return (
          <FavoriteAdd
            key={doggo.key}
            id={doggo.id}
            keys={i.key}
            url={doggo.url}
          />
        );
      })}
    </div>
  );
};
