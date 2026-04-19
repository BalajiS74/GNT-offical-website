const BASE_URL = "https://gnt-official-website-backend.onrender.com/api";

export const applyJob = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/apply-job`, {
      method: "POST",
      body: formData, // ❗ no JSON.stringify
    });

    if (!res.ok) {
      throw new Error("Failed to submit application");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};