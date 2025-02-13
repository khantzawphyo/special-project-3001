import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/shadcn/ui/pagination';

export default function CoursePagination({ courses }) {
    const { current_page, last_page, links } = courses;

    return (
        <Pagination className="dark:bg-main-purple py-2">
            <PaginationContent>
                {/* Previous Button */}
                <PaginationItem className="max-w-fit rounded-lg bg-primary-purple text-center text-sm font-medium text-white focus:outline-none sm:w-auto">
                    <PaginationPrevious
                        href={links[0].url || '#'} // Link to the previous page
                        disabled={!links[0].url} // Disable if no previous page
                    />
                </PaginationItem>

                {/* Pagination Links */}
                {/* {links.slice(1, -1).map((link, index) => (
                    <PaginationItem key={index} className="bg-primary-purple">
                        <PaginationLink
                            href={link.url || '#'}
                            isActive={link.active} // Highlight the active page
                        >
                            {link.label}
                        </PaginationLink>
                    </PaginationItem>
                ))} */}

                {/* Ellipsis for large numbers of pages (optional) */}
                {/* {last_page > 3 && current_page < last_page - 5 && (
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                )} */}

                {/* Next Button */}
                <PaginationItem className="max-w-fit rounded-lg bg-primary-purple text-center text-sm font-medium text-white focus:outline-none sm:w-auto">
                    <PaginationNext
                        href={links[links.length - 1].url || '#'} // Link to the next page
                        disabled={!links[links.length - 1].url} // Disable if no next page
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
