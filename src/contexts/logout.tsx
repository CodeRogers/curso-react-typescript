import history from "../services/history";

async function logout() {
  try {
    localStorage.clear();

    history.push("/");
  } catch (error) {}
}

export default logout;