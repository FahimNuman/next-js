'use client';
import React from 'react';

export default function Therapeuticlayout({ children }) {

    return (
        <>
            <div className="flex">
                <div className="card bg-slate-50 p-4 w-1/6">
                    <h1 className='flex justify-center'>Filter</h1>
                    <hr />
                    <h1 className='flex justify-center'>Product Form</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Capsule</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Injection</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Powder</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Tablet</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-5/6 p-3">
                    {children}
                </div>
            </div>
        </>

    )
}
