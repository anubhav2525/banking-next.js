"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, PlusCircle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import Link from "next/link";

export type Loan = {
  id: number;
  userId: number;
  loanAmount: number;
  loanType: string;
  interestRate: number;
  tenureMonths: number;
  status: "pending" | "approved" | "rejected" | "disbursed";
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
};

const data: Loan[] = [
  {
    id: 1,
    userId: 101,
    loanAmount: 50000,
    loanType: "Personal",
    interestRate: 12.5,
    tenureMonths: 24,
    status: "approved",
    totalAmount: 56500,
    createdAt: "2023-01-10T08:30:00Z",
    updatedAt: "2023-01-15T10:00:00Z",
  },
  {
    id: 2,
    userId: 102,
    loanAmount: 200000,
    loanType: "Home",
    interestRate: 8.5,
    tenureMonths: 240,
    status: "disbursed",
    totalAmount: 348000,
    createdAt: "2023-03-20T12:15:00Z",
    updatedAt: "2023-04-01T14:00:00Z",
  },
  {
    id: 3,
    userId: 103,
    loanAmount: 75000,
    loanType: "Car",
    interestRate: 10.0,
    tenureMonths: 36,
    status: "pending",
    totalAmount: 82500,
    createdAt: "2024-01-01T09:00:00Z",
    updatedAt: "2024-01-05T10:30:00Z",
  },
  {
    id: 4,
    userId: 104,
    loanAmount: 300000,
    loanType: "Education",
    interestRate: 9.0,
    tenureMonths: 60,
    status: "approved",
    totalAmount: 390000,
    createdAt: "2024-02-15T14:20:00Z",
    updatedAt: "2024-02-20T16:40:00Z",
  },
  {
    id: 5,
    userId: 105,
    loanAmount: 100000,
    loanType: "Business",
    interestRate: 11.0,
    tenureMonths: 48,
    status: "rejected",
    totalAmount: 126000,
    createdAt: "2024-03-10T10:45:00Z",
    updatedAt: "2024-03-12T12:00:00Z",
  },
  {
    id: 6,
    userId: 106,
    loanAmount: 60000,
    loanType: "Personal",
    interestRate: 13.0,
    tenureMonths: 12,
    status: "disbursed",
    totalAmount: 67800,
    createdAt: "2024-04-05T11:00:00Z",
    updatedAt: "2024-04-10T12:30:00Z",
  },
  {
    id: 7,
    userId: 107,
    loanAmount: 150000,
    loanType: "Car",
    interestRate: 9.5,
    tenureMonths: 60,
    status: "pending",
    totalAmount: 183000,
    createdAt: "2024-05-01T13:15:00Z",
    updatedAt: "2024-05-05T15:20:00Z",
  },
  {
    id: 8,
    userId: 108,
    loanAmount: 450000,
    loanType: "Home",
    interestRate: 7.5,
    tenureMonths: 300,
    status: "approved",
    totalAmount: 675000,
    createdAt: "2024-06-10T10:00:00Z",
    updatedAt: "2024-06-15T12:00:00Z",
  },
  {
    id: 9,
    userId: 109,
    loanAmount: 50000,
    loanType: "Education",
    interestRate: 10.0,
    tenureMonths: 36,
    status: "rejected",
    totalAmount: 55000,
    createdAt: "2024-07-20T14:30:00Z",
    updatedAt: "2024-07-25T15:00:00Z",
  },
  {
    id: 10,
    userId: 110,
    loanAmount: 80000,
    loanType: "Business",
    interestRate: 12.0,
    tenureMonths: 24,
    status: "disbursed",
    totalAmount: 89600,
    createdAt: "2024-08-15T09:30:00Z",
    updatedAt: "2024-08-20T10:30:00Z",
  },
];
const columns: ColumnDef<Loan>[] = [
  {
    accessorKey: "id",
    header: "Loan ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  // {
  //   accessorKey: "userId",
  //   header: "User ID",
  //   cell: ({ row }) => <div>{row.getValue("userId")}</div>,
  // },
  {
    accessorKey: "loanAmount",
    header: "Loan Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("loanAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "loanType",
    header: "Loan Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("loanType")}</div>
    ),
  },
  {
    accessorKey: "interestRate",
    header: "Interest Rate (%)",
    cell: ({ row }) => <div>{row.getValue("interestRate")}%</div>,
  },
  {
    accessorKey: "tenureMonths",
    header: "Tenure (Months)",
    cell: ({ row }) => <div>{row.getValue("tenureMonths")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "totalAmount",
    header: "Total Amount",
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("totalAmount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Applied At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{format(date, "yyyy-MM-dd")}</div>;
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Last Updated",
    cell: ({ row }) => {
      const date = new Date(row.getValue("updatedAt"));
      return <div>{format(date, "yyyy-MM-dd")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const loan = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(loan.id.toString())}
            >
              Copy Loan ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Loan Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const DynamicTableLoan = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {/* head form */}
      <div className="flex items-center justify-between py-4">
        <div className="w-full max-w-sm">
          <Input
            placeholder="Enter loan id..."
            value={(table.getColumn("id")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("id")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="flex justify-end gap-2 w-full max-w-sm">
          <Link href={"/apply-loan"}>
            <Button type="button" className="" variant="outline">
              <PlusCircle size={15} />
              <span>Apply</span>
            </Button>
          </Link>
          <Button type="button" className="" variant="outline">
            <RotateCw size={15} />
            <span>Refresh</span>
          </Button>
        </div>
      </div>
      {/* data form */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* pagination form */}
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} records
        </div>
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className=" p-2"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <span className="sr-only">Go to previous page</span>
              <span>Previous</span>
            </Button>
            <Button
              variant="outline"
              className="p-2"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <span className="sr-only">Go to next page</span>
              <span>Next</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTableLoan;
