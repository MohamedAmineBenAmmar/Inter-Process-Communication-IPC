//@ts-nocheck
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import './StepsDemo.css';
import Network from '../Network';
import Setup from '../Setup';
import Logs from '../Logs'

export default function Stepper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [config, setConfig] = useState({})
    const handleConfig = (key, value) => {
        setConfig({
            ...config,
            [key]: value
        })
    }
    
    const incrementStep = () => {
        setActiveIndex(activeIndex +1)
    }

    const handleActiveIndex = (index) => {
        switch (index) {
            case 0:
                setConfig({})
                setActiveIndex(index);
                break;

            case 1:
                if(Object.keys(config).indexOf("setup") === -1){
                    alert("You must perform the configuration")
                } else {
                    setActiveIndex(index);
                }
                break;

            case 2:
                if(Object.keys(config).length === 1){
                    alert("You must perform server clients communication simulation")
                } else {
                    setActiveIndex(index);
                }
                break;
            default:
                break;
        }
    }
    const toast = useRef(null);
    const items = [
        {
            label: 'Setup',
            // command: (event) => {
            //     toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            // }
        },
        {
            label: 'Network simulation',
            // command: (event) => {
            //     toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            // }
        },
        {
            label: 'Logs',
            // command: (event) => {
            //     toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            // }
        }
    ];

    return (
        <div className="steps-demo">
            <Toast ref={toast}></Toast>
            <div className="card">                
                <Steps model={items} activeIndex={activeIndex} onSelect={(e) => handleActiveIndex(e.index)} readOnly={false} />
                {activeIndex === 0 && (<Setup handleConfig={handleConfig} incrementStep={incrementStep} />)}
                {activeIndex === 1 && (<Network config={config} handleConfig={handleConfig} incrementStep={incrementStep} />)}
                {activeIndex === 2 && (<Logs/>)}
            </div>
        </div>
    );
}