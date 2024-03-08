'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
const Accordion = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={`collapse collapse-plus mb-4 ${isOpen ? 'open' : ''}`}>
            <input type="checkbox" id={title} defaultChecked={isOpen} onChange={handleToggle} />
            <div className="collapse-title text-xl font-medium">
                <label htmlFor={title}>{title}</label>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    <ul className="list-none">
                        {items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default function Therapeuticlayout({ children }) {
    const accordionData = [
        {
            title: 'Accordion 1',
            items: [
                { label: 'Human Insulin Premix', link: '/drug_therapeutic_classes/1' },
                { label: 'Human Insulin Basal', link: '#' },
            ],
        },
        {
            title: 'Accordion 2',
            items: [
                { label: 'Human Insulin Premix', link: '/drug_therapeutic_classes/3' },
                { label: 'Human Insulin Basal', link: '#' },
            ],
        },
        {
            title: 'Accordion 3',
            items: [
                { label: 'Human Insulin Premix', link: '#' },
                { label: 'Human Insulin Basal', link: '#' },
            ],
        },
    ];
    return (
        <>
            <div className="flex">
                <div className="card bg-slate-50 p-4 w-1/3">
                    <div className="font-bold">THERAPEUTIC CLASSES</div>
                    {accordionData.map((accordion, index) => (
                        <Accordion key={index} title={accordion.title} items={accordion.items} />
                    ))}
                </div>

                <div className="w-2/3 p-4">
                    {children}
                </div>
            </div>
        </>

    )
}
