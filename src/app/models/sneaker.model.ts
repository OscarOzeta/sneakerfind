export interface SneakerModel {
  id?: string;
  brand?: string;
  colorway?: string;
  gender?: string;
  media?: {
    imageUrl: string;
    smallImageUrl: string;
    thumbUrl: string;
  };
  releaseDate?: string;
  retailPrice?: number;
  styleId?: string;
  title?: string;
  year?: number;
}
