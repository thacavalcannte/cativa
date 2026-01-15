import BaseContentCard from "./BaseContentCard";

export default function ExpoCardList({ title, artist, image }) {
  return (
    <BaseContentCard
      title={title}
      subtitle={artist}
      image={image}
    />
  );
}
