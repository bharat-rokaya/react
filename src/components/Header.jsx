import { useState } from 'react'

const Header = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Tailwind is ready
                </p>
                <h1 className="mt-4 text-4xl font-semibold text-white">Count: {count}</h1>
                <p className="mt-3 text-sm text-slate-400">
                    This starter app now uses Tailwind CSS classes for styling.
                </p>
                <button
                    onClick={() => setCount((value) => value + 1)}
                    className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
                >
                    Increase count
                </button>
            </div>
        </div>
    )
}

export default Header