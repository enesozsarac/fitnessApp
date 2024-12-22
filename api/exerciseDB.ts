import axios from "axios";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url: string, params: any) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": "b7cb1a3d4fmsha22c9bc3e2d5b6bp18fd4cjsn21a3ed479ebd",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error:any) {
    console.log("API Hatası:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    return null; // veya throw error;
  }
};

export const fetchExercisesByBodyPart = async (bodyPart: any) => {
  if (!bodyPart) {
    throw new Error("bodyPart parametresi eksik.");
  }
  let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`, {});
  return data;
};
