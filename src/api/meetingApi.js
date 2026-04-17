const BASE_URL = "http://localhost:5000/api";

export const createMeeting = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/meetings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to create meeting");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
