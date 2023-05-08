const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      users: [],
      user: [],
      messages: [],
      artists: [],
      venues: [],
      favoriteVenues: [],
      favoriteArtists: [],
    },
    actions: {
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("logging out");
        setStore({ token: null });
      },
      syncTokenfromSessionStorage: () => {
        const token = sessionStorage.getItem("token");
        if (token && token !== undefined && token !== "")
          setStore({ token: token });
      },
      // getCoordinates: async (Address) => {
      //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${Address}&key=AIzaSyDecCwDfJgrb7eqAPY9il-YWvcs5RdPmuE`)

      //   .then((responseText) => {
      //     return responseText.json();
      //   })
      //   .then(jsonData => {
      //     console.log(jsonData.results[0].geometry.location.lat); //111 Wellington St, Ottawa, ON K1A 0A9, Canada
      //   })
      //   .catch(error => {
      //     console.log(error);

      //   })},

      getArtist: async () => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/artists");
          const data = await resp.json();
          console.log(data);
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
      getUser: async () => {
        const store = getStore();
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/api/user", {
            headers: {
              Authorization: "Bearer " + store.token,
            },
          });
          const data = await resp.json();
          console.log(data, "this is from the User");
          setStore({ user: data });
          return data;
        } catch (error) {
          console.log("Error loading user", error);
        }
      },

      VenueFavorite: (name) => {
        let favorites = getStore().favoriteVenues;
        let venues = getStore().venues;

        favorites.forEach((favorite) => {
          if (favorite.venue_name == name) {
            favorites.pop(favorite);
          } else {
            venues.forEach((venue, index) => {
              if (venue.venue_name == name) {
                favorites.push(venue);
              }
            });
          }
        });
        setStore({ favorite: favorites });
      },
      ArtistFavorite: (name) => {
        let artists = getStore().favoriteArtists;
        let favorites = getStore().favorites;
        favorites.forEach((favorite) => {
          if (favorite.artist_name == name) {
            favorites.pop(favorite);
          } else {
            artists.forEach((artist, index) => {
              if (artist.artist_name == name) {
                favorites.push(artist);
              }
            });
          }
        });
        setStore({ favorite: favorites });
      },
      postArtist: async (
        artist_name,
        genre,
        performance_type,
        about_info,
        instagram,
        facebook,
        twitter,
        soundcloud,
        spotify,
        tiktok
      ) => {
        const store = getStore();

        const opts = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
          body: JSON.stringify({
            artist_name: artist_name,
            genre: genre,
            performance_type: performance_type,
            about_info: about_info,
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
          console.log("artist signed up: " + data);
          setStore({ artists: data.response_body });
          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },
      postVenue: async (
        venue_name,
        address,
        city,
        state,
        zip_code,
        phone_number,
        venue_capacity,
        music_type,
        in_out,
        hiring,
        pay_rate,
        fees,
        equipment,
        about_info,
        instagram,
        facebook,
        twitter,
        soundcloud,
        spotify,
        tiktok
      ) => {
        const store = getStore();
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
          body: JSON.stringify({
            venue_name: venue_name,
            address: address,
            city: city,
            state: state,
            zip_code: zip_code,
            phone_number: phone_number,
            venue_capacity: venue_capacity,
            music_type: music_type,
            in_out: in_out,
            hiring: hiring,
            pay_rate: pay_rate,
            fees: fees,
            equipment: equipment,
            about_info: about_info,
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
            process.env.BACKEND_URL + "/api/register/venue",
            opts
          );
          if (response.status !== 200) {
            alert("Response was not a code 200.");
            return false;
          }
          const data = await response.json();
          console.log("venue signed up: " + data);
          setStore({ venues: data.response_body });
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
          setStore({ users: data[0] });
          setStore({ token: data[1] });

          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
        }
      },
      login: async (username, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.status !== 200) {
            alert("There has been an error");
            return false;
          }

          const data = await resp.json();
          console.log(data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error logging in");
        }
      },

      sendMessage: async (
        subject,
        content,
        id_sender,
        id_receiver,
        sent_date
      ) => {
        const store = getStore();

        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + store.token,
          },
          body: JSON.stringify({
            subject: subject,
            content: content,
            id_sender: id_sender,
            id_receiver: id_receiver,
            sent_date: sent_date
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/messages",
            opts
          );
          if (response.status !== 200) {
            alert("Response was not a code 200.");
            return false;
          }
          const data = await response.json();
          console.log("Message Sent:" + data);
          setStore({ messages: data.response_body });
          return true;
        } catch (error) {
          console.error("Error! Description: " + error);
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

      // Authorization: () => {
      //   const store = getStore();
      //   const opts = {
      //     headers: {
      //       Authorization: "Bearer " + store.token,
      //     },
      //   };
      //   // fetching data from the backend
      //   fetch(process.env.BACKEND_URL + "/api/register/artist", opts)
      //     .then((resp) => resp.json())
      //     .then((data) => setStore({ message: data.artists.username }))
      //     .catch((error) => console.log(error));

      //   // don't forget to return something, that is how the async resolves
      // },
    },
  };
};

export default getState;