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
      getVenues: async () => {
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
    },
  };
};

export default getState;
