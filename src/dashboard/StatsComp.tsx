import React from 'react'

export default function StatsComp() {
    return (
        <>
        <div className="flex flex-row">
        <section aria-labelledby="open-tickets-tabs-label" className="mr-4 focus:outline-none">
            <label id="open-tickets-tabs-label" className="block mb-1 text-sm font-semibold">Courses
              <span className="font-normal text-gray-700"> (current)</span>
            </label>
            <ul className="flex">
              <li>
                <button className="flex flex-col items-center w-24 p-2 bg-white border border-r-0 focus:outline-none focus:bg-yellow-200 rounded-l-md">
                  <p className="text-lg font-semibold">6</p>
                  <p className="text-sm text-gray-600 uppercase">
                    You
                  </p>
                </button>
              </li>
              <li>
                <button className="flex flex-col items-center w-24 p-2 bg-white border cursor-pointer focus:outline-none focus:bg-yellow-200 rounded-r-md">
                  <p className="text-lg font-semibold">23</p>
                  <p className="text-sm text-gray-600 uppercase">
                    Groups
                  </p>
                </button>
              </li>
            </ul>
          </section>
        <section aria-labelledby="ticket-statistics-tabs-label" className="pb-2">
        <label id="ticket-statistics-tabs-label" className="block mb-1 text-sm font-semibold">Ticket Statistics
          <span className="font-normal text-gray-700">(this week)</span></label>
        <ul className="flex">
          <li>
            <button className="flex flex-col items-center w-24 p-2 bg-white border border-r-0 focus:outline-none focus:bg-yellow-200 rounded-l-md">
              <p className="text-lg font-semibold">16</p>
              <p className="text-sm text-gray-600 uppercase">
                good
              </p>
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center w-24 p-2 bg-white border border-r-0 focus:outline-none focus:bg-yellow-200">
              <p className="text-lg font-semibold">2</p>
              <p className="text-sm text-gray-600 uppercase">
                bad
              </p>
            </button>
          </li>

          <li>
            <button className="flex flex-col items-center w-24 p-2 bg-white border focus:outline-none focus:bg-yellow-200 rounded-r-md">
              <p className="text-lg font-semibold">32</p>
              <p className="text-sm text-gray-600 uppercase">
                solved
              </p>
            </button>
          </li>
        </ul>
      </section>
      </div>
      </>
    )
}
