import { useState, useEffect } from "react";

const lastKnownRepoCount = 65;
const githubUrl = 'https://api.github.com/users/midKnight92';

export default ({title}) => {
    const [data, setData] = useState({})
    useEffect(() => {document.title = title}, []);
    useEffect(()=> {
        (async () => {
            try {
                const response = await fetch(githubUrl);
                if (response.ok){
                    const jsonData = await response.json();
                    if (!Object.keys(jsonData).length) throw new Error('No Data from Github');
                    setData(jsonData); 
                } else {
                    throw new Error('Bad response from Github');
                }
            } catch (e){
                console.error(e);
            }
        })() 
    }, []);
    return (
        <div>
             <h1>Projects</h1>
             <p>{data.public_repos}</p>
        </div>
    );
}