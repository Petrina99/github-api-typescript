import React from 'react';

interface Props {
    data: {
        avatar_url?: string;
        name?: string;
        bio?: string;
        location?: string;
    };
   
}
export const GithubUsers:React.FC<Props> = (props) => {
    
    const { data } = props;
    return(
        <div>
            <div>
                <img src={data.avatar_url} alt={data.name} />
                <h1>{data.name}</h1>
            </div>
            <div>
                <p><strong>BIO:</strong> {data.bio}</p>
                <p><strong>LOCATION:</strong> {data.location}</p>
            </div>
        </div>
    )
}