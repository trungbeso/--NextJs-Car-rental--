import React from 'react';
import {Button} from "@/app/ui/button";
import {ChevronRightIcon, ChevronsLeftIcon} from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
    const getVisiblePages = () => {
        const delta = 2;
        const range = [];
        const rangeWithDots = [];

        for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
            range.push(i);
        }

        if (currentPage - delta > 2) {
            rangeWithDots.push(1, '...');
        } else {
            rangeWithDots.push(1)
        }

        rangeWithDots.push(...range);

        if (currentPage + delta < totalPages -1) {
            rangeWithDots.push('...', totalPages);
        } else {
            rangeWithDots.push(totalPages);
        }
        return rangeWithDots;
    };

    if (totalPages <= 1) return null;

    const visiblePages = getVisiblePages();

    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            <Button onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="rounded-full w-12 h-12 p-0 boder-[#0000001a] disabled:opaciry-50">
                <ChevronsLeftIcon className="w-5 h-5" />
            </Button>

            {visiblePages.map((page, index) => (
                <React.Fragment key={index}>
                    {page === '...' ? (
                        <span className="px-3 py-2 text-gray-500">...</span>
                    ) : (
                        <Button onClick={() => onPageChange(page as number)}
                                variant={currentPage === page ? "default" : "outline"}
                                className={`rounded-full w-12 h-12 p-0 font-['Figtree', Helvetica] font-medium 
                                ${ currentPage === page ? "bg-[#0f0f0f] text-white" : "bg-white text-black border-[#0000001a]"}`}>
                            {page}
                        </Button>
                    )}
                </React.Fragment>
            ))}

            <Button onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="rounded-full w-12 h-12 p-0 boder-[#0000001a] disabled:opaciry-50">
                <ChevronRightIcon className="w-5 h-5" />
            </Button>
        </div>
    );
};

export default Pagination;
