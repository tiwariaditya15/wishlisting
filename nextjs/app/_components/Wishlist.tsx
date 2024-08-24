import { updateWishlist } from "@/actions/wishlists";
import { SelectWishlist } from "@/db/schema";
import clsx from "clsx";

export default async function Wishlist({
  wishlist,
}: {
  wishlist: SelectWishlist;
}) {
  return (
    <form action={updateWishlist}>
      <input type="number" value={wishlist.id} name="id" hidden />
      <input type="number" value={wishlist.state} name="state" hidden />
      <button
        type="submit"
        key={wishlist.id}
        className={clsx("cursor-pointer", wishlist.state && "line-through")}
      >
        {wishlist.item} - {wishlist.state ? "done" : "pending"}
      </button>
    </form>
  );
}
