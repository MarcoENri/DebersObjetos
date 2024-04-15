import { FC } from 'react';
import { OompaLoompa } from './OompaLoompa.tsx';
import './WillyWonka.css';

export const WillyWonka: FC = () => {
    const report: string = "Make more chocolates 🍫🍫!"; // Cambiado a report
    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompa report={report} /> 
        </div>
    );
};