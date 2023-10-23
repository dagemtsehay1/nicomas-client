import { Hero } from "@/models/hero";
import { client } from "@/utils/sanity-client";
import imageUrlBuilder from "@sanity/image-url";
import { DonateBtn } from "./donate-btn";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export const HeroComponent = async () => {
  const posts = await client.fetch<Hero[]>(`*[_type == "hero"]`);
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),url("${urlFor(
            posts[0].image.asset
          ).url()}")`,
          height: "100vh",
        }}
      >
        <h1 className="text-center font-bold text-green-500 text-5xl">
          {posts[0].title}{" "}
        </h1>
        <h1 className="font-semibold text-2xl text-center text-white w-2/3 mt-5">
          {" "}
          {posts[0].description}{" "}
        </h1>
        <DonateBtn/>
      </div>
    </>
  );
};
