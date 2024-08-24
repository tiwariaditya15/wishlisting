import Form from "./_components/Form";
import { wishlistTable } from "@/db/schema";
import { db } from "@/db";
import Wishlist from "./_components/Wishlist";

export default async function Home() {
  const wishlists = await db.select().from(wishlistTable);
  return (
    <main key={wishlists[0]?.id}>
      <Form />
      <section className="w-full md:w-1/2 md:mx-auto flex flex-col">
        {wishlists.map((wishlist) => (
          <Wishlist wishlist={wishlist} key={wishlist.id} />
        ))}
      </section>
    </main>
  );
}
