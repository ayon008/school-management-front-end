"use client";
import { ITEMS_PER_PAGE } from "@/lib/setting";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  const hasPrev = page > 1;
  const hasNext = ITEMS_PER_PAGE * page < count;

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        onClick={() => changePage(page - 1)}
        disabled={!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: Math.ceil(count / ITEMS_PER_PAGE) }, (_, i) => {
          const pageIndex = i + 1;
          return (
            <button
              key={i}
              className={`px-2 rounded-sm ${
                pageIndex === page ? "bg-lamaSky" : ""
              }`}
            >
              {pageIndex}
            </button>
          );
        })}
      </div>
      <button
        disabled={!hasNext}
        onClick={() => changePage(page + 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
