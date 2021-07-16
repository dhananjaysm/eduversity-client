import Link from "next/link";
import React, { useContext } from "react";
export default function EventsComp() {
  // const { user } = useContext(AuthContext);
  // const { loading, data, error } = useQuery(FETCH_TASKS_QUERY);
  //console.log(data.getTasks[1].assignors[0])
  // if (error) return `Error! ${error.message}`;
  const loading = false;
  let data = {
     getTasks:[{
      "id": "1",
      "title":"new task",
      "body":"this is task for you",
      "assignor": "dzay",
      "assignedAt": "today",
      "creator":"toto",
      "category":"anthro",
      "assignedMsg":"finish it"
     }]
    }


  return (
    <>
      <header className="flex items-center px-4 py-1 bg-white border-t -z-60">
        <div className="flex">
          <h2 id="content-caption" className="font-semibold">
            Tasks requiring your attention (6)
          </h2>
          <span className="relative ml-3 group">
            <div
              role="tooltip"
              id="info-popup"
              className="absolute right-0 z-50 hidden pt-1 mx-auto transform translate-x-40 rounded-md rounded-t-lg group-hover:block"
            >
              <div className="w-screen max-w-xs bg-white border rounded-md rounded-t-lg shadow-lg ">
                <header className="px-4 py-2 font-semibold bg-gray-300 rounded-t-lg">
                  People are waiting for replies!
                </header>
                <div className="p-4 border-t">
                  <p className="mb-4">
                    These are new or open tickets that are assigned to you,
                    unassinged in your group(s) or not assigned to any group.
                  </p>
                  <p className="mb-1">
                    They are ordered by priority and requester update date
                    (oldest first).
                  </p>
                </div>
              </div>
            </div>
          </span>
        </div>
        <div className="ml-auto">
          <button
            title="See available tickets in this view"
            aria-label="play"
            className="px-3 py-2 leading-none border rounded-md"
          >
            Play
          </button>
        </div>
      </header>

      {/* <!-- content overflow section 
                remove table and thead but keep tbody and change tbody to section, in order
                to have scrollable overflow section --> */}

      <tr className="flex border-b">
        <th className="w-24 py-3 pl-3 pr-1 font-semibold text-left">
          <input type="checkbox" name="" id="" />
        </th>
        <th className="w-24 px-1 py-3 font-semibold text-left truncate">ID</th>
        <th className="w-full max-w-xs px-1 py-3 font-semibold text-left truncate xl:max-w-lg">
          Subject
        </th>
        <th className="flex-1 px-1 py-3 font-semibold text-left truncate">
          Creator
        </th>
        <th className="flex-1 px-1 py-3 font-semibold text-left truncate">
          Updated
        </th>
        <th className="flex-1 px-1 py-3 font-semibold text-left truncate">
          Category
        </th>
      </tr>
      {/* TODO: loop from here */}

      {loading ? (
        <h1>Loading tasks...</h1>
      ) : (
        <section className="flex flex-col flex-1 w-full min-h-0 px-4 overflow-hidden">
          {/* <!-- low --> */}
          <tr className="flex border-b">
            <th className="flex-1 px-3 py-2 text-left bg-gray-100" >
              <h2 className="text-sm">
                <span className="mr-1 font-normal">Priority</span>
                <span>Low</span>
              </h2>
            </th>
          </tr>

          {data.getTasks &&
            data.getTasks.map((task) => (
              <>
                <tr
                  role="row"
                  className="flex border-b cursor-pointer hover:bg-blue-100"
                >
                  <td
                    role="cell"
                    headers="select"
                    className="flex items-start w-24 py-3 pl-3 pr-1"
                  >
                    <input className="mt-1" type="checkbox" />
                    <div className="relative ml-auto group">
                      <span
                        //    style="
                        //           padding: 2px 5px;
                        //           font-size: 0.7rem;
                        //           position: relative;
                        //           bottom: 2px;
                        //         "
                        className="font-mono leading-none text-black bg-yellow-400 rounded-sm"
                      >
                        N
                      </span>
                    </div>
                  </td>
                  <td className="w-24 px-1 py-3">{task.id.slice(5, 10)}</td>
                  <td className="w-full max-w-xs px-1 py-3 xl:max-w-lg">
                    <div className="relative w-full group">
                      <Link

                        href={`/home/tasks/${task.id}`}
                    
                      >
                        {task.title}
                      </Link>

                      {/* <!-- dropdown --> */}
                      <span className="absolute top-0 z-50 hidden w-screen max-w-lg p-6 mt-10 ml-4 text-gray-900 bg-white border rounded-md shadow-lg group-hover:block">
                        <article>
                          <header>
                            <div>
                              <span className="px-3 py-1 text-xs leading-none text-black uppercase bg-yellow-400 rounded-sm">
                                New
                              </span>
                              <span className="ml-2 text-gray-700">
                                Incident #11112534
                              </span>
                              <span className="ml-1">(Medium)</span>
                            </div>
                          </header>
                          <section className="mt-5">
                            <h1 className="mt-3 text-sm font-semibold">
                              {task.title}
                            </h1>
                            
                            <div className="px-4 py-2 mt-2 text-gray-400 border bg-gray-50">
                            <p className="text-black capitalize ">Task </p>
                              <p className="ml-2 capitalize">{task.body} </p>

                            </div>
                            <div className="px-4 py-2 mt-1 bg-white border">
                            <div className="flex flex-row ">
                            <a href="#">
                <img src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/me.jpg" 
                className="w-6 h-6 mx-auto rounded-full"/>
            </a>
                               <p className="mt-2 ml-1 text-xs">@{task.assignor}</p> 
                                </div>
                                {/* <p className="mt-2 ml-1 text-xs"> {moment(task.assignedAt).fromNow(true)} ago</p> */}

                             <div className="p-4 mt-2 rounded-sm bg-gray-50">
                             <p>{task.assignedMsg} </p>
                             {/* <p> {moment(task.assignedAt).fromNow(true)} ago</p> */}
                               </div> 
                             
                            </div>

                            
                          </section>
                        </article>
                      </span>
                      {/* <!-- end dropdown --> */}
                    </div>
                  </td>
                  <td className="flex-1 px-1 py-3 capitalize truncate">
                    {task.creator}
                  </td>
                  {task.assignedAt ? (
                    <td className="flex-1 px-1 py-3 truncate">
                      {/* {moment(task.assignedAt).fromNow(true)} ago */}
                    </td>
                  ) : (
                    <td className="flex-1 px-1 py-3 truncate">N/A </td>
                  )}
                  <td className="flex-1 px-1 py-3 truncate">
                    {task.category}
                    {/* <Link class="text-indigo-400 uppercase font-bold text-sm"  to={`/home/tasks/${task.id}`} >Assign a task</Link> */}
                  </td>
                </tr>
              </>
            ))}
        </section>
      )}
    </>
  );
}
