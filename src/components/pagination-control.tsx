import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { usePagination } from '@/hooks/usePagination'
import { defaultTotalItems } from '@/config'

export function PaginationControl() {
  const { page, perPage, updatePage } = usePagination()
  const totalPages = Math.ceil(defaultTotalItems / perPage)

  const goToPreviousPage = () => {
    updatePage(page - 1 > 0 ? page - 1 : 1)
  }

  const goToNextPage = () => {
    updatePage(page + 1 <= totalPages ? page + 1 : totalPages)
  }

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
          <PaginationPrevious href={`?page=${page - 1}`} onClick={(e) => updatePage(page - 1, e)}  />
          </PaginationItem>
        }
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
