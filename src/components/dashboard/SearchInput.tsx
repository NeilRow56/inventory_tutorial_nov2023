import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <form>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <div className="relative h-10  w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </div>

        <input
          type="text"
          id="simple-search"
          className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 px-12 py-1 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search in Customers..."
          required
        ></input>
      </div>
    </form>
  )
}

export default SearchInput
