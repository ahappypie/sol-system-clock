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

import {useState, useEffect} from 'react'

function Home({ data }) {
    const timer = useNewTimer(new Date());
    return (
        <div>
            <ul>
                {data.map((body) => (
                    <li>
                        Body: {displayName(body.name)} is in orbital position {body.index + 1}
                        <ul>
                            {body.entries.map((entry) => (
                                <li>Delay to {displayName(entry.body)} is {entry.delay} ms</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            <h2>It is {timer.toLocaleTimeString()}</h2>
        </div>
    )
}

function useNewTimer(currentDate) {
    const [date, setDate] = useState(currentDate);

    useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
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