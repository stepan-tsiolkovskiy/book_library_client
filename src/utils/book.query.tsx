import { queryOptions } from "@tanstack/react-query";
import { getBooks } from "../services/book";

export const queryKeys = {
  getAllBooks: "getAllBooks"
} as const 

export const bookQuery = queryOptions({
  queryKey: [queryKeys.getAllBooks],
  queryFn: () => getBooks(),
  staleTime: Number.POSITIVE_INFINITY
})