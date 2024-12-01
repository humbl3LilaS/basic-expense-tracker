import * as React from 'react'
import {Outlet, createRootRoute, Link} from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <section className={"w-screen h-screen flex flex-col"}>
                <header>
                    <nav className={"py-5 flex items-center justify-center gap-x-10"}>
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/expenses">
                            Expenses
                        </Link>
                    </nav>
                </header>
                <Outlet/>
            </section>
        </React.Fragment>
    )
}
