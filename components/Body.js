import {displayName, msToReadableTime} from "./util";

export default function Body({timer, entry}) {
    const imgPath = entry.body.toLowerCase() + '.svg'
    return (
        <figure className="max-w-md mx-auto md:flex p-8 md:p-0">
            <img src={imgPath} className="md:h-auto mx-auto"/>
            <div className="pt-6 md:p-8 md:text-left space-y-2">
                <p className="text-lg font-semibold">{displayName(entry.body)}</p>
                <p>{new Date(timer.getTime() - entry.delay).toLocaleString()}</p>
                {entry.delay > 0
                    ? <p className="text-red-500">-{msToReadableTime(entry.delay)}</p>
                    : <p className="text-green-500">You are here!</p>
                }
            </div>
        </figure>
    )
}