"use server";
import { wishlistTable, InsertWishlist, SelectWishlist } from "@/db/schema";
import { db } from "@/db";
import { Filter } from "bad-words";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

const filter = new Filter();

export async function addWishlist(formData: FormData) {
  const wishListItem = formData.get("wishlist");
  if (!wishListItem) {
    return {
      message: "Wishlist item is missing.",
    };
  }
  const data: InsertWishlist = {
    id: Math.floor(Math.random() * (500 - 1 + 1)) + 1,
    item: filter.clean(wishListItem.toString()),
    state: 0,
  };
  await db.insert(wishlistTable).values(data);
  revalidatePath("/");
}

export async function getWishlists() {
  const wishlists = await db.select().from(wishlistTable);
  return wishlists;
}

export async function updateWishlist(formData: FormData) {
  const id = formData.get("id");
  const state = formData.get("state");
  if (!id || !state) {
    throw new Error("Bad request");
  }

  const data: Omit<SelectWishlist, "id" | "item"> = {
    state: parseInt(state.toString()) === 1 ? 0 : 1,
  };
  await db
    .update(wishlistTable)
    .set(data)
    .where(eq(wishlistTable.id, parseInt(id.toString())));

  revalidatePath("/");
}
