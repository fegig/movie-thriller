import { Outlet } from "react-router"
import Sidebar from "./sidebar"

const Body = () => {
  return (
    <main className="grid grid-cols-12 bg-background-primary">
        <aside className="col-span-1">
            <Sidebar />
        </aside>
        <section className="col-span-11">
          <div className="pl-8 pt-4">
            <Outlet />
          </div>
        </section>
    </main>
  )
}

export default Body