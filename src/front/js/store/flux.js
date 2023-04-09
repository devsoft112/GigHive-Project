const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      artists: [],
      venues: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getArtist: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/artist");
          const data = await resp.json();
          setStore({ artists: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading artists", error);
        }
      },
      getVenue: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/venues");
          const data = await resp.json();
          setStore({ venues: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading artists", error);
        }
      },
      postArtist: async (
        first_name,
        last_name,
        username,
        email,
        password,
        artist_name,
        genre,
        performmance_type,
        image,
        instagram,
        facebook,
        twitter,
        soundcloud,
        spotify,
        tiktok
      ) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password,
            artist_name: artist_name,
            genre: genre,
            performmance_type: performmance_type,
            image: image,
            instagram: instagram,
            facebook: facebook,
            twitter: twitter,
            soundcloud: soundcloud,
            spotify: spotify,
            tiktok: tiktok,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/register/artist",
            opts
          );
          if (response.status !== 200) {
            alert("Response was not a code 200.");
            return false;
          }
          const data = await response.json();
          console.log("backend token: " + data);
          sessionStorage.setItem("user", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },
    },
  };
};

export default getState;
