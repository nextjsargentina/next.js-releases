import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { defaultPerPage, defaultTotalItems } from '@/config'
import styles from './pagination-control.module.css'
import { type SearchParams } from '@/types'

export function PaginationControl({
  page,
  updatePage
}: {
  page: SearchParams['page']
  updatePage: (page: SearchParams['page']) => void
}) {
  const totalPages = Math.ceil(defaultTotalItems / defaultPerPage)

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                updatePage(page - 1)
              }}
              href={`?page=${page - 1}`}
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => {
                updatePage(index + 1)
              }}
              href={`?page=${index + 1}`}
              className={page === index + 1 ? styles.active : ''}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                updatePage(page + 1)
              }}
              href={`?page=${page + 1}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
