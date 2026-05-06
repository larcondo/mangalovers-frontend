import type { ImageToUpload } from "@/types";
import type { UploadResponse } from "./types";
import { tokenStore } from "@/contexts/authContext";

const IMAGE_SERVER_URL = import.meta.env.VITE_IMG_SERVER_URL;

// Upload a series cover image to image server
export const uploadSeriesCover = async (image: ImageToUpload) => {
  if (!image) return;

  const url = `${IMAGE_SERVER_URL}/series`;

  const formData = new FormData();
  formData.append("cover", image.raw, image.name); // TODO: change image name

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Authorization: `Bearer ${tokenStore.token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data: UploadResponse = await response.json();
  return data;
};
