const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("application just loaded, syncing the session storage");
				if (token && token != "" && token != undefined) {
				  setStore({ token: token });
				}
			  },
		
			  logout: () => {
				sessionStorage.removeItem("token");
				console.log("logging out");
				setStore({ token: null });
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
				}
		
				try {
				  const resp = await fetch(
					process.env.BACKEND_URL +"/api/token",
					opts
				  );
				  if (resp.status == 401) {
					alert("Bad username or password, or account is inactive");
					return false;
				  }
		
				  const data = await resp.json();
				  console.log("this came from the backend", data);
				  sessionStorage.setItem("token", data.access_token);
				  setStore({ token: data.access_token });
				  return true;
				} catch (error) {
				  console.error("There has been an error logging in", error);
				}
			  },
		
			  signup: async (email, password) => {
				const actions = getActions()
				const opts = {
				  method: "POST",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					email: email,
					password: password,
				  }),
				}
		
				const resp = await fetch(
				  process.env.BACKEND_URL + "/api/signup",
					opts
				  );
				  if (resp.status !== 200) {
					alert("There has been some error");
					return false;
				  }
		
				  const data = await resp.json();
				  console.log("this came from the backend", data);
				  actions.login(email, password)
				  
			  },
		
			  getMessage: async () => {
				const store = getStore();
				const opts = {
				  headers: {
					Authorization: "Bearer" + store.token,
				  },
				};
				try {
				  // fetching data from the backend
				  const resp = await fetch(
					process.env.BACKEND_URL + "/api/hello",
					opts
				  );
				  const data = await resp.json();
				  setStore({ message: data.message });
				  // don't forget to return something, that is how the async resolves
				  return data;
				} catch (error) {
				  console.log("Error loading message from backend", error);
				}
			  },
			  verifyUser:
			  async () => {
				const store = getStore();
				const Opts = {
				  method: "GET",
				  headers: {
				  Authorization: "Bearer" + store.token,
				  },
				};
				try {
				  const res = await fetch(process.env.BACKEND_URL + "/api/private", Opts);
				  const data = await res.json();
				  return data;
				} catch (error) {
				  console.log(error);
				}
			}
		   }
		}
	};

export default getState;
