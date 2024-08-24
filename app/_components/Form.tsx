import { addWishlist } from "@/actions/wishlists";

const initialState = {
  message: "",
};

export default async function Form() {
  return (
    <form
      className="w-full md:w-1/2 md:mx-auto flex flex-col"
      action={addWishlist}
    >
      <input
        type="text"
        className="w-11/12 p-2 border-2 gap-x-2 border-gray-200 md:w-1/3 mx-auto"
        placeholder="Enter wishlist item"
        name="wishlist"
      />
      <button
        type="submit"
        className="p-2 bg-gray-200 gap-x-2 w-1/3 mx-auto text-gray-800 uppercase border border-gray-50 rounded-sm my-4"
      >
        Add
      </button>
    </form>
  );
}
