import { Feature } from "../types/Earthquake";
import './Card.css';

type CardProps = {
    feature: Feature | undefined;
}

export const Card = ({feature}: CardProps) => {
    return(
        <div className="Card">
            <h3>Quakemap</h3>
            <div className="datafield">
                <p>Location</p>
                <input value={feature?.properties.title} disabled></input>
            </div>
            <div className="datafield">
                <p>Magnitude</p>
                <input value={feature?.properties.mag} disabled></input>
            </div>
            <div className="datafield">
                <p>Time</p>
                <input value={feature !== undefined ? new Date(feature?.properties.time).toUTCString() : ''} disabled></input>
            </div>
            <div className="datafield">
                <p>Updated</p>
                <input value={feature !== undefined ? new Date(feature?.properties.updated).toUTCString() : ''} disabled></input>
            </div>
            <div className="datafield">
                <p>Type</p>
                <input value={feature?.properties.type} disabled></input>
            </div>
            <div className="datafield">
                <p>Latitude</p>
                <input value={feature?.geometry.coordinates[0]} disabled></input>
            </div>
            <div className="datafield">
                <p>Longitude</p>
                <input value={feature?.geometry.coordinates[1]} disabled></input>
            </div>
        </div>
    )
}