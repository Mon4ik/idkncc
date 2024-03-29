import useLocalStorage from "@/utils/useLocalStorage";

import Link from "next/link";
import Layout from "@/components/Layout";
import {useEffect, useRef} from "react";

export default function Home() {
	const [isDark, setIsDark] = useLocalStorage("dark-mode", false)
	const mainDiv = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		// I use this effect for better viewing on mobiles
		const int = setInterval(() => {
			if (mainDiv.current) {
				mainDiv.current.style.height = `${window.innerHeight}px`
			}
		})

		return () => clearInterval(int)
	}, [])

	return (
		<div className="p-5 sm:p-8 md:p-10 lg:p-13 w-[100vw]" style={{height: "100vh"}} ref={mainDiv}>
			<div className="p-3 h-full rounded-3xl border dark:border-slate-800 flex flex-col justify-around items-center">
				<div className="text-center">
					<h1 className="text-5xl">idkncc</h1>
					<p className="font-medium">Full Stack</p>
					<div className="flex flex-row gap-2 justify-center">
						<svg viewBox="0 0 128 128" width="28" height="28">
							<path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path>
							<path data-name="original" fill="#007acc"
								  d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
						</svg>

						<svg viewBox="0 0 128 128" width="28" height="28">
							<path fill="#f05138"
								  d="M126.33 34.06a39.32 39.32 0 00-.79-7.83 28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.82 21.82 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.5 78.5 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.49 78.49 0 00.79-7.83V34.06z"></path>
							<path fill="#fefefe"
								  d="M85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.7 32.7 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.59 12.63 7.68 26 6.35 23.5C101 91 90.37 94.33 85 96.5z"></path>
						</svg>

						<svg viewBox="0 0 128 128" width="28" height="28" style={{padding: "1px"}}>
							<path
								style={isDark ? {stroke: "white", strokeWidth: "8"} : {}}
								d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
						</svg>


					</div>

				</div>
				<div className="flex flex-col gap-2">
					<div className="grid grid-cols-2 gap-2 text-center">

						<Link className="btn blue" href="https://files.idkncc.ru/">Файлы</Link>
						<Link className="btn blue" href="/resources">Ресурсы</Link>


						<Link className="btn green" href="https://github.com/Mon4ik">GitHub</Link>
						<Link className="btn green" href="https://tiktok.com/@idkncc">TikTok</Link>

					</div>
					<div className="flex flex-row gap-2 justify-around">
						<button className="btn" onClick={() => setIsDark(!isDark)}>
							<i className={`bi bi-moon${isDark ? "-fill" : ""}`}></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
