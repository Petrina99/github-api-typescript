import React from 'react';
interface Props {
    data: [];
}
export const GithubRepos:React.FC<Props> = (props) => {
    
    const { data } = props;
    return(
        <div>
            <h3><strong>REPOSITORIES:</strong></h3>
            <div>
                <ul>
                   {data.map(({id,name}) => (
                       <li key={id}>{name}</li>
                   ))}
                </ul>
            </div>
        </div>
    )

}