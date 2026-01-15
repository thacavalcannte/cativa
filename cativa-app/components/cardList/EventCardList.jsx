import BaseContentCard from "./BaseContentCard";

export default function EventCardList({ title, author, image }) {
  return (
    <BaseContentCard
      title={title}
      subtitle={author}
      image={image}
    />
  );
}
