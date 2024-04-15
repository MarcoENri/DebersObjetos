import { FC } from 'react';
import './OompaLoompa.css';

interface OompaLoompaProps {
    report: string; 
}

export const OompaLoompa: FC<OompaLoompaProps> = ({ report }) => {
    return (
        <div className="backgroundOompaLoompa">
            <h1 className="oompaLoompa">{report}</h1> 
            <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
        </div>
    );
};