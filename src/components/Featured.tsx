import Data from "../../data/posts.json";
import Card from "./Card";

export default function Featured() {
  return (
    <>
      <h3 className="font-bold mb-2">Featured Posts</h3>
      <section className="flex flex-wrap gap-4">
        {Data.map((post) => {
          if (post.featured) {
            return (
              <Card
                title={post.title}
                description={post.description}
                date={post.date}
                category={post.category}
                path={post.path}
              />
            );
          }
        })}
      </section>
    </>
  );
}
