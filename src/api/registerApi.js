const BASE_URL = "https://gnt-official-website-backend.onrender.com/api";

export const registerUser = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to register");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};