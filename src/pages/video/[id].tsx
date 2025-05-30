import { Appbar } from "@/components/Appbar";
import { VideoCard } from "@/components/VideoCard";
import { VideoCardHorizontal } from "@/components/VideoCardHorizontal";
import { VIDEOS } from "@/videos";

export default function VideoPage() {
    return <div className="p-4">
        <Appbar />
        <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <video width={"100%"} height={"720px"} controls src="https://youtu.be/HYFON9SxIf0" />
                <div className="text-2xl">
                    How to get better at coding
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4">
                {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
            </div>
        </div>
    </div>
}