const BASE_URL = "https://gnt-official-website-backend.onrender.com/api";

export const sendMessage = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to send message");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};