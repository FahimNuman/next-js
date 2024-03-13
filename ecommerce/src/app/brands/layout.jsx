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
                <div className="card bg-slate-50 p-4 w-1/5">
                    <h1>Filter</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th colSpan="2"><h1>Product Form</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" className="checkbox" /></td>
                                <td>Capsule</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="checkbox" /></td>
                                <td>Injection</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="checkbox" /></td>
                                <td>Powder</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" className="checkbox" /></td>
                                <td>Tablet</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                <div className="w-4/5 p-4">
                    {children}
                </div>
            </div>
        </>

    )
}
