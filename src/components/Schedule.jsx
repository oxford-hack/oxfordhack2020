/* eslint-disable max-len */
import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import '../css/table.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const Schedule = () => (
    <div >
        <div className="title">SCHEDULE</div>
        <Tabs defaultActiveKey="saturday" id="uncontrolled-tab-schedule"
            style={{width: 'min(500px, 100%)', margin: '0 auto', paddingBottom: '1px',
                border: 'none'}}>
            <Tab eventKey="saturday" title="Saturday (14/11)">
            <table className="tg" style={{margin: '0 auto'}}>
            <thead>
                <tr>
                    <th className="tg-0pky">Time (GMT+0)</th>
                    <th className="tg-0pky">Event</th>
                    <th className="tg-0pky">Length (minutes)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tg-7d57">9:00</td>
                    <td className="tg-7d57"><span style={{fontWeight: 'bold'}}>Opening ceremony</span></td>
                    <td className="tg-7d57">60</td>
                </tr>
                <tr>
                    <td className="tg-0pky">10:00</td>
                    <td className="tg-0pky">Hack the hackers&apos; hack poll opens</td>
                    <td className="tg-0pky"></td>
                </tr>
                <tr>
                    <td className="tg-7d57">10:30</td>
                    <td className="tg-7d57">How to make the most out of your hackathon workshop</td>
                    <td className="tg-7d57">30-45</td>
                </tr>
                <tr>
                    <td className="tg-0pky">11:30</td>
                    <td className="tg-0pky">Mathworks workshop</td>
                    <td className="tg-0pky">45</td>
                </tr>
                <tr>
                    <td className="tg-7d57">12:30</td>
                    <td className="tg-7d57">Lunch and games</td>
                    <td className="tg-7d57">60</td>
                </tr>
                <tr>
                    <td className="tg-0pky">13:30</td>
                    <td className="tg-0pky">Here Technologies workshop</td>
                    <td className="tg-0pky">30</td>
                </tr>
                <tr>
                    <td className="tg-7d57">14:30</td>
                    <td className="tg-7d57">VMware workshop</td>
                    <td className="tg-7d57">30</td>
                </tr>
                <tr>
                    <td className="tg-0pky">16:00</td>
                    <td className="tg-0pky">Kahoot quiz</td>
                    <td className="tg-0pky">30-45</td>
                </tr>
                <tr>
                    <td className="tg-7d57">17:00</td>
                    <td className="tg-7d57">Treasure hunt!</td>
                    <td className="tg-7d57">15</td>
                </tr>
                <tr>
                    <td className="tg-0pky">19:00</td>
                    <td className="tg-0pky">EchoAR workshop</td>
                    <td className="tg-0pky">30</td>
                </tr>
                <tr>
                    <td className="tg-7d57">20:00</td>
                    <td className="tg-7d57">Bob Ross MS paint from MLH</td>
                    <td className="tg-7d57">60</td>
                </tr>
            </tbody>
        </table>
            </Tab>
            <Tab eventKey="sunday" title="Sunday (15/11)">
            <table className="tg" style={{margin: '0 auto'}}>
            <thead>
                <tr>
                    <th className="tg-0pky">Time (GMT)</th>
                    <th className="tg-0pky">Event</th>
                    <th className="tg-0pky">Length (minutes)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tg-7d57">11:00</td>
                    <td className="tg-7d57">Video submission workshop</td>
                    <td className="tg-7d57">30</td>
                </tr>
                <tr>
                    <td className="tg-0pky">12:15</td>
                    <td className="tg-0pky">Wiki game</td>
                    <td className="tg-0pky">30</td>
                </tr>
                <tr>
                    <td className="tg-7d57">13:00</td>
                    <td className="tg-7d57">Lunch hangout</td>
                    <td className="tg-7d57">30-45</td>
                </tr>
                <tr>
                    <td className="tg-0pky">16:00</td>
                    <td className="tg-0pky">Chess tournament </td>
                    <td className="tg-0pky">30-45</td>
                </tr>
                <tr>
                    <td className="tg-7d57">21:00</td>
                    <td className="tg-7d57"><span style={{fontWeight: 'bold'}}>Hacking ends</span></td>
                    <td className="tg-7d57"></td>
                </tr>
            </tbody>
        </table>
            </Tab>
            <Tab eventKey="monday" title="Monday (16/11)">
            <table className="tg" style={{margin: '0 auto'}}>
            <thead>
                <tr>
                    <th className="tg-0pky">Time (GMT)</th>
                    <th className="tg-0pky">Event</th>
                    <th className="tg-0pky">Length</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="tg-7d57">10:00</td>
                    <td className="tg-7d57">Judging begins</td>
                    <td className="tg-7d57">3-4 hours</td>
                </tr>
                <tr>
                    <td className="tg-7d57">17:00</td>
                    <td className="tg-7d57"><span style={{fontWeight: 'bold'}}>Closing ceremony</span></td>
                    <td className="tg-7d57">60</td>
                </tr>
            </tbody>
        </table>
            </Tab>
        </Tabs>

    </div>

);


export default Schedule;
