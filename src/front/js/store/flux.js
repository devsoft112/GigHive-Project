const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      artists: [],
      venues: [],
    },
    actions: {
      getArtist: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/artists");
          const data = await resp.json();
          setStore({ artists: data });
          return data;
        } catch (error) {
          console.log("Error loading artists", error);
        }
      },
      getVenue: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/venues");
          const data = await resp.json();
          setStore({ venues: data });
          return data;
        } catch (error) {
          console.log("Error loading venues", error);
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
        performance_type,
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
            performance_type: performance_type,
            instagram: instagram,
            facebook: facebook,
            twitter: twitter,
            soundcloud: soundcloud,
            spotify: spotify,
            tiktok: tiktok,
            // user_id: 1,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/registerartist",
            opts
          );
          if (response.status !== 200) {
            alert("Response was not a code 200.");
            return false;
          }
          const data = await response.json();
          console.log("artist signed up: " + data);
          sessionStorage.setItem("artist", data.response_body);
          setStore({ artists: data.response_body });
          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },

      registerUser: async (
        first_name,
        last_name,
        username,
        email,
        password
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
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/register",
            opts
          );
          if (response.status !== 200) {
            alert("Response was not a code 200.");
            return false;
          }
          const data = await response.json();
          console.log("user signed up: " + data);
          sessionStorage.setItem("user", data.response_body);
          setStore({ users: data.response_body });
          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },
      
    },
  };
};

export default getState;
