import React from 'react';

const History = (props) => {
    return (
        props.history.length 
            ? (<div>
                <h2 className="history center">History</h2><br/>
                <table className="records center">
                    <tbody>
                    {props.history.map((record, index) => (
                        <tr key={index} onClick={props.handleHistoryClick} index={index}>
                            <td>{record.winner ? 'Win' : 'Draw'}</td>
                            <td>{record.players[0]}</td>
                            <td>:</td>
                            <td>{record.players[1]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>) 
            : null
    );
}

export default History;