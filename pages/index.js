const BODIES = [
    'MERCURY',
    'VENUS',
    'EARTH',
    'MARS',
    'JUPITER',
    'SATURN',
    'URANUS',
    'NEPTUNE'
]

const displayName = caps => {
    return caps.charAt(0) + caps.substring(1).toLowerCase()
}

const msToReadableTime = time => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;

    let hours = Math.floor(time / hour % 24);
    let minutes = Math.floor(time / minute % 60);
    let seconds = Math.floor(time / second % 60);

    return (hours ? hours + 'hr' : '') + minutes + "m" + seconds + 's';
}

import {useState, useEffect} from 'react'

function Home({ data }) {
    const timer = useNewTimer(new Date());
    const selectedBody = data[BODIES.indexOf('EARTH')];
    return (
        <div>
            <h1>The time on {displayName(selectedBody.name)} is {timer.toLocaleString()}</h1>
            <h2>It is currently:</h2>
            <ul>
                {selectedBody.entries.map(entry => (
                    <li>{new Date(timer.getTime() - entry.delay).toLocaleString()} on {displayName(entry.body)} ({msToReadableTime(entry.delay)} behind)</li>
                ))}
            </ul>
        </div>
    )
}

function useNewTimer(currentDate) {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return date;
}

export async function getStaticProps() {
    const timestamp = Date.now(); //1569609169337
    const grpc = require('@grpc/grpc-js');
    const protoLoader = require('@grpc/proto-loader');
    const pkgDef = protoLoader.loadSync(
        '/users/bbagdasarian/light-delay/protos/delay.proto',
        {keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
    const descriptor = grpc.loadPackageDefinition(pkgDef);

    const client = new descriptor.LightDelay('localhost:50051', grpc.credentials.createInsecure());

    const requests = [];
    BODIES.forEach(body => {
        const req = new Promise((resolve, reject) => {
            client.getAllDelay({timestamp: timestamp, origin: body}, (err, response) => {
                if (!err) {
                    resolve({id: body, index: BODIES.indexOf(body), name: displayName(body), entries: response.entries})
                } else {
                    reject(err);
                }
            })
        })
        requests.push(req);
    })

    const data = await Promise.all(requests)

    return {
        props: {
            data
        },
    }
}

export default Home