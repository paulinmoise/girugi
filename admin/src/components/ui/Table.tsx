/**
 * Table Component
 *
 * Data table for admin queues and lists.
 * Follows style-guide.md patterns with Tailwind CSS.
 *
 * @module components/ui/Table
 */

import { type ReactNode } from 'react';

/**
 * Column definition for table
 */
export interface Column<T> {
  /** Unique key for the column */
  key: string;
  /** Column header text */
  header: string;
  /** Custom render function */
  render?: (item: T, index: number) => ReactNode;
  /** Column width (CSS value) */
  width?: string;
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  /** Hide on mobile */
  hideMobile?: boolean;
}

export interface TableProps<T> {
  /** Column definitions */
  columns: Column<T>[];
  /** Data rows */
  data: T[];
  /** Row key extractor */
  keyExtractor?: (item: T, index: number) => string;
  /** Actions column render function */
  actions?: (item: T, index: number) => ReactNode;
  /** Empty state message */
  emptyMessage?: string;
  /** Empty state icon */
  emptyIcon?: ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Row click handler */
  onRowClick?: (item: T, index: number) => void;
  /** Additional className */
  className?: string;
}

/**
 * Reusable table component for admin data display.
 *
 * @example
 * ```tsx
 * const columns = [
 *   { key: 'email', header: 'Email' },
 *   { key: 'status', header: 'Status', render: (item) => <Badge>{item.status}</Badge> },
 *   { key: 'date', header: 'Date', align: 'right' },
 * ];
 *
 * <Table
 *   columns={columns}
 *   data={users}
 *   actions={(item) => (
 *     <Button size="sm" onClick={() => handleView(item)}>View</Button>
 *   )}
 * />
 * ```
 */
export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  actions,
  emptyMessage = 'No data available',
  emptyIcon,
  loading = false,
  onRowClick,
  className = '',
}: TableProps<T>) {
  const getRowKey = (item: T, index: number): string => {
    if (keyExtractor) return keyExtractor(item, index);
    if ('id' in item) return String(item.id);
    if ('_id' in item) return String(item._id);
    return String(index);
  };

  const getCellValue = (item: T, column: Column<T>, index: number): ReactNode => {
    if (column.render) {
      return column.render(item, index);
    }
    const value = item[column.key];
    if (value === null || value === undefined) return '-';
    return String(value);
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Loading state
  if (loading) {
    return (
      <div className={`bg-white dark:bg-[var(--surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden ${className}`}>
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="bg-[var(--surface-muted)] px-4 py-3 border-b border-[var(--border-default)]">
            <div className="flex gap-4">
              {columns.map((col) => (
                <div
                  key={col.key}
                  className="h-4 bg-gray-200 dark:bg-gray-700 rounded"
                  style={{ width: col.width || '100px' }}
                />
              ))}
            </div>
          </div>
          {/* Row skeletons */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="px-4 py-4 border-b border-[var(--border-default)] last:border-b-0">
              <div className="flex gap-4">
                {columns.map((col) => (
                  <div
                    key={col.key}
                    className="h-4 bg-gray-100 dark:bg-gray-800 rounded"
                    style={{ width: col.width || '100px' }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty state
  if (data.length === 0) {
    return (
      <div className={`bg-white dark:bg-[var(--surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden ${className}`}>
        <div className="py-12 px-4 text-center">
          {emptyIcon && (
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--surface-muted)] flex items-center justify-center text-[var(--text-muted)]">
              {emptyIcon}
            </div>
          )}
          <p className="text-sm text-[var(--text-muted)]">{emptyMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-[var(--surface)] rounded-2xl border border-[var(--border-default)] overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`
                    px-4 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider
                    ${alignClasses[column.align || 'left']}
                    ${column.hideMobile ? 'hidden md:table-cell' : ''}
                  `}
                  style={{ width: column.width }}
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th className="px-4 py-3 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider text-right">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-default)]">
            {data.map((item, index) => (
              <tr
                key={getRowKey(item, index)}
                className={`
                  hover:bg-[var(--surface-muted)]
                  transition-colors duration-150
                  ${onRowClick ? 'cursor-pointer' : ''}
                `}
                onClick={onRowClick ? () => onRowClick(item, index) : undefined}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`
                      px-4 py-4 text-sm text-[var(--text-primary)]
                      ${alignClasses[column.align || 'left']}
                      ${column.hideMobile ? 'hidden md:table-cell' : ''}
                    `}
                  >
                    {getCellValue(item, column, index)}
                  </td>
                ))}
                {actions && (
                  <td
                    className="px-4 py-4 text-right"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {actions(item, index)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Table Pagination component
 */
export interface TablePaginationProps {
  /** Current page (1-indexed) */
  page: number;
  /** Total pages */
  totalPages: number;
  /** Items per page */
  pageSize: number;
  /** Total items */
  totalItems: number;
  /** Page change handler */
  onPageChange: (page: number) => void;
  /** Page size options */
  pageSizeOptions?: number[];
  /** Page size change handler */
  onPageSizeChange?: (pageSize: number) => void;
}

export function TablePagination({
  page,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  pageSizeOptions = [10, 25, 50, 100],
  onPageSizeChange,
}: TablePaginationProps) {
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-[var(--surface)] border-t border-[var(--border-default)]">
      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
        <span>
          Showing {startItem} to {endItem} of {totalItems}
        </span>
        {onPageSizeChange && (
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="px-2 py-1 text-sm border border-[var(--border-strong)] rounded-lg bg-white dark:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--chart-1)]"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} per page
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="p-2 rounded-lg hover:bg-[var(--surface-muted)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="px-3 py-1 text-sm text-[var(--text-primary)]">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="p-2 rounded-lg hover:bg-[var(--surface-muted)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Table;
