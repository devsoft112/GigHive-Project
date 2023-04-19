const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      users: [],
      message: null,
      artists: [],
      venues: [],
    },
    actions: {
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("loging out");
        setStore({ token: null });
      },
      syncTokenfromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== undefined && token !== "")
          setStore({ token: token });
      },
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
          console.log("user signed up: " + data[0]);
          sessionStorage.setItem("token", data[1]);
          setStore({ artists: data[0] });
          setStore({ token: data[1] });

          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },
      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/User", opts);
          if (resp.status !== 200) {
            alert("There has been an error");
            return false;
          }

          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data[1]);
          setStore({ artists: data[0] });
          setStore({ token: data[1] });
          return true;
        } catch (error) {
          console.error("There has been an error logging in");
        }
      },
      getMessage: async () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };

        try {
          // fetching data from the backend
          const resp = await fetch("api/hello", opts);
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      Authorization: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/private", opts)
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.artists.username }))
          .catch((error) => console.log(error));

        // don't forget to return something, that is how the async resolves
      },
    },
  };
};

export default getState;
