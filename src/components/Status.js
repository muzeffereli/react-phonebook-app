import React, {useEffect, useState} from 'react';

const Status = () => {
    const [status, setStatus] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/actuator/health`)
            .then((response) => response.json())
            .then(status => setStatus(status));
    }, []);
    return (
        <div className="d-flex justify-content-center  align-content-center mt-5">
            {(status?.status === "UP") ? (
                <h1>Every Thing is okay</h1>
            ) :  <h1>Application is down,or database connection is lost</h1>
            }
        </div>
    );
};


export default Status;