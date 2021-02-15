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

import {useState, useEffect} from 'react'
import Body from '../components/Body'
import {displayName} from "../components/util";

function Home({ data, timestamp }) {
    const [delayData, setData] = useState(data)
    const [lastUpdated, setLastUpdated] = useState(timestamp)
    const timer = useNewTimer(new Date());
    const selectedBody = delayData[BODIES.indexOf('EARTH')];
    return (
        <div>
            <div>
                {selectedBody.entries.map(entry => (
                    <Body key={entry.body} entry={entry} timer={timer}/>
                ))}
            </div>
            <footer className="pt-6 text-center text-xs">Last Updated {new Date(lastUpdated).toLocaleString()}</footer>
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

    const client = new descriptor.LightDelay('localhost:50050', grpc.credentials.createInsecure());

    const requests = [];
    BODIES.forEach(body => {
        const req = new Promise((resolve, reject) => {
            client.getAllDelay({timestamp: timestamp, origin: body}, (err, response) => {
                if (!err) {
                    response.entries.push({body: body, delay: 0})
                    response.entries.sort((a, b) => {
                        return BODIES.indexOf(a.body) - BODIES.indexOf(b.body)
                    })
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
            data,
            timestamp
        },
    }
}

export default Home